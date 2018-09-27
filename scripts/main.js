/*! pace 1.0.0 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X=[].slice,Y={}.hasOwnProperty,Z=function(a,b){function c(){this.constructor=a}for(var d in b)Y.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},$=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(u={catchupTime:100,initialRate:.03,minTime:250,ghostTime:100,maxProgressPerFrame:20,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:'body',elements:{checkInterval:100,selectors:['body']},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:['GET'],trackWebSockets:!0,ignoreURLs:[]}},C=function(){var a;return null!=(a='undefined'!=typeof performance&&null!==performance&&'function'==typeof performance.now?performance.now():void 0)?a:+new Date},E=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,t=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==E&&(E=function(a){return setTimeout(a,50)},t=function(a){return clearTimeout(a)}),G=function(a){var b,c;return b=C(),(c=function(){var d;return d=C()-b,d>=33?(b=C(),a(d,function(){return E(c)})):setTimeout(c,33-d)})()},F=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?X.call(arguments,2):[],'function'==typeof c[b]?c[b].apply(c,a):c[b]},v=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?X.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)Y.call(c,a)&&(e=c[a],null!=b[a]&&'object'==typeof b[a]&&null!=e&&'object'==typeof e?v(b[a],e):b[a]=e);return b},q=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},x=function(a,b){var c,d,e;if(null==a&&(a='options'),null==b&&(b=!0),e=document.querySelector('[data-pace-'+a+']')){if(c=e.getAttribute('data-pace-'+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,'undefined'!=typeof console&&null!==console?console.error('Error parsing inline pace options',d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)e.push(this.bindings[a][c].handler===b?this.bindings[a].splice(c,1):c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),i.push(f?this.bindings[c].splice(e,1):e++);return i}},a}(),j=window.Pace||{},window.Pace=j,v(j,g.prototype),D=j.options=v({},u,window.paceOptions,x()),U=['ajax','document','eventLag','elements'],Q=0,S=U.length;S>Q;Q++)K=U[Q],D[K]===!0&&(D[K]=u[K]);i=function(a){function b(){return V=b.__super__.constructor.apply(this,arguments)}return Z(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(D.target),!a)throw new i;this.el=document.createElement('div'),this.el.className='pace pace-active',document.body.className=document.body.className.replace(/pace-done/g,''),document.body.className+=' pace-running',this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace('pace-active',''),a.className+=' pace-inactive',document.body.className=document.body.className.replace('pace-running',''),document.body.className+=' pace-done'},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b,c,d,e,f,g;if(null==document.querySelector(D.target))return!1;for(a=this.getElement(),d='translate3d('+this.progress+'%, 0, 0)',g=['webkitTransform','msTransform','transform'],e=0,f=g.length;f>e;e++)b=g[e],a.children[0].style[b]=d;return(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute('data-progress-text',''+(0|this.progress)+'%'),this.progress>=100?c='99':(c=this.progress<10?'0':'',c+=0|this.progress),a.children[0].setAttribute('data-progress',''+c)),this.lastRenderedProgress=this.progress},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),P=window.XMLHttpRequest,O=window.XDomainRequest,N=window.WebSocket,w=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],f.push(null==a[d]&&'function'!=typeof e?a[d]=e:void 0)}catch(g){c=g}return f},A=[],j.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift('ignore'),c=b.apply(null,a),A.shift(),c},j.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?X.call(arguments,1):[],A.unshift('track'),c=b.apply(null,a),A.shift(),c},J=function(a){var b;if(null==a&&(a='GET'),'track'===A[0])return'force';if(!A.length&&D.ajax){if('socket'===a&&D.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),$.call(D.ajax.trackMethods,b)>=0)return!0}return!1},k=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return J(d)&&c.trigger('request',{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new P(b),a(c),c};try{w(window.XMLHttpRequest,P)}catch(d){}if(null!=O){window.XDomainRequest=function(){var b;return b=new O,a(b),b};try{w(window.XDomainRequest,O)}catch(d){}}if(null!=N&&D.ajax.trackWebSockets){window.WebSocket=function(a,b){var d;return d=null!=b?new N(a,b):new N(a),J('socket')&&c.trigger('request',{type:'socket',url:a,protocols:b,request:d}),d};try{w(window.WebSocket,N)}catch(d){}}}return Z(b,a),b}(h),R=null,y=function(){return null==R&&(R=new k),R},I=function(a){var b,c,d,e;for(e=D.ajax.ignoreURLs,c=0,d=e.length;d>c;c++)if(b=e[c],'string'==typeof b){if(-1!==a.indexOf(b))return!0}else if(b.test(a))return!0;return!1},y().on('request',function(b){var c,d,e,f,g;return f=b.type,e=b.request,g=b.url,I(g)?void 0:j.running||D.restartOnRequestAfter===!1&&'force'!==J(f)?void 0:(d=arguments,c=D.restartOnRequestAfter||0,'boolean'==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,k;if(b='socket'===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(j.restart(),i=j.sources,k=[],c=0,g=i.length;g>c;c++){if(K=i[c],K instanceof a){K.watch.apply(K,d);break}k.push(void 0)}return k}},c))}),a=function(){function a(){var a=this;this.elements=[],y().on('request',function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d,e;return d=a.type,b=a.request,e=a.url,I(e)?void 0:(c='socket'===d?new n(b):new o(b),this.elements.push(c))},a}(),o=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener('progress',function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2},!1),g=['load','abort','timeout','error'],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100},!1);else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),'function'==typeof f?f.apply(null,arguments):void 0}}return a}(),n=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=['error','open'],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100},!1)}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},D.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),'function'==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=C(),b=setInterval(function(){var g;return g=C()-c-50,c=C(),e.push(g),e.length>D.eventLag.sampleCount&&e.shift(),a=q(e),++d>=D.eventLag.minSamples&&a<D.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),m=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=D.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=F(this.source,'progress'))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=F(this.source,'progress')),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/D.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,D.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+D.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),L=null,H=null,r=null,M=null,p=null,s=null,j.running=!1,z=function(){return D.restartOnPushState?j.restart():void 0},null!=window.history.pushState&&(T=window.history.pushState,window.history.pushState=function(){return z(),T.apply(window.history,arguments)}),null!=window.history.replaceState&&(W=window.history.replaceState,window.history.replaceState=function(){return z(),W.apply(window.history,arguments)}),l={ajax:a,elements:d,document:c,eventLag:f},(B=function(){var a,c,d,e,f,g,h,i;for(j.sources=L=[],g=['ajax','elements','document','eventLag'],c=0,e=g.length;e>c;c++)a=g[c],D[a]!==!1&&L.push(new l[a](D[a]));for(i=null!=(h=D.extraSources)?h:[],d=0,f=i.length;f>d;d++)K=i[d],L.push(new K(D));return j.bar=r=new b,H=[],M=new m})(),j.stop=function(){return j.trigger('stop'),j.running=!1,r.destroy(),s=!0,null!=p&&('function'==typeof t&&t(p),p=null),B()},j.restart=function(){return j.trigger('restart'),j.stop(),j.start()},j.go=function(){var a;return j.running=!0,r.render(),a=C(),s=!1,p=G(function(b,c){var d,e,f,g,h,i,k,l,n,o,p,q,t,u,v,w;for(l=100-r.progress,e=p=0,f=!0,i=q=0,u=L.length;u>q;i=++q)for(K=L[i],o=null!=H[i]?H[i]:H[i]=[],h=null!=(w=K.elements)?w:[K],k=t=0,v=h.length;v>t;k=++t)g=h[k],n=null!=o[k]?o[k]:o[k]=new m(g),f&=n.done,n.done||(e++,p+=n.tick(b));return d=p/e,r.update(M.tick(b,d)),r.done()||f||s?(r.update(100),j.trigger('done'),setTimeout(function(){return r.finish(),j.running=!1,j.trigger('hide')},Math.max(D.ghostTime,Math.max(D.minTime-(C()-a),0)))):c()})},j.start=function(a){v(D,a),j.running=!0;try{r.render()}catch(b){i=b}return document.querySelector('.pace')?(j.trigger('start'),j.go()):setTimeout(j.start,50)},'function'==typeof define&&define.amd?define(function(){return j}):'object'==typeof exports?module.exports=j:D.startOnPageLoad&&j.start()}).call(this);
$(document).ready(function () {
  $('.button a').click(function () {
    $('.overlay').fadeToggle(200);
    $(this).toggleClass('btn-open').toggleClass('btn-close');
  });
  $('.overlay').on('click', function () {
    $('.overlay').fadeToggle(200);
    $('.button a').toggleClass('btn-open').toggleClass('btn-close');
    open = false;
  });
  $('a[href^="#"]').on('click', function (event) {
    let target = $(this.getAttribute('href'));
    if (target.length) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});


!function(t,e){'object'==typeof exports&&'object'==typeof module?module.exports=e():'function'==typeof define&&define.amd?define('scrollMonitor',[],e):'object'==typeof exports?exports.scrollMonitor=e():t.scrollMonitor=e()}(this,function(){return function(t){function e(o){if(i[o])return i[o].exports;var s=i[o]={exports:{},id:o,loaded:!1};return t[o].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var i={};return e.m=t,e.c=i,e.p='',e(0)}([function(t,e,i){'use strict';var o=i(1),s=o.isInBrowser,n=i(2),r=new n(s?document.body:null);r.setStateFromDOM(null),r.listenToDOM(),s&&(window.scrollMonitor=r),t.exports=r},function(t,e){'use strict';e.VISIBILITYCHANGE='visibilityChange',e.ENTERVIEWPORT='enterViewport',e.FULLYENTERVIEWPORT='fullyEnterViewport',e.EXITVIEWPORT='exitViewport',e.PARTIALLYEXITVIEWPORT='partiallyExitViewport',e.LOCATIONCHANGE='locationChange',e.STATECHANGE='stateChange',e.eventTypes=[e.VISIBILITYCHANGE,e.ENTERVIEWPORT,e.FULLYENTERVIEWPORT,e.EXITVIEWPORT,e.PARTIALLYEXITVIEWPORT,e.LOCATIONCHANGE,e.STATECHANGE],e.isOnServer='undefined'==typeof window,e.isInBrowser=!e.isOnServer,e.defaultOffsets={top:0,bottom:0}},function(t,e,i){'use strict';function o(t,e){if(!(t instanceof e))throw new TypeError('Cannot call a class as a function')}function s(t){return c?0:t===document.body?window.innerHeight||document.documentElement.clientHeight:t.clientHeight}function n(t){return c?0:t===document.body?Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.documentElement.clientHeight):t.scrollHeight}function r(t){return c?0:t===document.body?window.pageYOffset||document.documentElement&&document.documentElement.scrollTop||document.body.scrollTop:t.scrollTop}var h=i(1),c=h.isOnServer,a=h.isInBrowser,l=h.eventTypes,p=i(3),w=function(){function t(e,i){function h(){if(a.viewportTop=r(e),a.viewportBottom=a.viewportTop+a.viewportHeight,a.documentHeight=n(e),a.documentHeight!==p){for(w=a.watchers.length;w--;)a.watchers[w].recalculateLocation();p=a.documentHeight}}function c(){for(u=a.watchers.length;u--;)a.watchers[u].update();for(u=a.watchers.length;u--;)a.watchers[u].triggerCallbacks()}o(this,t);var a=this;this.item=e,this.watchers=[],this.viewportTop=null,this.viewportBottom=null,this.documentHeight=n(e),this.viewportHeight=s(e),this.DOMListener=function(){t.prototype.DOMListener.apply(a,arguments)},this.eventTypes=l,i&&(this.containerWatcher=i.create(e));var p,w,u;this.update=function(){h(),c()},this.recalculateLocations=function(){this.documentHeight=0,this.update()}}return t.prototype.listenToDOM=function(){a&&(window.addEventListener?(this.item===document.body?window.addEventListener('scroll',this.DOMListener):this.item.addEventListener('scroll',this.DOMListener),window.addEventListener('resize',this.DOMListener)):(this.item===document.body?window.attachEvent('onscroll',this.DOMListener):this.item.attachEvent('onscroll',this.DOMListener),window.attachEvent('onresize',this.DOMListener)),this.destroy=function(){window.addEventListener?(this.item===document.body?(window.removeEventListener('scroll',this.DOMListener),this.containerWatcher.destroy()):this.item.removeEventListener('scroll',this.DOMListener),window.removeEventListener('resize',this.DOMListener)):(this.item===document.body?(window.detachEvent('onscroll',this.DOMListener),this.containerWatcher.destroy()):this.item.detachEvent('onscroll',this.DOMListener),window.detachEvent('onresize',this.DOMListener))})},t.prototype.destroy=function(){},t.prototype.DOMListener=function(t){this.setStateFromDOM(t)},t.prototype.setStateFromDOM=function(t){var e=r(this.item),i=s(this.item),o=n(this.item);this.setState(e,i,o,t)},t.prototype.setState=function(t,e,i,o){var s=e!==this.viewportHeight||i!==this.contentHeight;if(this.latestEvent=o,this.viewportTop=t,this.viewportHeight=e,this.viewportBottom=t+e,this.contentHeight=i,s)for(var n=this.watchers.length;n--;)this.watchers[n].recalculateLocation();this.updateAndTriggerWatchers(o)},t.prototype.updateAndTriggerWatchers=function(t){for(var e=this.watchers.length;e--;)this.watchers[e].update();for(e=this.watchers.length;e--;)this.watchers[e].triggerCallbacks(t)},t.prototype.createCustomContainer=function(){return new t},t.prototype.createContainer=function(e){'string'==typeof e?e=document.querySelector(e):e&&e.length>0&&(e=e[0]);var i=new t(e,this);return i.setStateFromDOM(),i.listenToDOM(),i},t.prototype.create=function(t,e){'string'==typeof t?t=document.querySelector(t):t&&t.length>0&&(t=t[0]);var i=new p(this,t,e);return this.watchers.push(i),i},t.prototype.beget=function(t,e){return this.create(t,e)},t}();t.exports=w},function(t,e,i){'use strict';function o(t,e,i){function o(t,e){if(0!==t.length)for(E=t.length;E--;)T=t[E],T.callback.call(s,e,s),T.isOne&&t.splice(E,1)}var s=this;this.watchItem=e,this.container=t,i?i===+i?this.offsets={top:i,bottom:i}:this.offsets={top:i.top||u.top,bottom:i.bottom||u.bottom}:this.offsets=u,this.callbacks={};for(var d=0,f=w.length;d<f;d++)s.callbacks[w[d]]=[];this.locked=!1;var m,v,b,I,E,T;this.triggerCallbacks=function(t){switch(this.isInViewport&&!m&&o(this.callbacks[r],t),this.isFullyInViewport&&!v&&o(this.callbacks[h],t),this.isAboveViewport!==b&&this.isBelowViewport!==I&&(o(this.callbacks[n],t),v||this.isFullyInViewport||(o(this.callbacks[h],t),o(this.callbacks[a],t)),m||this.isInViewport||(o(this.callbacks[r],t),o(this.callbacks[c],t))),!this.isFullyInViewport&&v&&o(this.callbacks[a],t),!this.isInViewport&&m&&o(this.callbacks[c],t),this.isInViewport!==m&&o(this.callbacks[n],t),!0){case m!==this.isInViewport:case v!==this.isFullyInViewport:case b!==this.isAboveViewport:case I!==this.isBelowViewport:o(this.callbacks[p],t)}m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport},this.recalculateLocation=function(){if(!this.locked){var t=this.top,e=this.bottom;if(this.watchItem.nodeName){var i=this.watchItem.style.display;'none'===i&&(this.watchItem.style.display='');for(var s=0,n=this.container;n.containerWatcher;)s+=n.containerWatcher.top-n.containerWatcher.container.viewportTop,n=n.containerWatcher.container;var r=this.watchItem.getBoundingClientRect();this.top=r.top+this.container.viewportTop-s,this.bottom=r.bottom+this.container.viewportTop-s,'none'===i&&(this.watchItem.style.display=i)}else this.watchItem===+this.watchItem?this.watchItem>0?this.top=this.bottom=this.watchItem:this.top=this.bottom=this.container.documentHeight-this.watchItem:(this.top=this.watchItem.top,this.bottom=this.watchItem.bottom);this.top-=this.offsets.top,this.bottom+=this.offsets.bottom,this.height=this.bottom-this.top,void 0===t&&void 0===e||this.top===t&&this.bottom===e||o(this.callbacks[l],null)}},this.recalculateLocation(),this.update(),m=this.isInViewport,v=this.isFullyInViewport,b=this.isAboveViewport,I=this.isBelowViewport}var s=i(1),n=s.VISIBILITYCHANGE,r=s.ENTERVIEWPORT,h=s.FULLYENTERVIEWPORT,c=s.EXITVIEWPORT,a=s.PARTIALLYEXITVIEWPORT,l=s.LOCATIONCHANGE,p=s.STATECHANGE,w=s.eventTypes,u=s.defaultOffsets;o.prototype={on:function(t,e,i){switch(!0){case t===n&&!this.isInViewport&&this.isAboveViewport:case t===r&&this.isInViewport:case t===h&&this.isFullyInViewport:case t===c&&this.isAboveViewport&&!this.isInViewport:case t===a&&this.isInViewport&&this.isAboveViewport:if(e.call(this,this.container.latestEvent,this),i)return}if(!this.callbacks[t])throw new Error('Tried to add a scroll monitor listener of type '+t+'. Your options are: '+w.join(', '));this.callbacks[t].push({callback:e,isOne:i||!1})},off:function(t,e){if(!this.callbacks[t])throw new Error('Tried to remove a scroll monitor listener of type '+t+'. Your options are: '+w.join(', '));for(var i,o=0;i=this.callbacks[t][o];o++)if(i.callback===e){this.callbacks[t].splice(o,1);break}},one:function(t,e){this.on(t,e,!0)},recalculateSize:function(){this.height=this.watchItem.offsetHeight+this.offsets.top+this.offsets.bottom,this.bottom=this.top+this.height},update:function(){this.isAboveViewport=this.top<this.container.viewportTop,this.isBelowViewport=this.bottom>this.container.viewportBottom,this.isInViewport=this.top<this.container.viewportBottom&&this.bottom>this.container.viewportTop,this.isFullyInViewport=this.top>=this.container.viewportTop&&this.bottom<=this.container.viewportBottom||this.isAboveViewport&&this.isBelowViewport},destroy:function(){var t=this.container.watchers.indexOf(this),e=this;this.container.watchers.splice(t,1);for(var i=0,o=w.length;i<o;i++)e.callbacks[w[i]].length=0},lock:function(){this.locked=!0},unlock:function(){this.locked=!1}};for(var d=function(t){return function(e,i){this.on.call(this,t,e,i)}},f=0,m=w.length;f<m;f++){var v=w[f];o.prototype[v]=d(v)}t.exports=o}])});
//# sourceMappingURL=scrollMonitor.js.map
$(document).ready(function() {
  /**
   * demo1.js
   * http://www.codrops.com
   *
   * Licensed under the MIT license.
   * http://www.opensource.org/licenses/mit-license.php
   *
   * Copyright 2017, Codrops
   * http://www.codrops.com
   */
  {
    // Helper vars and functions.
    const extend = function (a, b) {
      for (let key in b) {
        if (b.hasOwnProperty(key)) {
          a[key] = b[key];
        }
      }
      return a;
    };
    // from http://www.quirksmode.org/js/events_properties.html#position
    const getMousePos = function (ev) {
      let posx = 0;
      let posy = 0;
      if (!ev) ev = window.event;
      if (ev.pageX || ev.pageY) {
        posx = ev.pageX;
        posy = ev.pageY;
      }
      else if (ev.clientX || ev.clientY) {
        posx = ev.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = ev.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      return {x: posx, y: posy};
    };
    const TiltObj = function (el, options) {
      this.el = el;
      this.options = extend({}, this.options);
      extend(this.options, options);
      this.DOM = {};
      this.DOM.img = this.el.querySelector('.content__img');
      this.DOM.title = this.el.querySelector('.content__title');
      this._initEvents();
    }
    TiltObj.prototype.options = {
      movement: {
        img: {translation: {x: -40, y: -40}},
        title: {translation: {x: 20, y: 20}},
      }
    };
    TiltObj.prototype._initEvents = function () {
      this.mouseenterFn = (ev) => {
        anime.remove(this.DOM.img);
        anime.remove(this.DOM.title);
      };
      this.mousemoveFn = (ev) => {
        requestAnimationFrame(() => this._layout(ev));
      };
      this.mouseleaveFn = (ev) => {
        requestAnimationFrame(() => {
          anime({
            targets: [this.DOM.img, this.DOM.title],
            duration: 1500,
            easing: 'easeOutElastic',
            elasticity: 400,
            translateX: 0,
            translateY: 0
          });
        });
      };
      this.el.addEventListener('mousemove', this.mousemoveFn);
      this.el.addEventListener('mouseleave', this.mouseleaveFn);
      this.el.addEventListener('mouseenter', this.mouseenterFn);
    };
    TiltObj.prototype._layout = function (ev) {
      // Mouse position relative to the document.
      const mousepos = getMousePos(ev);
      // Document scrolls.
      const docScrolls = {
        left: document.body.scrollLeft + document.documentElement.scrollLeft,
        top: document.body.scrollTop + document.documentElement.scrollTop
      };
      const bounds = this.el.getBoundingClientRect();
      // Mouse position relative to the main element (this.DOM.el).
      const relmousepos = {x: mousepos.x - bounds.left - docScrolls.left, y: mousepos.y - bounds.top - docScrolls.top};
      // Movement settings for the animatable elements.
      const t = {
        img: this.options.movement.img.translation,
        title: this.options.movement.title.translation,
      };
      const transforms = {
        img: {
          x: (-1 * t.img.x - t.img.x) / bounds.width * relmousepos.x + t.img.x,
          y: (-1 * t.img.y - t.img.y) / bounds.height * relmousepos.y + t.img.y
        },
        title: {
          x: (-1 * t.title.x - t.title.x) / bounds.width * relmousepos.x + t.title.x,
          y: (-1 * t.title.y - t.title.y) / bounds.height * relmousepos.y + t.title.y
        }
      };
      this.DOM.img.style.WebkitTransform = this.DOM.img.style.transform = 'translateX(' + transforms.img.x + 'px) translateY(' + transforms.img.y + 'px)';
      this.DOM.title.style.WebkitTransform = this.DOM.title.style.transform = 'translateX(' + transforms.title.x + 'px) translateY(' + transforms.title.y + 'px)';
    };
    const DOM = {};
    DOM.svg = document.querySelector('.morph');
    DOM.shapeEl = DOM.svg.querySelector('path');
    DOM.contentElems = Array.from(document.querySelectorAll('.content-wrap'));
    DOM.contentLinks = Array.from(document.querySelectorAll('.content__link'));
    DOM.footer = document.querySelector('.content--related');
    const contentElemsTotal = DOM.contentElems.length;
    const shapes = [
      {
        path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        scaleX: 1.3,
        scaleY: 1.1,
        rotate: 180,
        tx: 0,
        ty: -100,
        fill: {
          color: '#342560',
          duration: 500,
          easing: 'linear'
        },
        animation: {
          path: {
            duration: 1000,
            easing: 'easeInOutQuad'
          },
          svg: {
            duration: 1000,
            easing: 'easeInOutQuad'
          }
        }
      },
      {
        path: 'M 415.6,206.3 C 407.4,286.6 438.1,373.6 496.2,454.8 554.3,536.1 497,597.2 579.7,685.7 662.4,774.1 834.3,731.7 898.5,653.4 962.3,575 967.1,486 937.7,370 909.3,253.9 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z',
        pathAlt: 'M 415.6,206.3 C 407.4,286.6 415.5,381.7 473.6,462.9 531.7,544.2 482.5,637.6 579.7,685.7 676.9,733.8 826.2,710.7 890.4,632.4 954.2,554 926.8,487.6 937.7,370 948.6,252.4 937.7,201.5 833.4,105.4 729.3,9.338 602.2,13.73 530.6,41.91 459,70.08 423.9,126.1 415.6,206.3 Z',
        scaleX: 1.9,
        scaleY: 1,
        rotate: 0,
        tx: 0,
        ty: 100,
        fill: {
          color: '#d65640',
          duration: 500,
          easing: 'linear'
        },
        animation: {
          path: {
            duration: 1000,
            easing: 'easeInOutQuad'
          },
          svg: {
            duration: 1000,
            easing: 'easeInOutQuad'
          }
        }
      },
      {
        path: 'M 383.8,163.4 C 335.8,352.3 591.6,317.1 608.7,420.8 625.8,524.5 580.5,626 647.3,688 714,750 837.1,760.5 940.9,661.5 1044,562.3 1041,455.8 975.8,393.6 909.8,331.5 854.2,365.4 784.4,328.1 714.6,290.8 771.9,245.2 733.1,132.4 694.2,19.52 431.9,-25.48 383.8,163.4 Z',
        pathAlt: 'M 383.8,163.4 C 345.5,324.9 591.6,317.1 608.7,420.8 625.8,524.5 595.1,597 647.3,688 699.5,779 837.1,760.5 940.9,661.5 1044,562.3 1068,444.4 975.8,393.6 884,342.8 854.2,365.4 784.4,328.1 714.6,290.8 820.3,237.2 733.1,132.4 645.9,27.62 422.1,1.919 383.8,163.4 Z',
        scaleX: 1.9,
        scaleY: 1.1,
        rotate: 40,
        tx: -100,
        ty: 200,
        fill: {
          color: '#bfb37c',
          duration: 500,
          easing: 'linear'
        },
        animation: {
          path: {
            duration: 1000,
            easing: 'easeInOutQuad'
          },
          svg: {
            duration: 1000,
            easing: 'easeInOutQuad'
          }
        }
      },
      {
        path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        scaleX: 1.5,
        scaleY: 2,
        rotate: -20,
        tx: 0,
        ty: -50,
        fill: {
          color: '#1e71bf',
          duration: 500,
          easing: 'linear'
        },
        animation: {
          path: {
            duration: 1000,
            easing: 'easeInOutQuad'
          },
          svg: {
            duration: 1000,
            easing: 'easeInOutQuad'
          }
        }
      },
      {
        path: 'M 262.9,252.2 C 210.1,338.2 212.6,487.6 288.8,553.9 372.2,626.5 511.2,517.8 620.3,536.3 750.6,558.4 860.3,723 987.3,686.5 1089,657.3 1168,534.7 1173,429.2 1178,313.7 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        pathAlt: 'M 262.9,252.2 C 210.1,338.2 273.3,400.5 298.5,520 323.7,639.6 511.2,537.2 620.3,555.7 750.6,577.8 872.2,707.4 987.3,686.5 1102,665.6 1218,547.8 1173,429.2 1128,310.6 1096,189.1 995.1,130.7 852.1,47.07 658.8,78.95 498.1,119.2 410.7,141.1 322.6,154.8 262.9,252.2 Z',
        scaleX: 1.3,
        scaleY: 1,
        rotate: -70,
        tx: 0,
        ty: 150,
        fill: {
          color: '#44b7a3',
          duration: 500,
          easing: 'linear'
        },
        animation: {
          path: {
            duration: 1000,
            easing: 'easeInOutQuad'
          },
          svg: {
            duration: 1000,
            easing: 'easeInOutQuad'
          }
        }
      }
    ];
    let step;
    const initShapeLoop = function (pos) {
      pos = pos || 0;
      anime.remove(DOM.shapeEl);
      anime({
        targets: DOM.shapeEl,
        easing: 'linear',
        d: [{value: shapes[pos].pathAlt, duration: 500}, {value: shapes[pos].path, duration: 500}],
        loop: true,
        fill: {
          value: shapes[pos].fill.color,
          duration: shapes[pos].fill.duration,
          easing: shapes[pos].fill.easing
        },
        direction: 'alternate'
      });
    };
    const initShapeEl = function () {
      anime.remove(DOM.svg);
      anime({
        targets: DOM.svg,
        duration: 1,
        easing: 'linear',
        scaleX: shapes[0].scaleX,
        scaleY: shapes[0].scaleY,
        translateX: shapes[0].tx + 'px',
        translateY: shapes[0].ty + 'px',
        rotate: shapes[0].rotate + 'deg'
      });
      initShapeLoop();
    };
    const createScrollWatchers = function () {
      DOM.contentElems.forEach((el, pos) => {
        const scrollElemToWatch = pos ? DOM.contentElems[pos] : DOM.footer;
        pos = pos ? pos : contentElemsTotal;
        const watcher = scrollMonitor.create(scrollElemToWatch, -350);
        watcher.enterViewport(function () {
          step = pos;
          anime.remove(DOM.shapeEl);
          anime({
            targets: DOM.shapeEl,
            duration: shapes[pos].animation.path.duration,
            easing: shapes[pos].animation.path.easing,
            elasticity: shapes[pos].animation.path.elasticity || 0,
            d: shapes[pos].path,
            fill: {
              value: shapes[pos].fill.color,
              duration: shapes[pos].fill.duration,
              easing: shapes[pos].fill.easing
            },
            complete: function () {
              initShapeLoop(pos);
            }
          });
          anime.remove(DOM.svg);
          anime({
            targets: DOM.svg,
            duration: shapes[pos].animation.svg.duration,
            easing: shapes[pos].animation.svg.easing,
            elasticity: shapes[pos].animation.svg.elasticity || 0,
            scaleX: shapes[pos].scaleX,
            scaleY: shapes[pos].scaleY,
            translateX: shapes[pos].tx + 'px',
            translateY: shapes[pos].ty + 'px',
            rotate: shapes[pos].rotate + 'deg'
          });
        });
        watcher.exitViewport(function () {
          const idx = !watcher.isAboveViewport ? pos - 1 : pos + 1;
          if (idx <= contentElemsTotal && step !== idx) {
            step = idx;
            anime.remove(DOM.shapeEl);
            anime({
              targets: DOM.shapeEl,
              duration: shapes[idx].animation.path.duration,
              easing: shapes[idx].animation.path.easing,
              elasticity: shapes[idx].animation.path.elasticity || 0,
              d: shapes[idx].path,
              fill: {
                value: shapes[idx].fill.color,
                duration: shapes[idx].fill.duration,
                easing: shapes[idx].fill.easing
              },
              complete: function () {
                initShapeLoop(idx);
              }
            });
            anime.remove(DOM.svg);
            anime({
              targets: DOM.svg,
              duration: shapes[idx].animation.svg.duration,
              easing: shapes[idx].animation.svg.easing,
              elasticity: shapes[idx].animation.svg.elasticity || 0,
              scaleX: shapes[idx].scaleX,
              scaleY: shapes[idx].scaleY,
              translateX: shapes[idx].tx + 'px',
              translateY: shapes[idx].ty + 'px',
              rotate: shapes[idx].rotate + 'deg'
            });
          }
        });
      });
    };
    const init = function () {
      imagesLoaded(document.body, () => {
        initShapeEl();
        createScrollWatchers();
        Array.from(document.querySelectorAll('.content--layout')).forEach(el => new TiltObj(el));
        // Remove loading class from body
        document.body.classList.remove('loading');
      });
    }
    init();
  }
});