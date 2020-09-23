# 04-InteractionsandAnimations

使用关键帧的时间轴动画

```
.KeyframesAnimation {
  /* animation: HeroAnimation;
  animation-duration: 3s;
  animation-delay: 0.2s;
  animation-fill-mode: forwards;
  animation-timing-function: cubic-bezier(0.2, 0.8, 0.2, 1); */

  /* 上面 5 句可以简写成下面的，但要保证顺序 */
  animation: HeroAnimation 3s 0.2s forwards cubic-bezier(0.2, 0.8, 0.2, 1);
}

@keyframes HeroAnimation {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

```
