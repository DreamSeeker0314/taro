(window.webpackJsonp=window.webpackJsonp||[]).push([[703],{1791:function(e,t,r){"use strict";r.d(t,"a",(function(){return O})),r.d(t,"b",(function(){return s}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function b(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?b(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=n.a.createContext({}),d=function(e){var t=n.a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},O=function(e){var t=d(e.components);return n.a.createElement(o.Provider,{value:t},e.children)},j={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),O=d(r),p=a,s=O["".concat(b,".").concat(p)]||O[p]||j[p]||c;return r?n.a.createElement(s,l({ref:t},o,{components:r})):n.a.createElement(s,l({ref:t},o))}));function s(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,b=new Array(c);b[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,b[1]=l;for(var o=2;o<c;o++)b[o]=r[o];return n.a.createElement.apply(null,b)}return n.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},842:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return b})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return d}));var a=r(1),n=r(9),c=(r(0),r(1791)),b={title:"nodesRef.fields(fields, [callback])",sidebar_label:"nodesRef.fields"},l={id:"version-1.3.45/apis/interface/wxml/nodesRef_fields",title:"nodesRef.fields(fields, [callback])",description:"\u83b7\u53d6\u8282\u70b9\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u9700\u8981\u83b7\u53d6\u7684\u5b57\u6bb5\u5728 fields \u4e2d\u6307\u5b9a\u3002\u8fd4\u56de\u503c\u662f nodesRef \u5bf9\u5e94\u7684 selectorQuery\u3002\u53ef\u6307\u5b9a\u83b7\u53d6\u7684\u5b57\u6bb5\u5305\u62ec\uff1a",source:"@site/versioned_docs/version-1.3.45/apis/interface/wxml/nodesRef_fields.md",permalink:"/taro/docs/1.3.45/apis/interface/wxml/nodesRef_fields",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/apis/interface/wxml/nodesRef_fields.md",version:"1.3.45",sidebar_label:"nodesRef.fields",sidebar:"version-1.3.45/API",previous:{title:"nodesRef.scrollOffset([callback])",permalink:"/taro/docs/1.3.45/apis/interface/wxml/nodesRef_scrollOffset"},next:{title:"selectorQuery.exec([callback])",permalink:"/taro/docs/1.3.45/apis/interface/wxml/selectorQuery_exec"}},i=[{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API\u652f\u6301\u5ea6",id:"api\u652f\u6301\u5ea6",children:[]}],o={rightToc:i};function d(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},o,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"\u83b7\u53d6\u8282\u70b9\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u9700\u8981\u83b7\u53d6\u7684\u5b57\u6bb5\u5728 fields \u4e2d\u6307\u5b9a\u3002\u8fd4\u56de\u503c\u662f nodesRef \u5bf9\u5e94\u7684 selectorQuery\u3002\u53ef\u6307\u5b9a\u83b7\u53d6\u7684\u5b57\u6bb5\u5305\u62ec\uff1a"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5b57\u6bb5\u540d"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u9ed8\u8ba4\u503c"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"id"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de\u8282\u70b9 ",Object(c.b)("inlineCode",{parentName:"td"},"id"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"dataset"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de\u8282\u70b9 ",Object(c.b)("inlineCode",{parentName:"td"},"dataset"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"rect"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de\u8282\u70b9\u5e03\u5c40\u4f4d\u7f6e\uff08",Object(c.b)("inlineCode",{parentName:"td"},"left")," ",Object(c.b)("inlineCode",{parentName:"td"},"right")," ",Object(c.b)("inlineCode",{parentName:"td"},"top")," ",Object(c.b)("inlineCode",{parentName:"td"},"bottom"),"\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"size"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de\u8282\u70b9\u5c3a\u5bf8\uff08",Object(c.b)("inlineCode",{parentName:"td"},"width")," ",Object(c.b)("inlineCode",{parentName:"td"},"height"),"\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"scrollOffset"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5426"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u662f\u5426\u8fd4\u56de\u8282\u70b9\u7684 ",Object(c.b)("inlineCode",{parentName:"td"},"scrollLeft")," ",Object(c.b)("inlineCode",{parentName:"td"},"scrollTop")," \uff0c\u8282\u70b9\u5fc5\u987b\u662f ",Object(c.b)("inlineCode",{parentName:"td"},"scroll-view")," \u6216\u8005 viewport")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"properties"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6307\u5b9a\u5c5e\u6027\u540d\u5217\u8868\uff0c\u8fd4\u56de\u8282\u70b9\u5bf9\u5e94\u5c5e\u6027\u540d\u7684\u5f53\u524d\u5c5e\u6027\u503c\uff08\u53ea\u80fd\u83b7\u5f97\u7ec4\u4ef6\u6587\u6863\u4e2d\u6807\u6ce8\u7684\u5e38\u89c4\u5c5e\u6027\u503c\uff0c ",Object(c.b)("inlineCode",{parentName:"td"},"id")," ",Object(c.b)("inlineCode",{parentName:"td"},"class")," ",Object(c.b)("inlineCode",{parentName:"td"},"style")," \u548c\u4e8b\u4ef6\u7ed1\u5b9a\u7684\u5c5e\u6027\u503c\u4e0d\u53ef\u83b7\u53d6\uff09")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"computedStyle"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"[]"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u6307\u5b9a\u6837\u5f0f\u540d\u5217\u8868\uff0c\u8fd4\u56de\u8282\u70b9\u5bf9\u5e94\u6837\u5f0f\u540d\u7684\u5f53\u524d\u503c")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a computedStyle \u7684\u4f18\u5148\u7ea7\u9ad8\u4e8e size\uff0c\u5f53\u540c\u65f6\u5728 computedStyle \u91cc\u6307\u5b9a\u4e86 width/height \u548c\u4f20\u5165\u4e86 size: true\uff0c\u5219\u4f18\u5148\u8fd4\u56de computedStyle \u83b7\u53d6\u5230\u7684 width/height\u3002")),Object(c.b)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro from '@tarojs/taro'\n\nTaro.createSelectorQuery()\n  .select('#the-id')\n  .fields({\n    dataset: true,\n    size: true,\n    scrollOffset: true,\n    properties: ['scrollX', 'scrollY'],\n    computedStyle: ['margin', 'backgroundColor']\n  }, res => {\n    res.dataset    // \u8282\u70b9\u7684 dataset\n    res.width      // \u8282\u70b9\u7684\u5bbd\u5ea6\n    res.height     // \u8282\u70b9\u7684\u9ad8\u5ea6\n    res.scrollLeft // \u8282\u70b9\u7684\u6c34\u5e73\u6eda\u52a8\u4f4d\u7f6e\n    res.scrollTop  // \u8282\u70b9\u7684\u7ad6\u76f4\u6eda\u52a8\u4f4d\u7f6e\n    res.scrollX    // \u8282\u70b9 scroll-x \u5c5e\u6027\u7684\u5f53\u524d\u503c\n    res.scrollY    // \u8282\u70b9 scroll-y \u5c5e\u6027\u7684\u5f53\u524d\u503c\n    // \u6b64\u5904\u8fd4\u56de\u6307\u5b9a\u8981\u8fd4\u56de\u7684\u6837\u5f0f\u540d\n    res.margin\n    res.backgroundColor\n  })\n  .exec()\n")),Object(c.b)("h2",{id:"api\u652f\u6301\u5ea6"},"API\u652f\u6301\u5ea6"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"API"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"React Native"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.in"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.select"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectAll"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.selectViewport"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"nodesRef.boundingClientRect"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"nodesRef.scrollOffset"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"nodesRef.fields"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"selectorQuery.exec"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),"\u2714\ufe0f"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}))))))}d.isMDXComponent=!0}}]);