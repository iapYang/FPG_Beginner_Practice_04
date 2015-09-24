jQuery.extend(jQuery.easing,{def:"easeOutQuad","ease-in":function(t,e,s,a,o){return a*(e/=o)*e+s},"ease-out":function(t,e,s,a,o){return-a*(e/=o)*(e-2)+s},ease:function(t,e,s,a,o){return(e/=o/2)<1?a/2*e*e+s:-a/2*(--e*(e-2)-1)+s},"ease-in-out":function(t,e,s,a,o){return(e/=o/2)<1?a/2*e*e*e+s:a/2*((e-=2)*e*e+2)+s}}),!function(t){var e=function(e,s){this.element=t(e),this.options=s};e.prototype={ut_zslider:function(e,s){var a=this;this.options=s,this.slides=e,this.selectedIndex_=0;var o=e.parent();if("card"==this.options.effect&&(this.options.sandbox=!0),this.options.sandbox&&(t(o).wrap('<div class="slider-wrapper"></div>'),a.containerWrap=o.parent()),this.options.makepagebuttons&&(a.prevButt=t('<a class="prev-slide"><span class="arrow" class="left-arrow">&lang;</span></a>'),a.nextButt=t('<a class="next-slide"><span class="arrow" class="right-arrow">&rang;</span></a>'),this.options.sandbox?(a.containerWrap.append(a.prevButt),a.containerWrap.append(a.nextButt)):(o.parent().append(a.prevButt),o.parent().append(a.nextButt))),a.prevButt=t(o).parent().find(".prev-slide"),a.nextButt=t(o).parent().find(".next-slide"),!o.hasClass("sliding")){"card"==this.options.effect&&(o.parent().addClass("card-flip"),this.carousel3d()),this.options.autostart&&this.doTimerStart(),o.addClass("sliding"),o.after('<div class="slide-nav nav"/>'),this.bulletnav=t(o).parent().find(".slide-nav");var n=0;if(t(e).each(function(e,s){t(s).hasClass("ut-slide-default")&&(a.selectedIndex_=e);var o={};if("card"!=a.options.effect&&(o.left="0px",o.display="block",o.position="absolute"),t(s).css(o),"card"!=a.options.effect&&a.selectedIndex_!==e&&t(s).css("left","101%"),a.options.autoheight){var i=parseInt(s.clientHeight,10);i>n&&(n=i)}a.options.makebullets&&a.bulletnav.append(t('<div class="bullet bullet-'+e+'" data-utslidetarget="'+(e+1)+'"><div class="dot"></div></div>'))}),this.options.autoheight&&(t(o).css("height",n+"px"),this.options.sandbox&&t(o.parent()).prepend(t('<div class="slider-spacer" style="height: '+n+'px"></div>')),t(e).css("height",n+"px")),this.options.autovalign&&"card"!==this.options.effect&&t(e).each(function(e,s){var a=parseInt(t(o).css("height"),10),n=parseInt(s.clientHeight,10);t(s).css("top",(a-n)/2)}),this.options.makebullets){var i=this.bulletnav.children();this.bullets=i;var r=t(this.bulletnav).find(".bullet-"+this.selectedIndex_);r.addClass("on")}this.options.pausable&&(o.parent().append(t('<div class="bullet playpause"><a href="#" class="pause">&#x275a; &#x275a;</a><a href="#" class="play">&#9654;</a></div>')),a.pause=t(".playpause"),this.options.autostart||a.pause.addClass("stopped"))}},carousel3d:function(){var e=this;e.carousel3d={},e.carousel3d.element=e.element[0],e.carousel3d.rotation=0,e.carousel3d.panelCount=e.slides.length,e.carousel3d.totalPanelCount=e.slides.length,e.carousel3d.theta=0,e.carousel3d.isHorizontal=e.options.isHorizontal,e.carousel3d.prefixTransform=function(t,e,s){return"-webkit-transform: "+t+"("+e+"deg) translateZ("+s+"px);-moz-transform: "+t+"("+e+"deg) translateZ("+s+"px);-ms-transform: "+t+"("+e+"deg) translateZ("+s+"px);-o-transform: "+t+"("+e+"deg) translateZ("+s+"px);transform: "+t+"("+e+"deg) translateZ("+s+"px);"},e.carousel3d.modify=function(){var s,a,o;for(e.carousel3d.panelSize=e.carousel3d.element[e.carousel3d.isHorizontal?"offsetWidth":"offsetHeight"],e.carousel3d.rotateFn=e.carousel3d.isHorizontal?"rotateY":"rotateX",e.carousel3d.theta=360/e.carousel3d.panelCount,e.carousel3d.radius=Math.round(e.carousel3d.panelSize/2/Math.tan(Math.PI/e.carousel3d.panelCount)),o=0;o<e.carousel3d.panelCount;o++)s=e.carousel3d.element.children[o],a=e.carousel3d.theta*o,t(s).attr("style",e.carousel3d.prefixTransform(e.carousel3d.rotateFn,a,e.carousel3d.radius));for(;o<e.carousel3d.totalPanelCount;o++)s=e.carousel3d.element.children[o],s.style.opacity=0,t(s).attr("style","");setTimeout(function(){t(e.carousel3d.element).addClass("card-flippify")}),e.carousel3d.rotation=Math.round(e.carousel3d.rotation/e.carousel3d.theta)*e.carousel3d.theta,e.carousel3d.transform()},e.carousel3d.transform=function(){t(e.carousel3d.element).attr("style","-webkit-transform: translateZ(-"+e.carousel3d.radius+"px) "+e.carousel3d.rotateFn+"("+e.carousel3d.rotation+"deg);-moz-transform: translateZ(-"+e.carousel3d.radius+"px) "+e.carousel3d.rotateFn+"("+e.carousel3d.rotation+"deg);-ms-transform: translateZ(-"+e.carousel3d.radius+"px) "+e.carousel3d.rotateFn+"("+e.carousel3d.rotation+"deg);-o-transform: translateZ(-"+e.carousel3d.radius+"px) "+e.carousel3d.rotateFn+"("+e.carousel3d.rotation+"deg);transform: translateZ(-"+e.carousel3d.radius+"px) "+e.carousel3d.rotateFn+"("+e.carousel3d.rotation+"deg);")},e.carousel3d.modify()},nextPrev:function(t,e){var s=t?1:-1;if(e||0===e){if(e<this.selectedIndex_)t=!1;else{if(!(e>this.selectedIndex_))return;t=!0}this.setSelectedIndex(this.modulo(e,this.slides.length),t)}else this.setSelectedIndex(this.modulo(this.selectedIndex_+s,this.slides.length),t);"card"==this.options.effect&&(this.carousel3d.rotation=e?this.carousel3d.theta*e*-1:this.carousel3d.theta*this.selectedIndex_*-1,this.carousel3d.transform())},createAnimation:function(e,s,a){{var o,n,i=this.options.speed,r=this.options.effect;this.slides}if("card"!=r){a===!0?(o=101,n=-101):(o=-101,n=101);var l=t(e).css("top");t(e).removeAttr("style");var d,u,c;this.options.fade?(d={left:"0%",opacity:1},u={left:n+"%",opacity:0},c={left:o+"%",display:"block",top:l,opacity:0}):(d={left:"0%"},u={left:n+"%"},c={left:o+"%",display:"block",top:l}),t(e).css(c),setTimeout(function(){t(e).animate(d,i,r)},60),t(s).css({left:"0%"}),t(s).animate(u,i,r)}},setSelectedIndex:function(e,s){var a=this.slides[this.selectedIndex_],o=this.slides[e];if(this.options.makebullets){var n=this.bullets[this.selectedIndex_],i=this.bullets[e];t(n).removeClass("on"),t(i).addClass("on")}this.createAnimation(o,a,s),this.selectedIndex_=e},modulo:function(t,e){var s=t%e;return 0>s*e?s+e:s},doTimerStart:function(){var t=this;this.ut_slide_timer&&(clearInterval(this.ut_slide_timer),this.ut_slide_timer=null),this.ut_slide_timer=setInterval(function(){var e=t.options.rtl?!1:!0;t.nextPrev(e)},t.options.interval)},doTimerStop:function(){this.ut_slide_timer&&(clearInterval(this.ut_slide_timer),this.ut_slide_timer=null)},doTimerDelay:function(){if(this.options.autostart){var t=this;this.doTimerStop(),this.ut_slide_timer=setTimeout(function(){t.pause.hasClass("stopped")||t.doTimerStart()},t.options.delay)}}},t.fn.utslider=function(s){function a(t,e){var s={};for(var a in t)s[a]=t[a];for(var o in e)s[o]=e[o];return s}return t.fn.utslider.options=a(t.fn.utslider.defaults,s),"function"!=typeof Object.create&&(Object.create=function(t){function e(){}return e.prototype=t,new e}),this.each(function(s){var a=t(this),o=a.children();s="object"==typeof t.fn.utslider.options&&t.fn.utslider.options?t.fn.utslider.options:t.fn.utslider.defaults;var n=new e(this,s);n.ut_zslider(o,s),n.nextButt.on("click",function(t){t.preventDefault(),n.nextPrev(!0),n.pause.hasClass("stopped")||n.doTimerDelay()}),n.prevButt.on("click",function(t){t.preventDefault(),n.nextPrev(!1),n.pause.hasClass("stopped")||n.doTimerDelay()}),n.options.makebullets&&t(n.bullets).each(function(e,s){t(s).on("click",function(t){t.preventDefault(),n.nextPrev(!0,e),n.pause.hasClass("stopped")||n.doTimerDelay()})}),n.options.pausable&&n.pause.on("click",function(e){e.preventDefault(),t(this).hasClass("stopped")?(n.doTimerStart(),n.nextPrev(!0)):n.doTimerStop(),t(this).toggleClass("stopped")})})},t.fn.utslider.options=null,t.fn.utslider.defaults={autostart:!0,interval:5e3,delay:5e3,speed:600,effect:"ease",makebullets:!0,makepagebuttons:!0,fade:!0,autoheight:!0,autovalign:!0,rtl:!1,pausable:!0,isHorizontal:!0}}($);