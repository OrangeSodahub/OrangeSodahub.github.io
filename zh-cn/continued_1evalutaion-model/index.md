# (续1)评价模型(DEA,PCA)


{{< admonition type=tip title="这是一个提示" open=false >}}

若(部分)数学公式、表达式或图表显示不完整、不正常，请保持网络流畅并刷新等待，加载时间可能较长~

<a href="mailto:gzzyyxy@gmail.com">任何疑问请致邮：E-mail</a>

{{< /admonition >}}

### 1.5 数据包络分析法（DEA）

#### 1.5.1简述

数据包络分析方法(Data Envelopment Analysis,DEA)是运筹学、管理科学与数理经济学交叉研究的一个新领域。它是根据多项投入指标和多项产出指标，利用线性规划的方法，对具有可比性的同类型单位进行相对有效性评价的一种数量分析方法。 

DEA是以<u>相对效率概念</u>为基础，以<u>凸分析</u>和<u>线性规划</u>为工具，将评价决策单元的指标分成“输入类”指标和“输出类”指标（成本型和效益型），通过计算各单元的输入与输出之比，不预先设置权重，评价其决策单元相对有效性的多目标分析评价方法。

DEA的基本思路是在保持决策单元间输入或输出不变的情况下，通过输入和输出数据和数据规划模型确定相对有效的生产前沿面，即Pareto最优解构成的面。并根据各$$DMU$$与生产前沿面的距离情况，确定各$$DMU$$是否为DEA有效。

术语：

1. <span id="Overall Efficiency">(综合)技术效率（overall efficiency,OE）</span>：指在保持决策单元投入不变的情况下，实际产出同理想产出的比值。反映的是决策单元在一定( 最优规模时) 投入要素的生产效率，是对决策单元的资源配置能力、资源使用效率等多方面能力的综合衡量与评价；
2. 纯技术效率（technical efficiency,TE）：如企业由于管理和技术等因素影响的生产效率；
3. 规模效率（scale efficiency,SE）：如由于企业规模因素影响的生产效率；前三者之间满足关系式：$$OE=TE\times SE$$；
4. 规模报酬：当生产要素同时增加了一倍，如果产量的增加正好是一倍，称之为规模报酬不变（-），如果产量增加多于一倍，则称之为规模报酬递增（Increasing Returns to Scale, IRS），进而，如果产量增加少于一倍，就称为规模报酬递减（Decreasing Returns to Scale, DRS）；不同生产规模下，规模报酬随之改变。一般生产规模小时，投入产出比会随着规模增加而迅速提升，此时为IRS；当生产达到高峰期时，产出与规模成正比而达到最适规模，此时为规模报酬不变；当生产规模过于庞大时，产出增长速度减缓，此时为DRS。
5. 技术有效：输出相对输入而言已达最大，即该决策单元位于生产函数的曲线上；
6. 规模有效：投入量既不偏大也不偏小，处于规模收益不变的状态；
7. 决策单元（DMU->Decision Making Unit）就是效率评价的对象，可以理解为一个将一定“投入”转化为一定“产出”的实体；
8. <span id="Strongly effective">DEA强有效</span>：任何一项投入的数量都无法减少，除非减少产出的数量或者增加其他至少一种投入的数量；任何一项产出的数量都无法增加，除非增加投入的数量或减少其他至少一种产出的数量；此时同时达到技术有效和规模有效；
9. <span id="Weakly effective">DEA弱有效</span>：无法等比例减少各项投入的数量，除非减少产出的数量；无法等比例增加各项产出的数量，除非增加投入的数量。这种情况下，虽然不能等比例减少投入或增加产出，但某一项或几项（但不是全部）投入可能减少，所以称为弱有效。此时技术有效和规模有效只满足一个；
10. <span id="Production Front">生产前沿面</span>：对于给定的生产要素和产出价格，选择要素投入的最优组合和产出的最优组合，即投入成本最小、产出收益最大的组合。它所对应的生产函数所描述的生产可能性边界就是生产前沿面[^1]：设$$\omega\gt0,\mu\gt0,L=\{(X,Y)|\omega^TX-\mu^TY=0\},T\subset\{(X,Y)|\omega^TX-\mu^TY\geqslant0 \}$$满足$$L\bigcap T\not=∅$$，则称$$L$$为生产可能集$$T$$的有效面，称$$L\bigcap T$$为生产前沿面。
11. 投入冗余率：$$\eta_{ij}$$为决策单元$$i$$的第$$j$$个指标的投入冗余率，则$$\eta={s_j^-\over x_{ij} }$$
12. 产出不足率：$$\rho_{ij}$$为决策单元$$i$$的第$$j$$个指标的投入冗余率，则$$\rho={s_j^+\over y_{ij} }$$

说明几点：

1. 纯技术效率（TE）测度的是当规模报酬可变时，决策单元与生产前沿面的距离；
2. 规模效率（SE）测度的是当规模报酬可变时，生产前沿面与规模报酬不变时的生产前沿面的距离。

#### 1.5.2数学模型（C<sup>2</sup>R：规模报酬不变）

> CCR模式下得到的是综合技术效益，即OE。

设有$$n$$个决策单元$$DMU_i(1\leqslant i\leqslant n)$$，对每个决策单元$$DMU_i$$，有$$s$$个输入指标$$x_{1i},x_{2i},\cdots,x_{si}$$和$$t$$个输出指标$$y_{1i},y_{2i},\cdots,y_{ti}$$，即：


$$
DMU_1=\left[\begin{array}{c|c}x_1&y_1 \end{array}\right]^T=\left[\begin{array}{c c c c|c c c c} x_{11}&x_{12}&\cdots&x_{1s}&y_{11}&y_{12}&\cdots&y_{1t} \end{array}\right]^T\\
DMU_2=\left[\begin{array}{c|c}x_2&y_2 \end{array}\right]^T=\left[\begin{array}{c c c c|c c c c} x_{21}&x_{22}&\cdots&x_{2s}&y_{21}&y_{22}&\cdots&y_{2t} \end{array}\right]^T\\
\vdots\\
DMU_n=\left[\begin{array}{c|c}x_n&y_n \end{array}\right]^T=\left[\begin{array}{c c c c|c c c c} x_{n1}&x_{n2}&\cdots&x_{ns}&y_{n1}&y_{n2}&\cdots&y_{nt} \end{array}\right]^T
$$


记


$$
X=(x_1,x_2,\cdots,x_n)^T,Y=(y_1,y_2,\cdots,y_n)^T
$$


为n个决策单元的输入指标向量和输出指标向量。对单个决策单元$$DMU_i$$，设


$$
v=(v_1,v_2,\cdots,v_s)^T,u=(u_1,u_2,\cdots,u_t)^T\quad (v\gt 0,u\gt0)
$$


为输入指标和输出指标的权向量，则


$$
I_i=v^Tx_i=\sum_{j=1}^sv_jx_{ij},i=1,2,\cdots,n\\
O_i=u^Ty_i=\sum_{j=1}^tu_jy_{ij},i=1,2,\cdots,n
$$


为第i决策单元的综合输入评价指标和综合输出评价指标。记


$$
E_i={O_i\over I_i}={u^Ty_i\over v^Tx_i}={\sum_{j=1}^sv_jx_{ij}\over \sum_{j=1}^tu_jy_{ij}}
$$


为$$DMU_i$$的效率评价指标。显然，输入越小，输出越大，则效率越高。在效率评价指标$$E_i\leqslant1,v\gt0,u\gt0$$的约束条件下，求出一组最优权向量使得第$$i_0$$个决策单元$$DMU_{i_0}$$效率$$E$$达到最大值$$E_{i_0}$$，即：


$$
\begin{cases}E_{i_0}=max{u^Ty_{i_0}\over v^Tx_{i_0} }\\
s.t.  {u^Ty_i\over v^Tx_i}\leqslant1(i=1,2.\cdots,n),u\gt0,v\gt0\end{cases}
$$


其中，权向量$$v$$和$$u$$待定。第一个约束条件中$$i\in[1,n]$$，即其数量为n个。

将上述分式规划转化为等价的线性规划方程组，采用Charnes-Cooper变换，令：


$$
t={1\over v^Tx_i},\omega=tv,\mu=tu
$$


则


$$
\begin{cases}max\;\mu^Ty_{i_0}=E_{i_0}\\s.t.\mu^T y_i-\omega^T x_i\leqslant0 ,\omega ^Tx_{i_0}=1,\omega\geqslant0,\mu\geqslant0\end{cases}\tag{P}
$$


>推导：$$\mu=tu\Rightarrow\mu^T=tu^T\Rightarrow t={\mu^T\over u^T}\\max{u^Ty_i\over v^Tx_i}\Rightarrow maxt\;u^Ty_i\Rightarrow max{ {\mu^T\over u^T}u^Ty_i}\Rightarrow max\;{\mu^Ty_i}$$
>
>&emsp;&emsp;&emsp;$$\omega=tv\Rightarrow \omega^T=tv^T,\mu^T=tu^T\\{u^Ty_i\over v^Tx_i}\leqslant1\Rightarrow u^Ty_i-v^Tx_i\leqslant0\Rightarrow {\mu^T\over t}y_i-{\omega^T\over t}x_i\leqslant0\Rightarrow \mu^T y_i-\omega^T x_i\leqslant0$$



线性规划(P)的解$$\omega^*,\mu^*$$即为$$DMU_i$$的最优权向量，其使得$$DMU_i$$的效率值达到最大。另外，作为线性规划的解，$$\omega^*,\mu^*$$不唯一。最终有效益分析：

1. 若最优指标值$$E_{i_0}=1$$，则称$$DMU_i$$为DEA弱有效；
2. 若存在最优解$$\omega^*,\mu^*$$满足$$\omega^*\gt0,\mu^*\gt0$$，使得$$E_i=E_{i_0}=1$$，则称$$DMU_i$$为DEA有效。此时该生产单元$$DMU_i$$处在[生产前沿面](#Production Front "点击跳转")上；
3. 若最优解$$E_{i_0}\lt1$$，则称该决策单元非DEA有效。

将上述线性模型（P）取其对偶模型得到（推导见下）：


$$
\begin{aligned}
\begin{cases}min\;\theta\\s.t.&\sum_{i=1}^n\lambda_ix_{ij}\leqslant\theta x_{i_0j}&j=1,2,\cdots,s\\&\sum_{i=1}^n\lambda_iy_{ij}\geqslant y_{i_0j}&j=1,2,\cdots,t\\&\lambda_i\geqslant0,\quad i=1,2,\cdots,n \end{cases}
\end{aligned}\tag{D}
$$



也有的地方将其写为矩阵形式：


$$
\begin{aligned}
\begin{cases}min\;\theta\\s.t.&\sum_{i=1}^n\lambda_ix_{i}\leqslant\theta x_{i_0}\\&\sum_{i=1}^n\lambda_iy_{i}\geqslant y_{i_0}\\&\lambda_i\geqslant0,\quad i=1,2,\cdots,n \end{cases}
\end{aligned}\tag{D}
$$


{{< admonition type=tip title="约束条件的矩阵形式" color=none open=false >}}
$$
\lambda_1\left[\begin{matrix}x_{11}\\x_{12}\\\vdots\\x_{1s} \end{matrix}\right]+\lambda_2\left[\begin{matrix}x_{21}\\x_{22}\\\vdots\\x_{2s} \end{matrix}\right]+\cdots+\lambda_n\left[\begin{matrix}x_{n1}\\x_{n2}\\\vdots\\x_{ns} \end{matrix}\right]=\left[\begin{matrix}\lambda_1x_{11}+\lambda_2x_{21}+\cdots+\lambda_nx_{n1}\\\lambda_1x_{12}+\lambda_2x_{22}+\cdots+\lambda_nx_{n2}\\\vdots\\\lambda_1x_{n1}+\lambda_2x_{n2}+\cdots+\lambda_nx_{ns}\\\end{matrix}\right]\leqslant \theta \left[\begin{matrix}x_{i_01}\\x_{i_02}\\\vdots\\x_{i_0s} \end{matrix}\right]\\
$$
（y同上）

{{< /admonition >}}

其中$$\theta=O\!E_{i_0}$$，即第$${i_0}$$个决策单元的[综合技术效率指标](#Overall Efficiency "什么是综合技术效率指标")。$$\lambda=(\lambda_1,\lambda_2,\cdots,\lambda_n)$$是n个$$DMU$$的组合系数。对$$\lambda$$有：

$$\sum_{i=1}^n\lambda_i=1$$时，该决策单元为“规模报酬固定”；

$$\sum_{i=1}^n\lambda_i\lt1$$时，该决策单元为“规模报酬递增”；

$$\sum_{i=1}^n\lambda_i\gt1$$时，该决策单元为“规模报酬递减”；

另外值得说明的是，[第一个和第二个约束条件](#constrait condition "见“转化推导”中展开式")中的$$x_i=(x_{i1},x_{i2},\cdots x_{is} )$$和$$y_i=(y_{i1},y_{i2},\cdots y_{it} )$$，共有n个。

> 这个模型可以直观地理解为将决策单元$$DMU_i$$的投入、产出表示为其他决策单元的线性组合。
>
> 如果有某个 (或某些) 决策单元的产出量达到决策单元$$DMU_{i_0}$$的水平 (达到，不一定要超过，第二个约束的含义)，而投入量尽可能小 (第一个约束的含义)，那么会出现$$O\!E_{i_0}\lt1$$的情况, 此时说明该决策单元存在资源浪费。 
>
>  反之，如果该决策单元的效率已经是最高的了，那么任何的决策单元都不能使用比它还要少的投入获得同样 (甚至更多) 的产出，这时候$$O\!E_{i_0}=1$$ [^2]。

{{< admonition type=tip title="转化推导" color=none open=false >}}

线性规划模型及其对偶模型的一般式：


$$
\begin{cases}max\;c^Tx'\\
\begin{aligned}
s.t.&Ax'\geqslant b\\&x'\geqslant 0\end{aligned}\end{cases}\qquad \qquad
\begin{cases}min\;b^Ty'\\
\begin{aligned}
s.t.&Ay'\leqslant c\\&y'\geqslant 0\end{aligned}\end{cases}
$$


则


$$
max\;\mu^Ty_{i_0}\Rightarrow min\,-\!\mu^Ty_{i_0}
$$


认为


$$
\begin{aligned}
c&=[\underbrace{0,\cdots,0}_m,-y_{ {i_0}1},\cdots,y_{ {i_0}t}]^T\\
x'&=[\omega_1,\cdots,\omega_s,\mu_1,\cdots,\mu_t]^T\\
A&=\left[\begin{matrix}x_{11}&\cdots&x_{1s}&-y_{11}&\cdots&-y_{1t}\\\vdots&\ddots&\vdots&\vdots&\ddots&\vdots\\x_{n1}&\cdots&x_{ns}&-y_{n1}&\cdots&-y_{nt}\\-x_{ {i_0}1}&\cdots&-x_{ {i_0}s}&0&\cdots&0\end{matrix}\right]\\b&=[\underbrace{0,\cdots,0}_n,-1]^T\end{aligned}
$$




则目标函数


$$
max\;b^Ty'\Rightarrow max[\underbrace{0,\cdots,0}_n,-1][\lambda_1,\cdots,\lambda_n,\theta]^T\Rightarrow max\;-\!\theta\Rightarrow min\; \theta
$$


<span id="constrait condition">约束条件</span>


$$
\begin{aligned}
&A^Ty'\leqslant c\\
&\Rightarrow \left[\begin{matrix}
x_{11}&\cdots&x_{n1}&-x_{ {i_0}1}\\
\vdots&\ddots&\vdots&\vdots\\
x_{1s}&\cdots&x_{ns}&-x_{ {i_0}s}\\
-y_{11}&\cdots&-y_{n1}&0\\
\vdots&\ddots&\vdots&\vdots\\
-y_{1t}&\cdots&-y_{nt}&0
\end{matrix}\right]
[\lambda_1,\cdots,\lambda_n,\theta]^T\leqslant[\underbrace{0,\cdots,0}_m，-y_{ {i_0}1},\cdots,-y_{ {i_0}t}]^T\\\\
&\Rightarrow
\begin{cases}
\begin{aligned}
\lambda_1x_{11}+\lambda_2x_{21}+\cdots+\lambda_nx_{n1}-\theta x_{ {i_0}1}&\leqslant0\\
\vdots\\
\lambda_1x_{1s}+\lambda_2x_{2s}+\cdots+\lambda_nx_{ns}-\theta x_{ {i_0}s}&\leqslant0\\
\lambda_1y_{11}+\lambda_2y_{21}+\cdots+\lambda_ny_{n1}&\geqslant y_{ {i_0}1}\\
\vdots\\
\lambda_1y_{1t}+\lambda_2y_{2t}+\cdots+\lambda_ny_{nt}&\geqslant y_{ {i_0}t}\\
\end{aligned}
\end{cases}
\end{aligned}
$$


{{< /admonition >}}

在上述模型（D）中引入松弛变量及非阿基米德无穷小$$\epsilon$$后，得到：


$$
\begin{cases}
min\;O\!E_{i_0}-\epsilon(\sum_{i=1}^ss_i^-+\sum_{i=1}^ts_i^+)\\
\begin{aligned}
s.t.&\sum_{i=1}^n\lambda_ix_{ij}+s_j^-=O\!E_{i0}x_{i_0j}\quad (j=1,2,\cdots,s)\\
&\sum_{i=1}^n\lambda_iy_{ij}-s_j^+=y_{i_0j}\quad (j=1,2,\cdots,t)\\
&\lambda_i\geqslant0(i=1,2.\cdots,n)\\
&s_i^-,s_j^+\geqslant0\quad (i=1,2,\cdots,s;j=1,2,\cdots,t)
\end{aligned}
\end{cases}\tag{D'}
$$



或者用矩阵形式表示：


$$
\begin{cases}
min\;\theta-\epsilon(e_1s^-+e_2s^+)\\
\begin{aligned}
s.t.&\sum_{i=1}^n\lambda_ix_i+s^-=\theta x_{i_0}\\
&\sum_{i=1}^n\lambda_iy_i-s^+=y_{i_0}\\
&\lambda\geqslant0\\&s^-,s^+\geqslant0
\end{aligned}
\end{cases}\tag{D'}
$$


其中，$$s^-=(s_1^-,s_2^-,\cdots,s_s^-)$$是$$s$$项输入指标的松弛变量；$$s^+=(s_1^+,s_2^+,\cdots,s_t^+)$$是$$t$$项输出指标的松弛变量；$$s^-$$成为差额变数，表示该决策单元为达到DEA有效应减少的投入量，$$s^+$$称为超额变数，为达到DEA有效应增加的产出量。

效益分析：线性规划$$(D')$$的最优解为$$\lambda^*,s^{*-},s^{*+},\theta^*$$，则

1. 若$$\theta^*=1$$，此时某一$$s_i^-$$或$$s_j^+$$为0，则$$DMU_i$$为,[DEA弱有效](#Weakly effective "什么是强有效")；
2. 若$$\theta^*=1$$且有$$s^{*-}=0,s^{*+}=0$$，则$$DMU_i$$为[DEA强有效](#Strongly effective "什么是强有效")；
3. 若$$\theta^*\lt1$$，则$$DMU_i$$为非DEA有效，存在资源浪费现象。技术有效和规模有效均不满足。

#### 1.5.3数学模型（BC<sup>2</sup>：规模报酬可变）

> 当决策单元的规模变化时，技术效益（OE）的测度会受到规模效率的影响。BCC模式则是为了排除规模效率，得到的是纯技术效率，即TE。

在CCR模型中加入凸性假设条件$$\sum_{i=1}^n\lambda_i=1$$即得到基于规模报酬变动的BCC模型：


$$
\begin{cases}
min\;O\!E_{i_0}-\epsilon(\sum_{i=1}^ss_i^-+\sum_{i=1}^ts_i^+)\\
\begin{aligned}
s.t.&\sum_{i=1}^n\lambda_ix_{ij}+s_j^-=O\!E_{i0}x_{i_0j}&j=1,2,\cdots,s\\
&\sum_{i=1}^n\lambda_iy_{ij}-s_j^+=y_{i_0j}&j=1,2,\cdots,t\\
&\sum_{i=1}^n\lambda_i=1,\lambda_i\geqslant0(i=1,2.\cdots,n)\\
&s_i^-,s_j^+\geqslant0&i=1,2,\cdots,s;j=1,2,\cdots,t
\end{aligned}
\end{cases}\tag{M}
$$


效益分析：若线性规划（M）的最优解为$$\lambda^*,s^{*-},s^{*+},\theta^*$$，则

1. 若$$\theta^*=1$$，此时某一$$s_i^-$$或$$s_j^+$$为0，则$$DMU_i$$为,[DEA弱有效](#Weakly effective "什么是强有效")；
2. 若$$\theta^*=1$$且有$$s^{*-}=0,s^{*+}=0$$，则$$DMU_i$$为[DEA强有效](#Strongly effective "什么是强有效")；
3. 若$$\theta^*\lt1$$，则$$DMU_i$$为非DEA有效，存在资源浪费现象。技术有效和规模有效均不满足。

利用BCC模型得到排除由于规模变动影响的技术效率为纯技术效率，而CCR模型得到的是综合技术效率值，利用$$OE=TE\times SE$$可计算出规模效率值。对规模效率：

1. 若规模效率值为1，则表示该决策单元处于最优规模效率状态；
2. 若规模效率值为1，则表示该决策单元未达到规模效率最优，应当着重解决规模效率问题。

#### 1.5.4实际意义

[数据包络分析法（DEA）_2_始于足下_行千里致广大。-CSDN博客](https://blog.csdn.net/qq_42374697/article/details/109173778) 

#### 1.5.5实例[^3]

[DEA (数据包络分析)介绍及 python3 实现 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/60853027) 

#### 1.5.6运用DEAP分析

[DEAP documentation — DEAP 1.3.1 documentation](https://deap.readthedocs.io/en/master/index.html) 

### 1.6 主成分分析（PCA）

#### 1.6.1简述

PCA是最简单的以特征量分析多元统计分布的方法。通常情况下，这种运算可以被看作是揭露数据的内部结构，从而更好的解释数据的变量的方法。如果一个多元数据集能够在一个高维数据空间坐标系中被显现出来，那么PCA就能够提供一幅比较低维度的图像，这幅图像即为在讯息最多的点上原对象的一个‘投影’。这样可以利用少量的主成分使得数据的维度降低, 并且在方差的角度来说， 这种降维方法损失的信息最少。

PCA的数学定义是：一个正交化线性变换，把数据变换到一个新的坐标系统中，使得这一数据的任何投影的第一大方差在第一个坐标（称为第一主成分）上，第二大方差在第二个坐标（第二主成分）上，依次类推。详细地说，PCA的主要思想是将n维特征映射到k维上，这k维是全新的正交特征也被称为主成分，是在原有n维特征的基础上重新构造出来的k维特征。PCA的工作就是从原始的空间中顺序地找一组相互正交的坐标轴，新的坐标轴的选择与数据本身是密切相关的。其中，第一个新坐标轴选择是原始数据中方差最大的方向，第二个新坐标轴选取是与第一个坐标轴正交的平面中使得方差最大的，第三个轴是与第1,2个轴正交的平面中方差最大的。依次类推，可以得到n个这样的坐标轴。通过这种方式获得的新的坐标轴，我们发现，大部分方差都包含在前面k个坐标轴中，后面的坐标轴所含的方差几乎为0。于是，我们可以忽略余下的坐标轴，只保留前面k个含有绝大部分方差的坐标轴。事实上，这相当于只保留包含绝大部分方差的维度特征，而忽略包含方差几乎为0的特征维度，实现对数据特征的降维处理。 

设这$$k$$维空间为超平面$$S$$，则能够实现降维的超平面$$S$$与样本点应当满足一下两个条件：

1. 最近重构性：样本点到该超平面的距离足够近；
2. 最大可分性：样本点在该超平面上的投影尽可能分开；

下图展示了二维到一维的转化

{{<figure src="/images/08.png" title="（图示：由二维到一维）">}}

本节最后我们可以推导得出降维的流程，即：通过计算数据矩阵的协方差矩阵，然后得到协方差矩阵的特征值特征向量，选择特征值最大(即方差最大)的k个特征所对应的特征向量组成的矩阵。这样就可以将数据矩阵转换到新的空间当中，实现数据特征的降维。由于得到协方差矩阵的特征值特征向量有两种方法：<u>特征值分解协方差矩阵(EVD)</u>、<u>奇异值分解协方差矩阵(SVD)</u>，所以PCA算法有两种实现方法。另外，对样本矩阵单独进行SVD也能够实现PCA算法。

#### 1.6.2基于EVD的主成分分析

##### 1.6.2.1由最大可分性推导PCA

对$$m$$个$$n$$维样本组成的样本矩阵$$P_{n\times m}=(P_1,P_2,\cdots,P_m)$$，为主成分分析对象。对于每一个$$n$$维样本$$P_i(i=1,2,\cdots,m)$$可在$$n$$维坐标空间中用矩阵表示(基下的坐标)

$$P_i=(P_{i1},P_{i2},\cdots,P_{in})^T$$

其中$$P_{ij}(j=1,2,\cdots,n)$$为在第$$j$$维上的坐标。为了方便后续计算，首先需对其<u>在同一维度上</u>进行中心化(使各个样本在特定维度上的表示以其原点为中心)，即


$$
(P_{1i},P_{2i},\cdots,P_{mi})\Rightarrow(P_{i1}-\mu_i,P_{i2}-\mu_i,\cdots,P_{im}-\mu_i),\mu_i={1\over m}\sum_{l=1}^mP_{li}\tag{1}
$$


对于以后的样本$$P_i$$，均认为其是中心化处理之后的。当前的$$n$$维空间的自然基（标准正交基）表示为


$$
e_1=(1,0,\cdots,0)^T,e_2=(0,1,\cdots,0)^T,\cdots,e_n=(0,0,\cdots,1)^T
$$


则对样本$$P_{i}$$表示为自然基的线性组合


$$
P_i=e_1P_{i1}+e_2P_{i2}+\cdots+e_nP_{in}\tag{2}
$$


现需找到另外一组基$$e_1',e_2',\cdots,e_k'(k\lt n)$$，通过将当前$$n$$维空间变换到另一个$$k$$维空间，达到降维的目的，同时使丢失的信息（即坐标）达到最低，最大程度保留有效信息。更准确的解释为，变换后仍然为不同与当前的$$n$$维空间，但从第$$k+1$$维开始包含的信息（坐标）极少（小），几乎为0而因此可将其忽略，则可认为从$$n$$维变换到了$$k$$维。

对当前$$n$$维空间，第$$j$$维坐标上保存的含$$m$$项的样本$$P$$的坐标信息为


$$
A_j=(A_{j1},A_{j2},\cdots,A_{jm})=(P_{1j},P_{2j},\cdots,P_{mj})(j=1,2,\cdots,n)\tag{3}
$$


<span id="P">下图</span>更为清晰地表示这一关系：


$$
\begin{array}{c|cccc}&P_1&P_2&\cdots&P_m\\\hline\\A_1&P_{11}&P_{21}&\cdots&P_{m1}\\A_2&P_{12}&P_{22}&\cdots&P_{m2}\\\vdots&&&\vdots&\\A_n&P_{1n}&P_{2n}&\cdots&P_{mn}\end{array}\tag{4}
$$



将其记为矩阵$$P$$，一般地，将自然基在$$n$$维空间中的表示为


$$
e_1=(e_{11},e_{12},\cdots,e_{1n})^T,e_2=(e_{21},e_{22},\cdots,e_{2n})^T,\cdots,e_n=(e_{n1},e_{n2},\cdots,e_{nn})^T\tag{5}
$$


由点积的表示可知，对第$$j$$维坐标有



$$
A_{j1}=P_{1j}=e_j^TP_1=\left[\begin{matrix}e_{j1}&e_{j2}&\cdots&e_{jn} \end{matrix}\right]\left[\begin{matrix}P_{11}\\P_{12}\\\vdots\\P_{1n} \end{matrix}\right]=e_{j1}P_{11}+e_{j2}P_{12+\cdots}+e_{jn}P_{1n}\\A_{j2}=P_{2j}=e_j^TP_2=\left[\begin{matrix}e_{j1}&e_{j2}&\cdots&e_{jn} \end{matrix}\right]\left[\begin{matrix}P_{21}\\P_{22}\\\vdots\\P_{2n} \end{matrix}\right]=e_{j1}P_{21}+e_{j2}P_{22+\cdots}+e_{jn}P_{2n}\\\vdots\\A_{jm}=P_{mj}=e_j^TP_m=\left[\begin{matrix}e_{j1}&e_{j2}&\cdots&e_{jn} \end{matrix}\right]\left[\begin{matrix}P_{m1}\\P_{m2}\\\vdots\\P_{mn} \end{matrix}\right]=e_{j1}P_{m1}+e_{j2}P_{m2+\cdots}+e_{jn}P_{mn}\tag{6}
$$



要使变换后的$$n$$维坐标前$$k$$维尽可能包含最多信息，借助最小二乘法可知，需使第$$j$$维坐标



$$
A_{j1}^2+A_{j2}^2+\cdots+A_{jm}^2=\sum_{l=1}^mA_{jl}^2\quad j=1,2,\cdots,k
$$



> 实际上，主成分分析的一个重要假设就是方差的大小是衡量一组数据所包含信息量大小的标准。若一组数据方差越大，则其包含的信息越多。做基变换的目的之一，是要使大部分信息被保留下来，具体实现方法就是使各维度坐标轴上数据的方差达到最大。
>
> 此处，$${1\over m}\sum_{l=1}^mA_{jl}^2$$恰好为$$A_j$$的方差$$Var(A_j)$$

的值最大，则


$$
\begin{aligned}
\sum_{l=1}^mA_{jl}^2&=(e_{j1}P_{11}+e_{j2}P_{12+\cdots}+e_{jn}P_{1n})^2+(e_{j1}P_{21}+e_{j2}P_{22+\cdots}+e_{jn}P_{2n})^2+\cdots\\&+(e_{j1}P_{m1}+e_{j2}P_{m2+\cdots}+e_{jn}P_{mn})^2
\end{aligned}
$$


对上式中的每一项$$A_{jl}^2$$将其展开式分为两部分：平方项$$B_{jl}$$和二次项$$C_{jl}$$，则


$$
B_{jl}=\sum_{t=1}^n(e_{jt}P_{lt})^2,\quad C_{jl}=2\sum_{t=1}^n\sum_{s=t+1}^n(e_{jt}P_{lt})(e_{js}P_{ls})=2\sum_{t=1}^n\sum_{s=t+1}^n(e_{jt}e_{js})(P_{lt}P_{ls})
$$


其中$$j=1,2,\cdots,n;l=1,2,\cdots,m$$，则


$$
\begin{aligned}
\sum_{l=1}^mA_{jl}^2&=\sum_{l=1}^m\sum_{t=1}^n(e_{jt}P_{lt})^2+2(\sum_{t=1}^n\sum_{s=t+1}^ne_{jt}e_{js})\sum_{l=1}^m(\sum_{t=1}^n\sum_{s=t+1}^nP_{lt}P_{ls})\\&=(P_{11}^2+P_{21}^2+\cdots+P_{m1}^2)e_{j1}^2+(P_{12}^2+P_{22}^2+\cdots+P_{m2}^2)e_{j2}^2+\cdots+(P_{1n}^2+P_{2n}^2+\\&\cdots+P_{mn}^2)e_{jn}^2+2\sum_{t=1}^n\sum_{s=t+1}^n[(P_{1t}P_{1s}+P_{2t}P_{2s}+\cdots+P_{mt}P_{ms})(e_{jt}e_{js})]
\end{aligned}
$$


不难看出，上式为二次型，将其写为矩阵形式


$$
\sum_{l=1}^mA_{jl}^2=e_j^T\left[\begin{matrix}\sum_{l=1}^mP_{l1}^2&\sum_{l=1}^mP_{l1}P_{l2}&\cdots&\sum_{l=1}^mP_{l1}P_{ln}\\\sum_{l=1}^mP_{l2}P_{l1}&\sum_{l=1}^2P_{l2}^2&\cdots&\sum_{l=1}^mP_{l2}P_{ln}\\\vdots&\vdots&\ddots&\vdots\\\sum_{l=1}^mP_{ln}P_{l1}&\sum_{l=1}^mP_{ln}P_{l2}&\cdots&\sum_{l=1}^mP_{ln}^2 \end{matrix}\right]e_j=e_j^TP'e_j\tag{7}
$$




这里的矩阵$$P'$$与矩阵[$$P$$](#P "矩阵P")的协方差矩阵有关。回到中心化之前的样本可知，这里的$$A_j=(A_{j1},A_{j2},\cdots,A_{jm})$$是经过中心化处理的，则


$$
\begin{aligned}
&Cov(A_{1},A_{2})={1\over m-1}\sum_{i=1}^nA_{1i}A_{2i}={1\over m-1}\sum_{i=1}^nP_{i1}P_{i2}\\
&Var(A_j)={1\over m-1}\sum_{i=1}^nA_{ji}^2={1\over m-1}\sum_{i=1}^nP_{ij}^2
\end{aligned}
$$


此处将$$(m-1)$$改为$$m$$，不会造成太大误差，且便于计算。则


$$
Q_{n\times n}={1\over m}P'=\left[\begin{matrix}Var(A_1)&Cov(A_1,A_2)&\cdots&Cov(A_1,A_n)\\Cov(A_2,A_1)&Var(A_2)&\cdots&Cov(A_2,A_n)\\\vdots&\vdots&\ddots&\vdots\\Cov(A_n,A_1)&Cov(A_n,A_2)&\cdots&Var(A_n) \end{matrix}\right]\tag{8}
$$


协方差矩阵又可用矩阵$$P$$表示为


$$
Q_{n\times n}={1\over m}P_{n\times m}P^T_{m\times n}\tag{9}
$$


(7)式用变换之前的协方差矩阵表示了当前方差。相应地，要使方差的值达到最大，同时使协方差的值达到最小，矩阵$$P'$$的值不可能改变，因为给定的样本值从根本上无法改变（无论其在不同基下的表示是什么），而必须改变基。

> 变换的目的之二，是使协方差化到最小。协方差一定程度上体现了不同数据之间包含的信息的重叠关系，而重复的信息应当剔除掉。不难发现，最优化的变换结果即是对角矩阵，此时协方差均为0，只保留对角元素——方差。

接(7)式，要达到使得前$$k$$维方差最大，同时不同维之间协方差最小的目的，需将矩阵$$P'$$变换为对角矩阵。即对原样本进行空间变换后的协方差矩阵为对角矩阵，设其为$$C$$；设原样本矩阵$$P$$进行变换后的矩阵为$$M$$，设变换矩阵为$$W$$，即$$M=WP$$，则


$$
C={1\over m}MM^T={1\over m}(WP)(WP)^T=W({1\over m}PP^T)W^T=WQW^T
$$


由于$$C$$为对角阵，则上式反过来是对实对称矩阵$$Q$$的对角化，则$$WW^T=I$$，则最大值目标可表示为


$$
\begin{aligned}
&\underset{W}{max}\; tr(WQW^T)\\
&s.t.\;WW^T=I
\end{aligned}\tag{10}
$$


通过拉格朗日乘数法解此最值问题


$$
L(W)=tr(WQW^T)-\lambda(WW^T-I)\\\Downarrow\\{\partial(L(W,\lambda))\over \partial W}=QW^T+\lambda W^T\\\Downarrow \\QW^T=(-\lambda)W^T
$$


因此所求变换矩阵$$W$$为样本矩阵的协方差矩阵$$Q$$的特征向量组成的矩阵的<u>转置</u>，并且特征向量按照特征值的大小由大到小进行排列。

也可从线性代数角度出发：由(7)式得知协方差矩阵$$Q$$为实对称矩阵，已知实对称矩阵一定可对角化，即


$$
C=N^TQN
$$


且对角矩阵$$C$$为其特征值排列在对角线上构成的对角矩阵，矩阵$$N$$为其特征向量单位化后按<u>列</u>排列构成的正交矩阵。不难得出，$$W=N^T$$，即$$W$$为其特征向量单位化后按<u>行</u>排列构成的矩阵。注意顺序与特征向量保持对应。



或者：

接(7)式，可以写出各维度$$A_j(j=1,2,\cdots,k;k\lt n)$$的方差表示形式


$$
D_1=e_1^TP'e_1,D_2=e_2^TP'e_2,\cdots,D_n=e_n^TP'e_n
$$


对每一维度的$$D_i$$，矩阵$$P'$$可进行[奇异值分解]("如何进行奇异值分解？")(对协方差矩阵进行奇异值分解与此相同，二者之间相差系数n)


$$
P'=U\Sigma V^T=U\Sigma U^T\tag{11}
$$


第二个等号成立的原因是$$P'$$为方阵。其中$$U$$为正交阵，即$$UU^T=I$$；$$\Sigma$$为对角阵，即


$$
\Sigma=\left[\begin{matrix}\sigma_1&0&\cdots&0\\0&\sigma_2&\cdots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\cdots&\sigma_n \end{matrix}\right]
$$


其中，奇异值满足$$\sigma_1\gt \sigma_2\gt \cdots \gt \sigma_n$$，将分解后的矩阵代回$$D_i$$


$$
D_i=e_i^TP'e_i=e_i^TU\Sigma Ue_i=(U^Te_i)^T\Sigma(U^Te_i)=W_i^T\Sigma W_i,i=1,2,\cdots,n\tag{12}
$$


即


$$
\Sigma=W_iD_iW_i^T
$$


方阵的奇异值分解和特征值分解并无区别，只是从不同的角度出发。由（11）式明显看出$$W_i=U^Te_i$$，进而$$W=U^Te$$即矩阵$$W$$为变换过后的基，矩阵$$U^T$$为变换矩阵。而$$U^T$$由矩阵$$P'$$(或协方差矩阵)的特征向量按照特征值的大小从大到小以行排列构成。

设最终构成的变换矩阵$$W$$(或$$U^T$$)为


$$
W=[w_1,w_2,\cdots,w_n]^T\tag{13}
$$


$$w_1,w_2,\cdots,w_n$$为特征向量，则由此变换过后的样本矩阵为


$$
W_{n\times n}P_{n\times m}=M_{n\times m}\tag{14}
$$


此时矩阵$$M$$的第$$k$$至$$n$$维上的数据已非常之小，几乎为0。因此将其忽略掉，则变换后的矩阵为


$$
M_{k\times m}
$$


显然$$k\lt n$$，即原样本矩阵的维数从$$n$$降到了$$k$$。

##### 1.6.2.2由最近重构性推导PCA

设有$$m$$个$$n$$维样本组成的样本矩阵$$P_{n\times m}=(P_1,P_2,\cdots,P_m)$$，已经进行了中心化。设变换后的$$n$$维空间坐标系为$$e'=(e'_1,e'_2,\cdots,e'_n)$$，去掉部分坐标后变为$$k$$维$$e'=(e'_1,e'_2,\cdots,e'_k)$$，且满足


$$
||e_i||=1;e^T_ie_j=0.i\not=j
$$


则有变换矩阵$$W=(w_1,w_2,\cdots,w_k)^T$$使得$$e'=We$$，由$$e$$为单位阵，则知$$W=e'$$；设原样本矩阵$$P$$在此空间中的投影为$$M_{k\times m}=(M_1,M_2,\cdots,M_m)$$，$$M_i$$在基下的坐标


$$
M_i=(M_{i1},M_{i2},\cdots,M_{ik})^T\quad i=1,2,\cdots,m
$$


用$$M$$重构$$P$$，由$$W$$为正交阵知$$W^{-1}=W^T$$，则


$$
\widehat{P}_i=\sum_{j=1}^kM_{ij}w_j\tag{15}
$$


则整个样本的样本点$$P_i$$到基于投影重构的样本点$$\widehat{P}_i$$之间的距离为


$$
\begin{aligned}
\sum_{i=1}^m||\widehat{P}_i-P_i||^2&=\sum_{i=1}^m||W^TM_i-P_i||^2\\&=\sum_{i=1}^m(W^TM_i)^T(W^TM_i)-2\sum_{i=1}^m(W^TM_i)^TP_i+\sum_{i=1}^mP_i^TP_i\\&=\sum_{i=1}^mM_i^TM_i-2\sum_{i=1}^mM_i^TWP_i+\sum_{i=1}^mP_i^TP_i\\&=\sum_{i=1}^mM_i^TM_i-2\sum_{i=1}^mM_i^TM_i+\sum_{i=1}^mP_i^TP_i\\&=-\sum_{i=1}^mM_i^TM_i+\sum_{i=1}^mP_i^TP_i\\&=-tr(W(\sum_{i=1}^mP_iP_i^T)W^T)+\sum_{i=1}^mP_i^TP_i\\&=-tr(WPP^TW^T)+\sum_{i=1}^mP_i^TP_i\\&=-mtr(WQW^T)+\sum_{i=1}^mP_i^TP_i
\end{aligned}
$$


则最小化目标化为


$$
\begin{aligned}
&\underset{W}{min}\; -tr(WQW^T)\\
&s.t.\;WW^T=I
\end{aligned}\tag{16}
$$


此式和(10)式相同，即最大可分性和最近重构性的优化目标的数学形式是相同的。

综上，运用对协方差矩阵进行分解实现PCA的步骤为：

1. 对样本矩阵$$P_{n\times m}$$进行中心化；
2. 求出矩阵$$P$$的协方差矩阵 $$Q_{n\times n}={1\over m}PP^T$$；
3. 求出协方差矩阵的特征值和对应的特征向量（特征值分解或奇异值分解）；
4. 将特征向量按照特征值从大到小以行排列构成变换矩阵$$W_{n\times n}$$；
5. 对原样本矩阵进行变换$$M_{n\times m}=WP$$，再进行降维$$M_{k\times m}$$。

#### 1.6.3 基于SVD的主成分分析

设有样本矩阵$$P_{n\times m}=(P_1,P_2,\cdots,P_m)$$，首先对行（维度）进行中心化。再对其进行奇异值分解


$$
P=U\Sigma V^T
$$


其中$$U$$为$$n\times n$$的酉矩阵，$$V$$为$$m\times m$$的酉矩阵，即$$UU^T=VV^T=I$$。$$\Sigma$$为$$m\times n$$的非负对角阵，对角线上为奇异值且奇异值按照从大到小的顺序排列。

由上式可得


$$
PP^T=(U\Sigma V^T)(U\Sigma V^T)^T=U\Sigma^2 U^T\\
P^TP=(U\Sigma V^T)^T(U\Sigma V^T)=V\Sigma^2V^T
$$


其中$$PP^T$$和$$P^TP$$为$$n\times n$$和$$m\times m$$的方阵且为实对称矩阵，由特征值分解可知，（1）方阵$$PP^T$$的归一化特征向量按列排列构成的矩阵为$$U$$矩阵，其行向量成为左奇异向量；（2）方阵$$P^TP$$的归一化特征向量按列排列构成的矩阵为$$V$$矩阵，其行向量成为右奇异向量；（3）二者的特征值的非零平方根为矩阵$$P$$的奇异值，并与$$U$$和$$V$$的行向量对应。

奇异值的衰减速度非常快，以致前少数部分奇异值的和占据总和的大部分，故可用这少部分来估计整体，达到降维的目的。要降低维度，需用到左奇异矩阵$$U$$


$$
M_{n\times m}=U^TP=U^TU\Sigma V^T=\Sigma V^T
$$


矩阵$$M$$为变换过后的样本矩阵，而矩阵$$U^T$$即为此时的变换矩阵$$W$$，$$W$$的行向量为变换后的空间的基。变换后的样本矩阵均满足所需要求。于是，丢弃掉第$$k$$至$$n$$维的数据部分，因为此时这部分数据包含的信息已非常之少，基本上没有贡献作用，则矩阵$$M$$的维数降到了$$k$$维。

> 不难发现，和协方差矩阵分解有相似之处。此处的变换矩阵$$W=U^T$$的行向量为方阵$$PP^T$$的特征向量，此方阵即为样本矩阵的协方差矩阵。

从另一个角度，可以理解为直接从左奇异矩阵中选取了最大的$$k$$个<u>列</u>向量按<u>行</u>构成了变换矩阵$$W_{k\times n}(k\lt n)$$，经过$$W_{k\times n}P_{n\times m}=M_{k\times m}$$计算后，矩阵的维数从$$n$$降到了$$k$$。

{{< admonition type=tip title="右奇异矩阵的作用" color=none open=false >}}

对矩阵$$P$$进行奇异值分解后，可将其用下式表示


$$
P_{n\times m}\approx U_{n\times k}\Sigma_{k\times k}V_{k\times m}^T
$$




两边左乘$$U^T_{n\times k}$$则得到$$\Sigma_{k\times k}V_{k\times m}^T$$，即对矩阵$$P$$的行进行了压缩，和PCA一致；

两边右乘$$V_{k\times m}$$则得到$$U_{n\times k}\Sigma_{k\times k}$$，即对矩阵$$P$$的列进行了压缩，而PCA只能进行一个方向（维度）方向的压缩。

[强大的矩阵奇异值分解(SVD)及其应用 - liangflying - 博客园 (cnblogs.com)](https://www.cnblogs.com/liangflying/archive/2012/09/25/2701148.html) 

{{< /admonition >}}

#### 1.6.4维数k的确定

根据实际情况使用模型选择的交叉验证法或者采用设立能量阈值的方法。

能量阈值法中，设置能量阈值的$$t\%$$，则


$$
k=arg\;min\;{\sum_{i=1}^k\Sigma_{ii}\over\sum_{i=1}^n\Sigma_{ii}}\geqslant t\%
$$


其中，$$\Sigma$$为非负对角矩阵。一般设置$$85\%$$或者$$95\%$$的阈值。

#### 1.6.5核主成分分析（KPCA）

#### 1.6.6实例

[^1]: 引自[数据包络分析法（DEA）——CCR - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/73096903) 
[^3]: 引自其他网站.
[^2]: 引自[DEA (数据包络分析)介绍及 python3 实现 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/60853027) 
