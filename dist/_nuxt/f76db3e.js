(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{417:function(t,e,r){"use strict";r(13),r(16),r(24),r(25);var n=r(2),o=(r(6),r(38),r(14),r(23),r(53),r(403),r(47),r(404),r(405),r(406),r(407),r(408),r(409),r(410),r(411),r(412),r(413),r(414),r(415),r(416),r(48),r(62),r(15),r(54),r(252),r(0)),c=r(115),l=r(1);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],y=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(l.o)(e)]={type:[String,Number],default:null},t}),{}),O={col:Object.keys(y),offset:Object.keys(h),order:Object.keys(m)};function j(t,e,r){var n=t;if(null!=r&&!1!==r){if(e){var o=e.replace(t,"");n+="-".concat(o)}return"col"!==t||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;e.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},y),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var r=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var t,e;for(e in d=[],O)O[e].forEach((function(t){var n=r[t],o=j(e,t,n);o&&d.push(o)}));var o=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!o||!r.cols},Object(n.a)(t,"col-".concat(r.cols),r.cols),Object(n.a)(t,"offset-".concat(r.offset),r.offset),Object(n.a)(t,"order-".concat(r.order),r.order),Object(n.a)(t,"align-self-".concat(r.alignSelf),r.alignSelf),t)),w.set(l,d)}(),t(r.tag,Object(c.a)(data,{class:d}),o)}})},424:function(t,e,r){var content=r(437);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(20).default)("f084dc0a",content,!0,{sourceMap:!1})},436:function(t,e,r){"use strict";r(424)},437:function(t,e,r){var n=r(19)(!1);n.push([t.i,".number-heading[data-v-3802f060]{text-align:right}.technology .technology-cover[data-v-3802f060]{width:100%;height:100%}.technology .img100[data-v-3802f060]{max-height:100px;max-width:100px}.technology .img150[data-v-3802f060]{max-height:150px;max-width:150px}",""]),t.exports=n},446:function(t,e,r){"use strict";r.r(e);var n={name:"TechnolgoySection",data:function(){return{}}},o=(r(436),r(37)),c=r(51),l=r.n(c),f=r(417),d=r(466),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"technology py-100"},[r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"end"}},[r("v-col",{attrs:{cols:"2"}},[r("div",{staticClass:"number-heading"},[t._v("3")])]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("h3",[t._v("The Saffy technology")]),t._v(" "),r("p",{staticClass:"mt-5"},[t._v("\n        To purify water, Saffy conceived a bio membrane consisting of 3 major layers.\n        Each layer takes care of a certain type of pollutant\n      ")])])],1),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"3"}},[r("p",[t._v("\n        The system prevents contaminations both inside and outside the system, without\n        altering the natural properties of drinking water\n      ")])]),t._v(" "),r("v-col",{attrs:{cols:"2"}},[r("img",{staticClass:"mr-auto img150",attrs:{src:this.$config.baseUrl+"/img/technology-right.svg"}})])],1),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"2"}},[r("img",{staticClass:"ml-auto img150",attrs:{src:this.$config.baseUrl+"/img/technology-left.svg"}})]),t._v(" "),r("v-col",{attrs:{cols:"3"}},[r("p",[t._v("\n        Saffy bio membrane is self-sufficient and can be scaled from a personal water\n        bottle up to large industrial or community-owned units\n      ")])])],1),t._v(" "),r("v-row",{staticClass:"py-0",attrs:{justify:"center",align:"center"}},[r("img",{staticClass:"technology-cover",attrs:{src:this.$config.baseUrl+"/img/saffy_products.svg"}})])],1)}),[],!1,null,"3802f060",null);e.default=component.exports;l()(component,{VCol:f.a,VRow:d.a})}}]);