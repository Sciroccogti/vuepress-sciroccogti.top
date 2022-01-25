---
title:      第八、九章 时间信号分析
date:       2022-01-03T15:00:00+08:00
article: false
---

# 第八章 离散时间信号分析

$R_X(t)=E\{X(t_1)X(t_2)\}$

**维纳—辛钦定理**：若离散时间过程 $X[n]$ 宽平稳，其自相关函数为 $R_X[m]$ 且满足 $\sum_{m=-\infty}^\infty|mR_X[m]|<\infty$，则
$$S_X(f)=\sum_{m=-\infty}^\infty R_X[m]e^{-jm2\pi f}$$
$$R_X[m]=\int_{-1/2}^{1/2}S_X(f)e^{jm2\pi f}df$$

- $R_Y[m]=R_X[m]*h[m]*h^*[-m]$，$h[m]$ 为系统冲激响应

> $\left(\frac{e^{j2\pi f}}{2}\right)^\infty=\left(\frac{e^{-j2\pi f}}{2}\right)^\infty=0$

白噪声：功率谱密度 $S_X(f)$ 为常数

- $E\{X[n+k]X^*[n-1]\}=E\{X[n+k-1]X^*[n]\}=R_X[k-1]$
- $E\{X[n+k]X^*[n]\}=E\{X[n+k-1]X^*[n-1]\}=R_X[k]$

实~~宽平稳~~过程的功率谱密度是偶函数

## 输入与输出的功率谱传输特性

- $S_{XY}(f)=S_X(f)H^*(f)=S_X^*(f)H(f)$
- $S_{YX}(f)=S_X(f)H(f)$
- $S_Y(f)=S_X(f)|H(f)|^2$
- $S_{XY}(f)=S^*_{YX}(f)$
- $S_Y(f)=S_{XY}(f)H(f)$
- $S_Y(f)=S_{YX}(f)H^*(f)$
- $H(f)=\frac{Y(f)}{X(f)}$

可以全程用 z 变换代替，其中 $|H(z)|^2=H(z)H(\frac{1}{z})$

## 自回归（AR）模型

**定义**：$X[n]+\sum_{k=1}^pa_kX[n-k]=W[n]$，W 为白噪声序列
- 传递函数：$H(z)=\frac{\hat{X}(z)}{\hat{W}(z)}$

# 第九章 连续时间信号分析

**维纳—辛钦定理**：若连续时间过程 $X(t)$ 宽平稳，且其自相关函数 $R_X(t\tau)$ 满足 $\int_{-\infty}^\infty|\tau R_X(\tau)|d\tau<\infty$，则
$$S_X(f)=\int_{m=-\infty}^\infty R_X(\tau)e^{-j2\pi f\tau}d\tau$$
$$R_X(\tau)=\int_{-\infty}^{\infty}S_X(f)e^{j2\pi f\tau}df$$

传递函数计算举例：
- $Y(t)=X(t)-X(t-d)$
- $H(f)=1-e^{-j2\pi fd}$

**卷积**：
$f(t)*g(t)=\int^\infty_{-\infty}f(\tau)g(t-\tau)d\tau$

### Poisson 随机电报过程

是宽平稳过程

设信号平均传输速率为 $\alpha$
- 自相关函数为 $R_X(\tau)=e^{-w\alpha|\tau|}$
- 功率谱密度为 $S_X(f)=\frac{\alpha}{\alpha^2+\pi^2f^2}$

### 3dB 带宽

使功率谱密度大于 $\frac{1}{2}max\{S_X(f)\}$ 的频率范围

### 等效带宽

$$B_{eq}=\frac{\int^\infty_0S_X(f)df}{max\{S_X(f)\}}$$

