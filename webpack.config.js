//webpack 是node写出来的node的写法
let path = require("path"); //path是node内置的核心模块  不需要安装
let HtmlWebpackPlugin = require("html-webpack-plugin"); //yarn add html-webpack-plugin -D
module.exports = {
    devServer: {
        //开发服务器的的配置  也可以不设置用默认设置8080
        port: 3000,
        progress: true,
        contentBase: "./build",
        compress: true,
    },
    mode: "development", //模式 默认2种模式: production development
    entry: "./src/index.js", //入口文件
    output: {
        //出口
        //filename:'bundle.js',//打包后的文件名
        filename: "bundle[hash:8].js", //打包后的文件名
        path: path.resolve(__dirname, "build"), //路径必须是一个绝对路径  __dirname以当前目录为路径产生一个dist文件
    },
    plugins: [
        //放所有的webpack plugin插件
        new HtmlWebpackPlugin({
            template: "./src/index.html", //让打包后在build文件下自动生成index.html模版
            filename: "index.html",
            minify: {
                removeAttributeQuotes: true, //删除模版index.html中的双引号
                collapseWhitespace: true, //一行
            },
            hash: true, //哈希时间戳  文件后<script src=bundle.js?451c9f280ac8a6e84ad9></script>
        }),
    ],
    module: {
        //模块
        //loader
        rules: [
            //规则 css-loader  解析@import这种语法
            //style-loader 把css插入到heade的标签中
            //loader的特点 希望打你
            //loader的用法 字符串只用一个loader
            //多个loader需要用[]
            //loader的顺序 默认是从右向左
            //loader还可以写出对象形式
            {
                // test:/\.css$/,use:'css-loader'  //字符串
                // test:/\.css$/,use:['css-loader'],//数组形式
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader",
                        options:{
                          // insertAt:'top'
                        }
                    },
                    "css-loader",
                ], //对象形式
            },
            {
              test:/\.less$/,
              use:[
                {
                  loader:'style-loader'
                }
              ]
            }
        ],
    },
};
