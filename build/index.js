(window.webpackJsonp_rabbit_lyrics=window.webpackJsonp_rabbit_lyrics||[]).push([[2],{6:function(e,t,r){}}]),function(e){function t(t){for(var n,i,c=t[0],a=t[1],u=t[2],b=0,p=[];b<c.length;b++)i=c[b],Object.prototype.hasOwnProperty.call(l,i)&&l[i]&&p.push(l[i][0]),l[i]=0;for(n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);for(s&&s(t);p.length;)p.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,c=1;c<r.length;c++){var a=r[c];0!==l[a]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},l={0:0},o=[];function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var c=window.webpackJsonp_rabbit_lyrics=window.webpackJsonp_rabbit_lyrics||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var s=a;o.push([8,2]),r()}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},function(e,t){function r(){return e.exports=r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,r.apply(this,arguments)}e.exports=r,e.exports.default=e.exports,e.exports.__esModule=!0},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(4),l=r(0),o=(r(6),r(1)),i=r(3),c=r(2);r(7);var a=r(5),u=r.n(a);Object(n.registerBlockType)("rabbit-lyrics/lyrics",{apiVersion:2,title:Object(l.__)("Rabbit Lyrics","rabbit-lyrics"),description:Object(l.__)("JavaScript audio and timed lyrics synchronizer.","rabbit-lyrics"),category:"widgets",icon:"playlist-audio",supports:{html:!1},edit:function(e){var t=e.attributes,r=e.setAttributes,n=Object(i.useBlockProps)();return Object(o.createElement)("div",n,Object(o.createElement)(c.Flex,null,Object(o.createElement)(c.FlexBlock,null,Object(o.createElement)(c.SelectControl,{label:Object(l.__)("Alignment"),value:t.alignment,onChange:function(e){return r({alignment:e})},options:[{value:"left",label:Object(l.__)("Left")},{value:"center",label:Object(l.__)("Center")},{value:"right",label:Object(l.__)("Right")}]})),Object(o.createElement)(c.FlexBlock,null,Object(o.createElement)(c.SelectControl,{label:Object(l.__)("View mode"),value:t.viewMode,onChange:function(e){return r({viewMode:e})},options:[{value:"clip",label:Object(l.__)("Clip")},{value:"full",label:Object(l.__)("Full")},{value:"mini",label:Object(l.__)("Mini")}]})),Object(o.createElement)(c.FlexBlock,null)),Object(o.createElement)(c.TextareaControl,{label:Object(o.createElement)(c.Flex,null,Object(o.createElement)(c.FlexItem,null,Object(l.__)("Lyrics")),Object(o.createElement)(c.FlexItem,null,Object(o.createElement)(c.ExternalLink,{href:"https://wordpress.org/plugins/rabbit-lyrics/",target:"_blank"},"(",Object(l.__)("user documents"),")"))),value:t.lyrics,onChange:function(e){return r({lyrics:e})},rows:Math.max((t.lyrics||"").split("\n").length,4)}))},save:function(e){var t=e.attributes,r=i.useBlockProps.save({className:"rabbit-lyrics"});return Object(o.createElement)("div",u()({},r,{"data-alignment":t.alignment,"data-view-mode":t.viewMode}),t.lyrics)},attributes:{lyrics:{type:"string",source:"text",selector:"div"},alignment:{type:"string",default:"center",source:"attribute",selector:"div",attribute:"data-alignment"},viewMode:{type:"string",default:"clip",source:"attribute",selector:"div",attribute:"data-view-mode"}}})}]);