<<<<<<< HEAD:docs/6-es5.62f1305f88b511733b99.js
!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jkDv:function(e,i,c){"use strict";c.r(i),c.d(i,"AdminModule",(function(){return Y}));var o=c("ofXK"),a=c("tyNb"),r=c("PC/O"),b=c("fXoL");function s(t,e){if(1&t&&(b.Sb(0,"div",11),b.Cc(1),b.Rb()),2&t){var n=b.bc().$implicit;b.Bb(1),b.Dc(n.title)}}var l=function(t){return[t]};function u(t,e){if(1&t){var n=b.Tb();b.Sb(0,"a",12),b.Zb("click",(function(){b.tc(n);var t=b.bc().$implicit;return b.bc().addExpandClass(t.title)})),b.Nb(1,"i",13),b.Cc(2,"\xa0\xa0 "),b.Sb(3,"span",14),b.Cc(4),b.Rb(),b.Rb()}if(2&t){var i=b.bc().$implicit;b.hc("routerLink",""===i.class?b.kc(5,l,i.path):null)("ngClass",b.kc(7,l,i.class))("routerLinkActive",0!=i.submenu.length?"":"active"),b.Bb(1),b.hc("ngClass",b.kc(9,l,i.icon)),b.Bb(3),b.Dc(i.title)}}function d(t,e){if(1&t&&(b.Sb(0,"li",8),b.Ac(1,s,2,1,"div",9),b.Ac(2,u,5,11,"a",10),b.Rb()),2&t){var n=e.$implicit,i=b.bc();b.Eb("active",i.showMenu===n.title),b.hc("routerLinkActive",0!=n.submenu.length?"":"active"),b.Bb(1),b.hc("ngIf",!0===n.extralink),b.Bb(1),b.hc("ngIf",!n.extralink)}}var p,f,g,m,v=function(){return["/login"]},h=((m=function(){function e(n,i){t(this,e),this.router=n,this.route=i,this.showMenu="",this.showSubMenu=""}return n(e,[{key:"ngOnInit",value:function(){this.sidebarnavItems=this.getRoutes()}},{key:"addExpandClass",value:function(t){this.showMenu=t===this.showMenu?"0":t}},{key:"getRoutes",value:function(){return[{path:"/dashboard",title:"Dashboard",icon:"icon-list",class:"",extralink:!1,submenu:[]},{path:"blog",title:"Manage Blog",icon:"icon-event",class:"",extralink:!1,submenu:[]},{path:"gallery",title:"Manage Gallery",icon:"icon-bulb",class:"",extralink:!1,submenu:[]},{path:"video",title:"Manage Videos",icon:"icon-bell",class:"",extralink:!1,submenu:[]},{path:"users",title:" User-List",icon:"icon-people",class:"",extralink:!1,submenu:[]},{path:"",title:"Settings",icon:"icon-settings",class:"",extralink:!1,submenu:[]}]}}]),e}()).\u0275fac=function(t){return new(t||m)(b.Mb(a.b),b.Mb(a.a))},m.\u0275cmp=b.Gb({type:m,selectors:[["app-admin"]],decls:12,vars:3,consts:[[1,"container-fluid"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[1,"row"],[1,"col-lg-3"],[1,"nav","flex-column"],["class","nav-item",3,"active","routerLinkActive",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"col-lg-8"],[1,"nav-item",3,"routerLinkActive"],["class","nav-small-cap",4,"ngIf"],["class","nav-link",3,"routerLink","ngClass","routerLinkActive","click",4,"ngIf"],[1,"nav-small-cap"],[1,"nav-link",3,"routerLink","ngClass","routerLinkActive","click"],[3,"ngClass"],[1,"hide-menu"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h1",1),b.Cc(2,"Administration"),b.Rb(),b.Sb(3,"div",2),b.Sb(4,"div",3),b.Sb(5,"ul",4),b.Ac(6,d,3,5,"li",5),b.Sb(7,"li"),b.Sb(8,"a",6),b.Cc(9,"Logout"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(10,"div",7),b.Nb(11,"router-outlet"),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(6),b.hc("ngForOf",e.sidebarnavItems),b.Bb(2),b.hc("routerLink",b.jc(2,v)))},directives:[o.j,a.e,a.g,a.d,o.k,o.i],styles:[".nav[_ngcontent-%COMP%]{position:fixed;width:40;height:auto;top:0;z-index:10;padding-top:64px;background:darkyellow;box-shadow:#4169e1;transition:.2s ease-in}.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.sidebar-nav[_ngcontent-%COMP%]   .has-arrow[aria-expanded=true][_ngcontent-%COMP%]:after, .sidebar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > .has-arrow[_ngcontent-%COMP%]:after, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .has-arrow.active[_ngcontent-%COMP%]:after{transform:rotate(-135deg) translateY(-50%)}.collapse.in[_ngcontent-%COMP%]{display:block}ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;width:250px;background-color:#f1f1f1}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#000;padding:8px 0 8px 16px;text-decoration:none}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#00f;color:#fff}"]}),m),S=((g=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=b.Gb({type:g,selectors:[["app-manage-gallery"]],decls:4,vars:0,consts:[[1,"container-fluid","coming"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h1"),b.Sb(2,"marquee"),b.Cc(3,"manage-gallery *******Coming Soon !!*******."),b.Rb(),b.Rb(),b.Rb())},styles:[""]}),g),R=((f=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){console.warn("**************ManageBlogComponent  inti  ###########")}}]),e}()).\u0275fac=function(t){return new(t||f)},f.\u0275cmp=b.Gb({type:f,selectors:[["app-manage-blog"]],decls:24,vars:0,consts:[["id","new-topic"],[1,"container"],[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[1,"row"],["data-aos","fade-right",1,"col-md-6","mb-4","pr-md-4","pl-md-5"],[1,"input-group","input-group-lg"],["name","nachricht","rows","6","placeholder","Nachricht",1,"form-control"],["data-aos","fade-left",1,"col-md-6","pr-md-5","pl-md-4"],[1,"input-group","input-group-lg","mb-4"],[1,"input-group-prepend"],[1,"input-group-text","icon-user","bg-primary","text-white"],["type","text","name","name","placeholder","Vollst\xe4ndiger Name",1,"form-control"],[1,"input-group-text","icon-paper-plane","bg-primary","text-white"],["type","email","name","summary","placeholder","Summary",1,"form-control"],["type","submit",1,"btn","btn-outline-primary","btn-lg","btn-block","btn-round"]],template:function(t,e){1&t&&(b.Sb(0,"section",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"div",3),b.Sb(4,"h1",4),b.Cc(5,"New topic"),b.Rb(),b.Sb(6,"h6"),b.Cc(7,"Missing upload image(TODO) "),b.Rb(),b.Rb(),b.Rb(),b.Sb(8,"form"),b.Sb(9,"div",5),b.Sb(10,"div",6),b.Sb(11,"div",7),b.Nb(12,"textarea",8),b.Rb(),b.Rb(),b.Sb(13,"div",9),b.Sb(14,"div",10),b.Sb(15,"div",11),b.Nb(16,"span",12),b.Rb(),b.Nb(17,"input",13),b.Rb(),b.Sb(18,"div",10),b.Sb(19,"div",11),b.Nb(20,"span",14),b.Rb(),b.Nb(21,"input",15),b.Rb(),b.Sb(22,"button",16),b.Cc(23,"Add"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb())},styles:[""]}),f),y=((p=function(){function e(){t(this,e)}return n(e,[{key:"log",value:function(t){var e=JSON.stringify(t);console.log(e)}}]),e}()).\u0275fac=function(t){return new(t||p)},p.\u0275prov=b.Ib({token:p,factory:p.\u0275fac,providedIn:"root"}),p);function C(t,e){if(1&t&&(b.Sb(0,"div",2),b.Nb(1,"img",3),b.Sb(2,"div",4),b.Sb(3,"h5",5),b.Cc(4),b.Rb(),b.Sb(5,"p",6),b.Cc(6),b.Rb(),b.Sb(7,"p",6),b.Sb(8,"small",7),b.Cc(9),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t){var n=e.$implicit;b.Bb(1),b.hc("src",n.src,b.vc),b.Bb(3),b.Ec(" ",n.title," "),b.Bb(2),b.Ec("",n.text1," "),b.Bb(3),b.Dc(n.text2)}}var x,k=((x=function(){function e(n){t(this,e),this.logService=n}return n(e,[{key:"ngOnInit",value:function(){this.items=[{text1:"oka",text2:"oka",src:"/assets/img/bg1.jpg",title:"Admin Action 1"},{text1:"oka",text2:"oka",src:"/assets/img/bg4.jpg",title:"Admin Action 1"},{text1:"Un ext por explique ce que admin dot faire",text2:"Last updated 3 mins ago",src:"assets/img/aboutus.jpg",title:"Admin Action 1"}],this.logService.log(this.items)}}]),e}()).\u0275fac=function(t){return new(t||x)(b.Mb(y))},x.\u0275cmp=b.Gb({type:x,selectors:[["app-admin-dashboard"]],decls:4,vars:1,consts:[[1,"card-group"],["class","card md-3 mt-3",4,"ngFor","ngForOf"],[1,"card","md-3","mt-3"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"text-muted"]],template:function(t,e){1&t&&(b.Sb(0,"h1"),b.Cc(1," Dashboard "),b.Rb(),b.Sb(2,"div",0),b.Ac(3,C,10,4,"div",1),b.Rb()),2&t&&(b.Bb(3),b.hc("ngForOf",e.items))},directives:[o.j],styles:[""]}),x),w=c("kmKP");function O(t,e){if(1&t&&(b.Sb(0,"tr"),b.Sb(1,"th",3),b.Cc(2),b.Rb(),b.Sb(3,"td"),b.Cc(4),b.Rb(),b.Sb(5,"td"),b.Cc(6),b.Rb(),b.Sb(7,"td"),b.Cc(8),b.Rb(),b.Sb(9,"td"),b.Sb(10,"button",4),b.Cc(11,"View"),b.Rb(),b.Rb(),b.Nb(12,"td"),b.Sb(13,"td"),b.Sb(14,"button",5),b.Cc(15,"Delete"),b.Rb(),b.Rb(),b.Rb()),2&t){var n=e.$implicit,i=e.index;b.Bb(2),b.Dc(i),b.Bb(2),b.Dc(n.fName),b.Bb(2),b.Dc(n.lName),b.Bb(2),b.Dc(n.email)}}var M,B,A=((M=function(){function e(n){t(this,e),this.userService=n}return n(e,[{key:"ngOnInit",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var t=this;this.userService.getUsers().subscribe((function(e){return t.users=e}))}}]),e}()).\u0275fac=function(t){return new(t||M)(b.Mb(w.a))},M.\u0275cmp=b.Gb({type:M,selectors:[["app-manage-user"]],decls:15,vars:1,consts:[[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-danger"]],template:function(t,e){1&t&&(b.Sb(0,"h1"),b.Cc(1,"List of users!"),b.Rb(),b.Sb(2,"table",0),b.Sb(3,"thead"),b.Sb(4,"tr"),b.Sb(5,"th",1),b.Cc(6,"#"),b.Rb(),b.Sb(7,"th",1),b.Cc(8,"First Name"),b.Rb(),b.Sb(9,"th",1),b.Cc(10,"Last Name"),b.Rb(),b.Sb(11,"th",1),b.Cc(12,"Email"),b.Rb(),b.Rb(),b.Rb(),b.Sb(13,"tbody"),b.Ac(14,O,16,4,"tr",2),b.Rb(),b.Rb()),2&t&&(b.Bb(14),b.hc("ngForOf",e.users))},directives:[o.j],styles:[""]}),M),N=c("TVtA"),P=c("jhN1"),D=((B=function(){function e(n){t(this,e),this.sanitizer=n}return n(e,[{key:"transform",value:function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}]),e}()).\u0275fac=function(t){return new(t||B)(b.Mb(P.b))},B.\u0275pipe=b.Lb({name:"safe",type:B,pure:!0}),B);function I(t,e){if(1&t&&(b.Sb(0,"div",13),b.Sb(1,"h5",14),b.Cc(2),b.Rb(),b.Sb(3,"h6",15),b.Cc(4),b.Rb(),b.Sb(5,"h6",16),b.Cc(6),b.Rb(),b.Rb()),2&t){var n=b.bc();b.Bb(2),b.Dc(n.selectedVideo.artist),b.Bb(2),b.Dc(n.selectedVideo.title),b.Bb(2),b.Dc(n.selectedVideo.top)}}function V(t,e){1&t&&(b.Sb(0,"div",13),b.Sb(1,"div",17),b.Cc(2," Choisir une video de la liste pour voir le clip"),b.Nb(3,"br"),b.Nb(4,"i",18),b.Rb(),b.Rb())}function _(t,e){if(1&t&&(b.Sb(0,"div",19),b.Nb(1,"iframe",20,21),b.cc(3,"safe"),b.Sb(4,"p"),b.Cc(5),b.Rb(),b.Rb()),2&t){var n=b.sc(2),i=b.bc();b.Bb(1),b.hc("src",b.dc(3,2,"https://www.youtube.com/embed/"+i.selectedVideo.link),b.uc),b.Bb(4),b.Ec(" ",n.src,"")}}function F(t,e){if(1&t&&(b.Sb(0,"option",22),b.Cc(1),b.Rb()),2&t){var n=e.$implicit;b.ic("value",n.year),b.Bb(1),b.Dc(n.year)}}function L(t,e){if(1&t){var n=b.Tb();b.Sb(0,"tr",23),b.Zb("click",(function(){b.tc(n);var t=e.$implicit;return b.bc().select(t)})),b.Sb(1,"td",24),b.Nb(2,"i",25),b.Rb(),b.Sb(3,"td",26),b.Cc(4),b.Rb(),b.Sb(5,"td",26),b.Cc(6),b.Rb(),b.Sb(7,"td",26),b.Cc(8),b.Rb(),b.Sb(9,"td",27),b.Cc(10),b.Rb(),b.Rb()}if(2&t){var i=e.$implicit;b.Bb(4),b.Dc(i.top),b.Bb(2),b.Dc(i.title),b.Bb(2),b.Dc(i.subtitle),b.Bb(2),b.Dc(i.publishedDate)}}var j,$,E=((j=function(){function e(n){t(this,e),this.videoService=n}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.selectedYear=2020,this.videoService.getVideos().subscribe((function(e){return t.appVideos=e})),this.videoService.getVideoByYear(this.selectedYear).subscribe((function(e){return t.appVideoItems=e.items}))}},{key:"select",value:function(t){this.selectedVideo=t}},{key:"onChange",value:function(t){var e=this;this.selectedYear=t.target.value,this.videoService.getVideoByYear(this.selectedYear).subscribe((function(t){return e.appVideoItems=t.items}))}}]),e}()).\u0275fac=function(t){return new(t||j)(b.Mb(N.a))},j.\u0275cmp=b.Gb({type:j,selectors:[["app-manage-video"]],decls:27,vars:5,consts:[["data-aos","fade-in-up","data-aos-offset","100",1,"mt-4","text-primary"],[1,"col-12","col-sm-12","col-md-10","col-lg-10","col-xl-10"],[1,"card","bg-light","mb-3","text-center"],["class","card-body",4,"ngIf"],["class","embed-responsive embed-responsive-16by9",4,"ngIf"],[1,"form-group"],["for","exampleFormControlSelect1",1,"text-primary","font-weight-bold"],["id","exampleFormControlSelect1",1,"form-control","text-primary","font-weight-bold",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"table","table-hover","table-striped","table-bordered","table-responsive-md","table-sm"],[1,"text-secondary",2,"text-align","center"],[1,"text-info",2,"cursor","pointer","text-align","center"],[3,"click",4,"ngFor","ngForOf"],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-title","text-info"],[1,"card-title","text-secondary"],["role","alert",1,"alert","alert-danger"],[1,"icon-social-youtube","fa-2x","text-danger"],[1,"embed-responsive","embed-responsive-16by9"],["allowfullscreen","",1,"embed-responsive-item",3,"src"],["ok",""],[3,"value"],[3,"click"],[1,"text-secondary",2,"cursor","pointer","text-align","center"],[1,"icon-social-youtube","text-danger"],[2,"cursor","pointer","text-align","center"],[1,"text-primary",2,"cursor","pointer","text-align","center"]],template:function(t,e){1&t&&(b.Sb(0,"h1",0),b.Cc(1,"Manage Video "),b.Rb(),b.Sb(2,"div",1),b.Sb(3,"div",2),b.Ac(4,I,7,3,"div",3),b.Ac(5,V,5,0,"div",3),b.Rb(),b.Ac(6,_,6,4,"div",4),b.Sb(7,"div",5),b.Sb(8,"label",6),b.Cc(9,"Choisir l annnee"),b.Rb(),b.Sb(10,"select",7),b.Zb("change",(function(t){return e.onChange(t)})),b.Ac(11,F,2,2,"option",8),b.Rb(),b.Rb(),b.Sb(12,"table",9),b.Sb(13,"thead"),b.Sb(14,"tr"),b.Sb(15,"th",10),b.Cc(16,"Clip"),b.Rb(),b.Sb(17,"th",10),b.Cc(18,"Top"),b.Rb(),b.Sb(19,"th",11),b.Cc(20,"Titre"),b.Rb(),b.Sb(21,"th",11),b.Cc(22,"Sous-titre"),b.Rb(),b.Sb(23,"th",11),b.Cc(24,"Date de publication"),b.Rb(),b.Rb(),b.Rb(),b.Sb(25,"tbody"),b.Ac(26,L,11,4,"tr",12),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(4),b.hc("ngIf",e.selectedVideo),b.Bb(1),b.hc("ngIf",!e.selectedVideo),b.Bb(1),b.hc("ngIf",e.selectedVideo),b.Bb(5),b.hc("ngForOf",e.appVideos),b.Bb(15),b.hc("ngForOf",e.appVideoItems))},directives:[o.k,o.j],pipes:[D],styles:[""]}),j),T=c("PCNd"),G=[{path:"",component:h,canActivate:[r.a],children:[{path:"",canActivateChild:[r.a],children:[{path:"blog",component:R},{path:"gallery",component:S},{path:"users",component:A},{path:"video",component:E},{path:"",component:k}]}]}],Y=(($=function e(){t(this,e)}).\u0275mod=b.Kb({type:$}),$.\u0275inj=b.Jb({factory:function(t){return new(t||$)},imports:[[o.c,T.a,a.f.forChild(G)]]}),$)}}])}();
=======
!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function n(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{jkDv:function(e,i,c){"use strict";c.r(i),c.d(i,"AdminModule",(function(){return U}));var o=c("ofXK"),a=c("tyNb"),r=c("PC/O"),b=c("fXoL");function s(t,e){if(1&t&&(b.Sb(0,"div",11),b.Ac(1),b.Rb()),2&t){var n=b.bc().$implicit;b.Bb(1),b.Bc(n.title)}}var l=function(t){return[t]};function u(t,e){if(1&t){var n=b.Tb();b.Sb(0,"a",12),b.Zb("click",(function(){b.rc(n);var t=b.bc().$implicit;return b.bc().addExpandClass(t.title)})),b.Nb(1,"i",13),b.Ac(2,"\xa0\xa0 "),b.Sb(3,"span",14),b.Ac(4),b.Rb(),b.Rb()}if(2&t){var i=b.bc().$implicit;b.hc("routerLink",""===i.class?b.kc(5,l,i.path):null)("ngClass",b.kc(7,l,i.class))("routerLinkActive",0!=i.submenu.length?"":"active"),b.Bb(1),b.hc("ngClass",b.kc(9,l,i.icon)),b.Bb(3),b.Bc(i.title)}}function d(t,e){if(1&t&&(b.Sb(0,"li",8),b.yc(1,s,2,1,"div",9),b.yc(2,u,5,11,"a",10),b.Rb()),2&t){var n=e.$implicit,i=b.bc();b.Eb("active",i.showMenu===n.title),b.hc("routerLinkActive",0!=n.submenu.length?"":"active"),b.Bb(1),b.hc("ngIf",!0===n.extralink),b.Bb(1),b.hc("ngIf",!n.extralink)}}var p,f,g,m,v=function(){return["/login"]},h=((m=function(){function e(n,i){t(this,e),this.router=n,this.route=i,this.showMenu="",this.showSubMenu=""}return n(e,[{key:"ngOnInit",value:function(){this.sidebarnavItems=this.getRoutes()}},{key:"addExpandClass",value:function(t){this.showMenu=t===this.showMenu?"0":t}},{key:"getRoutes",value:function(){return[{path:"/dashboard",title:"Dashboard",icon:"icon-list",class:"",extralink:!1,submenu:[]},{path:"blog",title:"Manage Blog",icon:"icon-event",class:"",extralink:!1,submenu:[]},{path:"gallery",title:"Manage Gallery",icon:"icon-bulb",class:"",extralink:!1,submenu:[]},{path:"video",title:"Manage Videos",icon:"icon-bell",class:"",extralink:!1,submenu:[]},{path:"users",title:" User-List",icon:"icon-people",class:"",extralink:!1,submenu:[]},{path:"",title:"Settings",icon:"icon-settings",class:"",extralink:!1,submenu:[]}]}}]),e}()).\u0275fac=function(t){return new(t||m)(b.Mb(a.b),b.Mb(a.a))},m.\u0275cmp=b.Gb({type:m,selectors:[["app-admin"]],decls:12,vars:3,consts:[[1,"container-fluid"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[1,"row"],[1,"col-lg-3"],[1,"nav","flex-column"],["class","nav-item",3,"active","routerLinkActive",4,"ngFor","ngForOf"],[3,"routerLink"],[1,"col-lg-8"],[1,"nav-item",3,"routerLinkActive"],["class","nav-small-cap",4,"ngIf"],["class","nav-link",3,"routerLink","ngClass","routerLinkActive","click",4,"ngIf"],[1,"nav-small-cap"],[1,"nav-link",3,"routerLink","ngClass","routerLinkActive","click"],[3,"ngClass"],[1,"hide-menu"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h1",1),b.Ac(2,"Administration"),b.Rb(),b.Sb(3,"div",2),b.Sb(4,"div",3),b.Sb(5,"ul",4),b.yc(6,d,3,5,"li",5),b.Sb(7,"li"),b.Sb(8,"a",6),b.Ac(9,"Logout"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(10,"div",7),b.Nb(11,"router-outlet"),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(6),b.hc("ngForOf",e.sidebarnavItems),b.Bb(2),b.hc("routerLink",b.jc(2,v)))},directives:[o.j,a.e,a.g,a.d,o.k,o.i],styles:[".nav[_ngcontent-%COMP%]{position:fixed;width:40;height:auto;top:0;z-index:10;padding-top:64px;background:darkyellow;box-shadow:#4169e1;transition:.2s ease-in}.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.sidebar-nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.sidebar-nav[_ngcontent-%COMP%]   .has-arrow[aria-expanded=true][_ngcontent-%COMP%]:after, .sidebar-nav[_ngcontent-%COMP%]   li.active[_ngcontent-%COMP%] > .has-arrow[_ngcontent-%COMP%]:after, .sidebar-nav[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] > .has-arrow.active[_ngcontent-%COMP%]:after{transform:rotate(-135deg) translateY(-50%)}.collapse.in[_ngcontent-%COMP%]{display:block}ul[_ngcontent-%COMP%]{list-style-type:none;margin:0;padding:0;width:250px;background-color:#f1f1f1}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{display:block;color:#000;padding:8px 0 8px 16px;text-decoration:none}li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{background-color:#00f;color:#fff}"]}),m),S=((g=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){}}]),e}()).\u0275fac=function(t){return new(t||g)},g.\u0275cmp=b.Gb({type:g,selectors:[["app-manage-gallery"]],decls:4,vars:0,consts:[[1,"container-fluid","coming"]],template:function(t,e){1&t&&(b.Sb(0,"div",0),b.Sb(1,"h1"),b.Sb(2,"marquee"),b.Ac(3,"manage-gallery *******Coming Soon !!*******."),b.Rb(),b.Rb(),b.Rb())},styles:[""]}),g),y=((f=function(){function e(){t(this,e)}return n(e,[{key:"ngOnInit",value:function(){console.warn("**************ManageBlogComponent  inti  ###########")}}]),e}()).\u0275fac=function(t){return new(t||f)},f.\u0275cmp=b.Gb({type:f,selectors:[["app-manage-blog"]],decls:24,vars:0,consts:[["id","new-topic"],[1,"container"],[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[1,"row"],["data-aos","fade-right",1,"col-md-6","mb-4","pr-md-4","pl-md-5"],[1,"input-group","input-group-lg"],["name","nachricht","rows","6","placeholder","Nachricht",1,"form-control"],["data-aos","fade-left",1,"col-md-6","pr-md-5","pl-md-4"],[1,"input-group","input-group-lg","mb-4"],[1,"input-group-prepend"],[1,"input-group-text","icon-user","bg-primary","text-white"],["type","text","name","name","placeholder","Vollst\xe4ndiger Name",1,"form-control"],[1,"input-group-text","icon-paper-plane","bg-primary","text-white"],["type","email","name","summary","placeholder","Summary",1,"form-control"],["type","submit",1,"btn","btn-outline-primary","btn-lg","btn-block","btn-round"]],template:function(t,e){1&t&&(b.Sb(0,"section",0),b.Sb(1,"div",1),b.Sb(2,"div",2),b.Sb(3,"div",3),b.Sb(4,"h1",4),b.Ac(5,"New topic"),b.Rb(),b.Sb(6,"h6"),b.Ac(7,"Missing upload image(TODO) "),b.Rb(),b.Rb(),b.Rb(),b.Sb(8,"form"),b.Sb(9,"div",5),b.Sb(10,"div",6),b.Sb(11,"div",7),b.Nb(12,"textarea",8),b.Rb(),b.Rb(),b.Sb(13,"div",9),b.Sb(14,"div",10),b.Sb(15,"div",11),b.Nb(16,"span",12),b.Rb(),b.Nb(17,"input",13),b.Rb(),b.Sb(18,"div",10),b.Sb(19,"div",11),b.Nb(20,"span",14),b.Rb(),b.Nb(21,"input",15),b.Rb(),b.Sb(22,"button",16),b.Ac(23,"Add"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb())},styles:[""]}),f),R=((p=function(){function e(){t(this,e)}return n(e,[{key:"log",value:function(t){var e=JSON.stringify(t);console.log(e)}}]),e}()).\u0275fac=function(t){return new(t||p)},p.\u0275prov=b.Ib({token:p,factory:p.\u0275fac,providedIn:"root"}),p);function x(t,e){if(1&t&&(b.Sb(0,"div",2),b.Nb(1,"img",3),b.Sb(2,"div",4),b.Sb(3,"h5",5),b.Ac(4),b.Rb(),b.Sb(5,"p",6),b.Ac(6),b.Rb(),b.Sb(7,"p",6),b.Sb(8,"small",7),b.Ac(9),b.Rb(),b.Rb(),b.Rb(),b.Rb()),2&t){var n=e.$implicit;b.Bb(1),b.hc("src",n.src,b.tc),b.Bb(3),b.Cc(" ",n.title," "),b.Bb(2),b.Cc("",n.text1," "),b.Bb(3),b.Bc(n.text2)}}var k,A=((k=function(){function e(n){t(this,e),this.logService=n}return n(e,[{key:"ngOnInit",value:function(){this.items=[{text1:"oka",text2:"oka",src:"/assets/img/bg1.jpg",title:"Admin Action 1"},{text1:"oka",text2:"oka",src:"/assets/img/bg4.jpg",title:"Admin Action 1"},{text1:"Un ext por explique ce que admin dot faire",text2:"Last updated 3 mins ago",src:"assets/img/aboutus.jpg",title:"Admin Action 1"}],this.logService.log(this.items)}}]),e}()).\u0275fac=function(t){return new(t||k)(b.Mb(R))},k.\u0275cmp=b.Gb({type:k,selectors:[["app-admin-dashboard"]],decls:4,vars:1,consts:[[1,"card-group"],["class","card md-3 mt-3",4,"ngFor","ngForOf"],[1,"card","md-3","mt-3"],["alt","Card image cap",1,"card-img-top",3,"src"],[1,"card-body"],[1,"card-title"],[1,"card-text"],[1,"text-muted"]],template:function(t,e){1&t&&(b.Sb(0,"h1"),b.Ac(1," Dashboard "),b.Rb(),b.Sb(2,"div",0),b.yc(3,x,10,4,"div",1),b.Rb()),2&t&&(b.Bb(3),b.hc("ngForOf",e.items))},directives:[o.j],styles:[""]}),k),B=c("kmKP");function w(t,e){if(1&t&&(b.Sb(0,"tr"),b.Sb(1,"th",3),b.Ac(2),b.Rb(),b.Sb(3,"td"),b.Ac(4),b.Rb(),b.Sb(5,"td"),b.Ac(6),b.Rb(),b.Sb(7,"td"),b.Ac(8),b.Rb(),b.Sb(9,"td"),b.Sb(10,"button",4),b.Ac(11,"View"),b.Rb(),b.Rb(),b.Nb(12,"td"),b.Sb(13,"td"),b.Sb(14,"button",5),b.Ac(15,"Delete"),b.Rb(),b.Rb(),b.Rb()),2&t){var n=e.$implicit,i=e.index;b.Bb(2),b.Bc(i),b.Bb(2),b.Bc(n.fName),b.Bb(2),b.Bc(n.lName),b.Bb(2),b.Bc(n.email)}}var C,O,M=((C=function(){function e(n){t(this,e),this.userService=n}return n(e,[{key:"ngOnInit",value:function(){this.getUsers()}},{key:"getUsers",value:function(){var t=this;this.userService.getUsers().subscribe((function(e){return t.users=e}))}}]),e}()).\u0275fac=function(t){return new(t||C)(b.Mb(B.a))},C.\u0275cmp=b.Gb({type:C,selectors:[["app-manage-user"]],decls:15,vars:1,consts:[[1,"table","table-striped"],["scope","col"],[4,"ngFor","ngForOf"],["scope","row"],["type","button",1,"btn","btn-primary"],["type","button",1,"btn","btn-danger"]],template:function(t,e){1&t&&(b.Sb(0,"h1"),b.Ac(1,"List of users!"),b.Rb(),b.Sb(2,"table",0),b.Sb(3,"thead"),b.Sb(4,"tr"),b.Sb(5,"th",1),b.Ac(6,"#"),b.Rb(),b.Sb(7,"th",1),b.Ac(8,"First Name"),b.Rb(),b.Sb(9,"th",1),b.Ac(10,"Last Name"),b.Rb(),b.Sb(11,"th",1),b.Ac(12,"Email"),b.Rb(),b.Rb(),b.Rb(),b.Sb(13,"tbody"),b.yc(14,w,16,4,"tr",2),b.Rb(),b.Rb()),2&t&&(b.Bb(14),b.hc("ngForOf",e.users))},directives:[o.j],styles:[""]}),C),N=c("TVtA"),P=c("jhN1"),I=((O=function(){function e(n){t(this,e),this.sanitizer=n}return n(e,[{key:"transform",value:function(t){return this.sanitizer.bypassSecurityTrustResourceUrl(t)}}]),e}()).\u0275fac=function(t){return new(t||O)(b.Mb(P.b))},O.\u0275pipe=b.Lb({name:"safe",type:O,pure:!0}),O);function V(t,e){if(1&t&&(b.Sb(0,"div",13),b.Sb(1,"h5",14),b.Ac(2),b.Rb(),b.Sb(3,"h6",15),b.Ac(4),b.Rb(),b.Sb(5,"h6",16),b.Ac(6),b.Rb(),b.Rb()),2&t){var n=b.bc();b.Bb(2),b.Bc(n.selectedVideo.artist),b.Bb(2),b.Bc(n.selectedVideo.title),b.Bb(2),b.Bc(n.selectedVideo.top)}}function _(t,e){1&t&&(b.Sb(0,"div",13),b.Sb(1,"div",17),b.Ac(2," Choisir une video de la liste pour voir le clip"),b.Nb(3,"br"),b.Nb(4,"i",18),b.Rb(),b.Rb())}function F(t,e){if(1&t&&(b.Sb(0,"div",19),b.Nb(1,"iframe",20,21),b.cc(3,"safe"),b.Sb(4,"p"),b.Ac(5),b.Rb(),b.Rb()),2&t){var n=b.qc(2),i=b.bc();b.Bb(1),b.hc("src",b.dc(3,2,"https://www.youtube.com/embed/"+i.selectedVideo.link),b.sc),b.Bb(4),b.Cc(" ",n.src,"")}}function L(t,e){if(1&t&&(b.Sb(0,"option",22),b.Ac(1),b.Rb()),2&t){var n=e.$implicit;b.ic("value",n.year),b.Bb(1),b.Bc(n.year)}}function j(t,e){if(1&t){var n=b.Tb();b.Sb(0,"tr",23),b.Zb("click",(function(){b.rc(n);var t=e.$implicit;return b.bc().select(t)})),b.Sb(1,"td",24),b.Nb(2,"i",25),b.Rb(),b.Sb(3,"td",26),b.Ac(4),b.Rb(),b.Sb(5,"td",26),b.Ac(6),b.Rb(),b.Sb(7,"td",26),b.Ac(8),b.Rb(),b.Sb(9,"td",27),b.Ac(10),b.Rb(),b.Rb()}if(2&t){var i=e.$implicit;b.Bb(4),b.Bc(i.top),b.Bb(2),b.Bc(i.title),b.Bb(2),b.Bc(i.subtitle),b.Bb(2),b.Bc(i.publishedDate)}}var $,T,D=(($=function(){function e(n){t(this,e),this.videoService=n}return n(e,[{key:"ngOnInit",value:function(){var t=this;this.selectedYear=2020,this.videoService.getVideos().subscribe((function(e){return t.appVideos=e})),this.videoService.getVideoByYear(this.selectedYear).subscribe((function(e){return t.appVideoItems=e.items}))}},{key:"select",value:function(t){this.selectedVideo=t}},{key:"onChange",value:function(t){var e=this;this.selectedYear=t.target.value,this.videoService.getVideoByYear(this.selectedYear).subscribe((function(t){return e.appVideoItems=t.items}))}}]),e}()).\u0275fac=function(t){return new(t||$)(b.Mb(N.a))},$.\u0275cmp=b.Gb({type:$,selectors:[["app-manage-video"]],decls:27,vars:5,consts:[["data-aos","fade-in-up","data-aos-offset","100",1,"mt-4","text-primary"],[1,"col-12","col-sm-12","col-md-10","col-lg-10","col-xl-10"],[1,"card","bg-light","mb-3","text-center"],["class","card-body",4,"ngIf"],["class","embed-responsive embed-responsive-16by9",4,"ngIf"],[1,"form-group"],["for","exampleFormControlSelect1",1,"text-primary","font-weight-bold"],["id","exampleFormControlSelect1",1,"form-control","text-primary","font-weight-bold",3,"change"],[3,"value",4,"ngFor","ngForOf"],[1,"table","table-hover","table-striped","table-bordered","table-responsive-md","table-sm"],[1,"text-secondary",2,"text-align","center"],[1,"text-info",2,"cursor","pointer","text-align","center"],[3,"click",4,"ngFor","ngForOf"],[1,"card-body"],[1,"card-title","text-primary"],[1,"card-title","text-info"],[1,"card-title","text-secondary"],["role","alert",1,"alert","alert-danger"],[1,"icon-social-youtube","fa-2x","text-danger"],[1,"embed-responsive","embed-responsive-16by9"],["allowfullscreen","",1,"embed-responsive-item",3,"src"],["ok",""],[3,"value"],[3,"click"],[1,"text-secondary",2,"cursor","pointer","text-align","center"],[1,"icon-social-youtube","text-danger"],[2,"cursor","pointer","text-align","center"],[1,"text-primary",2,"cursor","pointer","text-align","center"]],template:function(t,e){1&t&&(b.Sb(0,"h1",0),b.Ac(1,"Manage Video "),b.Rb(),b.Sb(2,"div",1),b.Sb(3,"div",2),b.yc(4,V,7,3,"div",3),b.yc(5,_,5,0,"div",3),b.Rb(),b.yc(6,F,6,4,"div",4),b.Sb(7,"div",5),b.Sb(8,"label",6),b.Ac(9,"Choisir l annnee"),b.Rb(),b.Sb(10,"select",7),b.Zb("change",(function(t){return e.onChange(t)})),b.yc(11,L,2,2,"option",8),b.Rb(),b.Rb(),b.Sb(12,"table",9),b.Sb(13,"thead"),b.Sb(14,"tr"),b.Sb(15,"th",10),b.Ac(16,"Clip"),b.Rb(),b.Sb(17,"th",10),b.Ac(18,"Top"),b.Rb(),b.Sb(19,"th",11),b.Ac(20,"Titre"),b.Rb(),b.Sb(21,"th",11),b.Ac(22,"Sous-titre"),b.Rb(),b.Sb(23,"th",11),b.Ac(24,"Date de publication"),b.Rb(),b.Rb(),b.Rb(),b.Sb(25,"tbody"),b.yc(26,j,11,4,"tr",12),b.Rb(),b.Rb(),b.Rb()),2&t&&(b.Bb(4),b.hc("ngIf",e.selectedVideo),b.Bb(1),b.hc("ngIf",!e.selectedVideo),b.Bb(1),b.hc("ngIf",e.selectedVideo),b.Bb(5),b.hc("ngForOf",e.appVideos),b.Bb(15),b.hc("ngForOf",e.appVideoItems))},directives:[o.k,o.j],pipes:[I],styles:[""]}),$),G=c("PCNd"),Y=[{path:"",component:h,canActivate:[r.a],children:[{path:"",canActivateChild:[r.a],children:[{path:"blog",component:y},{path:"gallery",component:S},{path:"users",component:M},{path:"video",component:D},{path:"",component:A}]}]}],U=((T=function e(){t(this,e)}).\u0275mod=b.Kb({type:T}),T.\u0275inj=b.Jb({factory:function(t){return new(t||T)},imports:[[o.c,G.a,a.f.forChild(Y)]]}),T)}}])}();
>>>>>>> master:docs/6-es5.208952b923aecbc418f0.js
