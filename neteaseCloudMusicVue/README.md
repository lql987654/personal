# neteasevue

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


打包cordova项目
需要修改config下 index.js build下的assetsPublicPath为./
需要修改build下的utils.js 52行的注释

需要修改 src下的main.js 注释掉登录拦截部分 原因未知 但是打包后的文件 未写入登录cookie1信息 导致总拦截到登录页面

需要修改router文件 修改history模式为hash模式

需要修改service文件下的request.js文件 修改端口请求 这里需要调优

