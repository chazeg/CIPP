"use strict";(self.webpackChunkcipp_docs=self.webpackChunkcipp_docs||[]).push([[2497],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),d=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,v=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return n?i.createElement(v,o(o({ref:t},p),{},{components:n})):i.createElement(v,o({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var d=2;d<a;d++)o[d]=n[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7331:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return c},default:function(){return f}});var i=n(7462),r=n(3366),a=(n(7294),n(3905)),o=n(5108),l=["components"],s={id:"autopilotdevices",title:"Autopilot Devices",description:"Manage Autopilot devices across your Microsoft 365 tenants.",slug:"/usingcipp/endpointmanagement/autopilotdevices"},d=void 0,p={unversionedId:"usingcipp/endpointmanagement/autopilotdevices",id:"usingcipp/endpointmanagement/autopilotdevices",title:"Autopilot Devices",description:"Manage Autopilot devices across your Microsoft 365 tenants.",source:"@site/docs/user/usingcipp/endpointmanagement/autopilotdevices.mdx",sourceDirName:"usingcipp/endpointmanagement",slug:"/usingcipp/endpointmanagement/autopilotdevices",permalink:"/docs/user/usingcipp/endpointmanagement/autopilotdevices",editUrl:"https://github.com/KelvinTegelaar/CIPP/tree/website/docs/user/usingcipp/endpointmanagement/autopilotdevices.mdx",tags:[],version:"current",lastUpdatedBy:"KelvinTegelaar",lastUpdatedAt:1644938537,formattedLastUpdatedAt:"15/02/2022",frontMatter:{id:"autopilotdevices",title:"Autopilot Devices",description:"Manage Autopilot devices across your Microsoft 365 tenants.",slug:"/usingcipp/endpointmanagement/autopilotdevices"},sidebar:"userSidebar",previous:{title:"Add Chocolatey App",permalink:"/docs/user/usingcipp/endpointmanagement/addchocoapp"},next:{title:"Autopilot Profiles",permalink:"/docs/user/usingcipp/endpointmanagement/autopilotprofiles"}},c=[{value:"Add Device",id:"add-device",children:[{value:"Details",id:"adddevice-details",children:[],level:3},{value:"Known Issues / Limitations",id:"adddevice-knownissues",children:[],level:3}],level:2},{value:"List Devices",id:"list-devices",children:[{value:"Details",id:"listdevices-details",children:[],level:3},{value:"Actions",id:"listdevices-actions",children:[],level:3},{value:"Known Issues / Limitations",id:"listdevices-knownissues",children:[],level:3}],level:2}],u=function(e){return function(t){return o.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)}},m=u("OtherIssues"),v=u("NoKnownIssues"),g={toc:c};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,a.kt)("wrapper",(0,i.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The following two pages in CIPP give you the ability to manage Autopilot devices:"),(0,a.kt)("h2",{id:"add-device"},"Add Device"),(0,a.kt)("p",null,"Add autopilot devices by following the Wizard on this page."),(0,a.kt)("h3",{id:"adddevice-details"},"Details"),(0,a.kt)("p",null,"As a partner, you can register devices to Windows Autopilot using any one of these methods:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hardware Hash (available from OEM or on-device script)"),(0,a.kt)("li",{parentName:"ul"},"Combination of Manufacturer, Device Model and Device Serial Number"),(0,a.kt)("li",{parentName:"ul"},"Windows Product Key ID")),(0,a.kt)("h3",{id:"adddevice-knownissues"},"Known Issues / Limitations"),(0,a.kt)("p",null,"The API can't directly return errors currently, which means that generic errors like those listed below might appear."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"400")," - You've entered wrong data, check the information and try again"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"500")," - The application doesn't have access to the partner center"),(0,a.kt)(m,{mdxType:"OtherIssues"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"list-devices"},"List Devices"),(0,a.kt)("p",null,"This page lists all devices registered for Autopilot."),(0,a.kt)("h3",{id:"listdevices-details"},"Details"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Fields"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Display Name"),(0,a.kt)("td",{parentName:"tr",align:null},"The display name of the device.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Serial"),(0,a.kt)("td",{parentName:"tr",align:null},"The serial number of the device.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Model"),(0,a.kt)("td",{parentName:"tr",align:null},"The model of the device.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Manufacturer"),(0,a.kt)("td",{parentName:"tr",align:null},"The manufacturer of the device.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Group Tag"),(0,a.kt)("td",{parentName:"tr",align:null},"The autopilot group tag assigned to the device.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"Enrollment"),(0,a.kt)("td",{parentName:"tr",align:null},"The enrollment status of the device.")))),(0,a.kt)("h3",{id:"listdevices-actions"},"Actions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delete Device - ",(0,a.kt)("em",{parentName:"li"},"This deletes the autopilot enrollment for the device."))),(0,a.kt)("h3",{id:"listdevices-knownissues"},"Known Issues / Limitations"),(0,a.kt)(v,{mdxType:"NoKnownIssues"}))}f.isMDXComponent=!0}}]);