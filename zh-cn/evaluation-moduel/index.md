# Evaluation Moduel


## 1. 打分式评价

### 1.1 模糊综合评价（Fuzzy Comprehension Evaluation Method） 

#### 1.1.1 简述

模糊综合评价法是一种基于**模糊数学**的综合评价方法。该综合评价法根据模糊数学的隶属度理论把定性评价转化为定量评价，即用模糊数学对受到多种因素制约的事物或对象做出一个总体的评价。能较好地解决模糊的、难以量化的问题，适合各种非确定性问题的解决。

术语：

1. 评价指标/评价因素（u）：对评价某个问题的具体内容。为便于权重分配和评议，可以按评价因素的属性将评价因素分成若干类，把每一类都视为单一评价因素，并称之为第一级评价因素（u<sub>1</sub>），继而有第二级评价因素（u<sub>2</sub>）等。
2. 评价指标值/评价因素值（U）：评价内容的具体值。
3. 评价值（V）：评价指标的**优劣程度**（优、良、中、差）。最优的评价值为1（百分制时为100），其余情况介于0和1之间，即0≤V≤1（0≤V≤100）。
4. 平均评价值（v）：评价值之和与评价数的比值。
5. 权重（A）：评价指标的**重要程度**。第一级评价因素的权重之和为1；每一级的权重之和为1。
6. 加权平均评价值（r）：平均评价值与权重之积（加权后的平均评价值）。
7. 综合评价值（R）：同一级评价指标的加权平均评价值之和。

特点：

① 相互比较：以最优的评价因素值为基准，其评价值为1；其余欠优的评价因素依据欠优的程度得到相应的评价值。 

② 函数关系：可以依据各类评价因素的特征，确定评价值与评价因素值之间的函数关系（即：隶属度函数）。确定这种函数关系（隶属度函数）有很多种方法。

#### 1.1.2 评价步骤

1.**建立综合评价的因素集u**

因素集是以影响评价对象的各种因素为元素组成的集合，即U={u<sub>1</sub>,u<sub>2</sub>,...,u<sub>m</sub>},其中u<sub>i</sub>表示影响评价因素的第i个因素，通常均具有不同程度的模糊性。

![](F:\ZonLinSurviveRecords\ZonLinyy\content\posts\EVALUATION-MODUEL\01.png)

该评价层分为两层：

第一层：u={学校因素,导师因素,个人因素}

第二层：u<sub>1</sub>={...}; u<sub>2</sub>={...} ...不再赘述

2. **建立综合评价的评价集V**

评价集是评价者对评价对象作出的各种结果组成的集合，即V={v<sub>1</sub>,v<sub>2</sub>,...,v<sub>n</sub>}，其中v<sub>j</sub>表示第j种评价结果。这里设定评价集为V={优,良,中,差}。

3. **确定权重向量矩阵A**

根据各种评价指标的重要程度不同确定权重。一般借助层次分析法(AHP)、德尔菲法(Delphi)、加权平均法、专家估计法计算。给各因素一个权重，构成各因素的权重集合的模糊集A={a<sub>1</sub>,a<sub>2</sub>,...,a<sub>m</sub>}。这里设定


$$
A=\left[ \begin{matrix} A \\ A_1 \\ A_2 \\ A_3 \end{matrix} \right]=\left[ \begin{matrix}0.65 & 0.07 & 0.28\\0.06 & 0.45 & 0.49\\0.49 & 0.08 & 0.43\\0.10 & 0.26 & 0.64 \end{matrix} \right] \tag{1}
$$


其中A为第一级评价权重，A<sub>1</sub>,A<sub>2</sub>,A<sub>3</sub>为第二级评价权重。权重矩阵与因素矩阵相对应。

4. **确定权重评价矩阵R**

若因素集u中第i个元素对评价集V中第1个元素的隶属度为r<sub>i1</sub>，则对第i个元素的单因素评价结果用模糊集合表示为：R<sub>i</sub>={r<sub>i1</sub>,r<sub>i2</sub>,...,r<sub>in</sub>}，以m个单因素评价集R<sub>1</sub>,R<sub>2</sub>,...R<sub>m</sub>为行组成矩阵R<sub>m×n</sub>，得到权重评价矩阵。


$$
R=\left[ \begin{matrix} R_1 \\ R_2 \\ R_3 \end{matrix} \right]=\left[ \begin{matrix} r_1 \\ r_2 \\ r_3 \\ r_4 \\ r_5 \\ r_6 \\ r_7 \\ r_8 \\ r_9 \end{matrix}\right]= \left[ \begin{matrix}0.3 & 0.4 & 0.2 & 0.1 \\0.5 & 0.3 & 0.1 & 0.1 \\0.6 & 0.2 & 0.1 & 0.1\\ 0.4 & 0.3 & 0.1 & 0.2\\0.2 & 0.3 & 0.3 & 0.2\\0.1 & 0.2 & 0.3 & 0.4\\0.3 & 0.2 & 0.3 & 0.2\\0.3 & 0.4 & 0.2 & 0.1\\0.6 & 0.1 & 0.1 & 0.2 \end{matrix}\right] \tag{2}
$$


综合评价矩阵的行为评价集的长度，列为因素集（指标集）的长度。每一行成为各因素的单因素模糊评价。例如因素集中第1个因素的评价集：r<sub>1</sub>={0.3, 0.4, 0.2, 0.1}

进行该评价时即进行隶属度的分配，以最优程度为1，相对地给每个因素评价。总和等于1。

5. **建立模糊综合评价矩阵B（综合评价模型）**

将单因素评价矩阵R和权重矩阵A进行矩阵乘法，得到综合评价模型B：


$$
B=A·R
$$




根据（1）式和（2）式很容易得到：


$$
B=\left[ \begin{matrix}A*R\\A_1*R_1\\A_2*R_2\\A_3*R_3 \end{matrix} \right]=\left[ \begin{matrix}0.505 & 0.238 & 0.138 & 0.134\\0.537 & 0.257 & 0.106 & 0.1\\0.255 & 0.257 & 0.3 & 0.286\\0.492 & 0.188 & 0.172 & 0.174 \end{matrix} \right]\tag{3}
$$


B为综合评判，B<sub>1</sub>,B<sub>2</sub>,B<sub>3</sub>为第二级评价。显然，最终的评价结果为优。

6. **确定系统总得分**

综合评价模型确定后，由下式得到系统总得分F：


$$
F=B_{1×n}*S^T_{1×n}
$$


B为综合评价矩阵，S为V中相应因素的级分。评价集V中给出了优良中差四种表述，将其对应为级分S={100,75,50,25}，计算得最终得分F=78.6。

### 1.2 灰色评价

### 1.3层次分析法

### 1.4 网络分析法

### 1.5 数据包络分析法、

### 1.6 主成分分析

### 1.7 理想解方法

### 1.8 加权积

### 1.9 熵权法

### 1.10 信息熵法