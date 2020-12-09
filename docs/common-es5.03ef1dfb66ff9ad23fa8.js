!function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{RN0A:function(e,n,i){"use strict";i.d(n,"a",(function(){return h}));var o=i("tk/3"),r=i("LRne"),a=i("vkgz"),l=i("JIr8"),c=i("lJxs"),p=i("fXoL"),u=i("k+0w"),h=function(){var e=function(){function e(t,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.httpClient=t,this.logService=n,this.blogUrl="api/blog",this.httpOptions={headers:new o.e({"Content-Type":"application/json"})}}var n,i,p;return n=e,(i=[{key:"getTopicList",value:function(){return this.httpClient.get(this.blogUrl)}},{key:"updateTopic",value:function(t){var e=this;return this.httpClient.put(this.blogUrl,t,this.httpOptions).pipe(Object(a.a)((function(n){return e.log("updated topic id="+t.id)})),Object(l.a)(this.handleError("updateTopic")))}},{key:"getTopicById",value:function(t){return this.httpClient.get(this.blogUrl).pipe(Object(c.a)((function(e){return e.find((function(e){return e.id===+t}))})))}},{key:"addLike",value:function(t){var e=this;return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(a.a)((function(t){return e.log("added")})),Object(l.a)(this.handleError("addLike")))}},{key:"getBlog",value:function(){var t=this;return this.httpClient.get(this.blogUrl).pipe(Object(a.a)((function(e){return t.logService.log(e)})),Object(l.a)(this.handleError("getBlog",[])))}},{key:"addBlog",value:function(t){var e=this;return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(a.a)((function(t){return e.logService.log("added Posts w/ id="+t.id)})),Object(l.a)(this.handleError("addBlog")))}},{key:"deleteAppBlog",value:function(t){return this.httpClient.delete("".concat(this.blogUrl,"/").concat("number"==typeof t?t:t.id),this.httpOptions).pipe(Object(l.a)(this.handleError("deleteBlog")))}},{key:"getAppComment",value:function(){var t=this;return this.httpClient.get(this.blogUrl).pipe(Object(a.a)((function(e){return t.logService.log(e)})),Object(l.a)(this.handleError("getAppComment",[])))}},{key:"addAppComment",value:function(t){var e=this;return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(a.a)((function(t){return e.logService.log("added Comment")})),Object(l.a)(this.handleError("addComment")))}},{key:"handleError",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"operation",n=arguments.length>1?arguments[1]:void 0;return function(i){return console.error(i),t.log("".concat(e," failed: ").concat(i.message)),Object(r.a)(n)}}},{key:"log",value:function(t){console.warn("BlogService: "+t)}}])&&t(n.prototype,i),p&&t(n,p),e}();return e.\u0275fac=function(t){return new(t||e)(p.Xb(o.b),p.Xb(u.a))},e.\u0275prov=p.Ib({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}])}();