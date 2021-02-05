(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{ITC6:function(t,e,i){"use strict";i.d(e,"a",function(){return s});var r=i("fXoL"),o=i("jhN1");let s=(()=>{class t{constructor(t){this.sanitizer=t}transform(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}return t.\u0275fac=function(e){return new(e||t)(r.Lb(o.b))},t.\u0275pipe=r.Kb({name:"safe",type:t,pure:!0}),t})()},RN0A:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("tk/3"),o=i("LRne"),s=i("vkgz"),n=i("JIr8"),p=i("lJxs"),h=i("fXoL"),d=i("k+0w");let a=(()=>{class t{constructor(t,e){this.httpClient=t,this.logService=e,this.blogUrl="api/blog",this.httpOptions={headers:new r.e({"Content-Type":"application/json"})}}getTopicList(){return this.httpClient.get(this.blogUrl)}updateTopic(t){return this.httpClient.put(this.blogUrl,t,this.httpOptions).pipe(Object(s.a)(e=>this.log("updated topic id="+t.id)),Object(n.a)(this.handleError("updateTopic")))}getTopicById(t){return this.httpClient.get(this.blogUrl).pipe(Object(p.a)(e=>e.find(e=>e.id===+t)))}addLike(t){return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(s.a)(t=>this.log("added")),Object(n.a)(this.handleError("addLike")))}getBlog(){return this.httpClient.get(this.blogUrl).pipe(Object(s.a)(t=>this.logService.log(t)),Object(n.a)(this.handleError("getBlog",[])))}addBlog(t){return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(s.a)(t=>this.logService.log("added Posts w/ id="+t.id)),Object(n.a)(this.handleError("addBlog")))}deleteAppBlog(t){return this.httpClient.delete(`${this.blogUrl}/${"number"==typeof t?t:t.id}`,this.httpOptions).pipe(Object(n.a)(this.handleError("deleteBlog")))}getAppComment(){return this.httpClient.get(this.blogUrl).pipe(Object(s.a)(t=>this.logService.log(t)),Object(n.a)(this.handleError("getAppComment",[])))}addAppComment(t){return this.httpClient.post(this.blogUrl,t,this.httpOptions).pipe(Object(s.a)(t=>this.logService.log("added Comment")),Object(n.a)(this.handleError("addComment")))}handleError(t="operation",e){return i=>(console.error(i),this.log(`${t} failed: ${i.message}`),Object(o.a)(e))}log(t){console.warn("BlogService: "+t)}}return t.\u0275fac=function(e){return new(e||t)(h.Wb(r.b),h.Wb(d.a))},t.\u0275prov=h.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},TVtA:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var r=i("tk/3"),o=i("LRne"),s=i("vkgz"),n=i("JIr8"),p=i("lJxs"),h=i("fXoL"),d=i("k+0w");let a=(()=>{class t{constructor(t,e){this.httpClient=t,this.logService=e,this.videosUrl="api/videos",this.httpOptions={headers:new r.e({"Content-Type":"application/json"})}}getVideos(){return this.httpClient.get(this.videosUrl).pipe(Object(s.a)(t=>this.log("fetched Videos ")),Object(n.a)(this.handleError("getVideos",[])))}getVideoByYear(t){return this.getVideos().pipe(Object(p.a)(e=>e.find(e=>e.year===+t)))}updateVideo(t){return this.httpClient.put(this.videosUrl,t,this.httpOptions).pipe(Object(s.a)(e=>this.log("updated video id="+t.id)),Object(n.a)(this.handleError("updateVideo")))}getAppComment(){return this.httpClient.get(this.videosUrl).pipe(Object(s.a)(t=>this.logService.log(t)),Object(n.a)(this.handleError("getAppComment",[])))}addAppComment(t){return this.httpClient.post(this.videosUrl,t,this.httpOptions).pipe(Object(s.a)(t=>this.logService.log("added Comment")),Object(n.a)(this.handleError("addComment")))}addVideo(t){return this.httpClient.post(this.videosUrl,t,this.httpOptions).pipe(Object(s.a)(t=>this.log("added Video w/ id="+t.id)),Object(n.a)(this.handleError("addVideo")))}handleError(t="operation",e){return i=>(console.error(i),this.log(`${t} failed: ${i.message}`),Object(o.a)(e))}log(t){console.warn("UserService: "+t)}updateTopic(t){return this.httpClient.put(this.videosUrl,t,this.httpOptions).pipe(Object(s.a)(e=>this.log("updated video id="+t.id)),Object(n.a)(this.handleError("updateVideo")))}}return t.\u0275fac=function(e){return new(e||t)(h.Wb(r.b),h.Wb(d.a))},t.\u0275prov=h.Hb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);