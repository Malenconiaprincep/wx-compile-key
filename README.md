# WX Compile key

[![NPM](https://nodei.co/npm/wx-compile-key.png)](https://www.npmjs.com/package/wx-compile-key)

## 简介
这是一个微信小程序的辅助工具， 作用于gulp或者webpack, 在你使用第三方开发工具例如vscode的时候实现边开发边自动编译的效果[Gif成功样例](#成功样例)。

## 迭代版本
[1.0.3-快捷键编译](./readme/#1.0.3-快捷键编译.md) (已过期, 不推荐继续使用, 当前版本性能更佳)

## 目的
其实这一个只是gulp-wx-compile的插件之一， 目的很简单， 让微信小程序变得跟webpack或者gulp一样， 当我们保存自己的代码， 小程序就自动编译，
感觉跟browser sync一样， 提高我们开发效率。

## 思路
以前做过游戏脚本开发，所以尝试通过窗口句柄发送ctrl+b（默认微信小程序编译快捷键）来隐式编译， 但在非激活窗口状态下可以发送单个快捷键但
无法发送组合快捷键， 这样当我们边写代码边保存的时候由于需要激活微信窗口会导致失焦的问题，所以放弃这个最简单也最优无依赖的方式。如果有大大能解决， 欢迎给我留言。
后来偶然又读了一下源码, 发现另外一个简易的注入点, 原理很简单, 内部竟然引入了express的包, 你懂的, 那就充分利用, 改进了这个插件。

## 安装

```shell
npm i wx-compile-key -g

wx-compile-key  ##这句话必须要在管理员模式下执行， 因为微信小程序的文件都是限定了修改权限的
```

成功后会看到以下提示:

![alt tag](~resources/success.png)

然后打开/重启你的微信web开发者工具:

![alt tag](~resources/open-wx.png)

## Gulp 使用
```javascript
npm i wx-compile-key --save-dev

const autoCompileGulpTask = require('wx-compile-key').autoCompileGulpTask;

gulp.task(`wx:autoCompile`, autoCompileGulpTask);
```

在开发阶段， 顺便按一下gulp/webpack监听就可以自动修改代码自动编译微信小程序啦。

![alt tag](~resources/output.gif)

## Webpack Loader
(未测试，暂不公开)

## 环境
测试环境在**微信Web开发者工具0.9.092300, 0.10.101100, 0.10.101400**

> 兼容Windows

> 兼容Mac/Linux

## 测试用例
由于时间关系， 只是做了e2e测试， 后续有时间会补上单元测试。 问题应该不大， 如果遇到任何问题，
请open issue，我尽可能在当天给您解答，一下是所有的e2e测试用例截图：

## FAQ
说明wx-compile-key的命令已经使用过。

![alt tag](~resources/appended.png)

### 非法路径
输入不合法路劲时，弹出一下提示， 重新输入一个合法路劲即可。

![alt tag](~resources/invalid-path-01.png)

![alt tag](~resources/invalid-path-02.png)

### 路径不存在
路径输入正确，但并非微信小程序的根目录，重新定位目录即可。

![alt tag](~resources/not-exist-path.png)

## 反馈
由于微信小程序没有稳定，而且由于这只是一个辅助工具，并没有花太多时间去完善，部分功能没有用智能方式去获取。如果有任何bug欢迎留言。如果有什么定制功能需要我完善，也可以留言。

* 邮件: 529360897@qq.com

## Licensing
MIT license
