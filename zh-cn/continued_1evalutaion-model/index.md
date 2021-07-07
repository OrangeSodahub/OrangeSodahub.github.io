# (续1)评价模型


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

1. 技术效率（overall efficiency,OE）：指在保持决策单元投入不变的情况下，实际产出同理想产出的比值；
2. 纯技术效率（technical efficiency,TE）：
3. 规模效率（scale efficiency,SE）：
4. 规模报酬：规模报酬是要说明，当生产要素同时增加了一倍，如果产量的增加正好是一倍，称之为规模报酬不变（-），如果产量增加多于一倍，则称之为规模报酬递增（irs），进而，如果产量增加少于一倍，就称为规模报酬递减（drs）；
5. 技术有效：输出相对输入而言已达最大，即该决策单元位于生产函数的曲线上；
6. 规模有效：投入量既不偏大也不偏小，处于规模收益不变的状态；
7. 决策单元（DMU->Decision Making Unit）就是效率评价的对象，可以理解为一个将一定“投入”转化为一定“产出”的实体；
8. DEA强有效：任何一项投入的数量都无法减少，除非减少产出的数量或者增加其他至少一种投入的数量；任何一项产出的数量都无法增加，除非增加投入的数量或减少其他至少一种产出的数量；
9. DEA弱有效：无法等比例减少各项投入的数量，除非减少产出的数量；无法等比例增加各项产出的数量，除非增加投入的数量。这种情况下，虽然不能等比例减少投入或增加产出，但某一项或几项（但不是全部）投入可能减少，所以称为弱有效。
10. <span id="Production Front">生产前沿面</span>：对于给定的生产要素和产出价格，选择要素投入的最优组合和产出的最优组合，即投入成本最小、产出收益最大的组合。它所对应的生产函数所描述的生产可能性边界就是生产前沿面[^1]：设$$\omega\gt0,\mu\gt0,L=\{(X,Y)|\omega^TX-\mu^TY=0\},T\subset\{(X,Y)|\omega^TX-\mu^TY\geqslant0 \}$$满足$$L\bigcap T\not=∅$$，则称$$L$$为生产可能集$$T$$的有效面，称$$L\bigcap T$$为生产前沿面。

#### 1.5.2数学模型（C<sup>2</sup>R：规模报酬不变）

设有$$n$$个决策单元$$DMU_i(1\leqslant i\leqslant n)$$，对每个决策单元$$DMU_i$$，有$$s$$个输入指标$$x_{1i},x_{2i},\cdots,x_{si}$$和$$t$$个输出指标$$y_{1i},y_{2i},\cdots,y_{ti}$$，即：


$$
DMU_1=\left[\begin{array}{c|c}x_1&y_1 \end{array}\right]^T=\left[\begin{array}{c c c c|c c c c} x_{11}&x_{21}&\cdots&x_{s1}&y_{11}&y_{21}&\cdots&y_{t1} \end{array}\right]^T\\
DMU_2=\left[\begin{array}{c|c}x_2&y_2 \end{array}\right]^T=\left[\begin{array}{c c c c|c c c c} x_{12}&x_{22}&\cdots&x_{s2}&y_{12}&y_{22}&\cdots&y_{t2} \end{array}\right]^T\\
\vdots\\
DMU_n=\left[\begin{array}{c|c}x_n&y_n \end{array}\right]^T=\left[\begin{array}{c c c c|c c c c} x_{1n}&x_{2n}&\cdots&x_{sn}&y_{1n}&y_{2n}&\cdots&y_{tn} \end{array}\right]^T
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
I_i=v^Tx_j=\sum_{j=1}^sx_{ji}v_j,i=1,2,\cdots,n\\
O_i=u^Ty_j=\sum_{j=1}^ty_{ji}u_j,i=1,2,\cdots,n
$$


为第i决策单元的综合输入评价指标和综合输出评价指标。记


$$
E_i={O_i\over I_i}={u^Ty_j\over v^Tx_j}={\sum_{j=1}^sx_{ji}v_j\over \sum_{j=1}^ty_{ji}u_j}
$$


为$$DMU_i$$的效率评价指标。显然，输入越小，输出越大，则效率越高。在效率评价指标$$E_i\leqslant1,v\gt0,u\gt0$$的约束条件下，求出一组最优权向量使得第$$i_0$$个决策单元$$DMU_{i_0}$$效率$$E$$达到最大值，即：


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
\begin{cases}max\;\mu^Ty_{i_0}=E_{i_0}\\s.t.\mu^T y_i-\omega^T x_i\leqslant0 ,\omega ^Tx_{i_0}=1,\omega\gt0,\mu\gt0\end{cases}\tag{P}
$$


>推导：$$\mu=tu\Rightarrow\mu^T=tu^T\Rightarrow t={\mu^T\over u^T}\\max{u^Ty_i\over v^Tx_i}\Rightarrow max{tu^Ty_i\Rightarrow max{ {\mu^T\over u^T}u^Ty_i} }\Rightarrow max{\mu^Ty_i}$$
>
>&emsp;&emsp;&emsp;$$\omega=tv\Rightarrow \omega^T=tv^T,\mu^T=tu^T\\{u^Ty_i\over v^Tx_i}\leqslant1\Rightarrow u^Ty_i-v^Tx_i\leqslant0\Rightarrow {\mu^T\over t}y_i-{\omega^T\over t}x_i\leqslant0\Rightarrow \mu^T y_i-\omega^T x_i\leqslant0$$



线性规划的最优解$$\omega^*,\mu^*$$即为$$DMU_i$$的最优权向量，其使得$$DMU_i$$的效率值达到最大。另外，作为线性规划的解，$$\omega^*,\mu^*$$不唯一。最终有：

1. 若最优指标值$$E_{i_0}=1$$，则称$$DMU_i$$为DEA弱有效；
2. 若存在最优解$$\omega^*,\mu^*$$满足$$\omega^*\gt0,\mu^*\gt0$$，使得$$E_i=E_{i_0}=1$$，则称$$DMU_i$$为DEA有效。此时该生产单元$$DMU_i$$处在[生产前沿面](#Production Front "点击跳转")上；
3. 若最优解$$E_{i_0}\lt1$$，则称该决策单元非DEA有效。

将上述线性模型（P）取其对偶模型得到：


$$
\begin{aligned}
\begin{cases}min\;OE_{i_0}\\s.t.&\sum_{i=1}^n\lambda_ix_i\leqslant\theta x_{i_0}\quad \\&\sum_{i=1}^n\lambda_iy_i\geqslant y_{i_0}\\&\lambda_i\geqslant0,\quad i=1,2,\cdots,n \end{cases}
\end{aligned}\tag{D}
$$


其中$$OE_{i_0}=\theta$$，即第$${i_0}$$个决策单元的综合技术效率指标。$$\lambda=(\lambda_1,\lambda_2,\cdots,\lambda_n)$$是n个$$DMU$$的组合系数。值得说明的是，第一个和第二个约束条件中的$$x_i=(x_{1i},x_{2i},\cdots x_{si} )$$和$$y_i=(y_{1i},y_{2i},\cdots y_{ti} )$$，共有n个。

> 这个模型可以直观地理解为将决策单元$$DMU_i$$的投入、产出表示为其他决策单元的线性组合。
>
> 如果有某个 (或某些) 决策单元的产出量达到决策单元$$DMU_i$$的水平 (达到，不一定要超过，第二个约束的含义)，而投入量尽可能小 (第一个约束的含义)，那么会出现$$OE_i\lt1$$的情况, 此时说明该决策单元存在资源浪费。 
>
>  反之，如果该决策单元的效率已经是最高的了，那么任何的决策单元都不能使用比它还要少的投入获得同样 (甚至更多) 的产出，这时候$$OE_i\gt1$$ [^2]。

{{< admonition type=tip title="转化推导" color=none open=false >}}

线性规划模型极其对偶模型的一般式：


$$
\begin{aligned}
\begin{cases}max\;c^Tx'\\s.t.&Ax'\geqslant b\\&x'\geqslant 0\end{cases}\qquad \qquad
\begin{cases}min\;b^Ty'\\s.t.&Ay'\leqslant c\\&y'\geqslant 0\end{cases}
\end{aligned}
$$


则


$$
max\;\mu^Ty_{i_0}\Rightarrow min\,-\!\mu^Ty_{i_0}
$$


认为


$$
\begin{aligned}
c&=[\underbrace{0,\cdots,0}_m,-y_{1{i_0} },\cdots,y_{t{i_0} }]^T\\
x'&=[\omega_1,\cdots,\omega_s,\mu_1,\cdots,\mu_t]^T\\
A&=\left[\begin{matrix}x_{11}&\cdots&x_{s1}&-y_{11}&\cdots&-y_{t1}\\\vdots&\ddots&\vdots&\vdots&\ddots&\vdots\\x_{1n}&\cdots&x_{sn}&-y_{1n}&\cdots&-y_{tn}\\-x_{1{i_0} }&\cdots&-x_{s{i_0} }&0&\cdots&0\end{matrix}\right]\\b&=[\underbrace{0,\cdots,0}_n,-1]^T\end{aligned}
$$




则目标函数


$$
max\;b^Ty'\Rightarrow max[\underbrace{0,\cdots,0}_n,-1][\lambda_1,\cdots,\lambda_n,\theta]^T\Rightarrow max\;-\!\theta\Rightarrow min\; \theta
$$


约束条件


$$
\begin{aligned}
&A^Ty'\leqslant c\\
&\Rightarrow \left[\begin{matrix}
x_{11}&\cdots&x_{1n}&-x_{1{i_0} }\\
\vdots&\ddots&\vdots&\vdots\\
x_{s1}&\cdots&x_{sn}&-x_{s{i_0} }\\
-y_{11}&\cdots&-y_{1n}&0\\
\vdots&\ddots&\vdots&\vdots\\
-y_{t1}&\cdots&-y_{tn}&0
\end{matrix}\right]
[\lambda_1,\cdots,\lambda_n,\theta]^T\leqslant[\underbrace{0,\cdots,0}_m，-y_{1{i_0} },\cdots,-y_{t{i_0} }]^T\\\\
&\Rightarrow
\begin{cases}
\begin{aligned}
\lambda_1x_{11}+\lambda_2x_{12}+\cdots+\lambda_nx_{1n}-\theta x_{1{i_0} }&\leqslant0\\
\vdots\\
\lambda_1x_{s1}+\lambda_2x_{s2}+\cdots+\lambda_nx_{sn}-\theta x_{s{i_0} }&\leqslant0\\
\lambda_1y_{11}+\lambda_2y_{12}+\cdots+\lambda_ny_{1n}&\geqslant y_{1{i_0} }\\
\vdots\\
\lambda_1y_{t1}+\lambda_2y_{t2}+\cdots+\lambda_ny_{tn}&\geqslant y_{t{i_0} }\\
\end{aligned}
\end{cases}
\end{aligned}
$$


{{< /admonition >}}

在上述模型（D）中引入松弛变量及非阿基米德无穷小$$\epsilon$$后，得到：


$$
\begin{aligned}
\begin{cases}
min\;\theta-\epsilon(\sum_{i=1}^ss_i^-+\sum_{i=1}^ts_i^+)\\
s.t.\sum_{j=1}^n\lambda_ix_j+s_j^-
\end{cases}
\end{aligned}
$$


#### 1.5.3实例[^3]



### 1.6 主成分分析

### 1.7 理想解方法

### 1.8 加权积

### 1.9 熵权法

### 1.10 信息熵法

[^1]: 引自[数据包络分析法（DEA）——CCR - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/73096903) 
[^3]: 引自其他网站.
[^2]: 引自[DEA (数据包络分析)介绍及 python3 实现 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/60853027) 
