import{e as C,j as y,l as S,m as E,n as w,o as b,p as A,q as M,r as D,s as k,t as L,u as P,v as T,w as F,x as N}from"./chunk-C3GOJ25I.js";import{Ia as c,Ja as x,Va as t,W as h,Wa as o,Xa as m,Y as s,eb as n,gb as d,ia as v,kb as l,za as g}from"./chunk-GKC6B43O.js";var H=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["app-home"]],standalone:!0,features:[l],decls:24,vars:0,consts:[[2,"margin-bottom","80px","font-size","18px","line-height","1.6"],[2,"margin-bottom","80px"],[2,"display","flex","justify-content","space-around","align-items","center"],[2,"text-align","center"],[1,"fas","fa-laptop",2,"font-size","48px","color","#007bff"],[2,"font-size","16px","margin-top","10px"],[1,"fas","fa-mobile-alt",2,"font-size","48px","color","#28a745"],[1,"fas","fa-headphones",2,"font-size","48px","color","#ffc107"]],template:function(i,p){i&1&&(t(0,"h2"),n(1,"Home"),o(),t(2,"p",0),n(3,` Welcome to our Store! We offer a wide variety of products to suit your needs. Whether you're looking for the latest technology, stylish accessories, or everyday essentials, we have something for everyone.
`),o(),t(4,"div",1)(5,"h3"),n(6,"Featured Products"),o(),t(7,"div",2)(8,"div",3),m(9,"i",4),t(10,"p",5),n(11,"High-performance Laptops"),o()(),t(12,"div",3),m(13,"i",6),t(14,"p",5),n(15,"Latest Smartphones"),o()(),t(16,"div",3),m(17,"i",7),t(18,"p",5),n(19,"Quality Headphones"),o()()()(),t(20,"p",0),n(21,` Don't miss out on our special offers and discounts. Visit our store today and take advantage of our exclusive deals. Our friendly staff is always here to help you find exactly what you're looking for. Thank you for choosing our store!
`),o(),t(22,"p"),n(23," REALLY THANKS!!!!! :D "),o())},encapsulation:2});let r=e;return r})();var I=(()=>{let e=class e{constructor(){}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["app-contact"]],standalone:!0,features:[l],decls:5,vars:0,consts:[["src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.429198880276!2d-73.57133468521138!3d45.501438038980226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a4498e0cea9%3A0xb778ba112b89de38!2s1+Place+Ville+Marie%2C+Montreal%2C+QC+H3B+4M7!5e0!3m2!1sen!2sca!4v1478571062379","width","400","height","200","frameborder","0","allowfullscreen","",2,"border","0"]],template:function(i,p){i&1&&(t(0,"h2"),n(1,"Contact Us"),o(),t(2,"address"),n(3,`1 Place Ville Marie
Montreal, QC H3B 4M7`),o(),m(4,"iframe",0))},encapsulation:2});let r=e;return r})();var R=(()=>{let e=class e{constructor(a){this.route=a,this.message="",this.message=this.route.snapshot.queryParams.reason||"Sorry there was a problem."}};e.\u0275fac=function(i){return new(i||e)(x(w))},e.\u0275cmp=s({type:e,selectors:[["app-error"]],standalone:!0,features:[l],decls:4,vars:1,template:function(i,p){i&1&&(t(0,"h2"),n(1,` Error!
`),o(),t(2,"p"),n(3),o()),i&2&&(c(3),d(" ",p.message,`
`))},encapsulation:2});let r=e;return r})();var V=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:H},{path:"admin",loadComponent:()=>import("./chunk-VYSN3TPX.js")},{path:"contact",component:I},{path:"products",loadChildren:()=>import("./chunk-AC26KYSS.js").then(r=>r.routes)},{path:"error",component:R},{path:"**",redirectTo:"/error?reason=NavError"}];var z={providers:[{provide:C,useValue:{dateFormat:"longDate"}},v(S),L(V,T(k),P(),F())]};var O=(()=>{let e=class e{constructor(){this.title="Angular Store",this.version=g.full,this.router=h(A)}};e.\u0275fac=function(i){return new(i||e)},e.\u0275cmp=s({type:e,selectors:[["app-root"]],standalone:!0,features:[l],decls:19,vars:2,consts:[["routerLink","/home","routerLinkActive","active"],["routerLink","/products","routerLinkActive","active"],["routerLink","/contact","routerLinkActive","active"],["routerLink","/admin","routerLinkActive","active"],["href","http://www.angularacademy.ca","taget","_blank"]],template:function(i,p){i&1&&(t(0,"header")(1,"h1"),n(2),o(),t(3,"nav")(4,"a",0),n(5,"Home"),o(),t(6,"a",1),n(7,"Products"),o(),t(8,"a",2),n(9,"Contact"),o(),t(10,"a",3),n(11,"Admin"),o()()(),t(12,"main"),m(13,"router-outlet"),o(),t(14,"footer"),m(15,"hr"),t(16,"a",4),n(17,"www.angularacademy.ca"),o(),n(18),o()),i&2&&(c(2),d(" ",p.title," "),c(16),d(" 2023 (using Angular ",p.version,`)
`))},dependencies:[y,N,b,M,D]});let r=e;return r})();E(O,z).catch(r=>console.error(r));
