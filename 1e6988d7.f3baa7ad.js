(window.webpackJsonp=window.webpackJsonp||[]).push([[209],{1791:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):b({},t,{},e)),a},d=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),d=p(a),s=n,u=d["".concat(o,".").concat(s)]||d[s]||O[s]||c;return a?r.a.createElement(u,b({ref:t},i,{components:a})):r.a.createElement(u,b({ref:t},i))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,o=new Array(c);o[0]=s;var b={};for(var l in t)hasOwnProperty.call(t,l)&&(b[l]=t[l]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var i=2;i<c;i++)o[i]=a[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}s.displayName="MDXCreateElement"},349:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),c=(a(0),a(1791)),o={title:"CanvasGradient",sidebar_label:"CanvasGradient"},b={id:"apis/canvas/CanvasGradient",title:"CanvasGradient",description:"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 CanvasContext \u5bf9\u8c61",source:"@site/docs/apis/canvas/CanvasGradient.md",permalink:"/taro/docs/next/apis/canvas/CanvasGradient",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/canvas/CanvasGradient.md",version:"next",sidebar_label:"CanvasGradient",sidebar:"API",previous:{title:"CanvasContext",permalink:"/taro/docs/next/apis/canvas/CanvasContext"},next:{title:"Color",permalink:"/taro/docs/next/apis/canvas/Color"}},l=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"addColorStop",id:"addcolorstop",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],i={rightToc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u521b\u5efa canvas \u7684\u7ed8\u56fe\u4e0a\u4e0b\u6587 CanvasContext \u5bf9\u8c61"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(c.b)("h3",{id:"addcolorstop"},"addColorStop"),Object(c.b)("p",null,"\u6dfb\u52a0\u989c\u8272\u7684\u6e10\u53d8\u70b9\u3002\u5c0f\u4e8e\u6700\u5c0f stop \u7684\u90e8\u5206\u4f1a\u6309\u6700\u5c0f stop \u7684 color \u6765\u6e32\u67d3\uff0c\u5927\u4e8e\u6700\u5927 stop \u7684\u90e8\u5206\u4f1a\u6309\u6700\u5927 stop \u7684 color \u6765\u6e32\u67d3"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/CanvasGradient.addColorStop.html"}),"\u53c2\u8003\u6587\u6863"))),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"(stop: number, color: string) => void\n")),Object(c.b)("table",null,Object(c.b)("thead",null,Object(c.b)("tr",null,Object(c.b)("th",null,"\u53c2\u6570"),Object(c.b)("th",null,"\u7c7b\u578b"),Object(c.b)("th",null,"\u8bf4\u660e"))),Object(c.b)("tbody",null,Object(c.b)("tr",null,Object(c.b)("td",null,"stop"),Object(c.b)("td",null,Object(c.b)("code",null,"number")),Object(c.b)("td",null,"\u8868\u793a\u6e10\u53d8\u4e2d\u5f00\u59cb\u4e0e\u7ed3\u675f\u4e4b\u95f4\u7684\u4f4d\u7f6e\uff0c\u8303\u56f4 0-1\u3002")),Object(c.b)("tr",null,Object(c.b)("td",null,"color"),Object(c.b)("td",null,Object(c.b)("code",null,"string")),Object(c.b)("td",null,"\u6e10\u53d8\u70b9\u7684\u989c\u8272\u3002")))),Object(c.b)("h4",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-tsx"}),"const ctx = Taro.createCanvasContext('myCanvas')\n// Create circular gradient\nconst grd = ctx.createLinearGradient(30, 10, 120, 10)\ngrd.addColorStop(0, 'red')\ngrd.addColorStop(0.16, 'orange')\ngrd.addColorStop(0.33, 'yellow')\ngrd.addColorStop(0.5, 'green')\ngrd.addColorStop(0.66, 'cyan')\ngrd.addColorStop(0.83, 'blue')\ngrd.addColorStop(1, 'purple')\n// Fill with gradient\nctx.setFillStyle(grd)\nctx.fillRect(10, 10, 150, 80)\nctx.draw()\n")),Object(c.b)("h4",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CanvasGradient.addColorStop"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))),Object(c.b)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"CanvasGradient.addColorStop"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}))))))}p.isMDXComponent=!0}}]);