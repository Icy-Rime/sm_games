# SM游戏引擎

## 简介

这个网页应用是为了满足自己的各种奇怪性癖而编写的。目前只是个简单的交互式文本显示工具。

## 添加新游戏

* 在 `games` 文件夹下新建 `游戏名.js` 脚本，导出一个默认的方法。
* 在 `main.js` 文件中导入 `游戏名.js` 脚本，并添加到 `mapAndExecuteGameModule` 函数。
* 在 `index.html` 中添加游戏链接。

## 使用外部游戏

访问 `/static/player.html?entry=外部游戏API入口` 即可使用外部游戏。

游戏API接口定义如下:

```text
游戏API接口需要支持CORS跨域访问
请求方法: POST
请求参数: 一个 GameContextSend 序列化的JSON对象
返回数据: 一个 GameContextRecive 序列化的JSON对象
```

游戏流程:

* 客户端向API发送 `GameContextSend.action = -1` 表示新游戏开始。
* API返回 `GameContextRecive` 对象，其中定义了客户端需要显示的内容，以及一些选项
* 客户端显示内容和选项，并等待用户选择任意选项
* 客户端向API发送 `GameContextSend.action = 用户选择的选项序列编号(从0开始)`
* API返回 `GameContextRecive` 对象
* ......

## 许可证

CC-NC-SA

<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
