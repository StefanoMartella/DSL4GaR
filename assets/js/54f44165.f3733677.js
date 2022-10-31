"use strict";(self.webpackChunkdsl_gamification=self.webpackChunkdsl_gamification||[]).push([[152],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},681:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:1},i="Installation",l={unversionedId:"getting-started/installation",id:"getting-started/installation",title:"Installation",description:"DSLGa is essentially a maven dependency.",source:"@site/docs/getting-started/installation.md",sourceDirName:"getting-started",slug:"/getting-started/installation",permalink:"/DSLGa/docs/getting-started/installation",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/getting-started/installation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/DSLGa/docs/category/getting-started"},next:{title:"Usage",permalink:"/DSLGa/docs/category/usage"}},s={},c=[{value:"Requirements",id:"requirements",level:2},{value:"Setup",id:"setup",level:2},{value:"Problems?",id:"problems",level:2}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"installation"},"Installation"),(0,a.kt)("p",null,"DSLGa is essentially a maven dependency."),(0,a.kt)("admonition",{title:"Maven repository",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The package is not available through maven repository yet.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",null," Java SDK 11 or above. You can download it from:"),(0,a.kt)("ul",null,(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://docs.aws.amazon.com/corretto/latest/corretto-11-ug/downloads-list.html"},"Amazon corretto")),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://adoptopenjdk.net/"},"AdoptJDK"))),(0,a.kt)("li",null,(0,a.kt)("a",{href:"https://maven.apache.org/download.cgi"},"Maven")," version 3 or above.")),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Since the .jar of the project is not yet available from the maven repository, it is necessary to build the project autonomously by downloading it from ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antbucc/GRL"},"here"),". ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Add the generated jar dependency to the project by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mvn install:install-file -Dfile=path/to/the/gamification-dsl-1.0-SNAPSHOT.jar -DgroupId=it.univaq.gamification -DartifactId=gamification-dsl -Dversion=1.0-SNAPSHOT -Dpackaging=jar -DgeneratePom=true\n")),(0,a.kt)("p",null,"The pom should be updated as follow:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="pom.xml"',title:'"pom.xml"'},"<dependencies>\n\n    // Other dependencies\n\n    <dependency>\n        <groupId>it.univaq.gamification</groupId>\n        <artifactId>gamification-dsl</artifactId>\n        <version>1.0-SNAPSHOT</version>\n    </dependency>\n\n</dependencies>\n")),(0,a.kt)("br",null),(0,a.kt)("p",null,"That's it, you can start using the DSL for designing rules! \ud83e\udd73"),(0,a.kt)("h2",{id:"problems"},"Problems?"),(0,a.kt)("p",null,"Ask for help or notify some lack on this documentation ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/antbucc/GRL/issues"},"here"),". \ud83d\ude4f\ud83c\udffb"))}u.isMDXComponent=!0}}]);