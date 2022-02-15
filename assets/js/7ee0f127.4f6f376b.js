"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[5458],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,g=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?r.createElement(g,o(o({ref:t},u),{},{components:n})):r.createElement(g,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8055:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return u},metadata:function(){return d},toc:function(){return c},default:function(){return f}});var r,a=n(7462),i=n(3366),o=(n(7294),n(3905)),l=n(5108),s=["components"],p={id:"defender",title:"Defender Status",description:"Deploy applications using the Chocolatey package manager.",slug:"/usingcipp/endpointmanagement/defender"},u=void 0,d={unversionedId:"usingcipp/endpointmanagement/defender",id:"usingcipp/endpointmanagement/defender",title:"Defender Status",description:"Deploy applications using the Chocolatey package manager.",source:"@site/docs/user/usingcipp/endpointmanagement/defender.mdx",sourceDirName:"usingcipp/endpointmanagement",slug:"/usingcipp/endpointmanagement/defender",permalink:"/docs/user/usingcipp/endpointmanagement/defender",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/endpointmanagement/defender.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644938537,formattedLastUpdatedAt:"15/02/2022",frontMatter:{id:"defender",title:"Defender Status",description:"Deploy applications using the Chocolatey package manager.",slug:"/usingcipp/endpointmanagement/defender"},sidebar:"userSidebar",previous:{title:"MEM (Intune) Policy Templates",permalink:"/docs/user/usingcipp/endpointmanagement/mempolicytemplates"},next:{title:"Teams, OneDrive & Sharepoint",permalink:"/docs/user/usingcipp/teamsonedrivesharepoint"}},c=[{value:"Details",id:"details",children:[],level:2},{value:"Known Issues / Limitations",id:"known-issues--limitations",children:[],level:2}],m=(r="OtherIssues",function(e){return l.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),g={toc:c};function f(e){var t=e.components,n=(0,i.Z)(e,s);return(0,o.kt)("wrapper",(0,a.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This page lists the defender status for all enrolled devices in a tenant.\nThis includes whether there are active threats, the status of various components / services, the status of scans and, whether the device requires action."),(0,o.kt)("h2",{id:"details"},"Details"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Field"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Device Name"),(0,o.kt)("td",{parentName:"tr",align:null},"The name of the device.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Malware Protection"),(0,o.kt)("td",{parentName:"tr",align:null},"The status of the Malware Protection service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Real Time Protection"),(0,o.kt)("td",{parentName:"tr",align:null},"The status of the Real Time Protection service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Network Inspection"),(0,o.kt)("td",{parentName:"tr",align:null},"The status of the Network Inspection service.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Last Reported Health State"),(0,o.kt)("td",{parentName:"tr",align:null},"The last reported health state of the device.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Quick Scan Overdue"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the quick scan is overdue.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Full Scan Overdue"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the full scan is overdue.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Signature Update Required"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the device has all available signature updates.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Reboot Required"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the device requires a restart.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Attention Required"),(0,o.kt)("td",{parentName:"tr",align:null},"Whether the device requires attention.")))),(0,o.kt)("h2",{id:"known-issues--limitations"},"Known Issues / Limitations"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"You must be a current Microsoft Lighthouse partner, and your tenants must be on-boarded to Lighthouse before you can use this."),(0,o.kt)("li",{parentName:"ul"},'The UI is somewhat mixed currently, as for example, it reports a "red cross - danger" warning if a Signature Update isn\'t required. This should arguably be a green tick.')),(0,o.kt)(m,{mdxType:"OtherIssues"}))}f.isMDXComponent=!0}}]);