(window.webpackJsonp=window.webpackJsonp||[]).push([[278],{1791:function(e,t,a){"use strict";a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return u}));var b=a(0),c=a.n(b);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function O(e,t){if(null==e)return{};var a,b,c=function(e,t){if(null==e)return{};var a,b,c={},l=Object.keys(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||(c[a]=e[a]);return c}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(b=0;b<l.length;b++)a=l[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(c[a]=e[a])}return c}var j=c.a.createContext({}),d=function(e){var t=c.a.useContext(j),a=t;return e&&(a="function"==typeof e?e(t):r({},t,{},e)),a},i=function(e){var t=d(e.components);return c.a.createElement(j.Provider,{value:t},e.children)},o={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,l=e.originalType,n=e.parentName,j=O(e,["components","mdxType","originalType","parentName"]),i=d(a),p=b,u=i["".concat(n,".").concat(p)]||i[p]||o[p]||l;return a?c.a.createElement(u,r({ref:t},j,{components:a})):c.a.createElement(u,r({ref:t},j))}));function u(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var l=a.length,n=new Array(l);n[0]=p;var r={};for(var O in t)hasOwnProperty.call(t,O)&&(r[O]=t[O]);r.originalType=e,r.mdxType="string"==typeof e?e:b,n[1]=r;for(var j=2;j<l;j++)n[j]=a[j];return c.a.createElement.apply(null,n)}return c.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},418:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return n})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return O})),a.d(t,"default",(function(){return d}));var b=a(1),c=a(9),l=(a(0),a(1791)),n={title:"InterstitialAd",sidebar_label:"InterstitialAd"},r={id:"version-2.2.13/apis/ad/InterstitialAd",title:"InterstitialAd",description:"\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u662f\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6\uff0c\u5c42\u7ea7\u6bd4\u666e\u901a\u7ec4\u4ef6\u9ad8\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u6bcf\u6b21\u521b\u5efa\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5168\u65b0\u7684\u5b9e\u4f8b\uff08\u5c0f\u7a0b\u5e8f\u7aef\u7684\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u4f7f\u7528\uff09\uff0c\u9ed8\u8ba4\u662f\u9690\u85cf\u7684\uff0c\u9700\u8981\u8c03\u7528 InterstitialAd.show() \u5c06\u5176\u663e\u793a\u3002",source:"@site/versioned_docs/version-2.2.13/apis/ad/InterstitialAd.md",permalink:"/taro/docs/2.2.13/apis/ad/InterstitialAd",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.13/apis/ad/InterstitialAd.md",version:"2.2.13",sidebar_label:"InterstitialAd",sidebar:"version-2.2.13/API",previous:{title:"Taro.createInterstitialAd(option)",permalink:"/taro/docs/2.2.13/apis/ad/createInterstitialAd"},next:{title:"RewardedVideoAd",permalink:"/taro/docs/2.2.13/apis/ad/RewardedVideoAd"}},O=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"destroy",id:"destroy",children:[]},{value:"offClose",id:"offclose",children:[]},{value:"offError",id:"offerror",children:[]},{value:"offLoad",id:"offload",children:[]},{value:"onClose",id:"onclose",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onLoad",id:"onload",children:[]},{value:"load",id:"load",children:[]},{value:"show",id:"show",children:[]}]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"OffCloseCallback",id:"offclosecallback",children:[]},{value:"OffErrorCallback",id:"offerrorcallback",children:[]},{value:"OffLoadCallback",id:"offloadcallback",children:[]},{value:"OnCloseCallback",id:"onclosecallback",children:[]},{value:"OnErrorCallback",id:"onerrorcallback",children:[]},{value:"OnLoadCallback",id:"onloadcallback",children:[]},{value:"OnErrorCallbackResult",id:"onerrorcallbackresult",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-9",children:[]}],j={rightToc:O};function d(e){var t=e.components,a=Object(c.a)(e,["components"]);return Object(l.b)("wrapper",Object(b.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u662f\u4e00\u4e2a\u539f\u751f\u7ec4\u4ef6\uff0c\u5c42\u7ea7\u6bd4\u666e\u901a\u7ec4\u4ef6\u9ad8\u3002\u63d2\u5c4f\u5e7f\u544a\u7ec4\u4ef6\u6bcf\u6b21\u521b\u5efa\u90fd\u4f1a\u8fd4\u56de\u4e00\u4e2a\u5168\u65b0\u7684\u5b9e\u4f8b\uff08\u5c0f\u7a0b\u5e8f\u7aef\u7684\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u4f7f\u7528\uff09\uff0c\u9ed8\u8ba4\u662f\u9690\u85cf\u7684\uff0c\u9700\u8981\u8c03\u7528 InterstitialAd.show() \u5c06\u5176\u663e\u793a\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(l.b)("h3",{id:"destroy"},"destroy"),Object(l.b)("p",null,"\u9500\u6bc1\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.destroy.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => void\n")),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.destroy"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"offclose"},"offClose"),Object(l.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offClose.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffCloseCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OffCloseCallback"))))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.offClose"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"offerror"},"offError"),Object(l.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offError.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffErrorCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OffErrorCallback"))))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-2"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.offError"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"offload"},"offLoad"),Object(l.b)("p",null,"\u53d6\u6d88\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.offLoad.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OffLoadCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OffLoadCallback"))))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-3"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.offLoad"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"onclose"},"onClose"),Object(l.b)("p",null,"\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onClose.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnCloseCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OnCloseCallback"))))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-4"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.onClose"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"onerror"},"onError"),Object(l.b)("p",null,"\u76d1\u542c\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onError.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnErrorCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OnErrorCallback"))))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-5"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.onError"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"onload"},"onLoad"),Object(l.b)("p",null,"\u76d1\u542c\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.onLoad.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(callback: OnLoadCallback) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"callback"),Object(l.b)("td",null,Object(l.b)("code",null,"OnLoadCallback"))))),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-6"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.onLoad"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"load"},"load"),Object(l.b)("p",null,"\u52a0\u8f7d\u63d2\u5c4f\u5e7f\u544a\u3002"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.load.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => Promise<any>\n")),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-7"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.load"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h3",{id:"show"},"show"),Object(l.b)("p",null,"\u663e\u793a\u63d2\u5c4f\u5e7f\u544a\u3002"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"\u9519\u8bef\u7801\u4fe1\u606f\u8868")),Object(l.b)("p",null,"\u5982\u679c\u63d2\u5c4f\u5e7f\u544a\u663e\u793a\u5931\u8d25\uff0cInterstitialAd.show() \u65b9\u6cd5\u4f1a\u8fd4\u56de\u4e00\u4e2arejected Promise\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u83b7\u53d6\u5230\u9519\u8bef\u7801\u53ca\u5bf9\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u4ee3\u7801"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u5f02\u5e38\u60c5\u51b5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:null}),"\u7406\u7531"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2001"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u89e6\u53d1\u9891\u7387\u9650\u5236"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5c0f\u7a0b\u5e8f\u542f\u52a8\u4e00\u5b9a\u65f6\u95f4\u5185\u4e0d\u5141\u8bb8\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2002"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u89e6\u53d1\u9891\u7387\u9650\u5236"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8ddd\u79bb\u5c0f\u7a0b\u5e8f\u63d2\u5c4f\u5e7f\u544a\u6216\u8005\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u4e0a\u6b21\u64ad\u653e\u65f6\u95f4\u95f4\u9694\u4e0d\u8db3\uff0c\u4e0d\u5141\u8bb8\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2003"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u89e6\u53d1\u9891\u7387\u9650\u5236"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5f53\u524d\u6b63\u5728\u64ad\u653e\u6fc0\u52b1\u89c6\u9891\u5e7f\u544a\u6216\u8005\u63d2\u5c4f\u5e7f\u544a\uff0c\u4e0d\u5141\u8bb8\u518d\u6b21\u5c55\u793a\u63d2\u5c4f\u5e7f\u544a")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2004"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5e7f\u544a\u6e32\u67d3\u5931\u8d25"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u8be5\u9879\u9519\u8bef\u4e0d\u662f\u5f00\u53d1\u8005\u7684\u5f02\u5e38\u60c5\u51b5\uff0c\u6216\u56e0\u5c0f\u7a0b\u5e8f\u9875\u9762\u5207\u6362\u5bfc\u81f4\u5e7f\u544a\u6e32\u67d3\u5931\u8d25")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"2005"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u5e7f\u544a\u8c03\u7528\u5f02\u5e38"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:null}),"\u63d2\u5c4f\u5e7f\u544a\u5b9e\u4f8b\u4e0d\u5141\u8bb8\u8de8\u9875\u9762\u8c03\u7528")))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("a",Object(b.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/ad/InterstitialAd.show.html"}),"\u53c2\u8003\u6587\u6863"))),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"() => Promise<any>\n")),Object(l.b)("h4",{id:"api-\u652f\u6301\u5ea6-8"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.show"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))),Object(l.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(l.b)("h3",{id:"offclosecallback"},"OffCloseCallback"),Object(l.b)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"offerrorcallback"},"OffErrorCallback"),Object(l.b)("p",null,"\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"offloadcallback"},"OffLoadCallback"),Object(l.b)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"onclosecallback"},"OnCloseCallback"),Object(l.b)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u5173\u95ed\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"onerrorcallback"},"OnErrorCallback"),Object(l.b)("p",null,"\u63d2\u5c4f\u9519\u8bef\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(result: OnErrorCallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"result"),Object(l.b)("td",null,Object(l.b)("code",null,"OnErrorCallbackResult"))))),Object(l.b)("h3",{id:"onloadcallback"},"OnLoadCallback"),Object(l.b)("p",null,"\u63d2\u5c4f\u5e7f\u544a\u52a0\u8f7d\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570"),Object(l.b)("pre",null,Object(l.b)("code",Object(b.a)({parentName:"pre"},{className:"language-tsx"}),"(res: CallbackResult) => void\n")),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"res"),Object(l.b)("td",null,Object(l.b)("code",null,"CallbackResult"))))),Object(l.b)("h3",{id:"onerrorcallbackresult"},"OnErrorCallbackResult"),Object(l.b)("table",null,Object(l.b)("thead",null,Object(l.b)("tr",null,Object(l.b)("th",null,"\u53c2\u6570"),Object(l.b)("th",null,"\u7c7b\u578b"),Object(l.b)("th",null,"\u8bf4\u660e"))),Object(l.b)("tbody",null,Object(l.b)("tr",null,Object(l.b)("td",null,"errCode"),Object(l.b)("td",null,Object(l.b)("code",null,"1000 | 1001 | 1002 | 1003 | 1004 | 1005 | 1006 | 1007 | 1008")),Object(l.b)("td",null,"\u9519\u8bef\u7801",Object(l.b)("br",null),Object(l.b)("a",{href:"https://nervjs.github.io/taro/docs/apis/General#AdErrCode"},"\u53c2\u8003\u5730\u5740"))),Object(l.b)("tr",null,Object(l.b)("td",null,"errMsg"),Object(l.b)("td",null,Object(l.b)("code",null,"string")),Object(l.b)("td",null,"\u9519\u8bef\u4fe1\u606f")))),Object(l.b)("h2",{id:"api-\u652f\u6301\u5ea6-9"},"API \u652f\u6301\u5ea6"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"API"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"H5"),Object(l.b)("th",Object(b.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.destroy"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.offClose"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.offError"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.offLoad"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.onClose"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.onError"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.onLoad"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.load"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"InterstitialAd.show"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"})),Object(l.b)("td",Object(b.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);