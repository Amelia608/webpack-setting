//webpack 是node写出来的node的写法
let path=require('path');//path是node内置的核心模块  不需要安装
module.exports={
  mode:'development',//模式 默认2种模式: production development
  entry:'./src/index.js',//入口文件
  output:{//出口
    filename:'bundle.js',//打包后的文件名
    path:path.resolve(__dirname,'dist'),//路径必须是一个绝对路径  __dirname以当前目录为路径产生一个dist文件
  }
}