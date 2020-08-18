(window.webpackJsonp=window.webpackJsonp||[]).push([[1266],{1403:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var r=n(1),a=n(9),c=(n(0),n(1791)),o={title:"RichText",sidebar_label:"RichText"},b={id:"version-1.3.45/components/base/rich-text",title:"RichText",description:"##### \u5bcc\u6587\u672c",source:"@site/versioned_docs/version-1.3.45/components/base/rich-text.md",permalink:"/taro/docs/1.3.45/components/base/rich-text",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-1.3.45/components/base/rich-text.md",version:"1.3.45",sidebar_label:"RichText",sidebar:"version-1.3.45/components",previous:{title:"Progress",permalink:"/taro/docs/1.3.45/components/base/progress"},next:{title:"Button",permalink:"/taro/docs/1.3.45/components/forms/button"}},i=[],l={rightToc:i};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h5",{id:"\u5bcc\u6587\u672c"},"\u5bcc\u6587\u672c"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5c5e\u6027")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5c5e\u6027\u540d"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7c7b\u578b"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bf4\u660e"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"nodes"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"Array / String"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"[]"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u5217\u8868 / HTML String")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5404\u7aef\u652f\u6301\u5ea6")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5c5e\u6027"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"center"}),"H5"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"ReactNative"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"nodes"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"center"}),"\u2714"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u2714"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u2714"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u2714"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u2714")))),Object(c.b)("h6",{id:"\u793a\u4f8b\uff1a"},"\u793a\u4f8b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"import Taro, { Component } from '@tarojs/taro'\n// \u5f15\u5165 RichText \u7ec4\u4ef6\nimport { RichText } from '@tarojs/components'\n\nclass App extends Components {\n  state = {\n    nodes: [{\n      name: 'div',\n      attrs: {\n        class: 'div_class',\n        style: 'line-height: 60px; color: red;'\n      },\n      children: [{\n        type: 'text',\n        text: 'Hello World!'\n      }]\n    }]\n  }\n  render () {\n    return (\n      <RichText nodes={this.state.nodes} />\n    )\n  }\n}\n")))}p.isMDXComponent=!0},1791:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return j}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},s=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=r,j=s["".concat(o,".").concat(m)]||s[m]||O[m]||c;return n?a.a.createElement(j,b({ref:t},l,{components:n})):a.a.createElement(j,b({ref:t},l))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);