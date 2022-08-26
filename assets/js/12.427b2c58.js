(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{522:function(t,a,r){"use strict";r.r(a);var e=r(2),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("Boxx",{attrs:{type:"tip",title:"佚名",content:"勇敢不是不害怕，而是害怕的时候你还能坚持去做"}}),t._v(" "),r("h2",{attrs:{id:"前言背景"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#前言背景"}},[t._v("#")]),t._v(" 前言背景")]),t._v(" "),r("p",[t._v("由于支付宝内部接口升级，我们系统原先使用的相关业务接口也需要同步升级。之前的 H5 已经不能满足目前的需求方，所以我们内部也计划升级该 H5 到小程序。本次升级主要是用到支付宝行业学生认证插件，及活动使用图片根据不同活动可配置化。目前活动配置访问支持两种方式:")]),t._v(" "),r("ul",[r("li",[t._v("通过带参码/链接访问指定活动。")]),t._v(" "),r("li",[t._v("通用链接访问。由服务端根据当前请求时间动态获取配置活动信息，如: 5 月份有普通活动，5 月假期活动，当此次请求时间命中该活动时间范围时就返回该活动的配置信息。")])]),t._v(" "),r("div",{staticClass:"custom-block theorem"},[r("p",{staticClass:"title"},[t._v("开发流程及相关问题")]),r("h3",{attrs:{id:"开发前准备"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发前准备"}},[t._v("#")]),t._v(" 开发前准备")]),t._v(" "),r("p",[t._v("1.下载最新稳定版"),r("a",{attrs:{href:"https://render.alipay.com/p/f/fd-jwq8nu2a/pages/home/index.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("开发者工具"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("2.申请小程序开发者权限")]),t._v(" "),r("p",[t._v("3.订购校园身份信息插件"),r("a",{attrs:{href:"https://nengli.alipay.com/abilityprod/detail?abilityCode=PL002020080500013334",target:"_blank",rel:"noopener noreferrer"}},[t._v("行业学生认证插件"),r("OutboundLink")],1)]),t._v(" "),r("p",[t._v("4.查看该插件的使用文档"),r("a",{attrs:{href:"https://opendocs.alipay.com/pre-open/01ekr0",target:"_blank",rel:"noopener noreferrer"}},[t._v("校园身份信息插件集成方案"),r("OutboundLink")],1)]),t._v(" "),r("h3",{attrs:{id:"开发中遇到的问题"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#开发中遇到的问题"}},[t._v("#")]),t._v(" 开发中遇到的问题")]),t._v(" "),r("p",[t._v("开发者工具关联小程序后，按文档描述尝试调试行业学生认证插件的相关方法，控制台直接报错。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cyi113.oss-cn-shanghai.aliyuncs.com/ali/error03101.png",alt:"error"}})]),t._v(" "),r("p",[t._v("(: 后续排查该问题是由开发者工具版本问题导致的。解决上述问题后继续调试。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cyi113.oss-cn-shanghai.aliyuncs.com/ali/error03103.png",alt:"error"}})]),t._v(" "),r("p",[t._v("因吹斯挺 😃 踩过一个坑还有另一个坑在眼前。查阅支付宝开发文档相关信息，确定该问题需要支付宝侧关联当前 AppID(订购插件后让对方关联)。对方关联后，经过调试可以看到已经可以正常拿到相关参数了。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://cyi113.oss-cn-shanghai.aliyuncs.com/ali/error03102.png",alt:"error"}})])]),r("div",{staticClass:"custom-block danger"},[r("h4",{attrs:{id:"注意事项"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),r("p",[t._v("1.在管理中心需先配置好 request 请求白名单，再设置上传代码的体验版，否则扫体验版会出现异常。")]),t._v(" "),r("p",[t._v("2.使用 webview 时，需要在配置完 h5 域名白名单后再次设置一下体验版，不然不起作用。")]),t._v(" "),r("p",[t._v("3.跳转其他小程序，a> 同主体直接可以跳转。b>非同主体，需要在目标小程序管理后台添加跳转限制（允许所有/指定）。")]),t._v(" "),r("p",[t._v("4.行业学生认证有两种，学信网和大数据认证。区别是大数据认证需要上传学生证。学信网需要报备(由支付宝侧支持解决)。")])]),t._v(" "),r("h2",{attrs:{id:"更新"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#更新"}},[t._v("#")]),t._v(" 更新")]),t._v(" "),r("ul",[r("li",[t._v("支付宝内部渠道配置通用链接。不能使用支付宝后台二维码转码后的链接，否则会先打开一个 h5 中间页，后进入小程序，严重影响体验。")])]),t._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[t._v("alipays://platformapi/startapp?appId=xxx\n")])])]),r("ul",[r("li",[t._v("学信网认证信息，延毕、休学、当兵、支教等，可能预计毕业日期不会更新，但学籍仍在籍（未毕业）。所以产品侧需考虑判定的纬度: 预计毕业日期？学籍状态？")])]),t._v(" "),r("h2",{attrs:{id:"end"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#end"}},[t._v("#")]),t._v(" END")])],1)}),[],!1,null,null,null);a.default=s.exports}}]);