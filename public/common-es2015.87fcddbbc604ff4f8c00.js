(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{RN0A:function(t,e,i){"use strict";i.d(e,"a",(function(){return a}));var o=i("tk/3"),r=i("LRne"),n=i("lJxs"),l=i("vkgz"),s=i("JIr8"),p=i("fXoL"),h=i("k+0w");let a=(()=>{class t{constructor(t,e){this.httpClient=t,this.logService=e,this.blogUrl="api/blog",this.httpOptions={headers:new o.e({"Content-Type":"application/json"})}}getTopicList(){return this.httpClient.get(this.blogUrl)}getTopicById(t){return this.httpClient.get(this.blogUrl).pipe(Object(n.a)(e=>e.find(e=>e.id===+t)))}getBlog(){return this.httpClient.get(this.blogUrl).pipe(Object(l.a)(t=>this.logService.log(t)),Object(s.a)(this.handleError("getBlog",[])))}addBlog(t){return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(l.a)(t=>this.logService.log("added Posts w/ id="+t.id)),Object(s.a)(this.handleError("addBlog")))}deleteAppBlog(t){return this.httpClient.delete(`${this.blogUrl}/${"number"==typeof t?t:t.id}`,this.httpOptions).pipe(Object(s.a)(this.handleError("deleteBlog")))}handleError(t="operation",e){return i=>(console.error(i),this.log(`${t} failed: ${i.message}`),Object(r.a)(e))}log(t){console.warn("BlogService: "+t)}}return t.\u0275fac=function(e){return new(e||t)(p.Xb(o.b),p.Xb(h.a))},t.\u0275prov=p.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);