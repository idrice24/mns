"use strict";(self.webpackChunkmns=self.webpackChunkmns||[]).push([[877],{2877:(G,c,s)=>{s.r(c),s.d(c,{AuthModule:()=>k});var g=s(9808),m=s(4087),n=s(3075),e=s(7587),T=s(7850),x=s(2373),f=s(2313),v=s(4297),h=s(1424),_=s(8356),Z=s(845),y=s(5787);function A(t,o){1&t&&(e.TgZ(0,"small",18),e._uU(1,"Email is required."),e.qZA())}function b(t,o){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,A,2,0,"small",17),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.email.errors.required)}}function I(t,o){1&t&&(e.TgZ(0,"small",18),e._uU(1,"Name is required."),e.qZA())}function q(t,o){1&t&&(e.TgZ(0,"small",18),e._uU(1,"Name must be at least 4 characters long."),e.qZA())}function w(t,o){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,I,2,0,"small",17),e.YNc(2,q,2,0,"small",17),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.password.errors.required),e.xp6(1),e.Q6J("ngIf",i.password.errors.minlength)}}let U=(()=>{class t{constructor(i,r,a,l,p){this.formBuilder=i,this.missionService=r,this.authService=a,this.router=l,this.titleService=p,this.appUser={email:"",fName:"",isAdmin:!1,lName:"",password:"",id:0}}ngOnInit(){this.loginForm=new n.cw({email:new n.NI(this.appUser.email,[n.kI.required]),password:new n.NI(this.appUser.password,[n.kI.required,n.kI.minLength(4)])}),this.titleService.setTitle("MNS237 - Login")}get email(){return this.loginForm.get("email")}get password(){return this.loginForm.get("password")}login(i){this.loginForm.invalid||this.authService.checkLogin(this.email.value,this.password.value).subscribe(r=>{if(r){console.log("LoggIn Successfully");const a="/admin";this.missionService.confirmLogging(this.email.value);const l={queryParamsHandling:"preserve",preserveFragment:!0};this.loginForm.reset(),this.router.navigate([a],l)}})}logout(){this.authService.logout()}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(n.qu),e.Y36(T.F),e.Y36(x.e),e.Y36(m.F0),e.Y36(f.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:26,vars:5,consts:[[1,"p-shadow-24"],[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[3,"formGroup","ngSubmit"],[1,"p-d-flex","p-jc-center"],[1,"p-grid"],[1,"p-col-12"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["pInputText","","formControlName","email","type","text","placeholder","Email d'utilisateur"],["class","p-col-12",4,"ngIf"],[1,"pi","pi-key"],["type","password","formControlName","password","placeholder","Entre le mot de passe","pPassword","",3,"feedback"],["pButton","","pRipple","","type","submit","label","Envoyer",1,"p-button-rounded",3,"disabled"],["pButton","","routerLink","/cms/registry","type","button","label","Create Account",1,"p-button-text"],["class","p-invalid",4,"ngIf"],[1,"p-invalid"]],template:function(i,r){1&i&&(e.TgZ(0,"section")(1,"p-card",0)(2,"div",1)(3,"div",2)(4,"h1",3),e._uU(5,"S'identifier"),e.qZA()()(),e.TgZ(6,"form",4),e.NdJ("ngSubmit",function(){return r.login(r.loginForm.value)}),e.TgZ(7,"div",5)(8,"div",6)(9,"div",7)(10,"div",8)(11,"span",9),e._UZ(12,"i",10),e.qZA(),e._UZ(13,"input",11),e.qZA(),e.YNc(14,b,2,1,"div",12),e.qZA(),e._UZ(15,"br"),e.TgZ(16,"div",7)(17,"div",8)(18,"span",9),e._UZ(19,"i",13),e.qZA(),e._UZ(20,"input",14),e.qZA(),e.YNc(21,w,3,2,"div",12),e.qZA(),e._UZ(22,"br"),e.TgZ(23,"div",7),e._UZ(24,"button",15)(25,"button",16),e.qZA()()()()()()),2&i&&(e.xp6(6),e.Q6J("formGroup",r.loginForm),e.xp6(8),e.Q6J("ngIf",r.email.invalid&&(r.email.dirty||r.email.touched)),e.xp6(6),e.Q6J("feedback",!1),e.xp6(1),e.Q6J("ngIf",r.password.invalid&&(r.password.dirty||r.password.touched)),e.xp6(3),e.Q6J("disabled",r.loginForm.invalid))},directives:[v.Z,n._Y,n.JL,n.sg,n.Fj,h.o,n.JJ,n.u,g.O5,_.QK,Z.Hq,y.H,m.rH],styles:[""]}),t})();function N(t,o,i,r,a,l,p){try{var u=t[l](p),d=u.value}catch(z){return void i(z)}u.done?o(d):Promise.resolve(d).then(r,a)}var S=s(8613),Y=s(9646);let J=(()=>{class t{confirm(i){const r=window.confirm(i||"Is it OK?");return(0,Y.of)(r)}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function F(t,o){1&t&&(e.TgZ(0,"small",23),e._uU(1,"Name is required."),e.qZA())}function L(t,o){1&t&&(e.TgZ(0,"small",23),e._uU(1,"Name must be at least 4 characters long."),e.qZA())}function Q(t,o){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,F,2,0,"small",22),e.YNc(2,L,2,0,"small",22),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.fName.errors.required),e.xp6(1),e.Q6J("ngIf",i.fName.errors.minlength)}}function R(t,o){1&t&&(e.TgZ(0,"small",23),e._uU(1," email est requis. "),e.qZA())}function O(t,o){1&t&&(e.TgZ(0,"small",23),e._uU(1," L'email doit comporter au moins 4 caracteres. "),e.qZA())}function P(t,o){1&t&&(e.TgZ(0,"small",23),e._uU(1," l'adresse email n'est pas valide "),e.qZA())}function M(t,o){if(1&t&&(e.TgZ(0,"div",7),e.YNc(1,R,2,0,"small",22),e.YNc(2,O,2,0,"small",22),e.YNc(3,P,2,0,"small",22),e.qZA()),2&t){const i=e.oxw();e.xp6(1),e.Q6J("ngIf",i.email.errors.required),e.xp6(1),e.Q6J("ngIf",i.email.errors.minlength),e.xp6(1),e.Q6J("ngIf",i.email.errors.forbiddenEmail)}}let B=(()=>{class t{constructor(i,r,a,l,p,u){this.route=i,this.router=r,this.userService=a,this.formBuilder=l,this.dialogService=p,this.titleService=u,this.appUser={fName:"",lName:"",email:"",password:"",isAdmin:!1,id:0}}ngOnInit(){this.registryForm=new n.cw({email:new n.NI(this.appUser.email,[n.kI.required]),fName:new n.NI(this.appUser.fName,[n.kI.required]),lName:new n.NI(this.appUser.lName,[n.kI.required]),password:new n.NI(this.appUser.password,[n.kI.required]),password2:new n.NI(this.appUser.password,[n.kI.required])}),this.route.data.subscribe(i=>{this.appUser=i.appUser}),this.getNumberOfUsers(),this.titleService.setTitle("MNS237 - Cree Un conte")}onSubmit(i){!i||(this.userService.addUser(i).subscribe(),this.registryForm.reset(),this.message="Votre utilisateur a ete soumis",console.warn(this.message,i),this.delay(2e3))}gotoHome(){this.router.navigate(["/home"])}delay(i){var r=this;return function C(t){return function(){var o=this,i=arguments;return new Promise(function(r,a){var l=t.apply(o,i);function p(d){N(l,r,a,p,u,"next",d)}function u(d){N(l,r,a,p,u,"throw",d)}p(void 0)})}}(function*(){yield new Promise(a=>setTimeout(()=>a(1),i)).then(()=>{r.getNumberOfUsers(),r.message=" "})})()}getNumberOfUsers(){return this.userService.getUsers().subscribe(i=>this.numberOfUsers=i.length)}get email(){return this.registryForm.get("email")}get fName(){return this.registryForm.get("fName")}}return t.\u0275fac=function(i){return new(i||t)(e.Y36(m.gz),e.Y36(m.F0),e.Y36(S.K),e.Y36(n.qu),e.Y36(J),e.Y36(f.Dx))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-registry"]],decls:49,vars:5,consts:[[1,"p-shadow-24"],[1,"row","mb-5"],[1,"col-md-12","text-center"],["data-aos","fade-in-up","data-aos-offset","100",1,"text-primary"],[3,"formGroup","ngsubmit"],[1,"p-d-flex","p-jc-center"],[1,"p-grid"],[1,"p-col-12"],[1,"p-inputgroup"],[1,"p-inputgroup-addon"],[1,"pi","pi-user"],["pInputText","","formControlName","fName","type","text","placeholder","Nom d'utilisateur"],["class","p-col-12",4,"ngIf"],["pInputText","","formControlName","lName","type","text","placeholder","Pre Nom"],[1,"pi","pi-envelope"],["pInputText","","formControlName","email","type","email","placeholder","Email"],[1,"pi","pi-key"],["pInputText","","formControlName","password","type","password","placeholder","Mot de Passe"],["pInputText","","formControlName","password","type","text","placeholder","Entre encore le mot de Passe"],["pButton","","pRipple","","type","submit","label","S'inscrire","name","registry",1,"p-button-rounded"],["pButton","","pRipple","","routerLink","/home","label","Annuler",1,"p-button-rounded"],[1,"text-primary"],["class","p-invalid",4,"ngIf"],[1,"p-invalid"]],template:function(i,r){1&i&&(e.TgZ(0,"section")(1,"p-card",0)(2,"div",1)(3,"div",2)(4,"h1",3),e._uU(5,"S'identifier"),e.qZA(),e.TgZ(6,"h2"),e._uU(7),e.qZA()()(),e.TgZ(8,"form",4),e.NdJ("ngsubmit",function(){return r.onSubmit(r.registryForm.value)}),e.TgZ(9,"div",5)(10,"div",6)(11,"div",7)(12,"div",8)(13,"span",9),e._UZ(14,"i",10),e.qZA(),e._UZ(15,"input",11),e.qZA(),e.YNc(16,Q,3,2,"div",12),e.qZA(),e._UZ(17,"br"),e.TgZ(18,"div",7)(19,"div",8)(20,"span",9),e._UZ(21,"i",10),e.qZA(),e._UZ(22,"input",13),e.qZA()(),e._UZ(23,"br"),e.TgZ(24,"div",7)(25,"div",8)(26,"span",9),e._UZ(27,"i",14),e.qZA(),e._UZ(28,"input",15),e.qZA(),e.YNc(29,M,4,3,"div",12),e.qZA(),e._UZ(30,"br"),e.TgZ(31,"div",7)(32,"div",8)(33,"span",9),e._UZ(34,"i",16),e.qZA(),e._UZ(35,"input",17),e.qZA()(),e._UZ(36,"br"),e.TgZ(37,"div",7)(38,"div",8)(39,"span",9),e._UZ(40,"i",16),e.qZA(),e._UZ(41,"input",18),e.qZA()(),e._UZ(42,"br"),e.TgZ(43,"div",7),e._UZ(44,"button",19),e._uU(45," \xa0\xa0\xa0\xa0 "),e._UZ(46,"button",20),e.qZA()()()(),e.TgZ(47,"h6",21),e._uU(48),e.qZA()()()),2&i&&(e.xp6(7),e.hij(" Nombre d'utilisateurs: ",r.numberOfUsers,""),e.xp6(1),e.Q6J("formGroup",r.registryForm),e.xp6(8),e.Q6J("ngIf",r.fName.invalid&&(r.fName.dirty||r.fName.touched)),e.xp6(13),e.Q6J("ngIf",r.email.invalid&&(r.email.dirty||r.email.touched)),e.xp6(19),e.Oqu(r.message))},directives:[v.Z,n._Y,n.JL,n.sg,n.Fj,h.o,n.JJ,n.u,g.O5,Z.Hq,y.H,m.rH],styles:["#registry[_ngcontent-%COMP%]{margin:0;font-family:sans-serif;display:center;background-repeat:no-repeat}ul[_ngcontent-%COMP%]{background:#3399ff;padding:5px}button[_ngcontent-%COMP%]{border:none;color:#fff;padding:10px 25px;text-align:center;text-decoration:none;font-size:15px}"]}),t})();var E=s(2829);const H=[{path:"",component:U},{path:"login",component:U},{path:"registry",component:B}];let k=(()=>{class t{}return t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[g.ez,n.UX,n.u5,E.m,m.Bz.forChild(H)],m.Bz]}),t})()}}]);