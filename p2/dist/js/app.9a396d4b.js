(function(e){function t(t){for(var i,o,s=t[0],a=t[1],p=t[2],u=0,l=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&l.push(r[o][0]),r[o]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);d&&d(t);while(l.length)l.shift()();return c.push.apply(c,p||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],i=!0,s=1;s<n.length;s++){var a=n[s];0!==r[a]&&(i=!1)}i&&(c.splice(t--,1),e=o(o.s=n[0]))}return e}var i={},r={app:0},c=[];function o(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=i,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)o.d(n,i,function(t){return e[t]}.bind(null,i));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],a=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var d=a;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"08fa":function(e,t,n){"use strict";n("672d")},"140a":function(e,t,n){e.exports=n.p+"img/10.410f9d36.jpg"},"155b":function(e,t,n){"use strict";n("9745")},"1a79":function(e,t,n){"use strict";n("8c7b")},"1aeb":function(e,t,n){e.exports=n.p+"img/gotham-greens-lettuce-medley.08a0e118.jpg"},3269:function(e,t,n){"use strict";n("ff01")},"3a5a":function(e,t,n){e.exports=n.p+"img/eggo-nutri-grain-whole-wheat-waffles.baf64196.jpg"},"3e13":function(e,t,n){e.exports=n.p+"img/2.49c5357a.jpg"},4069:function(e,t,n){e.exports=n.p+"img/8.7226e9df.jpg"},"40d4":function(e,t,n){e.exports=n.p+"img/bare-coconut-chips.16db8a64.jpg"},"434d":function(e,t,n){e.exports=n.p+"img/6.baf64196.jpg"},"4c0e":function(e,t,n){},"50f7":function(e,t,n){e.exports=n.p+"img/7.491e93f2.jpg"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i,r=n("7a23"),c=n("cf05"),o=n.n(c),s=Object(r["g"])("img",{alt:"Vue logo",src:o.a},null,-1),a={class:"nav justify-content-center"},p={class:"nav-item"};function d(e,t,n,i,c,o){var d=Object(r["w"])("router-view"),u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",null,[s,Object(r["g"])(d,{recipes:c.recipes,ingredients:c.ingredients,items:c.items,ingredientslist:c.ingredientslist,onUpdateRecipes:o.loadRecipes,onUpdateIngredientslist:o.loadShoppingList},null,8,["recipes","ingredients","items","ingredientslist","onUpdateRecipes","onUpdateIngredientslist"]),Object(r["g"])("nav",null,[Object(r["g"])("ul",a,[Object(r["g"])("li",p,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.links,(function(t){return Object(r["p"])(),Object(r["d"])(u,{key:t,to:c.paths[t],class:e.nav-t},{default:Object(r["B"])((function(){return[Object(r["f"])(Object(r["y"])(t),1)]})),_:2},1032,["to","class"])})),128))])])])])}var u=n("bc3a").create({baseURL:null!==(i="http://e28api.oms210.me")&&void 0!==i?i:"http://e28api.oms210.loc",responseType:"json"}),l={name:"App",data:function(){return{recipes:[],ingredients:[],items:[],ingredientslist:[],links:["home","recipes","list"],paths:{home:"/",recipes:"/recipes",list:"/list"}}},mounted:function(){this.loadRecipes(),this.loadIngredients(),this.loadItems(),this.loadShoppingList()},methods:{loadRecipes:function(){var e=this;u.get("recipe").then((function(t){e.recipes=t.data.recipe}))},loadIngredients:function(){var e=this;u.get("ingredient").then((function(t){e.ingredients=t.data.ingredient}))},loadItems:function(){var e=this;u.get("item").then((function(t){e.items=t.data.item}))},loadShoppingList:function(){var e=this;u.get("ingredientslist").then((function(t){e.ingredientslist=t.data.ingredientslist}))}}};n("6f6a"),n("3269");l.render=d;var g=l,f=n("6c02"),b={id:"home-page"};function j(e,t,n,i,c,o){return Object(r["p"])(),Object(r["d"])("div",b)}var O={props:{recipes:{type:Array,default:null},list:{type:Array,default:null}},components:{}};O.render=j;var m=O,v=Object(r["C"])("data-v-1d64e8c3");Object(r["s"])("data-v-1d64e8c3");var h={id:"list-page"},y={id:"list"};Object(r["q"])();var A=v((function(e,t,n,i,c,o){var s=Object(r["w"])("show-list"),a=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",h,[Object(r["g"])("div",y,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.ingredientslist,(function(e){return Object(r["p"])(),Object(r["d"])(a,{class:"list-link",to:"/shoppinglist/"+e.id,key:e.id},{default:v((function(){return[Object(r["g"])(s,{ingredient:e,items:n.items},null,8,["ingredient","items"])]})),_:2},1032,["to"])})),128))])])})),w=(n("b0c0"),Object(r["C"])("data-v-2f9a4629"));Object(r["s"])("data-v-2f9a4629");var x={class:"show-list"},k={class:"name"};Object(r["q"])();var _=w((function(e,t,n,i,c,o){return Object(r["p"])(),Object(r["d"])("div",x,[Object(r["g"])("div",k,Object(r["y"])(n.ingredient.quantity)+" "+Object(r["y"])(o.currentIngredient.unit)+" of "+Object(r["y"])(o.currentIngredient.name),1)])})),I=(n("4de4"),{props:{ingredient:{type:Object},items:{type:Array,default:null}},data:function(){return{}},computed:{currentIngredient:function(){var e=this;return this.items.filter((function(t){return t.id==e.ingredient.item_id}),this.ingredient.item_id)[0]}}});n("1a79");I.render=_,I.__scopeId="data-v-2f9a4629";var S=I,B={components:{"show-list":S},props:{ingredientslist:{type:Array,default:null},items:{type:Array,default:null}},data:function(){return{}},methods:{deleteIngredient:function(e){var t=this;u.delete("/shoppinglist/"+e.id).then((function(e){e.data.errors?alert(e.data.errors):alert(t.id)}))}}};n("a410");B.render=A,B.__scopeId="data-v-1d64e8c3";var C=B,q=Object(r["C"])("data-v-0f9b21bf");Object(r["s"])("data-v-0f9b21bf");var L={id:"recipes-page"},R={id:"recipes"};Object(r["q"])();var U=q((function(e,t,n,i,c,o){var s=Object(r["w"])("show-recipe"),a=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("div",L,[Object(r["g"])("div",R,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.recipes,(function(e){return Object(r["p"])(),Object(r["d"])(a,{class:"recipe-link",to:"/recipe/"+e.id,key:e.id},{default:q((function(){return[Object(r["g"])(s,{recipe:e,detailed:!1,ingredients:o.recipeIngredients},null,8,["recipe","ingredients"])]})),_:2},1032,["to"])})),128))])])})),E=n("fbc1"),T=n.n(E),V=Object(r["C"])("data-v-1e68f321");Object(r["s"])("data-v-1e68f321");var z={class:"show-recipe"},F={class:"name"},M={class:"row"},P={class:"col-md-12"},G=Object(r["g"])("h3",null,[Object(r["g"])("strong",null,"Categories")],-1),Q={key:0},J={class:"row"},D={class:"col-md-12"},N=Object(r["g"])("strong",null,"Serves: ",-1),K={class:"row"},W={class:"col-md-12 description"},X=Object(r["g"])("h3",null,[Object(r["g"])("strong",null,"Ingredients")],-1),Y={class:"row"},H={class:"col-md-12 description"},Z=Object(r["g"])("h3",null,[Object(r["g"])("strong",null,"Directions")],-1);Object(r["q"])();var $=V((function(e,t,n,i,c,o){return Object(r["p"])(),Object(r["d"])("div",z,[Object(r["g"])("div",F,Object(r["y"])(n.recipe.name),1),Object(r["g"])("div",M,[Object(r["g"])("div",P,[G,Object(r["f"])(" "+Object(r["y"])(n.recipe.categories),1)])]),Object(r["g"])("img",{class:"thumb",src:o.imgSrc},null,8,["src"]),n.detailed?(Object(r["p"])(),Object(r["d"])("div",Q,[Object(r["g"])("div",J,[Object(r["g"])("div",D,[Object(r["g"])("h3",null,[N,Object(r["f"])(" "+Object(r["y"])(n.recipe.serves),1)])])]),Object(r["g"])("div",K,[Object(r["g"])("div",W,[X,Object(r["g"])("ul",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(n.ingredients,(function(e,t){return Object(r["p"])(),Object(r["d"])("li",{key:t},[Object(r["f"])(Object(r["y"])(e.quantity)+" "+Object(r["y"])(e.unit)+" of "+Object(r["y"])(e.name)+" ",1),Object(r["g"])("img",{style:{cursor:"grab"},onClick:function(t){return o.addToShoppingList(e.id)},src:T.a},null,8,["onClick"])])})),128))])])]),Object(r["g"])("div",Y,[Object(r["g"])("div",H,[Z,Object(r["g"])("ol",null,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(o.directions,(function(e,t){return Object(r["p"])(),Object(r["d"])("li",{key:t},Object(r["y"])(e),1)})),128))])])])])):Object(r["e"])("",!0)])})),ee=(n("ac1f"),n("1276"),{props:{recipe:{type:Object},detailed:{type:Boolean,default:!0},ingredients:{type:Array}},data:function(){return{}},computed:{imgSrc:function(){try{return n("ca62")("./"+this.recipe.id+".jpg")}catch(e){return n("82a1")}},directions:function(){return this.recipe.directions.split("|")}},methods:{addToShoppingList:function(e){var t=this,n=this.ingredients.filter((function(t){return e==t.id}))[0],i={item_id:"",quantity:""};i.item_id=n.id,i.quantity=n.quantity,this.ingredientslist.push(i),u.post("/list",this.ingredientslist).then((function(e){e.data.errors?(t.errors=e.data.errors,t.showConfirmation=!1):(t.$emit("update-ingredientslist"),t.showConfirmation=!0)}))}}});n("155b");ee.render=$,ee.__scopeId="data-v-1e68f321";var te=ee,ne={components:{"show-recipe":te},props:{recipes:{type:Array,default:null},ingredients:{type:Array,default:null},item:{type:Array,default:null}},data:function(){return{}},computed:{recipeIngredients:function(){return[]}}};n("08fa");ne.render=U,ne.__scopeId="data-v-0f9b21bf";var ie=ne,re=Object(r["C"])("data-v-bdb9ad2e");Object(r["s"])("data-v-bdb9ad2e");var ce={id:"recipe-page"},oe={key:0},se=Object(r["f"])("Go to all recipes"),ae={key:1};Object(r["q"])();var pe=re((function(e,t,n,i,c,o){var s=Object(r["w"])("router-link"),a=Object(r["w"])("show-recipe");return Object(r["p"])(),Object(r["d"])("div",ce,[o.recipeNotFound?(Object(r["p"])(),Object(r["d"])("div",oe,[Object(r["g"])("p",null,"Recipe "+Object(r["y"])(n.id)+" not found.",1),Object(r["g"])(s,{to:"/recipes"},{default:re((function(){return[se]})),_:1})])):o.recipe?(Object(r["p"])(),Object(r["d"])("div",ae,[Object(r["g"])(a,{recipe:o.recipe,detailed:!0,ingredients:o.recipeIngredients,ingredientslist:n.ingredientslist},null,8,["recipe","ingredients","ingredientslist"])])):Object(r["e"])("",!0)])})),de=(n("159b"),{components:{"show-recipe":te},props:{id:{type:String},recipes:{type:Array,default:null},ingredients:{type:Array,default:null},items:{type:Array,default:null},ingredientslist:{type:Array,default:null}},data:function(){return{}},computed:{recipe:function(){var e=this;return this.recipes.filter((function(t){return t.id==e.id}),this.id)[0]},recipeIngredients:function(){var e=this,t=[];if(!this.recipeNotFound){var n=this.ingredients.filter((function(t){return t.recipe_id==e.id}));n.forEach((function(n){var i=e.items.filter((function(e){return n.item_id==e.id}))[0],r={name:"",quantity:"",unit:"",id:""};r.name=i.name,r.unit=i.unit,r.id=i.id,r.quantity=n.quantity,t.push(r)}))}return t},recipeNotFound:function(){return null==this.recipe}}});n("9b67");de.render=pe,de.__scopeId="data-v-bdb9ad2e";var ue=de,le=Object(f["a"])({history:Object(f["b"])(),routes:[{path:"/",component:m},{path:"/recipe/:id",component:ue,props:!0},{path:"/recipes",component:ie},{path:"/list",component:C,props:!0}]});Object(r["c"])(g).use(le).mount("#app")},6328:function(e,t,n){e.exports=n.p+"img/gold-medal-flour.793712c2.jpg"},"672d":function(e,t,n){},"6f6a":function(e,t,n){"use strict";n("a6c4")},"712b":function(e,t,n){e.exports=n.p+"img/birds-eye-vegetable-mix.7226e9df.jpg"},"82a1":function(e,t,n){e.exports=n.p+"img/image-not-available.549b729b.jpg"},"8c7b":function(e,t,n){},9460:function(e,t,n){e.exports=n.p+"img/driscolls-strawberries.418d31d2.jpg"},9745:function(e,t,n){},"9b67":function(e,t,n){"use strict";n("4c0e")},"9ef4":function(e,t,n){e.exports=n.p+"img/1.a9c40a3a.jpg"},a192:function(e,t,n){e.exports=n.p+"img/amys-cheese-pizza.491e93f2.jpg"},a410:function(e,t,n){"use strict";n("ad53")},a6c4:function(e,t,n){},ad53:function(e,t,n){},bbb3:function(e,t,n){e.exports=n.p+"img/9.16db8a64.jpg"},c866:function(e,t,n){e.exports=n.p+"img/snapple-peach-tea.410f9d36.jpg"},c997:function(e,t,n){e.exports=n.p+"img/4.793712c2.jpg"},ca05:function(e,t,n){e.exports=n.p+"img/honey-nut-cheerios.baffccef.jpg"},ca62:function(e,t,n){var i={"./1.jpg":"9ef4","./10.jpg":"140a","./2.jpg":"3e13","./3.jpg":"fb66","./4.jpg":"c997","./5.jpg":"e5a8","./6.jpg":"434d","./7.jpg":"50f7","./8.jpg":"4069","./9.jpg":"bbb3","./amys-cheese-pizza.jpg":"a192","./bare-coconut-chips.jpg":"40d4","./birds-eye-vegetable-mix.jpg":"712b","./driscolls-strawberries.jpg":"9460","./eggo-nutri-grain-whole-wheat-waffles.jpg":"3a5a","./gold-medal-flour.jpg":"6328","./gotham-greens-lettuce-medley.jpg":"1aeb","./honey-nut-cheerios.jpg":"ca05","./image-not-available.jpg":"82a1","./nestle-toll-house-cookie-dough.jpg":"f32a","./snapple-peach-tea.jpg":"c866"};function r(e){var t=c(e);return n(t)}function c(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=c,e.exports=r,r.id="ca62"},cf05:function(e,t,n){e.exports=n.p+"img/logo.88bb2854.png"},e5a8:function(e,t,n){e.exports=n.p+"img/5.baffccef.jpg"},f32a:function(e,t,n){e.exports=n.p+"img/nestle-toll-house-cookie-dough.f2dfb55e.jpg"},fb66:function(e,t,n){e.exports=n.p+"img/3.bca0a676.jpg"},fbc1:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAABmJLR0QA/wD/AP+gvaeTAAABIUlEQVRIid2WTW7CMBBGX8BwBOAa7HsbSva0PUQ4VcoGqu6RULuGqlUvwCpd2AYyshObuELik2bhn8zzjMeOAYbAEjgAVSLbA4XxfVKRECCtuASljETal4VkpuM/lQEo2ZFQtQB6iZ17dX8g5em3+c1Eu03efb55RHJlnSvy5sVgT7Zsu2wHPAFT4eMF+GxyGgo6Agug3xBIbWtcoBgNgBxYAd/GXoF5StAEeMef1jdg3ARqSt2HWemgBXIJU9eAnk1f7nDqml8Bjz5QiFYRoLIL6DfgWzv+0+XAxiyu6qF/5QAPkaCtgLpSV5sb+zixxTB3jEmQtRnoJ1GBfiKFgGx5K3Tpts3f4L+8gzVuga2BUVeIlUKfk5LzFVSi03WK5A8V8+CtfL2DMgAAAABJRU5ErkJggg=="},ff01:function(e,t,n){}});
//# sourceMappingURL=app.9a396d4b.js.map