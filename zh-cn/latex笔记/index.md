# LATEX笔记


> 所使用的的编辑器：TEXworks, TEXstudio。编辑器可以编译，也可以使用命令行编译。

## 1. 简述

### 1.1 LATEX命令和代码结构

#### 1.1.1 LATEX命令和环境

LATEX中**命令**以反斜线 **`\`** 开头，有两种形式：

1. <u>反斜杠+一串字母</u>。如 \ LATEX，当遇到任意非字母符号（空格、数字、标点等）结束；该种形式会忽略其后的连续空格，若要须引入空格，在命令后面加一对<u>花括号</u>阻止其忽略空格。
2. <u>反斜杠+单个非字母符号</u>。如 \\$ 。

> 注意：LATEX对大小写敏感，如输入 \\LATEX 生成LATEX字母，而输入 \\Latex 或 \\LaTeX 则不会生成任何东西。

某些LATEX可以接收一些参数，参数内容会影响命令效果。LATEX参数分为可选参数和必选参数，前者以方括号 **`[]`** 包裹，后者以花括号 **`{}`** 包裹。某些命令可带星号 `*`。

LATEX中**环境**用以令一些效果在局部生效，或是生成特殊的文档元素。用法为一对命令 **`\begin`** 和 **`\end`**：

```latex
\begin{<environment name>} [<optional arguments>] {<mandatory arguments>}
...
\end{<environment name>}
```

其中\<environment name>为环境名， \begin 和 \end 中的环境名需保持一致。后面跟环境所需的必选参数和可选参数，类似命令。参数数量可能一个或多个，也可能为零。

#### 1.1.2 LATEX源代码结构

LATEX源代码以一个 **`\documentclass`** 命令开头，其指定了文档使用的文档类。

```latex
\documentclass{...} %documentclass命令有一个可选参数，其传递给相应的文档类，作为文档类的参数
				    %document环境中的内容是文档正文
\begin{document}
\section{...}
......              %正文
\end{document}
```

在 \docuemntclass 和 \begin{docuemnt} 之间的位置为导言区，一般会使用 **`\usepackage`** 调用宏包，以及进行对文档的全局设置。

### 1.2 LATEX宏包和文档类

#### 1.2.1 文档类

文档类规定了LATEX源代码生成的文档性质。源代码开头用 **`\documentclass`** 指明文档类。

```latex
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

可选参数\<options>为文档类指定选项，<u>全局</u>规定排版参数，如字号、纸张大小、单双面等。

```latex
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

```latex
\usepackage[<options>] {<package-name>}
```

\usepackage 可以一次调用多个宏包，在 \<package-name>中用逗号隔开。调用的宏包需确保安装在计算机中，否则会报错。

> 注意：宏包（包括文档类）可能定义了许多命令环境，可能会修改LATEX已有的命令和环境。在Windows命令提示符或Linux中断下查阅帮助文档：**texdoc\<pkg-name>**

### 1.3 文件组织

LATEX中使用命令 **`\include`** 在源代码中插入文件：

```latex
\include{<filename>}
```

\<filename>为文件名，若和要编译的主文件不在同一目录，则要加上相对或绝对路径。\<filename>可不带扩展名，这个时候默认 **.tex** 。

\include在读入\<filename>之前会另起一页。使用 \input 命令，只是把文件里的内容插入：

```latex
\input{<filename>}
```

在导言区使用命令 <code>**\includeonly**</code> 指定全局只载入某些文件：

```latex
\includeonly{<filename1>,<filename2>,...}
```

使用后，正文中不在其列举范围内的include内容不会生效。

## 2. 文字

### 2.1语言文字和编码

#### 2.1.1 ASCII编码

ASCII（美国通用信息交换码）使用0x00-0x7F对文字编码（7-bit），能够表示键盘上能够输入的拉丁字母、数字和符号。ASCII码即可满足对于TEX面向英文文档排版。

#### 2.1.2 扩展编码

例如西欧语言的Latin-1，日本的Shift-JIS，中国大陆的GB2312-80和GBK等。

单字节（8-bit）字符如西欧拉丁字母、俄语系西里尔字母等处于0x80-0xFF范围，TEX从3.0版本之后可调用宏包 **inputenc** 进行编码，如将源代码保存为Latin-1编码，并在导言区调用宏包：

```latex
\usepackage[latin1] {inputenc}
```

多字节编码如GBK等需借助宏包进行较复杂的判断和处理，**CJK** 宏包用于处理中日韩等多字节编码的语言文字。

#### 2.1.3 UTF-8编码

Unicode 是一个多国字符的集合，覆盖了几乎全球范围内的语言文字。UTF-8 是Unicode
的一套编码方案，一个字符可以由一个到四个字节编码，其中单字节字符兼容ASCII 编码。

latex 命令及pdflatex 命令下可以使用 **inputenc** 宏包支持UTF-8 编码：

```latex
\usepackage[utf8]{inputenc}
```

xelatex 和lualatex 命令原生支持UTF-8 编码，而且也不适用inputenc 宏包。将.tex
源代码保存为UTF-8 编码，并借助 fontspec 宏包调用适当的字体，就可以在
源代码中输入任意语言的文字。但各个语言（印地语、阿拉伯语等）的特殊排版要求需要更多的
宏包支持，如babel、polyglossia 等。

### 2.2 中文

#### 2.2.1 xeCJK宏包

旧式中文排版方案如CJK等处理中文字符过于复杂。xelatex命令支持直接使用系统安装的 TrueType(.ttf) / OpenType(.otf) 等格式字体。加上对UTF-8 编码的原生支持，免去了预处理字体的麻烦。在此基础上的xeCJK 宏包更进一步完善了排版中文的一些细节，比如中英文之间插入空隙、中文行尾的回车不引入空格、标点符号不出现在行首等。

### 2.3 字符

#### 2.3.1 空格和分段

LATEX 源代码中，空格键和Tab 键输入的空白字符视为“空格”。连续的若干个空白字符视
为一个空格。一行开头的空格忽略不计。

行末的回车视为一个空格；但连续两个回车，也就是空行，会将文字分段。多个空行被视为
一个空行。也可以在行末使用 **`\par`** 命令分段。

#### 2.3.2 注释

LATEX 用 **%** 字符作为注释。在这个字符之后直到行末，所有的字符都被忽略，行末的回车也
不引入空格。

#### 2.3.3 特殊字符

以下字符在LATEX 里有特殊用途，如 % 表示注释，$、^、_ 等用于排版数学公式，& 用于排
版表格，等等。直接输入这些字符得不到对应的符号，还往往会出错：

**#**   **$**   **%**   **&**   **{ }**   **_**   **^**   **~**   **\\**

如果想要输入以上符号，需要使用带反斜线的形式输入：

```latex
\#  \$  \%  \&  \{  \}  \_  \^{}  \~{}  \textbackslash
```

^和~两个命令需要带参数，参数写在花括号内。若没有花括号，将后面第一个字符作为参数，形成重音效果。**`\\`** 被定义成了手动换行的命令，不用做输入反斜杠。

#### 2.3.4 连字

#### 2.3.5 标点符号

中文的标点符号（绝大多数为非ASCII 字符）使用中文输入法输入即可。对于英文标点符号：

1. 引号：LATEX 的单引号  ’ 用 <code>**`**</code> 和 <code>**'**</code> 输入；双引号 “ ” 用 <code>**``**</code> 和 <code>**''**</code> 输入。
2. 连字号和破折号：连字号(hyphen)用单个短线 **-** 表示；短破折号(en-dash)用两个短线 **- -** 表示；长破折号(em-dash)用三个短线 **- - -** 表示。 连字号-用来组成复合词；短破折号–用来连接数字表示
   范围；长破折号—用来连接单词。
3. 省略号：输入命令 **`\ldots`** 或者 **`\dots`** 生成三个点的省略号。
4. 波浪号：输入命令 **`\~`** 生成顶端的波浪号，主要用作重音。 

#### 2.3.6 特殊西文符号及重音

| 显示 | 输入  | 显示 | 输入 | 显示 |  输入  | 显示 | 输入 |
| :--: | :---: | :--: | :--: | :--: | :----: | :--: | :--: |
|  ò   | \\\`o |  ó   | \\'o |  ô   |  \\^o  |  õ   | \~o  |
|  ō   |  \=o  |  ȯ   | \.o  |  ö   |  \"o   |  o   | \r o |
|  ŏ   | \u o  |  ǒ   | \v o |  ő   |  \H o  |  o̧   | \c o |
|  ọ   | \d o  |  o   | \b o |  oo  | \t{oo} |      |      |
|  oe  |  \oe  |  OE  | \OE  |  æ   |  \ae   |  Æ   | \AE  |
|  å   |  \aa  |  Å   | \AA  |  ß   |  \ss   |      |      |
|  ø   |  \o   |  Ø   |  \O  |  ł   |   \l   |  Ł   |  \L  |
|  ı   |  \i   |  ȷ   |  \j  |  ¡   |  !\`   |  ¿   | ?\`  |

#### 2.3.7 其他符号

#### 2.3.8 LATEX标志

通过命令 **`\TeX`** , **`\LaTeX`** , **`\LaTeXe`** 生成LATEX标志。

### 2.4 文字强调

通过命令 **`\underline`** 为文字添加下划线：

```latex
An \underline{underlined} text.
```

被添加下划线的文字需包括在命令后的参数中。该命令生成的下划线样式不统一，并且无法换行，调用宏包 **ulem** 并使用其提供的命令 **`\uline`** 解决这一问题。用法同\underline。

类似地，命令 **`\overline`** 为文字添加上划线。

通过使用命令 **`\emph`** 将文字转变为斜体，用法同上。多次嵌套使用则在竖体和斜体之间转换。

### 2.6 断行和断页

#### 2.6.1 单词间距和断行

西文排版中断行的位置多发生在单词之间的空格。

使用字符 **`~`** 插入一个不会断行的空格，可用于人名等。

#### 2.6.2 手动断行断页

（1）两个断行命令：

```latex
\\[<length>]
\\newline
```

区别：1.\\\\ 可带可选参数\<length>，用于在换行处向下增加垂直间距，而 \newline 不带可选参数；2. \\ 也在表格、公式等地方用于分行，而\newline只用于文本段落中。

（2）两个断页命令：

```latex
\newpage
\clearpage
```

区别：1. 在双栏排版中 \newpage 只起到另起一栏的作用；2. 涉及到浮动体的排版上行为不同。

（3）人为设定自动断行断页的位置

```latex
\linebreak[<n>]
\nolinebreak[<n>]
\pagebreak[<n>]
\nopagebreak[<n>]
```

可选参数 n 表示优先级，取值0-4，不带参数时缺省为4。例如 \linebreak[3] 表示优先断行，\nopagebreak 表示禁止断页。

> \newline 和\newpage 会在断行/断页位置正确添加空白，但\linebreak 和\pagebreak 不能，它们的强行断行/断页会导致LATEX 报Underfull \hbox 等警告。

#### 2.6.3 断词

当单词太长时，需要从单词内部断开。LATEX自行寻找合适的断词位置，也可以使用 <code>**\\-**</code> 命令指定断词位置：

```latex
I think this is: su\-per\-cal\-i\-frag\-i\-lis\-tic\-ex\-pi\-al\-i\-do\-cious.
```

## 3.文档元素

### 3.1 章节和目录

#### 3.1.1 章节标题

三个<u>标准文档类</u>article、report、book提供以下命令划分章节：

```latex
\chapter{<title>}   \section{<title>}   \subsection{<title>}   \subsubsection{<title>}   \paragraph{<title>}   \subparagraph{<title>}
```

\chapter 只在**book** 和**report** 文档类有定义。这些命令生成章节标题，并能够自动编号。
使用**`\part`** 命令，将整个文档分割为大的分块，不影响\chapter 或\section 等的编号。

上述命令除了生成带编号的标题之外，还向目录中添加条目，并影响页眉页脚的内容。每个命令有两种变体：

1. 带可选参数的变体：**`\section[⟨short title⟩]{⟨title⟩}`**：标题使用⟨title⟩ 参数，在目录和页眉页脚中使用⟨short title⟩ 参数；
2. 带星号的变体：**`\section*{⟨title⟩}`**：标题不带编号，也不生成目录项和页眉页脚。

能够编号的层级：

1. article文档类：\section, \subsection, \subsubsection；
2. report/book文档类：\chapter, \section, \subsection；

若要为章节命令定制格式，需借助宏包 **titlesec**。

#### 3.1.2 目录

通过命令 **`\tableofcontents`** 生成目录。

使用该命令后会生成单独的一章（book/report）或一节（article），标题默认为“Contents”，可另行定制标题。生成的章节默认不写入目录（类似\section\*和\chapter*），使用宏包 **tocbibind** 以更改设置。

> 正确生成目录项，一般需要编译两次源代码。

若要将\chapter\*或\section*手动添加进目录项，需在标题后使用命令：

```latex
\addcontentsline{toc}{<level>}{<title>}
```

\<level>为章节层次chapter或section等等，\<title>为出现于目录项的章节标题。

**titletoc**、**tocloft** 等宏包提供了具体定制目录项格式的功能。

#### 3.1.3 文档结构划分

<u>所有标准文档类</u>都可使用 **`\appendix`** 命令将正文和附录分开，使用\appendix 后，最
高一级章节改为使用拉丁字母编号，从A 开始。

特别地，book文档类提供了前言、正文、后记结构的划分命令：

1. **`\frontmatter`**：前言，页码为小写罗马字母格式；其后的\chapter 不编号。
2. **`\mainmatter`**：正文，页码为阿拉伯数字格式，从1 开始计数；其后的章节编号正常。
3. **`\backmatter`**：后记，页码格式不变，继续正常计数；其后的\chapter 不编号。
4. 加上\appendix命令，book可生成四部分结构。

就如：

```latex
\documentclass[...]{book}
% 导言区，加载宏包和各项设置，包括参考文献、索引等
	\usepackage{...}
	\usepackage{makeidx}
	\makeindex
	\bibliographystyle{...}
	\begin{document}
		\frontmatter
		\maketitle % 标题页
			\include{preface} % 前言章节preface.tex
			\tableofcontents
		\mainmatter
			\include{chapter1} % 第一章chapter1.tex
			\include{chapter2} % 第二章chapter2.tex
			...
		\appendix
			\include{appendixA} % 附录A appendixA.tex
			...
		\backmatter
			\include{prologue} % 后记prologue.tex
		\bibliography{...} % 利用BibTeX 工具生成参考文献
		\printindex % 利用makeindex工具生成索引
	\end{document}
```



### 3.2 标题页

标题页通过以下命令给定相关信息：

```latex
\title{<title>}   \author{<author>}   \date{<date>}
```

1. 三个命令分别给出标题、作者、日期；
2. 前两个命令是必要的，若缺失\title 则会报错，若缺失\author 则会警告，\date命令可选；
3. \date不带参数则默认当前日期，相当于使用命令 **`\today`** ；
4. 在\title、\author等命令内部使用 **`\thanks`** 以生成标题页的脚注；
5. 多个人名使用命令 **`\and`** 隔开。
6. article文档类的标题默认不单独成页，report和book默认单独成页。在用\doucementclass命令调用文档类时刻指定 **`titlepage `** 或 **`notitlepage`** 选项自定义。

就如：

```latex
\title{Test title}
\author{ Marry\thanks{E-mail:gzzyyxy@gmail.com}
	\and Ted\thanks{Corresponding author}
	\and Louis}
\date{\today}
```

> Δ保持有条理的代码排版，利于理解和修改。

LATEX 标准类还提供了一个简单的titlepage 环境，生成不带页眉页脚的一页。用户可以在这个环境中使用各种排版元素自由发挥，生成自定义的标题页以替代\maketitle 命令。甚至可以利用titlepage 环境重新定义\maketitle：

```latex
\renewcommand{\maketitle}{\begin{titlepage}
... % 用户自定义命令
\end{titlepage}}
```

### 3.3 交叉引用

在能够被交叉引用的地方，如章节、公式、图表、定理等位置使用 **`\lable`** 命令，然后在引用的位置使用 **`\ref`** 或 **`\pageref`** 命令：

```latex
\lable{<lable-name>}
\ref{<label-name>} %引用（正确的交叉引用，一般也需要多次编译源代码）
\pageref{<label-name>}
```

\label命令的使用位置：

1. 章节标题：在章节标题命令\section 等之后紧接着使用；
2. 行间公式：单行公式在公式内任意位置使用；多行公式在每一行公式的任意位置使用；
3. 有序列表：在enumerate 环境的每个\item 命令之后、下一个\item 命令之前任意位置使用；
4. 图表标题：在图表标题命令\caption 之后紧接着使用；
5. 定理环境：在定理环境内部任意位置使用。

> 在使用不记编号的命令形式（\section\*、\caption\*、带可选参数的\item 命令等）时不
> 要使用\label 命令，否则生成的引用编号不正确。

### 3.4 脚注和边注

使用命令在页面底部生成脚注：

```latex
\footnote{<footnote>}
```

1. \<footnote>中的内容即为脚注内容；
2. 该命令会自动编号，编译后在使用该命令处显示一个数字，指向页脚。
3. 某些情况下（如表格环境、盒子等）使用\footnote不能正常生成脚注，可先使用**`\footmark`**命令为脚注标记，再在合适位置用**`\footnotetext`**命令生成脚注。

使用命令在边栏位置生成边注：

```latex
\marginpar[<left-margin>]{<right-margin>}
```

若只给定\<right-margin>则奇偶数页使用相同边注，若同时给定\<left-margin>则偶数页使用\<left-margin>内的文字。

### 3.5 特殊环境

#### 3.5.1 列表

两种列表环境：enumerate 和 itemize，均用 **`\item`** 标项：

```latex
\begin{enumerate/itemize}
\item...
\end{enumerate/itemize}
```

1. enumerate会自动编号，itemize带有符号；

2. \item 可带一个可选参数，将有序列表的计数或者无序列表的符号替换成自定义的符号；

3. 可以嵌套使用，最多嵌套四层。

   就如：

   （有序列表）

   ```latex
   \begin{enumerate}
   	\item item A.
   	\begin{enumerate}
   		\item item Aa.\label{itref}
   		\item[*] item Ab.
   	\end{enumerate}
   	\item item B
   	\item Reference(\ref{itref}) %如代码所示，列表的项之间可交叉引用
   \end{enumerate}
   ```

   （无序列表）

   ```latex
   \begin{itemize}
   	\item item A.
   	\begin{itemize}
   		\item item Aa.
   		\item[+] item Ab.
   	\end{itemize}
   	\item item B.
   \end{itemize}
   ```

   

4. 各级无序列表的符号由命令 **`\labelitemi`** 到 **`\labelitemiv`** 定义，可以简单地重新定义它们：(如\labelitemi代表第一级符号，\labelitemii代表第二级，以此类推)

   ```latex
   \renewcommand{\labelitemi}{\ddag}
   \renewcommand{\labelitemii}{\dag}
   ...%重新定义后即生效
   ```

5. 有序列表的符号由命令 **`\labelenumi`** 到 **`\labelenumiv`** 定义，重新定义这些命令需要用到计数器相关命令：

   ```latex
   \renewcommand{\labelenumi} %{\Alph{enumi}>}
   \begin{enumerate}
   	\item First item
   	\item Second item
   \end{enumerate}
   ```

5. 使用 **enumitem** 宏包定制各种列表间距、列表标签、引用等。

#### 3.5.2 关键字环境

关键字环境：description，用法与列表类似：

```latex
\begin{description}
	\item[<item title>]
	...
\end{description}
```

\item 后的可选参数用于写关键字，以粗体显示，必填。

#### 3.5.3 对齐环境

center、flushleft 和 flushright 环境分别用于生成居中、左对齐和右对齐的文本环境：

```latex
\begin{center} … \end{center}
\begin{flushleft} … \end{flushleft}
\begin{flushright} … \end{flushright}
```

除构造环境外，可直接用命令改变对齐方式：

```latex
\centering
...				%居中内容
\raggedright
...				%右对齐内容
\raggedleft
...				%左对齐内容
```

> 构建环境通常在上下文之间产生额外间距，而命令直接改变对齐方式。

#### 3.5.4 引用环境

1. quote：引用较短文字，首行不缩进；
2. quotation：引用若干段文字，首行缩进；
3. verse：排版诗歌，首行悬挂缩进；
4. 引用环境有额外的左右缩进。

就如：

```latex
...
\begin{quote/quotation/verse}
	...
\end{quote/quotation/verse}
```

#### 3.5.5 摘要环境

1. 摘要环境abstract 默认只在标准文档类中的 article 和 report 文档类可用，一般用于紧跟\maketitle 命令之后介绍文档的摘要;
2. 如果文档类指定了 titlepage 选项，则单独成页；
3. 如果文档类没有指定 titlepage 选项，则单栏排版时相当于一个居中的小标题加一个quotation 环境，双栏排版时相当于 \section* 定义的一节。

#### 3.5.6 代码环境

1. 用 verbatim 构建代码环境，代码环境中回车和空格分别起到换行和空位作用；使用 verbatim\* 将空格显示为 ␣ ；

   就如：

   ```latex
   \begin{verbatim}
   #include <iostream>
   using namespace std;
   int main() {
       ...
       return 0;
   }
   \end{verbatim}
   ```

2. 简短的代码或关键字，使用命令 **`\verb`** ；就如： **`\verb<delim><code><delim>`** 

   其中 \<delim> 表明代码的界限，除字母、空格、星号外任选，习惯上使用 **`|`** ；

   \verb 命令对符号的处理比较复杂，一般<u>不能用在其它命令的参数</u>里。



### 3.6 表格


