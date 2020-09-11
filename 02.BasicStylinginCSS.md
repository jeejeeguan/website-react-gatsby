# BasicStylinginCSS

编写基础 CSS 样式代码

## 1.使用 [Google Fonts](https://fonts.google.com/) 字体

Google Fonts 是 Google 的一个免费开源字体库，设计师人手必备。

引入到网页有两种方式：<link>标签和 CSS @import，我选择的是第二种 CSS 引入的方式，以 PT Mono 这个字体为例，CSS 源码示例如下：

```
@import url("https://fonts.googleapis.com/css2?family=PT+Mono&display=swap");

* {
  font-family: "PT Mono", monospace;
}
```

## 2.CSS 中 background-size 设置背景图片大小

在保持原有比例的前提下，通常采用下面两种

```
background-size:contain;
background-repeat:no-repeat;
```

```
background-size:cover;
```

二者的区别对应到设计图上应该是这样：

![](./md-images/background-size.png)

## 问题与解决问题

#### 1.今天频繁的遇到 package.json 文件报警，但不知道什么原因

**解决：** 打开 VS Code 的 setting.json 文件，添加以下代码，保存即可解决

` "http.proxyAuthorization": "false"`

#### 2.GitHub 上的同一个 gatsby 项目在不同电脑上 coding 遇到的缺少依赖无法运行项目的问题

**解决：** 在缺少依赖的项目终端下运行以下代码补充依赖，即可解决

`npm install`
