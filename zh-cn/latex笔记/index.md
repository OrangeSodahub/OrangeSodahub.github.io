# LATEX笔记


> 所使用的的编辑器：TEXworks, TEXstudio。编辑器可以编译，也可以使用命令行编译。

## 1. 简述

### 1.1 LATEX命令和代码结构

#### 1.1.1 LATEX命令和环境

LATEX中**命令**以 **反斜线\\** 开头，有两种形式：

1. 反斜杠+一串字母。如 \ LATEX，当遇到任意非字母符号（空格、数字、标点等）结束；该种形式会忽略其后的连续空格，若要须引入空格，在命令后面加一对**花括号**阻止其忽略空格。
2. 反斜杠+单个非字母符号。如 \\$ 。

> 注意：LATEX对大小写敏感，如输入 \\LATEX 生成LATEX字母，而输入 \\Latex 或 \\LaTeX 则不会生成任何东西。

某些LATEX可以接收一些参数，参数内容会影响命令效果。LATEX参数分为可选参数和必选参数，前者以 **方括号[]** 包裹，后者以 **花括号{}** 包裹。某些命令可带星号 *。

LATEX中**环境**用以令一些效果在局部生效，或是生成特殊的文档元素。用法为一对命令 **\\begin** 和 **\\end**：

```
\begin{<environment name>} [<optional arguments>] {<mandatory arguments>}
...
\end{<environment name>}
```

其中\<environment name>为环境名， \begin 和 \end 中的环境名需保持一致。后面跟环境所需的必选参数和可选参数，类似命令。参数数量可能一个或多个，也可能为零。

#### 1.1.2 LATEX源代码结构

LATEX源代码以一个 **\documentclass** 命令开头，其指定了文档使用的文档类。

```
\documentclass{...} //documentclass命令有一个可选参数，其传递给相应的文档类，作为文档类的参数
				    //document环境中的内容是文档正文
\begin{document}
\section{...}
......              //正文
\end{document}
```

在 \docuemntclass 和 \begin{docuemnt} 之间的位置为导言区，一般会使用 **\usepackage** 调用宏包，以及进行对文档的全局设置。

### 1.2 LATEX宏包和文档类

#### 1.2.1 文档类

文档类规定了LATEX源代码生成的文档性质。源代码开头用 **\documentclass** 指明文档类。

```
\documentclass[<options>] {<class-name>}
```

其中\<class-name>为文档类的名称，如LATEX提供的article，book，report，或其他。某些文档类支持中文排版，前三个为“标准文档类”。

> 1. article：文章格式的文档类，广泛用于科技论文、报告、说明文档等。
> 2. report：长篇报告格式的文档类，具有章节结构，用于综述、长篇论文、简单
>
> 的书籍等。
>
> 3. book：书籍文档类，包含章节结构和前言、正文、后记等结构。
> 4. proc：基于article 文档类的一个简单的学术文档模板。
> 5. slides：幻灯格式的文档类，使用无衬线字体。
> 6. minimal：一个极其精简的文档类，只设定了纸张大小和基本字号，用作代码测试的最小工作示例（Minimal Working Example）。

可选参数\<options>为文档类指定选项，**全局**规定排版参数，如字号、纸张大小、单双面等。

```
\documentclass[11pt,twoside,a4paper] {article}
```

规定了article文档类，纸张为A4大小，字号为11pt，双面排版。LATEX的三个标准文档类可指定的选项：

1. **10pt, 11pt, 12pt** 指定文档的基本字号。默认为10pt。
2. **a4paper, letterpaper, …** 指定纸张大小，默认为美式信纸letterpaper （8:5 × 11 英寸）。可指定选项还包括a5paper，b5paper，executivepaper 和legalpaper。
3. **twoside, oneside** 指定单面/双面排版。双面排版时，奇偶页的页眉页脚、页边距不同。article和report 默认为oneside，book 默认为twoside。
4. **onecolumn, twocolumn** 指定单栏/双栏排版。默认为onecolumn。
5. **openright, openany** 指定新的一章\chapter 是在奇数页（右侧）开始，还是直接紧跟着上一页开始。report 默认为openany，book 默认为openright。对article 无效。
6. **landscape** 指定横向排版。默认为纵向。
7. **titlepage, notitlepage** 指定标题命令\maketitle 是否生成单独的标题页。article 默认notitlepage，report 和book 默认为titlepage。
8. **fleqn** 令行间公式左对齐。默认为居中对齐。
9. **leqno** 将公式编号放在左边。默认为右边。
10. **draft, final** 指定草稿/终稿模式。草稿模式下，断行不良的地方会在行尾添加一个黑色方块。默认为final。

#### 1.2.2 宏包

类似调用文档类，调用宏包：

```
\usepackage[<options>] {<package-name>}
```

\usepackage 可以一次调用多个宏包，在 \<package-name>中用逗号隔开。调用的宏包需确保安装在计算机中，否则会报错。

> 注意：宏包（包括文档类）可能定义了许多命令环境，可能会修改LATEX已有的命令和环境。在Windows命令提示符或Linux中断下查阅帮助文档：**texdoc\<pkg-name>**

### 1.3 文件组织

LATEX中使用命令 **\include** 在源代码中插入文件：

```
\include{<filename>}
```

\<filename>为文件名，若和要编译的主文件不在同一目录，则要加上相对或绝对路径。\<filename>可不带扩展名，这个时候默认 **.tex** 。

\include在读入\<filename>之前会另起一页。使用 \input 命令，只是把文件里的内容插入：

```
\input{<filename>}
```

在导言区使用命令 **\includeonly** 指定全局只载入某些文件：

```
\includeonly{<filename1>,<filename2>,...}
```

使用后，正文中不在其列举范围内的include内容不会生效。

## 2. 文字
