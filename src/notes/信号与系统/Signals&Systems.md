---
layout:     note
title:      信号笔记
date:       2019-01-19T15:00:00+08:00
categories: 信号与系统
# tags:		["学习"]
article: false
---

||傅里叶变换|拉普拉斯变换|Z变换
---|---|---|---
**定义**|（t换为k，jω换为$e^j\omega$得DTFT）
正变换|$F(j\omega)=\int_{-\infty}^{\infty}f(t)e^{-j{\omega}t}dt$|$F(s)=\int_{-\infty}^{\infty}f(t)e^{-st}dt$|$F(z)=\sum_{k=-\infty}^{\infty}f(k)z^{-k}$
|
反变换|$f(t)=\frac{1}{2\pi}\int_{-\infty}^{\infty}F(j\omega)e^{-j{\omega}t}d\omega$|$f(t)=\frac{1}{2{\pi}j}\int_{\sigma-\infty}^{\sigma+\infty}F(s)e^{-st}ds$|
|
**性质**|
线性|
|
延时特性|$f(t-t_0){\leftrightarrow}F(j\omega)e^{-j{\omega}t_0}$|$f(t-t_0){\leftrightarrow}F(s)e^{-st_0}$|增序：$f(k+n){\leftrightarrow}z^n[F(z)-\sum_{i=0}^{n-1}z^{-i}f(i)]$
|
移频特性|$f(t)e^{j\omega_ct}{\leftrightarrow}F[j(\omega-\omega_c)]$|$f(t)e^{s_0t}{\leftrightarrow}F(s-s_0)]$|减序：$f(k-n){\leftrightarrow}z^{-n+1}[F(z)+\sum_{i=-1}^{-n}z^{-i}f(i)]$
|
尺度变换|$f(at)\leftrightarrow\frac{1}{\|a\|}F(j\frac{\omega}{a})$|$f(at){\leftrightarrow}\frac{1}{\|a\|}F(\frac{s}{a})$|$a^kf(k){\leftrightarrow}F(\frac{z}{a})$
|
奇偶虚实性|||
|
对称特性|$f(t){\leftrightarrow}F(j\omega){\Longleftrightarrow}F(jt){\leftrightarrow}2{\pi}f(-\omega)$|$f(t){\leftrightarrow}F(s){\Longleftrightarrow}F(t){\leftrightarrow}2{\pi}jf(-s)$|
|
时域微分|$\frac{d}{dt}f(t){\leftrightarrow}j{\omega}F(j\omega)$|$\frac{d}{dt}f(t){\leftrightarrow}sF(s)-f(0^-)$|
|
时域积分|$\int_{-\infty}^{t}f(\tau)d\tau{\leftrightarrow}{\pi}F(0)\delta(\omega)+\frac{1}{j\omega}F(j\omega)$|$\int_{0^-}^{t}f(\tau)d\tau{\leftrightarrow}\frac{F(s)}{s}$|
|
频域微分|$-jtf(t)\leftrightarrow\frac{d}{d\omega}F(j\omega)$|$tf(t)\leftrightarrow-\frac{d}{ds}F(s)$|$kf(k)\leftrightarrow-z\frac{d}{dz}F(z)$
|
频域积分|${\pi}f(0)\delta(t)-\frac{f(t)}{jt}\leftrightarrow\int_{-\infty}^{\omega}F(j\Omega)d\Omega$|$\frac{f(t)}{t}\leftrightarrow\int_{s}^{\infty}F(p)dp$|
|
卷积定理|$\begin{cases}f_1(t)*f_2(t){\leftrightarrow}F_1(j\omega)F_2(j\omega)\\f_1(t)f_2(t){\leftrightarrow}\frac{1}{2\pi}F_1(j\omega)*F_2(j\omega)\end{cases}$|$\begin{cases}f_1(t)*f_2(t){\leftrightarrow}F_1(s)F_2(s)\\f_1(t)f_2(t){\leftrightarrow}\frac{1}{2j\pi}F_1(s)*F_2(s)\end{cases}$|$f_1(k)*f_2(k){\leftrightarrow}F_1(z)F_2(z)$
|
初值定理||$f(0^+)=\lim_{t\rightarrow0^+}f(t)=\lim_{s\rightarrow\infty}sF(s)$等|$f(0)=\lim_{z\rightarrow\infty}F(z)$
|
终值定理||$f(\infty)=\lim_{t\rightarrow\infty}f(t)=\lim_{s\rightarrow0}sF(s)$等|$f(\infty)=\lim_{z\rightarrow1}(z-1)F(z)$
|

**常用变换**|傅里叶变换|拉普拉斯变换|Z变换
---|---|---|---
鼠：$\delta(t)$|1|$1$|
|
牛：$C$|$2{\pi}C\delta(\omega)$||
|
虎：$\epsilon(t)$|${\pi}\delta(\omega)+\frac{1}{j\omega}$|$\frac{1}{s}$|$\frac{z}{z-1}$
|
兔：$sgn(t)$|$\frac{2}{j\omega}$||
|
龙：$e^{j\omega_ct}$|$2{\pi}\delta(\omega-\omega_c)$||
|
蛇：$cos\omega_ct$|${\pi}[\delta(\omega+\omega_c)+\delta(\omega-\omega_c)]$|$cos\omega_ct\epsilon(t){\leftrightarrow}\frac{s}{s^2+\omega_c^2}$|$cos{\beta}kT\epsilon(k)\leftrightarrow\frac{z(z-cos{\beta}T)}{z^2-2zcos{\beta}T+1}$
|
马：$sin\omega_ct$|$j{\pi}[\delta(\omega+\omega_c)-\delta(\omega-\omega_c)]$|$sin\omega_ct\epsilon(t){\leftrightarrow}\frac{\omega_c}{s^2+\omega_c^2}$|$sin{\beta}kT\epsilon(k)\leftrightarrow\frac{zsin{\beta}T}{z^2-2zcos{\beta}T+1}$
|
羊：$\frac{1}{2}\sum_{n=-\infty}^{\infty}A_ne^{jn{\Omega}t}$|$\pi\sum_{n=-\infty}^{\infty}A_n\delta(\omega-n\Omega)$||
|
猴：$\delta_T(t)=\sum_{n=-\infty}^{\infty}\delta(t-nT)$|$\sum^\infty_{n=-\infty}e^{jnT\omega}=\Omega\delta_\Omega(\omega),\Omega=\frac{2\pi}{T}$||
|
鸡：$A(1-\frac{\|t\|}{\tau}),\|t\|\leq\frac{\tau}{2}$|$A{\tau}Sa^2(\frac{\tau}{2}\omega)$||
|
狗：$AG_{\tau}(t)=A,\|t\|\leq\frac{\tau}{2}$|$A{\tau}Sa(\frac{\tau}{2}\omega)$||
|
猪：$e^{-{\alpha}t}\epsilon(t),\alpha>0$|$\frac{1}{\alpha+j\omega}$|$\frac{1}{s+\alpha}$|
|
|$e^{-{\alpha}\|t\|}\epsilon(t),\alpha>0$|$\frac{2\alpha}{\alpha^2+\omega^2}$||
|
$e^{\alpha{t}}t^n\epsilon(t)$||$\frac{n!}{(s-\alpha)^{n+1}}$|
|
$\delta^{(n)}(t)$||$s^n$|
|
$v^k\epsilon(k)$|||$\frac{z}{z-v}$
|
$kv^{k-1}\epsilon(k)$|||$\frac{z}{(z-v)^2}$
|
$C^n_kv^{k-n}\epsilon(k)$|||$\frac{z}{(z-v)^{n+1}}$
|