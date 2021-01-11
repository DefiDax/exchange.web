# ipex-exchange-web

#### 介绍
IPEX数字资产交易平台主要针对数字资产与数字资产之间的交易，利用撮合机制包括限价交易、市价交易，为用户打造高速的数字资产交易，同时将交易过程记录在区块链上。功能成熟、应用广泛的数字资产交易系统，强大的内存撮合引擎保证高并发量交易支持，包含完善的前后台系统，提供配套中心化钱包，系统安全稳定，可保障平台和用户双方的隐私安全、系统安全和资产安全。支持策略委托，支持国际化。目前系统支持USDT、ETH、BTC等当前多种主流的数字货币交易。可以实现基础的交易所功能，钱包转入转出功能等。采用REST用于数据实时查询和分析，快速处理大规模的交易数据；同时采用Node+Soketio来进行数据的实时推送，用户随时掌握最新交易情况。 本平台系统功能丰富，强大实用。特有的全接口化的快速充值、提现、充币、提币功能为客户提供最便捷的资金转账手段。深入磨合安全可靠的限价、市价两种交易模式，多种交易模式自由组合完全覆盖用户的需求。

#### 软件架构
整体架构图

![输入图片说明](https://images.gitee.com/uploads/images/2020/0327/123259_633bae53_476193.png "屏幕截图.png")


项目目录结构

├── README.md

├── build                   # build 脚本

├── config                  # prod/dev build config 文件


├── index.html              # 最基础的网页

├── package.json

├── src                     # Vue.js 核心业务

│   ├── App.vue             # App Root Component

│   ├── api                 # 接入后端服务的基础 API

│   ├── assets              # 静态文件

│   ├── components          # 组件

│   ├── event-bus           # Event Bus 事件总线，类似 EventEmitter

│   ├── main.js             # Vue 入口文件

│   ├── router              # 路由

│   ├── service             # 服务

│   ├── store               # Vuex 状态管理

│   ├── util                # 通用 utility，directive, mixin 还有绑定到 Vue.prototype 的函数

│   └── view                # 各个页面

├── static                  # DevServer 静态文件

└── test                    # 测试



### 试用

*登录地址: https://ipex.turbochain.ai/

主要功能说明

1.币币交易系统

币币交易系统主要针对数字资产与数字资产之间的交易，利用撮合机制包括限价交易、市价交易，为用户打造高速的数字资产交易，同时将交易过程记录在区块链上。功能成熟、应用广泛的数字资产交易系统，强大的内存撮合引擎保证高并发量交易支持，包含完善的前后台系统，提供配套中心化钱包，系统安全稳定，可保障平台和用户双方的隐私安全、系统安全和资产安全。支持策略委托，支持国际化。

2.场外交易系统

个人对个人的一种数字资产交易形式，而平台只作为中间的担保方。不接手资金进行交易。其主要作用也就是数字资产交易世界的出入口，打通与其他产品的用户账户体系，方便用户用法币购买数字资产或将手中资产随时变现。严格的用户安全认证和反洗钱策略，保障运营方和用户的账户安全。

3. 个人中心

个人中心有四个小模块：账户管理、资产管理、币币管理、法币管理。登录后，点击页面右上角的个人中心，进入个人中心页面。

4. 其他
- 数字货币的资产管理、快速转账功能；
- 数字交易平台支持多租户Sass
- 支持多账户资金划转(币币账户、法币账户、借贷账户等)
- 支持多种主流货币BTC、ETH、ERC20、EOS、USDT、ETE、PWR、IPEX代币等
- 支持多语言


### 运行环境
- NodeJs,Chrome

### 部署环境

<p align="left">
 <div id="buttons">
<img src="./assets/windows.png" width="40" margin="10"/>
Windows
</div>
  <div id="buttons">
<img src="./assets/macos.png" width="40" margin="10"/>
 MacO
</div>
  <div id="buttons">
<img src="./assets/linux.png" width="40" margin="10"/>
Ubuntu
</div>
</p>


### 版权声明
本软件使用 GPL3.0 协议，请严格遵照协议内容!

### 合作及联系
- QQ交流群: 421667208

- 联系邮箱：daizhihao@turbochain.ai
<img src="./assets/qq.png" width="300" />


### End
