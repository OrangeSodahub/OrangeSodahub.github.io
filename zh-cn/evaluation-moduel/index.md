# Evaluation Moduel


## 1. 打分式评价

### 1.1 模糊综合评价（Fuzzy Comprehension Evaluation Method） 

#### 1.1.1 简述

模糊综合评价法是一种基于**模糊数学**的综合评价方法。该综合评价法根据模糊数学的隶属度理论把定性评价转化为定量评价，即用模糊数学对受到多种因素制约的事物或对象做出一个总体的评价。能较好地解决模糊的、难以量化的问题，适合各种非确定性问题的解决。

术语：

1. **评价指标/评价因素（u）**：对评价某个问题的具体内容。为便于权重分配和评议，可以按评价因素的属性将评价因素分成若干类，把每一类都视为单一评价因素，并称之为第一级评价因素（u<sub>1</sub>），继而有第二级评价因素（u<sub>2</sub>）等。
2. **评价指标值/评价因素值（U）**：评价内容的具体值。
3. **评价值（V）**：评价指标的{优劣程度}（优、良、中、差）。最优的评价值为1（百分制时为100），其余情况介于0和1之间，即0≤V≤1（0≤V≤100）。评价值也叫做隶属度。
4. **平均评价值（v）**：评价值之和与评价数的比值。
5. **权重（A）**：评价指标的{重要程度}。第一级评价因素的权重之和为1；每一级的权重之和为1。
6. **加权平均评价值（r）**：平均评价值与权重之积（加权后的平均评价值）。
7. **综合评价值（R）**：同一级评价指标的加权平均评价值之和。

> 注意：区分评价值和隶属度。

特点：

① 相互比较：以最优的评价因素值为基准，其评价值为1；其余欠优的评价因素依据欠优的程度得到相应的评价值。 

② 函数关系：可以依据各类评价因素的特征，确定评价值与评价因素之间的函数关系（即：隶属度函数）。确定这种函数关系（隶属度函数）有很多种方法。

#### 1.1.2 评价步骤

##### (1)**建立综合评价的因素集u**

因素集是以影响评价对象的各种因素为元素组成的集合，即U={u<sub>1</sub>,u<sub>2</sub>,...,u<sub>m</sub>},其中u<sub>i</sub>表示影响评价因素的第i个因素，通常均具有不同程度的模糊性。

![](F:\ZonLinSurviveRecords\ZonLinyy\content\posts\EVALUATION-MODUEL\01.png)


该评价层分为两层：

第一层：u={学校因素,导师因素,个人因素}

第二层：u<sub>1</sub>=\{...}; u<sub>2</sub>=\{...} ...不再赘述

##### (2)建立综合评价的评价集V**

评价集是评价者对评价对象作出的各种结果组成的集合，即V={v<sub>1</sub>,v<sub>2</sub>,...,v<sub>n</sub>}，其中v<sub>j</sub>表示第j种评价结果。这里设定评价集为V={优,良,中,差}。

##### (3)**确定权重向量矩阵A**

根据各种评价指标的重要程度不同确定权重。一般借助层次分析法(AHP)、德尔菲法(Delphi)、加权平均法、专家估计法计算。给各因素一个权重，构成各因素的权重集合的模糊集A={a<sub>1</sub>,a<sub>2</sub>,...,a<sub>m</sub>}。需满足：


$$
0\leqslant a_i,(i=1,2,\dots );\sum_{i=1}^ma_i=1
$$


这里设定:

$$
A=\left( \begin{matrix} A \\ A_1 \\ A_2 \\ A_3 \end{matrix} \right)=\left( \begin{matrix}0.65 & 0.07 & 0.28\\0.06 & 0.45 & 0.49\\0.49 & 0.08 & 0.43\\0.10 & 0.26 & 0.64 \end{matrix} \right)
$$

其中


$$
A^T=\left( \begin{matrix} 0.65\\0.07\\0.28\end{matrix} \right)  A^T_1=\left(\begin{matrix}0.06\\0.45\\0.49\end{matrix} \right)  A^T_2=\left( \begin{matrix} 0.49\\0.08\\0.43\end{matrix} \right)  A^T_3=\left( \begin{matrix} 0.10\\0.26\\0.64\end{matrix} \right)\tag{1}
$$


其中A为第一级评价权重，A<sub>1</sub>,A<sub>2</sub>,A<sub>3</sub>为第二级评价权重。权重矩阵与因素矩阵相对应。

##### (4)**确定权重评价矩阵R**

单独从一个因素出发进行评价，以确定评价因素对评价集合V的隶属程度，为单因素模糊评价（one-way evaluation）。

若因素集u中第i个元素对评价集V中第1个元素的**隶属度**为r<sub>i1</sub>，则对第i个元素的单因素评价结果用模糊集合表示为：r<sub>i</sub>={r<sub>i1</sub>,r<sub>i2</sub>,...,r<sub>in</sub>}，可看做U和V之间的一种模糊关系，即“合理关系”。以m个单因素评价集R<sub>1</sub>,R<sub>2</sub>,...R<sub>m</sub>为行组成矩阵R<sub>m×n</sub>，得到权重评价矩阵：


$$
R=\left( \begin{matrix}r_{11}&r_{12} &\cdots & r_{1n}\\r_{21}&r_{22}&\cdots&r_{2n}\\\vdots&\vdots&\ddots&\vdots\\r_{m1}&r_{m2}&\cdots&r_{mn} \end{matrix} \right)
$$


需注意，单因素评价矩阵需进行归一化处理，目的是消除量纲的影响：


$$
\sum_{j=1}^nr_{ij}=1
$$


这里设定：



$$
R=\left( \begin{matrix} r_1 & r_4 & r_7 \\ r_2 & r_5 & r_8 \\ r_3 & r_6 & r_9 \end{matrix}\right)= \left( \begin{array}{l l l l | c c c c | r r r r}0.3 & 0.4 & 0.2 & 0.1&0.4 & 0.3 & 0.1 & 0.2&0.3 & 0.2 & 0.3 & 0.2 \\0.5 & 0.3 & 0.1 & 0.1&0.2 & 0.3 & 0.3 & 0.2 &0.3 & 0.4 & 0.2 & 0.1\\0.6 & 0.2 & 0.1 & 0.1&0.1 & 0.2 & 0.3 & 0.4&0.6 & 0.1 & 0.1 & 0.2 \end{array}\right)
$$

其中


$$
R_1=\left( \begin{matrix}r_1\\r_2\\r_3 \end{matrix} \right)  R_2=\left( \begin{matrix}r_4\\r_5\\r_6 \end{matrix} \right)  R_3=\left( \begin{matrix} r_7\\r_8\\r_9\end{matrix} \right)\tag{2}
$$


综合评价矩阵的行为评价集的长度（即每个因素对应四个评价），列为因素集（指标集）的长度。每一行成为各因素的单因素模糊评价。例如因素集中第1个因素的评价集：r<sub>1</sub>={0.3, 0.4, 0.2, 0.1}

进行该评价时，以最优程度为1，相对地给每个因素评价。总和等于1。

##### (5)**建立模糊综合评价矩阵B（综合评价模型）**

将单因素评价矩阵R和权重矩阵A进行矩阵乘法，得到综合评价模型B：


$$
B=A·R
$$




根据（1）式和（2）式很容易得到：


$$
B=\left( \begin{matrix}A*R\\A_1*R_1\\A_2*R_2\\A_3*R_3 \end{matrix} \right)=\left(\begin{matrix}0.505 & 0.238 & 0.138 & 0.134\\0.537 & 0.257 & 0.106 & 0.1\\0.255 & 0.257 & 0.3 & 0.286\\0.492 & 0.188 & 0.172 & 0.174 \end{matrix} \right)\tag{3}
$$


B为综合评判，B<sub>1</sub>,B<sub>2</sub>,B<sub>3</sub>为第二级评价。显然，由B=[0.505,0.238,0.138,0.134]知第一级因素级对优的隶属度为0.505，将其作为最终的评价结果，最终的评价结果为优。

##### (6)**确定系统总得分和隶属度**

综合评价模型确定后，由下式得到系统总得分F：


$$
F=B_{1×n}*S^T_{1×n}
$$

B为综合评价矩阵，S为V中相应因素的级分。评价集V中给出了优良中差四种表述，将其对应为级分S={100,75,50,25}，计算得最终得分F=78.6∈[75,100]；此为百分制情况，若换为隶属度S<sup>'</sup>={1,0.75,0.5,0.25}，计算得最终隶属度F<sup>'</sup>=0.786，最终评价为优。

> 上面给出了处理模糊综合评价向量B=(b<sub>1</sub>,b<sub>2</sub>,...b<sub>n</sub>)的两种方法：1.最大隶属度原则；2.加权平均原则。

#### 1.1.3 隶属函数及其确定方式

确定隶属度即确定各因素的单因素评价向量，隶属函数即隶属度与评价因素之间的关系，由隶属函数可以从评价因素确定其隶属度。即模糊综合评价法特点中的函数关系。下面为隶属函数的确定方法：

1. 模糊统计法

   根据专家调查或者问卷调查等形式，得出专家评判结果或问卷统计结果。如给某产品质量打分，得出优秀、良好、差分别占比。例如上述实例中的R矩阵，经过问卷调查得出30%的人认为课程设置为优，40%的人认为良，20%的人认为中，10%的人认为差，则因素集中第1个因素的评价集：r<sub>1</sub>={0.3, 0.4, 0.2, 0.1}

2. 借助已有的客观尺度

   也可用熵权法进行打分。

3. 指派法

   根据问题的性质直接套用现有的隶属函数，主观性较强。

   (1)矩形与半矩形分布（偏小型、偏大型、中间型）


   $$
   A_1(x)=\begin{cases} 1 & x\leqslant a\\0 & x\gt a\end{cases};A_2(x)=\begin{cases} 1 & x\lt a\\0 & x\geqslant a\end{cases};A_3(x)=\begin{cases} 0&x\lt a\\1 & a\leqslant x\lt b\\0 & x\geqslant b\end{cases}
   $$


   (2)梯形与半梯形分布（偏小型、偏大型、中间型）


   $$
   A_1(x)=\begin{cases} 1&x\lt a\\b-x \over b-a & a\leqslant x\lt b\\0 & x\geqslant b\end{cases};A_2(x)=\begin{cases} 0&x\lt a\\x-a \over b-a & a\leqslant x\lt b\\1 & x\geqslant b\end{cases};A_3(x)=\begin{cases} 0&x\lt a\\x-a \over b-a & a\leqslant x\lt b\\1 & b\leqslant x\lt c\\d-x \over d-c & c\leqslant x\lt d\\0 & x\geqslant d\end{cases}
   $$

   


   (3)抛物型分布（偏小型、偏大型、中间型）


   $$
   A_1(x)=\begin{cases} 1&x\lt a\\{({b-x \over b-a})}^k & a\leqslant x\lt b\\0 & x\geqslant b\end{cases};A_2(x)=\begin{cases} 0&x\lt a\\{({x-a \over b-a})}^k & a\leqslant x\lt b\\1 & x\geqslant b\end{cases};A_3(x)=\begin{cases} 0&x\lt a\\{({x-a \over b-a})}^k & a\leqslant x\lt b\\1 & b\leqslant x\lt c\\ {({d-x \over d-c})}^k & c\leqslant x\lt d\\0 & x\geqslant d\end{cases};
   $$


   (4)正态分布（偏小型、偏大型、中间型）


   $$
   A_1(x)=\begin{cases}1&x\leqslant a\\ e^{-{({x-a \over \sigma})}^2} & x\gt a\end{cases};A_2(x)=\begin{cases}0&x\leqslant a\\ 1-e^{-{({x-a \over \sigma})}^2}& x\gt a \end{cases};A_3(x)=e^{-{({x-a \over \sigma})}^2} -\small{\infty} \lt x \gt +\small{\infty}
   $$


   (5)柯西分布（偏小型、偏大型、中间型）


   $$
   A_1(x)_{\alpha\gt 0,\beta\gt0}=\begin{cases}1&x\leqslant a\\ 1 \over {1+\alpha(x-a)^{\beta}} & x\gt a\end{cases};A_2(x)_{\alpha\gt 0,\beta\gt0}=\begin{cases}0&x\leqslant a\\ 1 \over {1+\alpha(x-a)^{-\beta}} & x\gt a\end{cases};A_3(x)_{\alpha\gt 0,\beta正偶数}={1 \over {1+\alpha(x-a)^{\beta}}}， x\gt a
   $$


   (6)岭型分布

   i.偏小型


   $$
   A_1(x)=\begin{cases} 1&x\lt a_1\\{1 \over2}-{1 \over2}\sin{\pi \over a_2-a_1}(x-{a_1+a_2\over 2})  & a_1\lt x\leqslant a_2\\0 & x\gt a_2\end{cases}
   $$


   ii.偏大型


   $$
   A_2(x)=\begin{cases} 0&x\lt a_1\\{1 \over2}+{1 \over2}\sin{{\pi \over{a_2-a_1}}{({x-{{a_1+a_2}\over 2}})}}  & a_1\lt x\leqslant a_2\\1 & x\gt a_2\end{cases}
   $$


   iii.中间型


   $$
   A_3(x)=\begin{cases} 0&x\lt -a_2\\{1 \over2}+{1 \over2}\sin{{\pi \over{a_2-a_1}}{({x-{{a_1+a_2}\over 2}})}}  & -a_2\lt x\leqslant -a_1\\1&-a_1\lt x\leqslant a_1\\{1 \over2}-{1 \over2}\sin{{\pi \over{a_2-a_1}}{({x-{{a_1+a_2}\over 2}})}}  & a_1\lt x\leqslant a_2\\1 & x\gt a_2\end{cases}
   $$



#### 1.1.4 应用实例

[模糊综合评价法原理及案例分析 - 豆丁网Docin](https://www.docin.com/p-759153038.html) 

### 1.2 灰色评价（Grey Synthetic Evaluation Method）<sup>[1](https://www.docin.com/p-759153038.html)</sup>

#### 1.2.1 简述

灰色关联分析主要有两个作用，一是进行**系统分析**，判断影响系统发展的因素的重要性。第二个作用就是用于**综合评价**问题，给出研究对象或者方案的优劣排名。 

灰色关联分析的基本思想是根据序列曲线几何形状的相似程度来判断其联系 是否紧密。曲线越接近,相应序列之间的关联度就越大,反之就越小。 对一个抽象的系统或现象进行分析,首先要选准反映系统行为特征的数据序 列,称为找系统行为的映射量,用映射量来间接地表征系统行为。 

灰色系统理论以部分信息已知，部分信息未知的小样本、贫信息不确定系统为研究对象，主要通过对部分已知信息的生成、开发，提取有价值的信息，实现对系统运行行为、演化规律的正确描述和有效监控。 在灰色系统理论中，灰数向白数的转化过程称为白化，可以通过对灰数进行白化处理，实现灰数信息描述的清晰化。但是在大多数的灰色系统中，对于在区间[a,b]内的灰数，其白化值xx虽然介于[a,b]间，但取不同值的可能性却不完全相同。于是通常用白化函数来刻画灰数在取值区间之内的偏好程度。对于多指标分类综合评价而言，当按单项指标对评价对象的价值水平进行分类时，通常将各指标按照实际取值划分为若干个不同的区段，不同区段属于不同的灰类。对灰类的任一白化值，通过计算该白化值的权，便可以确定该地区单项竞争力偏好于特定灰类的程度。通过综合这些程度，便可以判定被评价对象区域竞争力强弱的类型。

#### 1.2.2 灰色关联度分析

##### (1)建立原始数据矩阵

系统包括两类分析序列：母序列和子序列。亦即参考序列和比较序列。设系统有m个序列，每个序列有n个数据点：


$$
Y_0=y_0(1), y_0(2),\dots,y_0(n)\\
Y_1=y_1(1), y_1(2),\dots,y_1(n)\\
\vdots\\
Y_m=y_m(1), y_m(2),\dots,y_m(n)
$$


得到原始数据矩阵：


$$
Y=\left( \begin{matrix}y_{01}&y_ {02}&\cdots&y_{0n}\\y_{11}&y_{12}&\cdots&y_{1n}\\\vdots&\vdots&\ddots&\vdots\\y_{m1}&y_{m2}&\cdots&y_{mn}\end{matrix} \right)
$$


##### （2）数据标准化

数据标准化方法：

i.初值化：


$$
x_{ij}={y_{ij}\over y_{i1}}, (i=0,1,2,\cdots,m;j=0,1,2,\cdots,n)
$$


ii.均值化：


$$
\begin{cases}x_{ij}={y_{ij}\over \overline{y_{i}}}&i=0,1,2,\cdots,m;j=0,1,2,\cdots,n\\\overline{y_{i}}={1\over n}\sum_{j=1}^ny_{ij}&i=0,1,2,\cdots,m \end{cases}
$$


iii.区间值化：


$$
x_{ij}={y_{ij}-\underset{j}{min}(y_{ij})\over{\underset{j}{max}(y_{ij})-\underset{j}{min}(y_{ij})}},i=0,1,2,\cdots,m;j=0,1,2,\cdots,n
$$


##### (3)计算灰色关联系数


$$
r_{ij}={{\underset{i}{min}\underset{j}{min}|x_{0j}-x_{ij}|+\theta\underset{i}{max}\underset{j}{max}|x_{0j}-x_{ij}|}\over|x_{0j}-x_{ij}|+\theta\underset{i}{max}\underset{j}{max}|x_{0j}-x_{ij}|}\quad i=1,2,\cdots,m
$$


其中θ∈[0,1]为分辨系数，取θ=0.5，$$\underset{i}{min}\underset{j}{min}|x_{0j}-x_{ij}|$$为级最小差，$$\underset{i}{max}\underset{j}{max}|x_{0j}-x_{ij}|$$为级最大差。

##### (4)建立灰色关联度矩阵

第i个比较序列与参考序列之间的灰色关联度$$r_{0i}={1\over n}\sum_{j=1}^nr_{0j}$$，将m个灰色关联度排列得到灰色关联度矩阵：


$$
R=\left( \begin{matrix} r_{01}\\r_{02}\\\vdots\\r_{0m}\end{matrix} \right)
$$


显然，$$r_{0i}$$越大，则其对应比较序列与参考序列越接近。

#### 1.2.3 系统分析

#### 1.2.4 综合评价

##### （1）建立原始数据矩阵

在灰色综合评价模型中，需要用最优指标集替代参考序列。最优指标值可以是某种确定的标准，也可以是评估者公认的最优值，还可以简单地采用：


$$
y_{0j}=Optimum(y_{ij}) \quad (i=1,2,\cdots,m)
$$


来确定最优指标集。即如果某项指标值越大越好，那么就以该指标在各方案中的最大值为最优标准；如果某项指标越小越好，那么就以该指标在各方案中的最小值为最优标准。替代后按照灰色关联分析相同的方法构造原始数据矩阵。

##### (2)数据无量纲化处理

##### （3）建立评价矩阵

以最优指标集为参考序列，各评价对象的指标为比较序列，计算第i个评价对象与第j个最优指标集的灰色关联系数。从而可以得到各评价对象与最优指标之间的关联系数$$r_{ij}$$组成的评价矩阵。


$$
R=\left( \begin{matrix}r_{11}&r_ {02}&\cdots&r_{1n}\\r_{21}&r_{22}&\cdots&r_{2n}\\\vdots&\vdots&\ddots&\vdots\\r_{m1}&r_{m2}&\cdots&r_{mn}\end{matrix} \right)
$$


##### (4)建立灰色关联度矩阵

和灰色关联度分析不同，此处各指标之间不再等权，视各指标的重要程度为其赋权，得到权重矩阵：


$$
W=(w_1,w_2,\cdots,w_n)\\ w_j \geqslant 0,j=1,2,\cdots,n;\quad\sum_{j=1}^nw_j=1
$$


灰色关联度矩阵：


$$
A=W\times R^T
$$


由灰色关联度矩阵得到各评价对象的灰色关联度$$A=(a_1,a_2,\cdots,a_n)$$：


$$
a_i=\sum_{j=1}^nw_j\times{(r_{ij})}^T\quad i=1,2,\cdots,m
$$


比较灰色关联度大小排序。

### 1.3层次分析法

### 1.4 网络分析法

### 1.5 数据包络分析法、

### 1.6 主成分分析

### 1.7 理想解方法

### 1.8 加权积

### 1.9 熵权法

### 1.10 信息熵法
