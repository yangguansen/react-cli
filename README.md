BDH react脚手架

# npm start 或 yarn start
在开发模式下运行应用程序。 打开 http://localhost:3000 在浏览器中查看它。

如果你更改代码，页面将自动重新加载。 你将在控制台中看到构建错误和 lint 警告。

# npm test 或 yarn test
以交互模式运行测试观察程序。 默认情况下，运行与上次提交后更改的文件相关的测试。

# npm run build 或 yarn build
将生产环境的应用程序构建到 build 目录。 它能将 React 正确地打包为生产模式中并优化构建以获得最佳性能。

构建将被压缩，文件名中将包含哈希。

这样你的应用已准备好部署了。

##  项目结构
```
|-- project
    |-- build                            //打包成功的文件夹
    |-- config                          //  webpack配置
    |-- public                          //  公共资源    
    |-- scripts                         //  命令脚本
    |-- src
        |-- assets                      //  项目资源
        |-- pages                       //  模块页面
        |-- route                       //  路由
        |-- services                    //  请求服务
        |-- store                       //  数据共享
        |-- theme                       //  全局css变量
        |-- app                         //根模块

```
