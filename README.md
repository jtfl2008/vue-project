# e 拍项目简介

## 安装依赖

```
npm install
```

## 开发

```
npm run serve
```

## 打包

```
npm run build
```

## 代码格式整理

```
npm run lint
```

## 项目结构

```md
─ src
├── api # 接口封装
├── assets # 静态资源
├── components # 全局组件
├── config # 项目变量配置
├── mixins # 混入
├── utils # 工具方法
├── views # 页面
├── router # 路由配置
│ ├── index.js
├── store # 状态状态管理
│ ├── modules # 拆分模块
│ ├── index.js
├── App.vue
├── main.js
```

## components 文件夹中模块自动注册

## store/modules 文件夹中模块自动注册

## utils 文件夹可以新增自定义工具类

## api 调用格式

```javascript
async getList(){
  let params ={}
  let data = await this.$api.list.getList(params)
  this.list = data
}
```

## 项目依赖

- axios
- lodash 引用建议（import upperFirst from 'lodash/upperFirst'）
- vuex-persistedstate 数据状态本地化

## js 规范

- eslint

## css 规范

- 使用 bem 书写方式 (.xxx{} .xxx-item{} .xxx-item-active{})
- 使用组件命名空间 (.home{.xxx{}})

## 提交规范

feat：新功能（feature）
fix：修补 bug
docs：文档（documentation）
style： 格式（不影响代码运行的变动）
refactor：重构（即不是新增功能，也不是修改 bug 的代码变动）
test：增加测试
chore：构建过程或辅助工具的变动
merge：合并分支
perf：优化相关，比如提升性能、体验
revert：回滚到上一个版本
build：构建

## 自定义配置参考

See [Configuration Reference](https://cli.vuejs.org/config/).
