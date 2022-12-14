const path = require('path');

module.exports = {
    mode: 'development', // 开发模式,打包更加快速,省了代码优化步骤
    devtool: 'eval-cheap-module-source-map', // 源码调试模式,后面会讲
    devServer: {
        port: 3000, // 服务端口号
        compress: false, // gzip压缩,开发环境不开启,提升热更新速度
        hot: true, // 开启热更新，后面会讲react模块热替换具体配置
        historyApiFallback: true, // 解决history路由404问题
        static: {
            directory: path.join(__dirname, '../public') // 托管静态资源public文件夹
        },
        proxy: {
            // 代理转发
            // /api/users
            // http://localhost:4000/api/users
            // https://api.github.com/api/users
            '/api': {
                target: 'https://api.github.com',
                pathRewrite: { '^/api': '' }, // http://localhost:8080/api/users -> https://api.github.com/users
                changeOrigin: true // 修改host为代理的
            }
        }
    }
};
