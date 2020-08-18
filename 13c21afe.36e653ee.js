(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{1791:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return j}));var a=t(0),i=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=i.a.createContext({}),b=function(e){var n=i.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l({},n,{},e)),t},s=function(e){var n=b(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},m=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=b(t),m=a,j=s["".concat(r,".").concat(m)]||s[m]||u[m]||c;return t?i.a.createElement(j,l({ref:n},p,{components:t})):i.a.createElement(j,l({ref:n},p))}));function j(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,r=new Array(c);r[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<c;p++)r[p]=t[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},275:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return o})),t.d(n,"default",(function(){return b}));var a=t(1),i=t(9),c=(t(0),t(1791)),r={title:"\u63d2\u4ef6\u529f\u80fd"},l={id:"plugin",title:"\u63d2\u4ef6\u529f\u80fd",description:"Taro \u5f15\u5165\u4e86\u63d2\u4ef6\u5316\u673a\u5236\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u5f00\u53d1\u8005\u80fd\u591f\u901a\u8fc7\u7f16\u5199\u63d2\u4ef6\u7684\u65b9\u5f0f\u6765\u4e3a Taro \u62d3\u5c55\u66f4\u591a\u529f\u80fd\u6216\u4e3a\u81ea\u8eab\u4e1a\u52a1\u5b9a\u5236\u4e2a\u6027\u5316\u529f\u80fd\u3002",source:"@site/docs/plugin.md",permalink:"/taro/docs/next/plugin",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/plugin.md",version:"next",sidebar:"docs",previous:{title:"\u7f16\u8bd1\u914d\u7f6e\u8be6\u60c5",permalink:"/taro/docs/next/config-detail"},next:{title:"\u5355\u6b65\u8c03\u6d4b\u914d\u7f6e",permalink:"/taro/docs/next/debug-config"}},o=[{value:"\u5b98\u65b9\u63d2\u4ef6",id:"\u5b98\u65b9\u63d2\u4ef6",children:[]},{value:"\u5982\u4f55\u5f15\u5165\u63d2\u4ef6",id:"\u5982\u4f55\u5f15\u5165\u63d2\u4ef6",children:[{value:"plugins",id:"plugins",children:[]},{value:"presets",id:"presets",children:[]}]},{value:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",id:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6",children:[{value:"Typings",id:"typings",children:[]},{value:"\u4e3b\u8981\u529f\u80fd",id:"\u4e3b\u8981\u529f\u80fd",children:[]},{value:"\u63d2\u4ef6\u73af\u5883\u53d8\u91cf",id:"\u63d2\u4ef6\u73af\u5883\u53d8\u91cf",children:[]},{value:"\u63d2\u4ef6\u65b9\u6cd5",id:"\u63d2\u4ef6\u65b9\u6cd5",children:[]}]}],p={rightToc:o};function b(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("p",null,"Taro \u5f15\u5165\u4e86\u63d2\u4ef6\u5316\u673a\u5236\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u8ba9\u5f00\u53d1\u8005\u80fd\u591f\u901a\u8fc7\u7f16\u5199\u63d2\u4ef6\u7684\u65b9\u5f0f\u6765\u4e3a Taro \u62d3\u5c55\u66f4\u591a\u529f\u80fd\u6216\u4e3a\u81ea\u8eab\u4e1a\u52a1\u5b9a\u5236\u4e2a\u6027\u5316\u529f\u80fd\u3002"),Object(c.b)("h2",{id:"\u5b98\u65b9\u63d2\u4ef6"},"\u5b98\u65b9\u63d2\u4ef6"),Object(c.b)("p",null,"Taro \u63d0\u4f9b\u4e86\u4e00\u4e9b\u5b98\u65b9\u63d2\u4ef6"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/NervJS/taro-plugin-mock"}),"@tarojs/plugin-mock"),"\uff0c\u4e00\u4e2a\u7b80\u6613\u7684\u6570\u636e mock \u63d2\u4ef6")),Object(c.b)("h2",{id:"\u5982\u4f55\u5f15\u5165\u63d2\u4ef6"},"\u5982\u4f55\u5f15\u5165\u63d2\u4ef6"),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u4ece npm \u6216\u8005\u672c\u5730\u4e2d\u5f15\u5165\u63d2\u4ef6\uff0c\u5f15\u5165\u65b9\u5f0f\u4e3b\u8981\u901a\u8fc7 ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/taro/docs/next/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"plugins")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"presets"),"\uff0c\u4f7f\u7528\u5982\u4e0b"),Object(c.b)("h3",{id:"plugins"},"plugins"),Object(c.b)("p",null,"\u63d2\u4ef6\u5728 Taro \u4e2d\uff0c\u4e00\u822c\u901a\u8fc7",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/taro/docs/next/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u8fdb\u884c\u5f15\u5165\u3002"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\u53d6\u503c\u4e3a\u4e00\u4e2a\u6570\u7ec4\uff0c\u914d\u7f6e\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  plugins: [\n    // \u5f15\u5165 npm \u5b89\u88c5\u7684\u63d2\u4ef6\n    '@tarojs/plugin-mock', \n    // \u5f15\u5165 npm \u5b89\u88c5\u7684\u63d2\u4ef6\uff0c\u5e76\u4f20\u5165\u63d2\u4ef6\u53c2\u6570\n    ['@tarojs/plugin-mock', {\n      mocks: {\n        '/api/user/1': {\n          name: 'judy',\n          desc: 'Mental guy'\n        }\n      }\n    }],\n    // \u4ece\u672c\u5730\u7edd\u5bf9\u8def\u5f84\u5f15\u5165\u63d2\u4ef6\uff0c\u540c\u6837\u5982\u679c\u9700\u8981\u4f20\u5165\u53c2\u6570\u4e5f\u662f\u5982\u4e0a\n    '/absulute/path/plugin/filename',\n  ]\n}\n")),Object(c.b)("h3",{id:"presets"},"presets"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u6709\u4e00\u7cfb\u5217\u63d2\u4ef6\u9700\u8981\u914d\u7f6e\uff0c\u800c\u4ed6\u4eec\u901a\u5e38\u662f\u7ec4\u5408\u8d77\u6765\u5b8c\u6210\u7279\u5b9a\u7684\u4e8b\u513f\uff0c\u90a3\u4f60\u53ef\u4ee5\u901a\u8fc7",Object(c.b)("strong",{parentName:"p"},"\u63d2\u4ef6\u96c6")," ",Object(c.b)("inlineCode",{parentName:"p"},"presets")," \u6765\u8fdb\u884c\u914d\u7f6e\u3002"),Object(c.b)("p",null,"\u914d\u7f6e",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/taro/docs/next/config-detail"}),"\u7f16\u8bd1\u914d\u7f6e"),"\u4e2d\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"presets")," \u5b57\u6bb5\uff0c\u5982\u4e0b\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const config = {\n  presets: [\n    // \u5f15\u5165 npm \u5b89\u88c5\u7684\u63d2\u4ef6\u96c6\n    '@tarojs/preset-sth', \n    // \u5f15\u5165 npm \u5b89\u88c5\u7684\u63d2\u4ef6\u96c6\uff0c\u5e76\u4f20\u5165\u63d2\u4ef6\u53c2\u6570\n    ['@tarojs/plugin-sth', {\n      arg0: 'xxx'\n    }],\n    // \u4ece\u672c\u5730\u7edd\u5bf9\u8def\u5f84\u5f15\u5165\u63d2\u4ef6\u96c6\uff0c\u540c\u6837\u5982\u679c\u9700\u8981\u4f20\u5165\u53c2\u6570\u4e5f\u662f\u5982\u4e0a\n    '/absulute/path/preset/filename',\n  ]\n}\n")),Object(c.b)("p",null,"\u5728\u4e86\u89e3\u5b8c\u5982\u4f55\u5f15\u5165\u63d2\u4ef6\u4e4b\u540e\uff0c\u6211\u4eec\u6765\u5b66\u4e60\u4e00\u4e0b\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6\u3002"),Object(c.b)("h2",{id:"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6"},"\u5982\u4f55\u7f16\u5199\u4e00\u4e2a\u63d2\u4ef6"),Object(c.b)("p",null,"\u4e00\u4e2a Taro \u7684\u63d2\u4ef6\u90fd\u5177\u6709\u56fa\u5b9a\u7684\u4ee3\u7801\u7ed3\u6784\uff0c\u901a\u5e38\u7531\u4e00\u4e2a\u51fd\u6570\u7ec4\u6210\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export default (ctx, options) => {\n  // plugin \u4e3b\u4f53\n  ctx.onBuildStart(() => {\n    console.log('\u7f16\u8bd1\u5f00\u59cb\uff01')\n  })\n  ctx.onBuildFinish(() => {\n    console.log('\u7f16\u8bd1\u7ed3\u675f\uff01')\n  })\n}\n")),Object(c.b)("p",null,"\u63d2\u4ef6\u51fd\u6570\u53ef\u4ee5\u63a5\u53d7\u4e24\u4e2a\u53c2\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"ctx\uff1a\u63d2\u4ef6\u5f53\u524d\u7684\u8fd0\u884c\u73af\u5883\u4fe1\u606f\uff0c\u5305\u542b\u63d2\u4ef6\u76f8\u5173\u7684 API\u3001\u5f53\u524d\u8fd0\u884c\u53c2\u6570\u3001\u8f85\u52a9\u65b9\u6cd5\u7b49\u7b49"),Object(c.b)("li",{parentName:"ul"},"options\uff1a\u4e3a\u63d2\u4ef6\u8c03\u7528\u65f6\u4f20\u5165\u7684\u53c2\u6570")),Object(c.b)("p",null,"\u5728\u63d2\u4ef6\u4e3b\u4f53\u4ee3\u7801\u90e8\u5206\u53ef\u4ee5\u6309\u7167\u81ea\u5df1\u7684\u9700\u6c42\u7f16\u5199\u76f8\u5e94\u4ee3\u7801\uff0c\u901a\u5e38\u4f60\u53ef\u4ee5\u5b9e\u73b0\u4ee5\u4e0b\u529f\u80fd\u3002"),Object(c.b)("h3",{id:"typings"},"Typings"),Object(c.b)("p",null,"\u5efa\u8bae\u4f7f\u7528 typescript \u6765\u7f16\u5199\u63d2\u4ef6\uff0c\u8fd9\u6837\u4f60\u5c31\u4f1a\u83b7\u5f97\u5f88\u68d2\u7684\u667a\u80fd\u63d0\u793a\uff0c\u4f7f\u7528\u65b9\u5f0f\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { IPluginContext } from '@tarojs/service'\nexport default (ctx: IPluginContext, pluginOpts) => {\n  // \u63a5\u4e0b\u6765\u4f7f\u7528 ctx \u7684\u65f6\u5019\u5c31\u80fd\u83b7\u5f97\u667a\u80fd\u63d0\u793a\u4e86\n  ctx.onBuildStart(() => {\n    console.log('\u7f16\u8bd1\u5f00\u59cb\uff01')\n  })\n}\n")),Object(c.b)("h3",{id:"\u4e3b\u8981\u529f\u80fd"},"\u4e3b\u8981\u529f\u80fd"),Object(c.b)("h4",{id:"\u547d\u4ee4\u884c\u6269\u5c55"},"\u547d\u4ee4\u884c\u6269\u5c55"),Object(c.b)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u7f16\u5199\u63d2\u4ef6\u6765\u4e3a Taro \u62d3\u5c55\u547d\u4ee4\u884c\u7684\u547d\u4ee4\uff0c\u5728\u4e4b\u524d\u7248\u672c\u7684 Taro \u4e2d\uff0c\u547d\u4ee4\u884c\u7684\u547d\u4ee4\u662f\u56fa\u5b9a\u7684\uff0c\u5982\u679c\u4f60\u8981\u8fdb\u884c\u6269\u5c55\uff0c\u90a3\u4f60\u5f97\u76f4\u63a5\u4fee\u6539 Taro \u6e90\u7801\uff0c\u800c\u5982\u4eca\u501f\u52a9\u63d2\u4ef6\u529f\u80fd\uff0c\u4f60\u53ef\u4ee5\u4efb\u610f\u62d3\u5c55 Taro \u7684\u547d\u4ee4\u884c\u3002"),Object(c.b)("p",null,"\u8fd9\u4e2a\u529f\u80fd\u4e3b\u8981\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.registerCommand")," API \u6765\u8fdb\u884c\u5b9e\u73b0\uff0c\u4f8b\u5982\uff0c\u589e\u52a0\u4e00\u4e2a\u4e0a\u4f20\u7684\u547d\u4ee4\uff0c\u5c06\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u4e0a\u4f20\u5230\u670d\u52a1\u5668\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export default (ctx) => {\n  ctx.registerCommand({\n    // \u547d\u4ee4\u540d\n    name: 'upload',\n    // \u6267\u884c taro upload --help \u65f6\u8f93\u51fa\u7684 options \u4fe1\u606f\n    optionsMap: {\n      '--remote': '\u670d\u52a1\u5668\u5730\u5740'\n    },\n    // \u6267\u884c taro upload --help \u65f6\u8f93\u51fa\u7684\u4f7f\u7528\u4f8b\u5b50\u7684\u4fe1\u606f\n    synopsisList: [\n      'taro upload --remote xxx.xxx.xxx.xxx'\n    ],\n    async fn () {\n      const { remote } = ctx.runOpts\n      await uploadDist()\n    }\n  })\n}\n")),Object(c.b)("p",null,"\u5c06\u8fd9\u4e2a\u63d2\u4ef6\u914d\u7f6e\u5230\u4e2d\u9879\u76ee\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"taro upload --remote xxx.xxx.xxx.xxx")," \u547d\u4ee4\u5c06\u7f16\u8bd1\u540e\u4ee3\u7801\u4e0a\u4f20\u5230\u76ee\u6807\u670d\u52a1\u5668\u3002"),Object(c.b)("h4",{id:"\u7f16\u8bd1\u8fc7\u7a0b\u6269\u5c55"},"\u7f16\u8bd1\u8fc7\u7a0b\u6269\u5c55"),Object(c.b)("p",null,"\u540c\u65f6\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u5bf9\u4ee3\u7801\u7f16\u8bd1\u8fc7\u7a0b\u8fdb\u884c\u62d3\u5c55\u3002"),Object(c.b)("p",null,"\u6b63\u5982\u524d\u9762\u6240\u8ff0\uff0c\u9488\u5bf9\u7f16\u8bd1\u8fc7\u7a0b\uff0c\u6709 ",Object(c.b)("inlineCode",{parentName:"p"},"onBuildStart"),"\u3001",Object(c.b)("inlineCode",{parentName:"p"},"onBuildFinish")," \u4e24\u4e2a\u94a9\u5b50\u6765\u5206\u522b\u8868\u793a\u7f16\u8bd1\u5f00\u59cb\uff0c\u7f16\u8bd1\u7ed3\u675f\uff0c\u800c\u9664\u6b64\u4e4b\u5916\u4e5f\u6709\u66f4\u591a API \u6765\u5bf9\u7f16\u8bd1\u8fc7\u7a0b\u8fdb\u884c\u4fee\u6539\uff0c\u5982\u4e0b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.onBuildStart(() => viod)"),"\uff0c\u7f16\u8bd1\u5f00\u59cb\uff0c\u63a5\u6536\u4e00\u4e2a\u56de\u8c03\u51fd\u6570"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.modifyWebpackChain(args: { chain: any }) => void)"),"\uff0c\u7f16\u8bd1\u4e2d\u4fee\u6539 webpack \u914d\u7f6e\uff0c\u5728\u8fd9\u4e2a\u94a9\u5b50\u4e2d\uff0c\u4f60\u53ef\u4ee5\u5bf9 webpackChain \u4f5c\u51fa\u60f3\u8981\u7684\u8c03\u6574\uff0c\u7b49\u540c\u4e8e\u914d\u7f6e ",Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/taro/docs/next/config-detail#miniwebpackchain"}),Object(c.b)("inlineCode",{parentName:"a"},"webpackChain"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.modifyBuildAssets(args: { assets: any }) => void)"),"\uff0c\u4fee\u6539\u7f16\u8bd1\u540e\u7684\u7ed3\u679c"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.modifyBuildTempFileContent(args: { tempFiles: any }) => void)"),"\uff0c\u4fee\u6539\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u7684\u4e2d\u95f4\u6587\u4ef6\uff0c\u4f8b\u5982\u4fee\u6539 app \u6216\u9875\u9762\u7684 config \u914d\u7f6e"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.onBuildFinish(() => viod)"),"\uff0c\u7f16\u8bd1\u7ed3\u675f\uff0c\u63a5\u6536\u4e00\u4e2a\u56de\u8c03\u51fd\u6570")),Object(c.b)("h4",{id:"\u7f16\u8bd1\u5e73\u53f0\u62d3\u5c55"},"\u7f16\u8bd1\u5e73\u53f0\u62d3\u5c55"),Object(c.b)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u901a\u8fc7\u63d2\u4ef6\u529f\u80fd\u5bf9\u7f16\u8bd1\u5e73\u53f0\u8fdb\u884c\u62d3\u5c55\u3002"),Object(c.b)("p",null,"\u4f7f\u7528 API ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.registerPlatform"),"\uff0cTaro \u4e2d\u5185\u7f6e\u7684\u5e73\u53f0\u652f\u6301\u90fd\u662f\u901a\u8fc7\u8fd9\u4e2a API \u6765\u8fdb\u884c\u5b9e\u73b0\u3002"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u8fd9\u662f\u672a\u5b8c\u5de5\u7684\u529f\u80fd\uff0c\u9700\u8981\u4f9d\u8d56\u4ee3\u7801\u7f16\u8bd1\u5668 ",Object(c.b)("inlineCode",{parentName:"p"},"@tarojs/transform-wx")," \u7684\u6539\u9020\u5b8c\u6210"),Object(c.b)("h2",Object(a.a)({parentName:"blockquote"},{id:"api"}),"API")),Object(c.b)("p",null,"\u901a\u8fc7\u4ee5\u4e0a\u5185\u5bb9\uff0c\u6211\u4eec\u5df2\u7ecf\u5927\u81f4\u77e5\u9053 Taro \u63d2\u4ef6\u53ef\u4ee5\u5b9e\u73b0\u54ea\u4e9b\u7279\u6027\u5e76\u4e14\u53ef\u4ee5\u7f16\u5199\u4e00\u4e2a\u7b80\u5355\u7684 Taro \u63d2\u4ef6\u4e86\uff0c\u4f46\u662f\uff0c\u4e3a\u4e86\u80fd\u591f\u7f16\u5199\u66f4\u52a0\u590d\u6742\u4e14\u6807\u51c6\u7684\u63d2\u4ef6\uff0c\u6211\u4eec\u9700\u8981\u4e86\u89e3 Taro \u63d2\u4ef6\u673a\u5236\u4e2d\u7684\u5177\u4f53 API \u7528\u6cd5\u3002"),Object(c.b)("h3",{id:"\u63d2\u4ef6\u73af\u5883\u53d8\u91cf"},"\u63d2\u4ef6\u73af\u5883\u53d8\u91cf"),Object(c.b)("h4",{id:"ctxpaths"},"ctx.paths"),Object(c.b)("p",null,"\u5305\u542b\u5f53\u524d\u6267\u884c\u547d\u4ee4\u7684\u76f8\u5173\u8def\u5f84\uff0c\u6240\u6709\u7684\u8def\u5f84\u5982\u4e0b\uff08\u5e76\u4e0d\u662f\u6240\u6709\u547d\u4ee4\u90fd\u4f1a\u62e5\u6709\u4ee5\u4e0b\u6240\u6709\u8def\u5f84\uff09\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.paths.appPath"),"\uff0c\u5f53\u524d\u547d\u4ee4\u6267\u884c\u7684\u76ee\u5f55\uff0c\u5982\u679c\u662f ",Object(c.b)("inlineCode",{parentName:"li"},"build")," \u547d\u4ee4\u5219\u4e3a\u5f53\u524d\u9879\u76ee\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.paths.configPath"),"\uff0c\u5f53\u524d\u9879\u76ee\u914d\u7f6e\u76ee\u5f55\uff0c\u5982\u679c ",Object(c.b)("inlineCode",{parentName:"li"},"init")," \u547d\u4ee4\uff0c\u5219\u6ca1\u6709\u6b64\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.paths.sourcePath"),"\uff0c\u5f53\u524d\u9879\u76ee\u6e90\u7801\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.paths.outputPath"),"\uff0c\u5f53\u524d\u9879\u76ee\u8f93\u51fa\u4ee3\u7801\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("inlineCode",{parentName:"li"},"ctx.paths.nodeModulesPath"),"\uff0c\u5f53\u524d\u9879\u76ee\u6240\u7528\u7684 node_modules \u8def\u5f84")),Object(c.b)("h4",{id:"ctxrunopts"},"ctx.runOpts"),Object(c.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u6267\u884c\u547d\u4ee4\u6240\u5e26\u7684\u53c2\u6570\uff0c\u4f8b\u5982\u547d\u4ee4 ",Object(c.b)("inlineCode",{parentName:"p"},"taro upload --remote xxx.xxx.xxx.xxx"),"\uff0c\u5219 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.runOpts")," \u503c\u4e3a\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"{\n  _: ['upload'],\n  options: {\n    remote: 'xxx.xxx.xxx.xxx'\n  },\n  isHelp: false\n}\n")),Object(c.b)("h4",{id:"ctxhelper"},"ctx.helper"),Object(c.b)("p",null,"\u4e3a\u5305 ",Object(c.b)("inlineCode",{parentName:"p"},"@tarojs/helper")," \u7684\u5feb\u6377\u4f7f\u7528\u65b9\u5f0f\uff0c\u5305\u542b\u5176\u6240\u6709 API\u3002"),Object(c.b)("h4",{id:"ctxinitialconfig"},"ctx.initialConfig"),Object(c.b)("p",null,"\u83b7\u53d6\u9879\u76ee\u914d\u7f6e\u3002"),Object(c.b)("h4",{id:"ctxplugins"},"ctx.plugins"),Object(c.b)("p",null,"\u83b7\u53d6\u5f53\u524d\u6240\u6709\u6302\u8f7d\u7684\u63d2\u4ef6\u3002"),Object(c.b)("h3",{id:"\u63d2\u4ef6\u65b9\u6cd5"},"\u63d2\u4ef6\u65b9\u6cd5"),Object(c.b)("p",null,"Taro \u7684\u63d2\u4ef6\u67b6\u6784\u57fa\u4e8e ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/webpack/tapable"}),"Tapable"),"\u3002"),Object(c.b)("h4",{id:"ctxregisterhook-ihook"},"ctx.register(hook: IHook)"),Object(c.b)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u53ef\u4f9b\u5176\u4ed6\u63d2\u4ef6\u8c03\u7528\u7684\u94a9\u5b50\uff0c\u63a5\u6536\u4e00\u4e2a\u53c2\u6570\uff0c\u5373 Hook \u5bf9\u8c61\u3002"),Object(c.b)("p",null,"\u4e00\u4e2aHook \u5bf9\u8c61\u7c7b\u578b\u5982\u4e0b\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface IHook {\n  // Hook \u540d\u5b57\uff0c\u4e5f\u4f1a\u4f5c\u4e3a Hook \u6807\u8bc6\n  name: string\n  // Hook \u6240\u5904\u7684 plugin id\uff0c\u4e0d\u9700\u8981\u6307\u5b9a\uff0cHook \u6302\u8f7d\u7684\u65f6\u5019\u4f1a\u81ea\u52a8\u8bc6\u522b\n  plugin: string\n  // Hook \u56de\u8c03\n  fn: Function\n  before?: string\n  stage?: number\n}\n")),Object(c.b)("p",null,"\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.register")," \u6ce8\u518c\u8fc7\u7684\u94a9\u5b50\u9700\u8981\u901a\u8fc7\u65b9\u6cd5 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.applyPlugins")," \u8fdb\u884c\u89e6\u53d1\u3002"),Object(c.b)("p",null,"\u6211\u4eec\u7ea6\u5b9a\uff0c\u6309\u7167\u4f20\u5165\u7684 Hook \u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"name")," \u6765\u533a\u5206 Hook \u7c7b\u578b\uff0c\u4e3b\u8981\u4e3a\u4ee5\u4e0b\u4e09\u7c7b\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u4e8b\u4ef6\u7c7b\u578b Hook\uff0cHook name \u4ee5 ",Object(c.b)("inlineCode",{parentName:"li"},"on")," \u5f00\u5934\uff0c\u5982 ",Object(c.b)("inlineCode",{parentName:"li"},"onStart"),"\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684 Hook \u53ea\u7ba1\u89e6\u53d1\u800c\u4e0d\u5173\u5fc3 Hook \u56de\u8c03 fn \u7684\u503c\uff0cHook \u7684\u56de\u8c03 fn \u63a5\u6536\u4e00\u4e2a\u53c2\u6570 ",Object(c.b)("inlineCode",{parentName:"li"},"opts")," \uff0c\u4e3a\u89e6\u53d1\u94a9\u5b50\u65f6\u4f20\u5165\u7684\u53c2\u6570"),Object(c.b)("li",{parentName:"ul"},"\u4fee\u6539\u7c7b\u578b Hook\uff0cHook name \u4ee5 ",Object(c.b)("inlineCode",{parentName:"li"},"modify")," \u5f00\u5934\uff0c\u5982 ",Object(c.b)("inlineCode",{parentName:"li"},"modifyBuildAssets"),"\uff0c\u8fd9\u79cd\u7c7b\u578b\u7684 Hook \u89e6\u53d1\u540e\u4f1a\u8fd4\u56de\u505a\u51fa\u67d0\u9879\u4fee\u6539\u540e\u7684\u503c\uff0cHook \u7684\u56de\u8c03 fn \u63a5\u6536\u4e24\u4e2a\u53c2\u6570 ",Object(c.b)("inlineCode",{parentName:"li"},"opts")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"arg")," \uff0c\u5206\u522b\u4e3a\u89e6\u53d1\u94a9\u5b50\u65f6\u4f20\u5165\u7684\u53c2\u6570\u548c\u4e0a\u4e00\u4e2a\u56de\u8c03\u6267\u884c\u7684\u7ed3\u679c"),Object(c.b)("li",{parentName:"ul"},"\u6dfb\u52a0\u7c7b\u578b Hook\uff0cHook name \u4ee5 ",Object(c.b)("inlineCode",{parentName:"li"},"add")," \u5f00\u5934\uff0c\u5982 ",Object(c.b)("inlineCode",{parentName:"li"},"addConfig"),"\uff0c\u8fd9\u79cd\u7c7b\u578b Hook \u4f1a\u5c06\u6240\u6709\u56de\u8c03\u7684\u7ed3\u679c\u7ec4\u5408\u6210\u6570\u7ec4\u6700\u7ec8\u8fd4\u56de\uff0cHook \u7684\u56de\u8c03 fn \u63a5\u6536\u4e24\u4e2a\u53c2\u6570 ",Object(c.b)("inlineCode",{parentName:"li"},"opts")," \u548c ",Object(c.b)("inlineCode",{parentName:"li"},"arg")," \uff0c\u5206\u522b\u4e3a\u89e6\u53d1\u94a9\u5b50\u65f6\u4f20\u5165\u7684\u53c2\u6570\u548c\u4e0a\u4e00\u4e2a\u56de\u8c03\u6267\u884c\u7684\u7ed3\u679c")),Object(c.b)("p",null,"\u5982\u679c Hook \u5bf9\u8c61\u7684 ",Object(c.b)("inlineCode",{parentName:"p"},"name")," \u4e0d\u5c5e\u4e8e\u4ee5\u4e0a\u4e09\u7c7b\uff0c\u5219\u8be5 Hook \u8868\u73b0\u60c5\u51b5\u7c7b\u4f3c\u4e8b\u4ef6\u7c7b\u578b Hook\u3002"),Object(c.b)("p",null,"\u94a9\u5b50\u56de\u8c03\u53ef\u4ee5\u662f\u5f02\u6b65\u4e5f\u53ef\u4ee5\u662f\u540c\u6b65\uff0c\u540c\u4e00\u4e2a Hook \u6807\u8bc6\u4e0b\u4e00\u7cfb\u5217\u56de\u8c03\u4f1a\u501f\u52a9 Tapable \u7684 AsyncSeriesWaterfallHook \u7ec4\u7ec7\u4e3a\u5f02\u6b65\u4e32\u884c\u4efb\u52a1\u4f9d\u6b21\u6267\u884c\u3002"),Object(c.b)("h4",{id:"ctxregistermethodarg-string---name-string-fn-function--fn-function"},"ctx.registerMethod(arg: string | { name: string, fn?: Function }, fn?: Function)"),Object(c.b)("p",null,"\u5411 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx")," \u4e0a\u6302\u8f7d\u4e00\u4e2a\u65b9\u6cd5\u53ef\u4f9b\u5176\u4ed6\u63d2\u4ef6\u76f4\u63a5\u8c03\u7528\u3002"),Object(c.b)("p",null,"\u4e3b\u8981\u8c03\u7528\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.registerMethod('methodName')\nctx.registerMethod('methodName', () => {\n  // callback\n})\nctx.registerMethod({\n  name: 'methodName'\n})\nctx.registerMethod({\n  name: 'methodName',\n  fn: () => {\n    // callback\n  }\n})\n")),Object(c.b)("p",null,"\u5176\u4e2d\u65b9\u6cd5\u540d\u5fc5\u987b\u6307\u5b9a\uff0c\u800c\u5bf9\u4e8e\u56de\u8c03\u51fd\u6570\u5219\u5b58\u5728\u4e24\u79cd\u60c5\u51b5\u3002"),Object(c.b)("h5",{id:"\u6307\u5b9a\u56de\u8c03\u51fd\u6570"},"\u6307\u5b9a\u56de\u8c03\u51fd\u6570"),Object(c.b)("p",null,"\u5219\u76f4\u63a5\u5f80 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx")," \u4e0a\u8fdb\u884c\u6302\u8f7d\u65b9\u6cd5\uff0c\u8c03\u7528\u65f6 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.methodName")," \u5373\u6267\u884c ",Object(c.b)("inlineCode",{parentName:"p"},"registerMethod")," \u4e0a\u6307\u5b9a\u7684\u56de\u8c03\u51fd\u6570\u3002"),Object(c.b)("h5",{id:"\u4e0d\u6307\u5b9a\u56de\u8c03\u51fd\u6570"},"\u4e0d\u6307\u5b9a\u56de\u8c03\u51fd\u6570"),Object(c.b)("p",null,"\u5219\u76f8\u5f53\u4e8e\u6ce8\u518c\u4e86\u4e00\u4e2a ",Object(c.b)("inlineCode",{parentName:"p"},"methodName")," \u94a9\u5b50\uff0c\u4e0e ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.register")," \u6ce8\u518c\u94a9\u5b50\u4e00\u6837\u9700\u8981\u901a\u8fc7\u65b9\u6cd5 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.applyPlugins")," \u8fdb\u884c\u89e6\u53d1\uff0c\u800c\u5177\u4f53\u8981\u6267\u884c\u7684\u94a9\u5b50\u56de\u8c03\u5219\u901a\u8fc7 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.methodName")," \u8fdb\u884c\u6307\u5b9a\uff0c\u53ef\u4ee5\u6307\u5b9a\u591a\u4e2a\u8981\u6267\u884c\u7684\u56de\u8c03\uff0c\u6700\u540e\u4f1a\u6309\u7167\u6ce8\u518c\u987a\u5e8f\u4f9d\u6b21\u6267\u884c\u3002"),Object(c.b)("p",null,"\u5185\u7f6e\u7684\u7f16\u8bd1\u8fc7\u7a0b\u4e2d\u7684 API \u5982 ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.onBuildStart")," \u7b49\u5747\u662f\u901a\u8fc7\u8fd9\u79cd\u65b9\u5f0f\u6ce8\u518c\u3002"),Object(c.b)("h4",{id:"ctxregistercommandhook-icommand"},"ctx.registerCommand(hook: ICommand)"),Object(c.b)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u81ea\u5b9a\u4e49\u547d\u4ee4\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface ICommand {\n  // \u547d\u4ee4\u522b\u540d\n  alias?: string,\n  // \u6267\u884c taro <command> --help \u65f6\u8f93\u51fa\u7684 options \u4fe1\u606f\n  optionsMap?: {\n    [key: string]: string\n  },\n  // \u6267\u884c taro <command> --help \u65f6\u8f93\u51fa\u7684\u4f7f\u7528\u4f8b\u5b50\u7684\u4fe1\u606f\n  synopsisList?: string[]\n}\n")),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.registerCommand({\n  name: 'create',\n  fn () {\n    const {\n      type,\n      name,\n      description\n    } = ctx.runOpts\n    const { chalk } = ctx.helper\n    const { appPath } = ctx.paths\n    if (typeof name !== 'string') {\n      return console.log(chalk.red('\u8bf7\u8f93\u5165\u9700\u8981\u521b\u5efa\u7684\u9875\u9762\u540d\u79f0'))\n    }\n    if (type === 'page') {\n      const Page = require('../../create/page').default\n      const page = new Page({\n        pageName: name,\n        projectDir: appPath,\n        description\n      })\n      page.create()\n    }\n  }\n})\n")),Object(c.b)("h4",{id:"ctxregisterplatformhook-iplatform"},"ctx.registerPlatform(hook: IPlatform)"),Object(c.b)("p",null,"\u6ce8\u518c\u4e00\u4e2a\u7f16\u8bd1\u5e73\u53f0\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"interface IFileType {\n  templ: string\n  style: string\n  script: string\n  config: string\n}\ninterface IPlatform extends IHook {\n  // \u7f16\u8bd1\u540e\u6587\u4ef6\u7c7b\u578b\n  fileType: IFileType\n  // \u7f16\u8bd1\u65f6\u4f7f\u7528\u7684\u914d\u7f6e\u53c2\u6570\u540d\n  useConfigName: String\n}\n")),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.registerPlatform({\n  name: 'alipay',\n  useConfigName: 'mini',\n  async fn ({ config }) {\n    const { appPath, nodeModulesPath, outputPath } = ctx.paths\n    const { npm, emptyDirectory } = ctx.helper\n    emptyDirectory(outputPath)\n    // \u51c6\u5907 miniRunner \u53c2\u6570\n    const miniRunnerOpts = {\n      ...config,\n      nodeModulesPath,\n      buildAdapter: config.platform,\n      isBuildPlugin: false,\n      globalObject: 'my',\n      fileType: {\n        templ: '.awml',\n        style: '.acss',\n        config: '.json',\n        script: '.js'\n      },\n      isUseComponentBuildPage: false\n    }\n    ctx.modifyBuildTempFileContent(({ tempFiles }) => {\n      const replaceKeyMap = {\n        navigationBarTitleText: 'defaultTitle',\n        navigationBarBackgroundColor: 'titleBarColor',\n        enablePullDownRefresh: 'pullRefresh',\n        list: 'items',\n        text: 'name',\n        iconPath: 'icon',\n        selectedIconPath: 'activeIcon',\n        color: 'textColor'\n      }\n      Object.keys(tempFiles).forEach(key => {\n        const item = tempFiles[key]\n        if (item.config) {\n          recursiveReplaceObjectKeys(item.config, replaceKeyMap)\n        }\n      })\n    })\n    // build with webpack\n    const miniRunner = await npm.getNpmPkg('@tarojs/mini-runner', appPath)\n    await miniRunner(appPath, miniRunnerOpts)\n  }\n})\n")),Object(c.b)("h4",{id:"ctxapplypluginsargs-string---name-string-initialval-any-opts-any-"},"ctx.applyPlugins(args: string | { name: string, initialVal?: any, opts?: any })"),Object(c.b)("p",null,"\u89e6\u53d1\u6ce8\u518c\u7684\u94a9\u5b50\u3002"),Object(c.b)("p",null,"\u4f20\u5165\u7684\u94a9\u5b50\u540d\u4e3a ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.register")," \u548c ",Object(c.b)("inlineCode",{parentName:"p"},"ctx.registerMethod")," \u6307\u5b9a\u7684\u540d\u5b57\u3002"),Object(c.b)("p",null,"\u8fd9\u91cc\u503c\u5f97\u6ce8\u610f\u7684\u662f\u5982\u679c\u662f",Object(c.b)("strong",{parentName:"p"},"\u4fee\u6539\u7c7b\u578b"),"\u548c",Object(c.b)("strong",{parentName:"p"},"\u6dfb\u52a0\u7c7b\u578b"),"\u7684\u94a9\u5b50\uff0c\u5219\u62e5\u6709\u8fd4\u56de\u7ed3\u679c\uff0c\u5426\u5219\u4e0d\u7528\u5173\u5fc3\u5176\u8fd4\u56de\u7ed3\u679c\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.applyPlugins('onStart')\nconst assets = await ctx.applyPlugins({\n  name: 'modifyBuildAssets',\n  initialVal: assets,\n  opts: {\n    assets\n  }\n})\n")),Object(c.b)("h4",{id:"ctxaddpluginoptsschemaschema-function"},"ctx.addPluginOptsSchema(schema: Function)"),Object(c.b)("p",null,"\u4e3a\u63d2\u4ef6\u5165\u53c2\u6dfb\u52a0\u6821\u9a8c\uff0c\u63a5\u53d7\u4e00\u4e2a\u51fd\u6570\u7c7b\u578b\u53c2\u6570\uff0c\u51fd\u6570\u5165\u53c2\u4e3a joi \u5bf9\u8c61\uff0c\u8fd4\u56de\u503c\u4e3a joi schema\u3002"),Object(c.b)("p",null,"\u4f7f\u7528\u65b9\u5f0f\uff1a"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"ctx.addPluginOptsSchema(joi => {\n  return joi.object().keys({\n    mocks: joi.object().pattern(\n      joi.string(), joi.object()\n    ),\n    port: joi.number(),\n    host: joi.string()\n  })\n})\n")),Object(c.b)("h4",{id:"ctxwritefiletodist-filepath-string-content-string-"},"ctx.writeFileToDist({ filePath: string, content: string })"),Object(c.b)("p",null,"\u5411\u7f16\u8bd1\u7ed3\u679c\u76ee\u5f55\u4e2d\u5199\u5165\u6587\u4ef6\uff0c\u53c2\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"filePath: \u6587\u4ef6\u653e\u5165\u7f16\u8bd1\u7ed3\u679c\u76ee\u5f55\u4e0b\u7684\u8def\u5f84"),Object(c.b)("li",{parentName:"ul"},"content: \u6587\u4ef6\u5185\u5bb9")),Object(c.b)("h4",{id:"ctxgenerateframeworkinfo-platform-string-"},"ctx.generateFrameworkInfo({ platform: string })"),Object(c.b)("p",null,"\u751f\u6210\u7f16\u8bd1\u4fe1\u606f\u6587\u4ef6 .frameworkinfo\uff0c\u53c2\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"platform: \u5e73\u53f0\u540d")),Object(c.b)("h4",{id:"ctxgenerateprojectconfig-srcconfigname-string-distconfigname-string-"},"ctx.generateProjectConfig({ srcConfigName: string, distConfigName: string })"),Object(c.b)("p",null,"\u6839\u636e\u5f53\u524d\u9879\u76ee\u914d\u7f6e\uff0c\u751f\u6210\u6700\u7ec8\u9879\u76ee\u914d\u7f6e\uff0c\u53c2\u6570\uff1a"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"srcConfigName: \u6e90\u7801\u4e2d\u914d\u7f6e\u540d"),Object(c.b)("li",{parentName:"ul"},"distConfigName: \u6700\u7ec8\u751f\u6210\u7684\u914d\u7f6e\u540d")))}b.isMDXComponent=!0}}]);