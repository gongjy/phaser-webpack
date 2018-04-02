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

### 资源打包
1. 使用静态路径，指定文件路径。
2. 使用webpack的file-loader和url-loader，在游戏内资源的引用可以通过第三方插件 [phaser-manifest-loader](https://github.com/mattcolman/phaser-manifest-loader)