/*! abcjs.js */
window.jQuery&&define("jquery",function(){return window.jQuery}),require(["jquery"],function(e){"use strict";e(document).ready(function(){console.log("abctune bundle loading..."),window.onload=function(){jQuery.cachedScript=function(n,u){return u=e.extend(u||{},{dataType:"script",cache:!0,url:n}),jQuery.ajax(u)}}})});
//# sourceMappingURL=main-abcjs-compiled.js.map