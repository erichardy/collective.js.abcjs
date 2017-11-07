/* global require */

if(window.jQuery){
  define('jquery', function(){
    return window.jQuery;
  });
}


require([
  'jquery'

  ], function($){
  'use strict';

  $(document).ready(function(){
    console.log("abctune bundle loading...");
    window.onload = function () {
    	var js = '++resource++collective.js.abcjs/abcjs_editor_midi_3.1.4-min.js';
    	var css = '++resource++collective.js.abcjs/abcjs-midi.css';
    	/*
    	var jsref=document.createElement('script');
    	jsref.setAttribute("type","text/javascript");
    	jsref.setAttribute("src", js);
    	console.log(js + ' loaded');
    	var cssref=document.createElement("link");
    	cssref.setAttribute("rel", "stylesheet");
    	cssref.setAttribute("type", "text/css");
    	cssref.setAttribute("href", css);
    	console.log(css + ' loaded')
    	*/
    	jQuery.cachedScript = function( url, options ) {
    		 
    		  // Allow user to set any option except for dataType, cache, and url
    		  options = $.extend( options || {}, {
    		    dataType: "script",
    		    cache: true,
    		    url: url
    		  });
    		 
    		  // Use $.ajax() since it is more flexible than $.getScript
    		  // Return the jqXHR object so we can chain callbacks
    		  return jQuery.ajax( options );
    		};
    	/*
    	$.cachedScript( js ).done(function( script, textStatus ) {
    			  console.log( textStatus );
    			});
    	*/
    };
  });
})