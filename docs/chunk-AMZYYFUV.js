import{a as I}from"./chunk-YBCQDP37.js";import{a as h}from"./chunk-CE4BNKUB.js";import{a as x,b as g,h as v,l as S}from"./chunk-BNBULCHM.js";import{Aa as u,B as m,Ba as f,Q as l,R as c,Wa as d,ja as n,ka as o,la as s,wa as r,ya as p}from"./chunk-KJDUKPVH.js";var F=(()=>{let t=class t{constructor(i,e){this.gameService=i,this.scoresService=e}ngOnInit(){this.score=this.getTotalScore(),this.scoresService.insert(this.game),this.gameService.set(null)}getTotalScore(){return this.game.scores.reduce((i,e)=>i+e,0)}};t.\u0275fac=function(e){return new(e||t)(c(h),c(I))},t.\u0275cmp=m({type:t,selectors:[["app-final-score"]],inputs:{game:"game"},standalone:!0,features:[u([],[x({heroHome:v,heroRocketLaunch:S})]),f],decls:9,vars:1,consts:[[1,"w-128","max-w-full","min-h-screen","mx-auto","flex","flex-col","items-center","justify-center","p-4"],["size","140","name","heroRocketLaunch",1,"text-primary"],[1,"text-center","text-2xl","font-bold","capitalize"],[1,"text-center","text-4xl","font-bold","capitalize","mt-4"],["type","button","routerLink","/","skipLocationChange","",1,"btn","w-full","capitalize","btn-accent","mt-8"],["size","24","name","heroHome"]],template:function(e,b){e&1&&(n(0,"main",0),s(1,"ng-icon",1),n(2,"h1",2),r(3,"Final score"),o(),n(4,"span",3),r(5),o(),n(6,"button",4),s(7,"ng-icon",5),r(8," Home "),o()()),e&2&&(l(5),p("",b.score," points"))},dependencies:[d,g]});let a=t;return a})();export{F as default};
