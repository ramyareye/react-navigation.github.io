(self.webpackChunkreact_navigation_website_next=self.webpackChunkreact_navigation_website_next||[]).push([[3969],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,h=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<r;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95467:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var a=n(74034),i=n(79973),r=(n(67294),n(3905)),o={id:"animated-switch-navigator",title:"createAnimatedSwitchNavigator",sidebar_label:"createAnimatedSwitchNavigator"},c={unversionedId:"animated-switch-navigator",id:"version-3.x/animated-switch-navigator",isDocsHomePage:!1,title:"createAnimatedSwitchNavigator",description:"A SwitchNavigator with animation support.",source:"@site/versioned_docs/version-3.x/animated-switch-navigator.md",sourceDirName:".",slug:"/animated-switch-navigator",permalink:"/docs/3.x/animated-switch-navigator",editUrl:"https://github.com/react-navigation/react-navigation.github.io/edit/main/versioned_docs/version-3.x/animated-switch-navigator.md",version:"3.x",sidebar_label:"createAnimatedSwitchNavigator",frontMatter:{id:"animated-switch-navigator",title:"createAnimatedSwitchNavigator",sidebar_label:"createAnimatedSwitchNavigator"},sidebar:"version-3.x-docs",previous:{title:"createSwitchNavigator",permalink:"/docs/3.x/switch-navigator"},next:{title:"createDrawerNavigator",permalink:"/docs/3.x/drawer-navigator"}},s=[{value:"API Definition",id:"api-definition",children:[]},{value:"RouteConfigs",id:"routeconfigs",children:[]},{value:"SwitchNavigatorConfig",id:"switchnavigatorconfig",children:[]}],l={toc:s};function p(e){var t=e.components,n=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"A ",(0,r.kt)("inlineCode",{parentName:"p"},"SwitchNavigator")," with animation support."),(0,r.kt)("p",null,"To use this navigator, you need to install ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated >= 1.0.0"),". If you have a managed Expo project, you need to use >= SDK 33 to have the correct version of Reanimated."),(0,r.kt)("h2",{id:"api-definition"},"API Definition"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';\n\ncreateAnimatedSwitchNavigator(RouteConfigs, SwitchNavigatorConfig);\n")),(0,r.kt)("h2",{id:"routeconfigs"},"RouteConfigs"),(0,r.kt)("p",null,"The route configs are identical to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/switch-navigator"},"createSwitchNavigator")),(0,r.kt)("h2",{id:"switchnavigatorconfig"},"SwitchNavigatorConfig"),(0,r.kt)("p",null,"The switch navigator configs are identical to ",(0,r.kt)("a",{parentName:"p",href:"/docs/3.x/switch-navigator"},"createSwitchNavigator"),"."),(0,r.kt)("p",null,"By default, the transition between screens is a cross-fade. You can customize the transition with an additional option ",(0,r.kt)("inlineCode",{parentName:"p"},"transition"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import createAnimatedSwitchNavigator from \'react-navigation-animated-switch\';\nimport { Transition } from \'react-native-reanimated\';\n\nconst MySwitch = createAnimatedSwitchNavigator(\n  {\n    Home: HomeScreen,\n    Other: OtherScreen,\n  },\n  {\n    // The previous screen will slide to the bottom while the next screen will fade in\n    transition: (\n      <Transition.Together>\n        <Transition.Out\n          type="slide-bottom"\n          durationMs={400}\n          interpolation="easeIn"\n        />\n        <Transition.In type="fade" durationMs={500} />\n      </Transition.Together>\n    ),\n  }\n);\n')),(0,r.kt)("p",null,"Since the transition are possible thanks to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Transition")," API from ",(0,r.kt)("inlineCode",{parentName:"p"},"react-native-reanimated"),", you can learn more about it ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"here"),"."))}p.isMDXComponent=!0}}]);