!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{ITC6:function(e,r,i){"use strict";i.d(r,"a",(function(){return u}));var o=i("fXoL"),a=i("jhN1"),u=function(){var e=function(){function e(n){t(this,e),this.sanitizer=n}return n(e,[{key:"transform",value:function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(o.Mb(a.b))},e.\u0275pipe=o.Lb({name:"safe",type:e,pure:!0}),e}()},TVtA:function(e,r,i){"use strict";i.d(r,"a",(function(){return d}));var o=i("tk/3"),a=i("LRne"),u=i("vkgz"),c=i("JIr8"),s=i("lJxs"),f=i("fXoL"),d=function(){var e=function(){function e(n){t(this,e),this.httpClient=n,this.videosUrl="api/videos",this.httpOptions={headers:new o.d({"Content-Type":"application/json"})}}return n(e,[{key:"getVideos",value:function(){var t=this;return this.httpClient.get(this.videosUrl).pipe(Object(u.a)((function(e){return t.log("fetched Videos ")})),Object(c.a)(this.handleError("getVideos",[])))}},{key:"getVideoByYear",value:function(t){return this.getVideos().pipe(Object(s.a)((function(e){return e.find((function(e){return e.year===+t}))})))}},{key:"addVideo",value:function(t){var e=this;return this.httpClient.post(this.videosUrl,t,this.httpOptions).pipe(Object(u.a)((function(t){return e.log("added Video w/ id="+t.id)})),Object(c.a)(this.handleError("addVideo")))}},{key:"handleError",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"operation",n=arguments.length>1?arguments[1]:void 0;return function(r){return console.error(r),t.log("".concat(e," failed: ").concat(r.message)),Object(a.a)(n)}}},{key:"log",value:function(t){console.warn("UserService: "+t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(f.Xb(o.b))},e.\u0275prov=f.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();