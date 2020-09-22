# 04-InteractionsandAnimations

使用关键帧的时间轴动画

## 1.CSS3 动画属性 transition

保险做法是把 transition 写在 CSS 选在器上，而不是 :hover 上，示例：

```
.selector{
/* transition 这句代码是从 jaylee 官网抄的 */
  transition: 0.6s all cubic-bezier(0.23, 1.25, 0.46, 1);
}
```
