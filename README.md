Phaser Webpack
=================

### 说明
   demo内是Webpack4+Phaser框架+ES6语法的简单实现。 
   具体Phaser的学习还是参考[phaser 案例](http://phaser.io/examples)

### 运行

在根目录路径下， 运行node命令

```
    npm run dev // development
    npm run build // production
```

### 关于资源的打包说明

  资源的打包 需要使用webpack的 file-loader 和 url-loader
  在游戏内图片的引用可以通过 第三方插件 [phaser-manifest-loader](https://github.com/mattcolman/phaser-manifest-loader)