/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
"use strict";function _factory(e){e._performanceEntries=e._performanceEntries||[];const t=2,n="function"==typeof console.timeStamp?console.timeStamp.bind(console):()=>{};return{mark:function(t){e._performanceEntries.push(t,Date.now()),n(t)},getEntries:function(){const n=[],r=e._performanceEntries;for(let e=0;e<r.length;e+=t)n.push({name:r[e],timestamp:r[e+1]});return n},getEntry:function(n){const r=e._performanceEntries;for(let e=0;e<r.length;e+=t)if(r[e]===n)return{name:r[e],timestamp:r[e+1]}},getDuration:function(n,r){const o=e._performanceEntries;let f=r,i=0;for(let e=o.length-t;e>=0;e-=t)if(o[e]===f){if(f!==r)return o[i+1]-o[e+1];i=e,f=n}return 0},importEntries:function(t){e._performanceEntries.splice(0,0,...t)},exportEntries:function(){return e._performanceEntries.slice(0)}}}let sharedObj;sharedObj="object"==typeof global?global:"object"==typeof self?self:{},"function"==typeof define?define([],function(){return _factory(sharedObj)
}):"object"==typeof module&&"object"==typeof module.exports&&(module.exports=_factory(sharedObj));
//# sourceMappingURL=https://ticino.blob.core.windows.net/sourcemaps/a3db5be9b5c6ba46bb7555ec5d60178ecc2eaae4/core/vs/base/common/performance.js.map
