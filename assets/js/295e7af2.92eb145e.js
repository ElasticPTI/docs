"use strict";(self.webpackChunkepti_doc=self.webpackChunkepti_doc||[]).push([[373],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>m});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=i,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||s;return t?n.createElement(f,a(a({ref:r},c),{},{components:t})):n.createElement(f,a({ref:r},c))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var s=t.length,a=new Array(s);a[0]=d;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3583:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var n=t(7462),i=(t(7294),t(3905));const s={sidebar_position:1},a="\u6587\u4ef6\u7cfb\u7edf\u6982\u8ff0",o={unversionedId:"\u5b58\u50a8/overview-for-filesystem",id:"\u5b58\u50a8/overview-for-filesystem",title:"\u6587\u4ef6\u7cfb\u7edf\u6982\u8ff0",description:"\u7cfb\u7edf\u7684\u7269\u7406\u5b58\u50a8\u5305\u542b\u670d\u52a1\u5668\u4e0a\uff0c480G SSD \uff08\u4e24\u5757 RAID 1\uff0c\u53ef\u7528\u5bb9\u91cf 480G\uff09\u3002\u548c\u901a\u8fc7 Fiber Channel \u8fde\u63a5\u7684 ME4012 \u5b58\u50a8\u9635\u5217 \uff0812 \u5757\uff08192 T\uff09RAID 5\uff0c\u53ef\u7528\u5bb9\u91cf 160 T\uff09\u3002",source:"@site/docs/\u5b58\u50a8/overview-for-filesystem.md",sourceDirName:"\u5b58\u50a8",slug:"/\u5b58\u50a8/overview-for-filesystem",permalink:"/docs/\u5b58\u50a8/overview-for-filesystem",draft:!1,editUrl:"https://git.uicai.ml/server_maintainer/epti-docs/docs/\u5b58\u50a8/overview-for-filesystem.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\u5b58\u50a8",permalink:"/docs/category/\u5b58\u50a8"},next:{title:"\u516c\u7528\u6587\u4ef6\u76ee\u5f55",permalink:"/docs/\u5b58\u50a8/shared-file-dir"}},l={},u=[{value:"\u6027\u80fd\u6d4b\u8bd5",id:"\u6027\u80fd\u6d4b\u8bd5",level:2},{value:"hdparm",id:"hdparm",level:3},{value:"fio",id:"fio",level:3}],c={toc:u};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u6587\u4ef6\u7cfb\u7edf\u6982\u8ff0"},"\u6587\u4ef6\u7cfb\u7edf\u6982\u8ff0"),(0,i.kt)("p",null,"\u7cfb\u7edf\u7684\u7269\u7406\u5b58\u50a8\u5305\u542b\u670d\u52a1\u5668\u4e0a\uff0c480G SSD \uff08\u4e24\u5757 RAID 1\uff0c\u53ef\u7528\u5bb9\u91cf 480G\uff09\u3002\u548c\u901a\u8fc7 Fiber Channel \u8fde\u63a5\u7684 ME4012 \u5b58\u50a8\u9635\u5217 \uff0812 \u5757\uff08192 T\uff09RAID 5\uff0c\u53ef\u7528\u5bb9\u91cf 160 T\uff09\u3002"),(0,i.kt)("p",null,"\u56e0\u4e3a\u7528\u6237\u53ea\u80fd\u901a\u8fc7 JupyterHub \u6216 File Browser\uff08\u9700\u8981\u7533\u8bf7\u4f7f\u7528\u6743\u9650\uff09\u8bbf\u95ee\u6587\u4ef6\u76ee\u5f55\uff0c\u6240\u4ee5\u76ee\u524d\u6587\u4ef6\u7684\u5b58\u50a8\u91c7\u7528\u5206\u5c42\u8bbe\u8ba1\u3002\u5305\u62ec\u6302\u8f7d\u5728 SSD \u4e0a\u7684\u5de5\u4f5c\u76ee\u5f55\u3002\u548c\u6302\u8f7d\u5728\u5b58\u50a8\u9635\u5217\u4e0a\u7684\u51b7\u5b58\u50a8\u76ee\u5f55\u548c\u5171\u4eab\u5171\u7528\u76ee\u5f55\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"./ (\u6839\u76ee\u5f55\u6587\u4ef6\u5939)\n\u251c\u2500\u2500  public/ (\u516c\u5171\u6570\u636e\u96c6\u3001\u8f6f\u4ef6\u5305\u5b58\u653e\u70b9)\n\u251c\u2500\u2500  shared/ (\u4e2a\u4eba\u51b7\u6570\u636e\u5b58\u50a8\u70b9\uff0c\u8bf7\u81ea\u884c\u4ee5\u81ea\u5df1\u540d\u5b57\u547d\u540d\u7684\u6587\u4ef6\u5939)\n\u251c\u2500\u2500  work/ (\u4e2a\u4eba\u5de5\u4f5c\u6570\u636e\u5b58\u50a8\u70b9\uff0c\u8bf7\u5b9a\u671f\u8fc1\u79fb\u5230 shared \u4e2d)\n\u251c\u2500\u2500  \u4f7f\u7528\u4ecb\u7ecd.md* \uff08\u53ea\u8bfb\u6587\u4ef6\uff09\n\u2514\u2500\u2500  \u5176\u4ed6\u4e2a\u4eba\u6587\u4ef6 ...\n")),(0,i.kt)("h2",{id:"\u6027\u80fd\u6d4b\u8bd5"},"\u6027\u80fd\u6d4b\u8bd5"),(0,i.kt)("h3",{id:"hdparm"},"hdparm"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"SSD ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/dev/mapper/ubuntu--vg-ubuntu--lv:\n Timing cached reads:   18358 MB in  2.00 seconds = 9190.99 MB/sec\n Timing buffered disk reads: 2156 MB in  3.00 seconds = 718.00 MB/sec\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u9635\u5217\uff08HDD\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/dev/mapper/mpatha-part1:\n Timing cached reads:   18896 MB in  2.00 seconds = 9460.82 MB/sec\n Timing buffered disk reads: 4108 MB in  3.00 seconds = 1368.92 MB/sec\n")),(0,i.kt)("h3",{id:"fio"},"fio"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6df7\u5408\u968f\u673a\u8bfb\u5199 SSD")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"READ: bw=1186MiB/s (1243MB/s), 1186MiB/s-1186MiB/s (1243MB/s-1243MB/s), io=14.0GiB (15.0GB), run=12088-12088msec\n  WRITE: bw=509MiB/s (533MB/s), 509MiB/s-509MiB/s (533MB/s-533MB/s), io=6149MiB (6447MB), run=12088-12088msec\n\nDisk stats (read/write):\n    dm-0: ios=911176/391956, merge=0/0, ticks=83828/24488, in_queue=108316, util=99.31%, aggrios=917205/393886, aggrmerge=5/807, aggrticks=84741/24759, aggrin_queue=109500, aggrutil=99.16%\n  sda: ios=917205/393886, merge=5/807, ticks=84741/24759, in_queue=109500, util=99.16%\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6df7\u5408\u968f\u673a\u8bfb\u5199 \u9635\u5217\uff08HDD\uff09")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"READ: bw=33.0MiB/s (34.6MB/s), 33.0MiB/s-33.0MiB/s (34.6MB/s-34.6MB/s), io=1998MiB (2095MB), run=60484-60484msec\n  WRITE: bw=14.1MiB/s (14.8MB/s), 14.1MiB/s-14.1MiB/s (14.8MB/s-14.8MB/s), io=855MiB (897MB), run=60484-60484msec\n\nDisk stats (read/write):\n    dm-2: ios=127885/54819, merge=0/0, ticks=574860/21808, in_queue=596668, util=99.20%, aggrios=255770/109568, aggrmerge=0/29, aggrticks=1151571/44080, aggrin_queue=1195656, aggrutil=99.31%\n    dm-1: ios=255770/109568, merge=0/29, ticks=1151571/44080, in_queue=1195656, util=99.31%, aggrios=19/0, aggrmerge=0/0, aggrticks=2/0, aggrin_queue=2, aggrutil=0.12%\n  sdb: ios=32/0, merge=0/0, ticks=5/0, in_queue=5, util=0.12%\n  sdc: ios=6/0, merge=0/0, ticks=0/0, in_queue=0, util=0.02%\n")))}p.isMDXComponent=!0}}]);