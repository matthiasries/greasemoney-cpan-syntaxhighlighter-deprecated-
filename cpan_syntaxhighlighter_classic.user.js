// Copyright (c) 2009, Matthias Ries
// This file is licensed under the terms of the Artistic License 2.0 as
// described at http://www.opensource.org/licenses/artistic-license-2.0.php
//
// Use and/or redistribution under the terms of the GNU Lesser GPL 2.1
// (http://www.opensource.org/licenses/lgpl-2.1.php) is also allowed.
//
// This is a GreaseMonkey user-script. To install and use this, you must first
// have GreaseMonkey installed in your browser: http://greasemonkey.mozdev.org/
//
// ==UserScript==
// @name        CPAN SyntaxHighlighter Classic 
// @version     1.0.0  (02. Jul 20010 )
// @author      Matthias, Ries
// @namespace   http://github.com/matthiasries/cpan-greasemoney
// @description SyntaxHighlight the search.cpan.org pages. Classic-Theme
// @include     http://search.cpan.org/*
// ==/UserScript==

(
function() {
	

        var pres = document.getElementsByTagName("pre");
        
	for ( c in pres ){
               pres[c].setAttribute("class", "brush: perl");
        };
        
      var head = document.getElementsByTagName("head")[0];

      var link  = document.createElement('link');
      link.rel  = 'stylesheet';
      link.type = 'text/css';
      link.href = "http://alexgorbatchev.com/pub/sh/2.0.320/styles/shCore.css";
      head.appendChild(link);
      
      var link2  = document.createElement('link');
      link2.rel  = 'stylesheet';
      link2.type = 'text/css';
      link2.href = "http://alexgorbatchev.com/pub/sh/2.0.320/styles/shThemeDefault.css";
      head.appendChild(link2);
      
      var link3  = document.createElement('style');
      link3.setAttribute("type", "text/css");
      var csst = document.createTextNode("\
      div .lines {\
           border: 1px solid rgb(153, 153, 136) ! important;\
           padding: 5px !important;\
           }\
           .syntaxhighlighter {\
              background-color:#EEEEEE none repeat scroll 0 0  !important;\
              overflow:hidden !important;\
              font-size:1em !important;\
              margin:1em 0 !important;\
              position:relative !important;\
              width:100% !important;\
              }\
              .syntaxhighlighter .line.alt1 .content { background-color:#FFFFFF !important; }     \
              .syntaxhighlighter .line .content {\
              border-left:3px solid #006699 !important;\
              color:#000000 !important;\
              }\
              .syntaxhighlighter .line.alt2 .content {\
              background-color:transparent  !important;\
              }\
              .syntaxhighlighter .line.alt1 .content {\
              background-color:transparent  !important;\
              }\
              .syntaxhighlighter .line .content {\
              border:medium none  !important;\
              color:#000000 !important;\
              padding:10px;\
              }\
");
      link3.appendChild(csst);
      head.appendChild(link3);

      var sc  =  document.createElement('script');
      sc.type =  'text/javascript';
      sc.src  =  "http://alexgorbatchev.com/pub/sh/2.0.320/scripts/shCore.js";
      
      var sc2  = document.createElement('script');
      sc2.type = 'text/javascript';
      sc2.src  = "http://alexgorbatchev.com/pub/sh/2.0.320/scripts/shBrushPerl.js";
            
      head.appendChild(sc);
      head.appendChild(sc2);



	var sc3 = document.createElement('script');
        sc3.type = 'text/javascript';
	sc3.innerHTML = "\
	function initSyntaxHighlighter() {\
	SyntaxHighlighter.config.clipboardSwf = 'http://alexgorbatchev.com/pub/sh/2.0.320/scripts/clipboard.swf';\
	SyntaxHighlighter.all();\
	}\
	if ('function' == typeof(mtAttachEvent)) mtAttachEvent('load',initSyntaxHighlighter);\
	else window.onload = initSyntaxHighlighter;\
	";
	head.appendChild(sc3);

	// load 
	var sc4=document.createElement('script');
	sc4.type = 'text/javascript';
	sc4.innerHTML = "SyntaxHighlighter.all();";
	head.appendChild(sc4);
	
document.close();
})();
