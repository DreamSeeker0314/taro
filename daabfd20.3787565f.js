(window.webpackJsonp=window.webpackJsonp||[]).push([[1413],{1549:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a(1),r=a(9),b=(a(0),a(1791)),i={id:"2018-11-05-taro-1-1",title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",author:"luckyadam",author_url:"https://github.com/luckyadam",author_image_url:"https://avatars2.githubusercontent.com/u/1782542?s=400&u=d20514a52100ed1f82282bcfca6f49052793c889&v=4"},l={permalink:"/taro/blog/2018-11-05-taro-1-1",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2018-11-05-taro-1-1.md",source:"@site/blog/2018-11-05-taro-1-1.md",description:"\u5728 9 \u6708 16 \u65e5\u7684\u6398\u91d1\u5c0f\u7a0b\u5e8f\u5927\u4f1a\u4e0a\uff0cTaro \u6b63\u5f0f\u53d1\u5e03\u4e86 1.0 \u7248\u672c\u3002",date:"2018-11-05T00:00:00.000Z",tags:[],title:"Taro 1.1 \u53d1\u5e03\uff0c\u5168\u9762\u652f\u6301\u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f",readingTime:2.125,truncated:!0,prevItem:{title:"Taro 1.2\uff1a\u5c06\u5df2\u6709\u5fae\u4fe1\u5c0f\u7a0b\u5e8f\u8f6c\u6362\u4e3a\u591a\u7aef\u5e94\u7528",permalink:"/taro/blog/2018-12-18-taro-1-2"},nextItem:{title:"\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6 Taro 1.0 \u6b63\u5f0f\u53d1\u5e03",permalink:"/taro/blog/2018-09-18-taro-1-0-0"}},c=[{value:"Taro 1.1 \u6b63\u5f0f\u6765\u88ad",id:"taro-11-\u6b63\u5f0f\u6765\u88ad",children:[{value:"\u66f4\u4e30\u5bcc\u7684\u5e73\u53f0\u8f6c\u6362\u652f\u6301",id:"\u66f4\u4e30\u5bcc\u7684\u5e73\u53f0\u8f6c\u6362\u652f\u6301",children:[]},{value:"\u5f00\u653e\u591a\u7aef UI \u5e93\u6253\u5305\u80fd\u529b",id:"\u5f00\u653e\u591a\u7aef-ui-\u5e93\u6253\u5305\u80fd\u529b",children:[]},{value:"\u8fd8\u6709\u66f4\u591a",id:"\u8fd8\u6709\u66f4\u591a",children:[]}]},{value:"\u672a\u6765\u89c4\u5212",id:"\u672a\u6765\u89c4\u5212",children:[{value:"\u5c0f\u7a0b\u5e8f\u8f6c Taro \u4ee3\u7801\u5f00\u542f\u5185\u6d4b",id:"\u5c0f\u7a0b\u5e8f\u8f6c-taro-\u4ee3\u7801\u5f00\u542f\u5185\u6d4b",children:[]}]}],p={rightToc:c};function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"\u5728 9 \u6708 16 \u65e5\u7684\u6398\u91d1\u5c0f\u7a0b\u5e8f\u5927\u4f1a\u4e0a\uff0cTaro \u6b63\u5f0f\u53d1\u5e03\u4e86 1.0 \u7248\u672c\u3002"),Object(b.b)("p",null,"\u4f5c\u4e3a\u4e00\u4e2a\u591a\u7aef\u7edf\u4e00\u5f00\u53d1\u6846\u67b6\uff0cTaro 1.0 \u7248\u672c\u4e3a\u5e7f\u5927\u5f00\u53d1\u8005\u5e26\u6765\u4e86\u8bb8\u591a\u6fc0\u52a8\u4eba\u5fc3\u7684\u7279\u6027\uff0c\u5e2e\u52a9\u5f00\u53d1\u8005\u4eec\u66f4\u65b9\u4fbf\u5feb\u6377\u5730\u5f00\u53d1\u591a\u7aef\u5e94\u7528\u3002"),Object(b.b)("p",null,"\u524d\u8fdb\u7684\u811a\u6b65\u6ca1\u6709\u505c\u4e0b\uff0c\u5386\u65f6\u4e00\u4e2a\u591a\u6708\uff0cTaro 1.1 \u7248\u672c\u6b63\u5f0f\u6765\u88ad\uff01"),Object(b.b)("p",null,"\u4ece 1.0 \u5230 1.1\uff0c\u671f\u95f4\u4ea7\u751f\u4e86 ",Object(b.b)("strong",{parentName:"p"},"500")," \u4f59\u6b21 Commit\uff0c\u53d1\u5e03\u4e86 ",Object(b.b)("strong",{parentName:"p"},"23")," \u4e2a",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/master/CHANGELOG.md"}),"\u7248\u672c"),"\uff0cTaro \u4e00\u76f4\u4fdd\u6301\u9ad8\u901f\u7684\u8fed\u4ee3\u9891\u7387\uff0c\u53ea\u4e3a\u4e0d\u65ad\u6253\u78e8\uff0c\u4e3a\u5b83\u6ce8\u5165\u66f4\u591a\u4f18\u79c0\u7684\u7279\u6027\uff0c\u8ba9\u66f4\u591a\u5f00\u53d1\u8005\u53d7\u76ca\u3002"),Object(b.b)("h2",{id:"taro-11-\u6b63\u5f0f\u6765\u88ad"},"Taro 1.1 \u6b63\u5f0f\u6765\u88ad"),Object(b.b)("h3",{id:"\u66f4\u4e30\u5bcc\u7684\u5e73\u53f0\u8f6c\u6362\u652f\u6301"},"\u66f4\u4e30\u5bcc\u7684\u5e73\u53f0\u8f6c\u6362\u652f\u6301"),Object(b.b)("p",null,"\u81ea\u4ece",Object(b.b)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u8bde\u751f\u4ee5\u6765\uff0c\u5c0f\u7a0b\u5e8f\u7684\u4f18\u52bf\u5927\u5bb6\u6709\u76ee\u5171\u7779\uff0c\u5404\u5927\u4e92\u8054\u7f51\u5382\u5546\u5f00\u59cb\u6469\u62f3\u64e6\u638c\uff0c\u7eb7\u7eb7\u5e03\u5c40\u5c0f\u7a0b\u5e8f\u9886\u57df\uff0c\u5176\u4e2d\u52bf\u5934\u6700\u52b2\u7684\u5f53\u5c5e",Object(b.b)("strong",{parentName:"p"},"\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f"),"\u548c",Object(b.b)("strong",{parentName:"p"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),"\u3002\u5bf9\u4e8e\u524d\u7aef\u800c\u8a00\uff0c\u65e2\u662f\u673a\u9047\uff0c\u56e0\u4e3a\u5e73\u53f0\u6108\u591a\uff0c\u5e26\u6765\u7684\u673a\u4f1a\u6108\u591a\uff1b\u4e5f\u662f\u6311\u6218\uff0c\u56e0\u4e3a\u4e0d\u540c\u7684\u5e73\u53f0\u603b\u4f1a\u5404\u6709\u5dee\u5f02\uff0c\u4e3a\u6bcf\u4e2a\u5e73\u53f0\u7ef4\u62a4\u4e00\u4efd\u4ee3\u7801\uff0c\u6210\u672c\u663e\u7136\u592a\u9ad8\u3002"),Object(b.b)("p",null,"\u4e3a\u4e86\u964d\u4f4e\u591a\u7aef\u5e94\u7528\u7684\u5f00\u53d1\u6210\u672c\uff0c\u5728\u5df2\u5168\u9762\u652f\u6301 ",Object(b.b)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f")," \u7684\u57fa\u7840\u4e0a\uff0cTaro \u5728 1.1 \u7248\u672c\u4e2d\u52a0\u5165\u4e86\u5bf9 ",Object(b.b)("strong",{parentName:"p"},"\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f")," \u548c ",Object(b.b)("strong",{parentName:"p"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f")," \u7684\u652f\u6301\u3002"),Object(b.b)("h4",{id:"\u652f\u6301\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f"},"\u652f\u6301\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f"),Object(b.b)("p",null,"\u5347\u7ea7\u5230 1.1 \u7248\u672c\u540e\uff0c\u5373\u53ef\u83b7\u5f97\u5c06\u73b0\u6709\u9879\u76ee\u8f6c\u6362\u6210\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u7684\u80fd\u529b\u3002"),Object(b.b)("p",null,"\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u7aef\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# npm script\n$ npm run dev:swan\n$ npm run build:swan\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type swan --watch\n$ taro build --type swan\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type swan --watch\n$ npx taro build --type swan\n")),Object(b.b)("p",null,"\u9009\u62e9\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u4f60\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://smartprogram.baidu.com/docs/develop/devtools/show_sur/"}),"\u767e\u5ea6\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(b.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(b.b)("p",null,"\u76ee\u524d\u5df2\u6709\u4f7f\u7528 Taro \u5f00\u53d1\u7684\u9996\u6b3e\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f ",Object(b.b)("strong",{parentName:"p"},"\u201c\u4eac\u4e1c\u597d\u7269\u8857\u201d")," \u6b63\u5f0f\u4e0a\u7ebf\uff0c\u53ef\u4ee5\u4f7f\u7528\u767e\u5ea6 APP\uff0c\u626b\u63cf\u4ee5\u4e0b\u4e8c\u7ef4\u7801\u8fdb\u884c\u4f53\u9a8c\uff1a"),Object(b.b)("p",null,Object(b.b)("img",Object(n.a)({parentName:"p"},{src:"//img13.360buyimg.com/ling/jfs/t1/10931/36/2138/22454/5be02d3fE815a306d/0fc91ade32e59948.jpg",alt:null}))),Object(b.b)("h4",{id:"\u652f\u6301\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"},"\u652f\u6301\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),Object(b.b)("p",null,"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u7684\u8f6c\u6362\u65b9\u5f0f\u4e0e\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u4e00\u81f4\u3002"),Object(b.b)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u8fdb\u884c\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\u7aef\u7f16\u8bd1\u9884\u89c8\u53ca\u6253\u5305\uff1a"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"# npm script\n$ npm run dev:alipay\n$ npm run build:alipay\n# \u4ec5\u9650\u5168\u5c40\u5b89\u88c5\n$ taro build --type alipay --watch\n$ taro build --type alipay\n# npx \u7528\u6237\u4e5f\u53ef\u4ee5\u4f7f\u7528\n$ npx taro build --type alipay --watch\n$ npx taro build --type alipay\n")),Object(b.b)("p",null,"\u9009\u62e9\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u6a21\u5f0f\uff0c\u9700\u8981\u4f60\u4e0b\u8f7d\u5e76\u6253\u5f00",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.alipay.com/mini/developer/getting-started/"}),"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177"),"\uff0c\u7136\u540e\u5728\u9879\u76ee\u7f16\u8bd1\u5b8c\u540e\u9009\u62e9\u9879\u76ee\u6839\u76ee\u5f55\u4e0b ",Object(b.b)("inlineCode",{parentName:"p"},"dist")," \u76ee\u5f55\u8fdb\u884c\u9884\u89c8\u3002"),Object(b.b)("h4",{id:"\u65b0\u589e\u5e73\u53f0\u6807\u8bc6"},"\u65b0\u589e\u5e73\u53f0\u6807\u8bc6"),Object(b.b)("p",null,"\u5728\u52a0\u5165 ",Object(b.b)("strong",{parentName:"p"},"\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f")," \u548c ",Object(b.b)("strong",{parentName:"p"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f")," \u652f\u6301\u540e\uff0c\u76ee\u524d Taro \u5df2\u7ecf\u63d0\u4f9b\u4e86\u5bf9 ",Object(b.b)("strong",{parentName:"p"},"5")," \u4e2a\u5e73\u53f0\u7684\u652f\u6301\uff0c\u5206\u522b\u662f \u5fae\u4fe1/\u767e\u5ea6/\u652f\u4ed8\u5b9d/React Native/H5\uff0c\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\u8005\u4e66\u5199\u5e73\u53f0\u5dee\u5f02\u5316\u4ee3\u7801\uff0cTaro \u4e3a\u6bcf\u4e2a\u5e73\u53f0\u63d0\u4f9b\u4e86\u5e73\u53f0\u6807\u8bc6\uff0c\u5e76\u53ef\u4ee5\u901a\u8fc7 ",Object(b.b)("inlineCode",{parentName:"p"},"process.env.TARO_ENV")," \u6765\u83b7\u5f97\uff0c\u5176\u53d6\u503c\u5206\u522b\u5982\u4e0b"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"weapp"),"\uff0c\u4ee3\u8868\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"h5"),"\uff0c\u4ee3\u8868 H5"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"rn"),"\uff0c\u4ee3\u8868 React Native"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"swan"),"\uff0c\u4ee3\u8868\u767e\u5ea6\u667a\u80fd\u5c0f\u7a0b\u5e8f\uff0c",Object(b.b)("strong",{parentName:"li"},"1.1 \u7248\u672c\u65b0\u589e")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"alipay"),"\uff0c\u4ee3\u8868\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f\uff0c",Object(b.b)("strong",{parentName:"li"},"1.1 \u7248\u672c\u65b0\u589e"))),Object(b.b)("h3",{id:"\u5f00\u653e\u591a\u7aef-ui-\u5e93\u6253\u5305\u80fd\u529b"},"\u5f00\u653e\u591a\u7aef UI \u5e93\u6253\u5305\u80fd\u529b"),Object(b.b)("p",null,"\u5728 1.0 \u7248\u672c\u4e2d\uff0cTaro \u7684 ",Object(b.b)("inlineCode",{parentName:"p"},"build")," \u547d\u4ee4\u65b0\u589e\u4e86 ",Object(b.b)("inlineCode",{parentName:"p"},"--ui")," \u53c2\u6570\uff0c\u6765\u5c06\u6309\u7167\u4e00\u5b9a\u89c4\u5219\u7ec4\u7ec7\u7684\u4ee3\u7801\u6253\u5305\u6210\u53ef\u4ee5\u5728 Taro \u4e2d\u4f7f\u7528\u7684\u591a\u7aef UI \u5e93\u3002 \u5e76\u4e14\uff0c\u57fa\u4e8e\u8fd9\u4e00\u529f\u80fd\uff0cTaro \u63a8\u51fa\u4e86\u9996\u4e2a\u53ef\u4ee5\u8de8\u591a\u7aef\u4f7f\u7528\u7684\u591a\u7aef UI \u5e93 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://taro-ui.aotu.io/#/"}),"Taro UI"),"\u3002"),Object(b.b)("p",null,"\u4e3a\u4e86\u5b8c\u5584 Taro \u751f\u6001\uff0c\u6269\u5c55 Taro \u793e\u533a\uff0c\u5728 1.1 \u7248\u672c\u4e2d\u5f00\u653e\u4e86\u591a\u7aef UI \u5e93\u7684\u6253\u5305\u80fd\u529b\uff0c\u5e76\u63d0\u4f9b\u4e86\u8be6\u7ec6\u7684",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://nervjs.github.io/taro/docs/ui-lib.html"}),"\u5f00\u53d1\u6307\u5357"),"\u3002"),Object(b.b)("p",null,"\u540c\u65f6 Taro \u4e5f\u63d0\u4f9b\u4e86\u5b98\u65b9\u7684\u591a\u7aef UI \u5e93",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro-ui-sample"}),"\u793a\u4f8b"),"\uff0c\u8fd9\u662f\u4e00\u4e2a\u5b8c\u6574\u89c4\u8303\u7684 UI \u5e93\u5f00\u53d1\u4f8b\u5b50\uff0c\u5305\u542b\u5fc5\u8981\u7684\u9879\u76ee\u6539\u9020\u4ee5\u53ca\u6d4b\u8bd5\u5957\u4ef6\uff0c\u57fa\u4e8e\u8fd9\u4e2a\u793a\u4f8b\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u5feb\u901f\u5730\u5f00\u53d1\u4e00\u4e2a\u591a\u7aef UI \u5e93\u9879\u76ee\u3002"),Object(b.b)("h3",{id:"\u8fd8\u6709\u66f4\u591a"},"\u8fd8\u6709\u66f4\u591a"),Object(b.b)("p",null,"\u5728 1.0 \u7248\u672c\u4e2d\uff0cTaro \u63d0\u4f9b\u4e86\u5bf9 ",Object(b.b)("strong",{parentName:"p"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),"\u3001",Object(b.b)("strong",{parentName:"p"},"H5")," \u4ee5\u53ca ",Object(b.b)("strong",{parentName:"p"},"React Native")," \u7684\u652f\u6301\uff0c\u800c 1.1 \u7248\u672c\uff0c\u5728\u539f\u6709\u652f\u6301\u7684\u57fa\u7840\u4e4b\u4e0a\uff0c\u5bf9\u6bcf\u4e00\u4e2a\u5e73\u53f0\u8fdb\u884c\u4e0d\u65ad\u5b8c\u5584\uff0c\u8ba9\u5176\u66f4\u52a0\u4e30\u5bcc\u5b8c\u6574\u3002"),Object(b.b)("h4",{id:"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"this.setState")," \u65f6\uff0cJSON Diff \u7b97\u6cd5 Bug \u4fee\u590d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4fee\u590d ",Object(b.b)("inlineCode",{parentName:"li"},"this.setState"),"  \u56de\u8c03\u91cc\u518d\u8c03\u7528 ",Object(b.b)("inlineCode",{parentName:"li"},"this.setState")," \u7684 Bug"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u65b0\u589e ",Object(b.b)("inlineCode",{parentName:"li"},"componentWillPreload"),"  \u751f\u547d\u5468\u671f\uff0c\u7528\u4e8e\u6570\u636e\u9884\u52a0\u8f7d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u652f\u6301\u5728\u540c\u4e00\u4f5c\u7528\u57df\u5bf9 JSX \u8d4b\u503c"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u591a\u5c42 Map \u5faa\u73af\u5d4c\u5957\u5305\u542b\u6761\u4ef6\u5224\u65ad\u65f6\u95ee\u9898\u4fee\u590d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4e2d\u6587\u5b57\u7b26\u88ab\u7f16\u8bd1\u6210 unicode \u7801\u95ee\u9898\u4fee\u590d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4e09\u5143\u8868\u8fbe\u5f0f\u89e3\u6790\u95ee\u9898\u4fee\u590d"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u63d0\u5347\u5b57\u7b26\u4e32\u6a21\u677f\u7684\u6027\u80fd")),Object(b.b)("h4",{id:"h5"},"H5"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," H5 \u652f\u6301\u5206\u5305\u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4fee\u590d H5 \u540e\u53f0\u9875\u9762\u4f9d\u7136\u6267\u884c\u751f\u547d\u5468\u671f\u7684\u95ee\u9898"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4fee\u590d PUT \u3001DELETE \u7b49\u8bf7\u6c42 body \u4e3a\u5bf9\u8c61\u65f6\u65e0\u6cd5\u53d1\u9001 body \u7684\u95ee\u9898 "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u589e\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"setTabBarStyle")," \u4e0e ",Object(b.b)("inlineCode",{parentName:"li"},"setTabBarItem")," API"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u589e\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"arrayBufferToBase64")," \u4e0e ",Object(b.b)("inlineCode",{parentName:"li"},"base64ToArrayBuffer")," API"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u7f16\u8bd1\u6253\u5305\u652f\u6301\u5c06\u516c\u5171 npm \u5305\u62bd\u79bb\u6210 lib \u5e93")),Object(b.b)("h4",{id:"react-native"},"React Native"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u652f\u6301 TypeScript"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4fee\u590d\u9879\u76ee\u521d\u59cb\u5316\u540e less \u7f16\u8bd1\u62a5\u9519"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u6dfb\u52a0 config.window.navigationStyle \u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u6dfb\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"showNavigationBarLoading")," \u4e0e ",Object(b.b)("inlineCode",{parentName:"li"},"hideNavigationBarLoading")," API"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u589e\u52a0 ",Object(b.b)("inlineCode",{parentName:"li"},"arrayBufferToBase64")," \u4e0e ",Object(b.b)("inlineCode",{parentName:"li"},"base64ToArrayBuffer")," API"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4fee\u590d\u6837\u5f0f\u652f\u6301\u8b66\u544a"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," watch \u6a21\u5f0f\u65f6\u4ee3\u7801\u6309\u9700\u7f16\u8bd1"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," \u4fee\u590d\u540c\u4e00\u6587\u4ef6\u5939\u4e0b\u591a\u4e2aJS\u6587\u4ef6\u6837\u5f0f\u5f15\u7528\u9519\u8bef"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," app.json \u7684 expo \u914d\u7f6e\u6539\u4e3a\u53ef\u8986\u76d6"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u652f\u6301 ",Object(b.b)("inlineCode",{parentName:"li"},"Taro.pxTransform")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"F")," iconPath \u548c selectedPath \u7684\u4e3a\u540c\u4e00\u4e2a\u8def\u5f84\u5bfc\u81f4\u7684\u91cd\u590d\u5f15\u7528\u7684\u62a5\u9519 "),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u5728 config \u4e2d\u6dfb\u52a0 rn \u7684 expo \u914d\u7f6e"),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"A")," \u652f\u6301 deviceRatio \u81ea\u5b9a\u4e49")),Object(b.b)("p",null,"\u66f4\u5b8c\u6574\u7684\u529f\u80fd\u8fed\u4ee3\u8bb0\u5f55\u8bf7\u53c2\u9605 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/master/CHANGELOG.md"}),"CHANGELOG")),Object(b.b)("h2",{id:"\u672a\u6765\u89c4\u5212"},"\u672a\u6765\u89c4\u5212"),Object(b.b)("p",null,"Taro \u5c06\u4f1a\u7ee7\u7eed\u4fdd\u6301\u9ad8\u6548\u8fed\u4ee3\uff0c\u4ee5\u6ee1\u8db3\u65e5\u76ca\u589e\u957f\u7684\u591a\u7aef\u5f00\u53d1\u9700\u6c42"),Object(b.b)("p",null,"\u76ee\u524d\u5df2\u7ecf\u786e\u8ba4\u7684\u5f00\u53d1\u8ba1\u5212\u53ef\u4ee5\u53c2\u89c1 ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/blob/master/PLANS.md"}),"Taro \u7248\u672c\u5f00\u53d1\u8ba1\u5212"),"\u3002"),Object(b.b)("h3",{id:"\u5c0f\u7a0b\u5e8f\u8f6c-taro-\u4ee3\u7801\u5f00\u542f\u5185\u6d4b"},"\u5c0f\u7a0b\u5e8f\u8f6c Taro \u4ee3\u7801\u5f00\u542f\u5185\u6d4b"),Object(b.b)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u6fc0\u52a8\u4eba\u5fc3\u7684\u5c0f\u7a0b\u5e8f\u8f6c Taro \u4ee3\u7801\u529f\u80fd\u5df2\u7ecf\u5f00\u53d1\u5b8c\u6210\uff0c\u8fdb\u5165\u5185\u6d4b\u9636\u6bb5\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5b89\u88c5\u5230 ",Object(b.b)("inlineCode",{parentName:"p"},"canary")," \u7248\u672c\uff0c\u8fdb\u884c\u4f53\u9a8c"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"$ npm i -g @tarojs/cli@canary\n")),Object(b.b)("p",null,"\u6b22\u8fce\u9488\u5bf9\u8fd9\u4e00\u529f\u80fd\uff0c\u63d0\u4f9b\u5b9d\u8d35\u610f\u89c1\uff0c\u610f\u89c1\u5165\u53e3",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues/955"}),"\u8bf7\u6233")," \ud83d\udc48\ud83d\udc48\ud83d\udc48"),Object(b.b)("p",null,"\u540c\u65f6\uff0c\u4e3a\u4e86\u5e2e\u52a9 Taro \u66f4\u597d\u5730\u6210\u957f\uff0c\u8ba9 Taro \u66f4\u597d\u5730\u56de\u9988\u6240\u6709\u5f00\u53d1\u8005\uff0c\u6b22\u8fce\u60a8\u7ed9 Taro \u63d0\u4f9b",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/issues"}),"\u4f18\u79c0\u60f3\u6cd5"),"\uff0c\u6216\u8005\u76f4\u63a5\u8d21\u732e",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/NervJS/taro/pulls"}),"\u4ee3\u7801"),"\u3002"))}o.isMDXComponent=!0},1791:function(e,t,a){"use strict";a.d(t,"a",(function(){return O})),a.d(t,"b",(function(){return u}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=r.a.createContext({}),o=function(e){var t=r.a.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},O=function(e){var t=o(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},j=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),O=o(a),j=n,u=O["".concat(i,".").concat(j)]||O[j]||m[j]||b;return a?r.a.createElement(u,l({ref:t},p,{components:a})):r.a.createElement(u,l({ref:t},p))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,i=new Array(b);i[0]=j;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<b;p++)i[p]=a[p];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"}}]);