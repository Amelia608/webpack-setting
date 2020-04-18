//webpack 是node写出来的node的写法
let path=require('path');//path是node内置的核心模块  不需要安装
let  HtmlWebpackPlugin=require('html-webpack-plugin');//yarn add html-webpack-plugin -D
module.exports={
  devServer:{//开发服务器的的配置
    port:3000,
    progress:true,
    contentBase:'./build',
    compress:true
  },
  mode:'development',//模式 默认2种模式: production development
  entry:'./src/index.js',//入口文件
  output:{//出口
    //filename:'bundle.js',//打包后的文件名
    filename:'bundle[hash:8].js',//打包后的文件名
    path:path.resolve(__dirname,'build'),//路径必须是一个绝对路径  __dirname以当前目录为路径产生一个dist文件
  },
  plugins:[//放所有的webpack plugin插件
    new HtmlWebpackPlugin({
      template:'./src/index.html',//让打包后在build文件下自动生成index.html模版
      filename:'index.html',
      minify:{
        removeAttributeQuotes:true,//删除模版index.html中的双引号
        collapseWhitespace:true,//一行
      },
      hash:true,//哈希时间戳  文件后<script src=bundle.js?451c9f280ac8a6e84ad9></script>
    })
  ]

  
}