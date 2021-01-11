export default {
    common: {
        area: '/uc/uc/support/country'
    },
    uc: { //会员中心接口
        login: '/uc/uc/login',
        check: '/uc/uc/check',
        register: '/uc/uc/register',
        wallet: '/uc/uc/asset/wallet/',
        captcha: '/uc/uc/start/captcha',
        identification: '/uc/uc/approve/certified/business/status', //商家认证
        apply: '/uc/uc/approve/certified/business/apply', //商家认证申请
        announcement: '/uc/uc/announcement/page', //公告列表
        paydividends: "/uc/uc/bonus/user/page", //持币分红
        mylistrecord: "/uc/uc/mine/detail/", //交易挖矿详情
        cnyrate: '/uc/uc/coin/cny-rate/',
        advertise: "/uc/uc/ancillary/system/advertise",
        help: "/uc/uc/ancillary/more/help",
        helpPage: "/uc/uc/ancillary/more/help/page",
        helpDetail: "/uc/uc/ancillary/more/help/detail",
        helpTop: "/uc/uc/ancillary/more/help/page/top",
        securitySetting: "/uc/uc/approve/security/setting",
        loginout: "/uc/uc/loginout",
		checkLogin: "/uc/uc/check/login",
		logout: "/uc/uc/logout",
		resetEmailCode: "/uc/uc/reset/email/code",
		resetLoginPassword: "/uc/uc/reset/login/password",
		uploadfastdfsimage: "/uc/uc/upload/fastdfs/image",
		approvecancelbusiness: "/uc/uc/approve/cancel/business",
		businessauthdepositlist: "/uc/uc/approve/business-auth-deposit/list",
		announcement: "/uc/uc/announcement/more",
		accountSetting: "/uc/uc/approve/account/setting",
		approveupdatebank: '/uc/uc/approve/update/bank',
		approvebindbank: '/uc/uc/approve/bind/bank',
		approveupdateali: '/uc/uc/approve/update/ali',
		approvebindali: '/uc/uc/approve/bind/ali',
		transactionall: '/uc/uc/asset/transaction/all',
		assetwallet: "/uc/uc/legal-currency/asset/wallet",
		assetcoin: '/uc/uc/legal-currency/asset/coin',
		assettransfer: "/uc/uc/legal-currency/asset/transfer",
		coininfo: "/uc/uc/withdraw/support/coin/info",
		recordpage: "/uc/uc/transfer-self/record/page",
		matchcheck:"/uc/uc/asset/wallet/match-check",
		walletmatch:"/uc/uc/asset/wallet/match",
		walletresetaddress: "/uc/uc/asset/wallet/reset-address",
		updateuserName: '/uc/uc/approve/update/userName',
		approverealname: '/uc/uc/approve/real/name',
		approvebindemail: '/uc/uc/approve/bind/email',
		approveupdatepassword: '/uc/uc/approve/update/password',
		updatetransactionpassword: '/uc/uc/approve/update/transaction/password',
		approvetransactionpassword: '/uc/uc/approve/transaction/password',
		resettransactionpassword: '/uc/uc/approve/reset/transaction/password',
		bindemailcode: '/uc/uc/bind/email/code',
		emailupdatepasswordcode:"/uc/uc/email/update/password/code",
		emailtransactioncode: '/uc/uc/email/transaction/code',
		emailexangetransfercode: '/uc/uc/email/exange/transfer/code',
		exangeassettransfer: '/uc/uc/exange/asset/transfer',
		exangeassetwallet: '/uc/uc/exange/asset/wallet',
		transferotherrecordpage: '/uc/uc/transfer-other/record/page',
		emailwithdrawcode: '/uc/uc/email/withdraw/code',
		withdrawapplycode: '/uc/uc/withdraw/apply/code',
		withdrawrecord: '/uc/uc/withdraw/record',
		withdrawaddresspage: '/uc/uc/withdraw/address/page',
		emailwithdrawaddresscode: '/uc/uc/email/withdraw/address/code',
   		withdrawaddressdelete: '/uc/uc/withdraw/address/delete',
   		withdrawaddressadd: '/uc/uc/withdraw/address/add',
   		emailcode: '/uc/uc/email/code',
   		registeremail: '/uc/uc/register/email',
   		emaillogincode: '/uc/uc/email/login/code',
   		emailloginsuccesscode: '/uc/uc/email/login/success/code',
    },
    market: { //币币交易行情接口
        market: "/market/market",
        ws: '/marketws/market-ws',
        thumb: '/market/market/symbol-thumb',
        thumbTrend: '/market/market/symbol-thumb-trend',
        plate: '/market/market/exchange-plate', //主动查询的盘口信息
        platemini: '/market/market/exchange-plate-mini', //获取10条数据
        platefull: '/market/market/exchange-plate-full', //获取所有数据
        trade: '/market/market/latest-trade', //主动查询的实时成交信息
        symbolInfo: '/market/market/symbol-info',
		indexData: "/market/market/index_info",
		baseSymbols: "/market/market/base-symbols",
		getSymbolsThumb: '/market/market/get-symbols-thumb', //查询自选
		cnyRateList: "/market/market/cny-rate/list",
		usdCny:"/market/market/exchange-rate/usd-cny",
    },
    exchange: { //币币交易委托提交与查询接口
        orderAdd: '/exchange-api/exchange/order/add', //提交订单接口
        current: '/exchange-api/exchange/order/current', //当前委托接口
        history: '/exchange-api/exchange/order/history', //历史委托接口
        detail: '/exchange-api/exchange/order/detail/', //详细订单接口
        favorFind: '/exchange-api/exchange/favor/find', //查询自选
        favorAdd: '/exchange-api/exchange/favor/add', //添加自选
        favorDelete: '/exchange-api/exchange/favor/delete', //删除自选
        orderCancel: '/exchange-api/exchange/order/cancel', //取消委托
        orderpersonalcurrent: '/exchange-api/exchange/order/personal/current',
    	orderpersonalhistory: "/exchange-api/exchange/order/personal/history",

    },
    otc: {
        coin: '/otc/otc/coin/all', //查询支持的币种
        advertise: '/otc/otc/advertise/page-by-unit', //获取广告
        createAd: '/uc/uc/ad/create', //创建广告
        adDetail: '/otc/otc/advertise/detail',
        advertisePage: '/otc/otc/advertise/page',
        advertiseAll: '/otc/otc/advertise/all',
        ordersell: "/otc/otc/order/sell",
        buy: "/otc/otc/order/buy",
        orderpre: "/otc/otc/order/pre",
        member: "/otc/otc/advertise/member",
        create: "/otc/otc/advertise/create",
        update: "/otc/otc/advertise/update",
        onshelves: "/otc/otc/advertise/on/shelves",
        offshelves: "/otc/otc/advertise/off/shelves",
        delete: "/otc/otc/advertise/delete",
        self: "/otc/otc/order/self",
    }
}
