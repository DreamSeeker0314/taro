(window.webpackJsonp=window.webpackJsonp||[]).push([[1457],{1593:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return u}));var l=n(1),b=n(9),c=(n(0),n(1791)),r={title:"Taro.getImageInfo(option)",sidebar_label:"getImageInfo"},a={id:"version-2.2.13/apis/media/image/getImageInfo",title:"Taro.getImageInfo(option)",description:"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002",source:"@site/versioned_docs/version-2.2.13/apis/media/image/getImageInfo.md",permalink:"/taro/docs/2.2.13/apis/media/image/getImageInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.2.13/apis/media/image/getImageInfo.md",version:"2.2.13",sidebar_label:"getImageInfo",sidebar:"version-2.2.13/API",previous:{title:"Taro.previewImage(option)",permalink:"/taro/docs/2.2.13/apis/media/image/previewImage"},next:{title:"Taro.compressImage(option)",permalink:"/taro/docs/2.2.13/apis/media/image/compressImage"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"orientation",id:"orientation",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],i={rightToc:o};function u(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(c.b)("wrapper",Object(l.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6\u56fe\u7247\u4fe1\u606f\u3002\u7f51\u7edc\u56fe\u7247\u9700\u5148\u914d\u7f6edownload\u57df\u540d\u624d\u80fd\u751f\u6548\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(l.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/image/wx.getImageInfo.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"(option: Option) => Promise<SuccessCallbackResult>\n")),Object(c.b)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),Object(c.b)("h3",{id:"option"},"Option"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"src"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}},"\u662f"),Object(c.b)("td",null,"\u56fe\u7247\u7684\u8def\u5f84\uff0c\u53ef\u4ee5\u662f\u76f8\u5bf9\u8def\u5f84\u3001\u4e34\u65f6\u6587\u4ef6\u8def\u5f84\u3001\u5b58\u50a8\u6587\u4ef6\u8def\u5f84\u3001\u7f51\u7edc\u56fe\u7247\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"complete"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),Object(c.b)("tr",null,Object(c.b)("td",null,"fail"),Object(c.b)("td",null,Object(c.b)("code",null,"(res: CallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),Object(c.b)("tr",null,Object(c.b)("td",null,"success"),Object(c.b)("td",null,Object(c.b)("code",null,"(result: SuccessCallbackResult) => void")),Object(c.b)("td",{style:{textAlign:"center"}},"\u5426"),Object(c.b)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),Object(c.b)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"height"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",null,"\u56fe\u7247\u539f\u59cb\u9ad8\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"orientation"),Object(c.b)("td",null,Object(c.b)("code",null,'"up" | "up-mirrored" | "down" | "down-mirrored" | "left-mirrored" | "right" | "right-mirrored" | "left"')),Object(c.b)("td",{style:{textAlign:"center"}},Object(c.b)("code",null,'"up"')),Object(c.b)("td",null,Object(c.b)("a",{href:"https://sylvana.net/jpegcrop/exif_orientation.html"},"\u62cd\u7167\u65f6\u8bbe\u5907\u65b9\u5411"))),Object(c.b)("tr",null,Object(c.b)("td",null,"path"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",null,"\u56fe\u7247\u7684\u672c\u5730\u8def\u5f84")),Object(c.b)("tr",null,Object(c.b)("td",null,"type"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",null,"\u56fe\u7247\u683c\u5f0f")),Object(c.b)("tr",null,Object(c.b)("td",null,"width"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",null,"\u56fe\u7247\u539f\u59cb\u5bbd\u5ea6\uff0c\u5355\u4f4dpx\u3002\u4e0d\u8003\u8651\u65cb\u8f6c\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"errMsg"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",{style:{textAlign:"center"}}),Object(c.b)("td",null,"\u8c03\u7528\u7ed3\u679c")))),Object(c.b)("h3",{id:"orientation"},"orientation"),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"up"),Object(c.b)("td",null,"\u9ed8\u8ba4\u65b9\u5411\uff08\u624b\u673a\u6a2a\u6301\u62cd\u7167\uff09\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 1\u3002\u6216\u65e0 orientation \u4fe1\u606f\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"up-mirrored"),Object(c.b)("td",null,"\u540c up\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 2")),Object(c.b)("tr",null,Object(c.b)("td",null,"down"),Object(c.b)("td",null,"\u65cb\u8f6c180\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 3")),Object(c.b)("tr",null,Object(c.b)("td",null,"down-mirrored"),Object(c.b)("td",null,"\u540c down\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 4")),Object(c.b)("tr",null,Object(c.b)("td",null,"left-mirrored"),Object(c.b)("td",null,"\u540c left\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 5")),Object(c.b)("tr",null,Object(c.b)("td",null,"right"),Object(c.b)("td",null,"\u987a\u65f6\u9488\u65cb\u8f6c90\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 6")),Object(c.b)("tr",null,Object(c.b)("td",null,"right-mirrored"),Object(c.b)("td",null,"\u540c right\uff0c\u4f46\u955c\u50cf\u7ffb\u8f6c\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 7")),Object(c.b)("tr",null,Object(c.b)("td",null,"left"),Object(c.b)("td",null,"\u9006\u65f6\u9488\u65cb\u8f6c90\u5ea6\uff0c\u5bf9\u5e94 Exif \u4e2d\u7684 8")))),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(l.a)({parentName:"pre"},{className:"language-tsx"}),"Taro.getImageInfo({\n  src: 'images/a.jpg',\n  success: function (res) {\n    console.log(res.width)\n    console.log(res.height)\n  }\n})\nTaro.chooseImage({\n  success: function (res) {\n    Taro.getImageInfo({\n      src: res.tempFilePaths[0],\n      success: function (res) {\n        console.log(res.width)\n        console.log(res.height)\n      }\n    })\n  }\n})\n")),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(l.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"Taro.getImageInfo"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(l.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f")))))}u.isMDXComponent=!0},1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return O})),n.d(t,"b",(function(){return s}));var l=n(0),b=n.n(l);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,b=function(e,t){if(null==e)return{};var n,l,b={},c=Object.keys(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(l=0;l<c.length;l++)n=c[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var i=b.a.createContext({}),u=function(e){var t=b.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},O=function(e){var t=u(e.components);return b.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=Object(l.forwardRef)((function(e,t){var n=e.components,l=e.mdxType,c=e.originalType,r=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),O=u(n),j=l,s=O["".concat(r,".").concat(j)]||O[j]||d[j]||c;return n?b.a.createElement(s,a({ref:t},i,{components:n})):b.a.createElement(s,a({ref:t},i))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var c=n.length,r=new Array(c);r[0]=j;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,r[1]=a;for(var i=2;i<c;i++)r[i]=n[i];return b.a.createElement.apply(null,r)}return b.a.createElement.apply(null,n)}j.displayName="MDXCreateElement"}}]);