"use strict";(self.webpackChunkepti_doc=self.webpackChunkepti_doc||[]).push([[636],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(r),f=i,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return r?n.createElement(m,a(a({ref:t},s),{},{components:r})):n.createElement(m,a({ref:t},s))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3776:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:1},a="Git \u4ee3\u7801\u7248\u672c\u63a7\u5236",c={unversionedId:"\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/git",id:"\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/git",title:"Git \u4ee3\u7801\u7248\u672c\u63a7\u5236",description:"EPTI \u4f7f\u7528 Gitea \u4f5c\u4e3a\u8f7b\u91cf\u5316\u7684 Git \u8fdc\u7aef\u3002\u63d0\u4f9b\u57fa\u4e8e HTTPS \u7684\u4ee3\u7801\u6258\u7ba1\u3002",source:"@site/docs/\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/git.md",sourceDirName:"\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa",slug:"/\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/git",permalink:"/docs/\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/git",draft:!1,editUrl:"https://git.uicai.ml/server_maintainer/epti-docs/docs/\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/git.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa",permalink:"/docs/category/\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa"},next:{title:"\u6301\u7eed\u6784\u5efa\u4e0e\u96c6\u6210",permalink:"/docs/\u4ee3\u7801\u6258\u7ba1\u548c\u6301\u7eed\u6784\u5efa/ci"}},l={},p=[{value:"\u8bbe\u5b9a\u8d26\u53f7\u5bc6\u7801",id:"\u8bbe\u5b9a\u8d26\u53f7\u5bc6\u7801",level:2},{value:"\u4ed3\u5e93\u6743\u9650",id:"\u4ed3\u5e93\u6743\u9650",level:2}],s={toc:p};function u(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"git-\u4ee3\u7801\u7248\u672c\u63a7\u5236"},"Git \u4ee3\u7801\u7248\u672c\u63a7\u5236"),(0,i.kt)("p",null,"EPTI \u4f7f\u7528 Gitea \u4f5c\u4e3a\u8f7b\u91cf\u5316\u7684 Git \u8fdc\u7aef\u3002\u63d0\u4f9b\u57fa\u4e8e HTTPS \u7684\u4ee3\u7801\u6258\u7ba1\u3002"),(0,i.kt)("h2",{id:"\u8bbe\u5b9a\u8d26\u53f7\u5bc6\u7801"},"\u8bbe\u5b9a\u8d26\u53f7\u5bc6\u7801"),(0,i.kt)("h2",{id:"\u4ed3\u5e93\u6743\u9650"},"\u4ed3\u5e93\u6743\u9650"))}u.isMDXComponent=!0}}]);