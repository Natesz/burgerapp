(this["webpackJsonpburger-app"]=this["webpackJsonpburger-app"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/original.b8503d26.png"},,,,,function(e,t,a){e.exports=a(39)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(16),l=a(12),i=a.n(l),s=(a(23),a(24),function(e){return e.children}),o=(a(25),a(13)),u=a.n(o),d=function(e){return r.a.createElement("div",{className:"Logo"},r.a.createElement("img",{src:u.a,alt:"burger"}))},m=(a(26),function(e){return r.a.createElement("div",{className:"Toolbar"},r.a.createElement("div",null,"Main"),r.a.createElement(d,null),r.a.createElement("nav",null,"..."))}),p=function(e){return r.a.createElement(s,null,r.a.createElement(m,null),r.a.createElement("main",{className:"Content"},e.children))},h=a(6),b=a(2),E=a(3),f=a(4),v=a(5),g=a(17),k=(a(27),function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(E.a)(a,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:"BreadBottom"});break;case"bread-top":e=r.a.createElement("div",{className:"BreadTop"},r.a.createElement("div",{className:"Seeds1"}),r.a.createElement("div",{className:"Seeds2"}));break;case"meat":e=r.a.createElement("div",{className:"Meat"});break;case"cheese":e=r.a.createElement("div",{className:"Cheese"});break;case"bacon":e=r.a.createElement("div",{className:"Bacon"});break;case"salad":e=r.a.createElement("div",{className:"Salad"});break;default:e=null}return e}}]),a}(n.Component)),y=(a(28),function(e){var t=e.ingredients,a=Object.keys(t).map((function(e){return Object(g.a)(Array(t[e])).map((function(t,a){return r.a.createElement(k,{key:e+a,type:e})}))})).reduce((function(e,t){return e.concat(t)}),[]);return 0===a.length&&(a=r.a.createElement("p",null,"Please start adding ingredients!")),r.a.createElement("div",{className:"Burger"},r.a.createElement(k,{type:"bread-top"}),a,r.a.createElement(k,{type:"bread-bottom"}))}),C=(a(29),a(30),function(e){return r.a.createElement("div",{className:"BuildControl"},r.a.createElement("div",{className:"Label"},e.label),r.a.createElement("button",{className:"Less",onClick:e.removed,disabled:e.check},"Less"),r.a.createElement("button",{className:"More",onClick:e.added},"More"))}),N=[{label:"Salad",type:"salad"},{label:"Bacon",type:"bacon"},{label:"Cheese",type:"cheese"},{label:"Meat",type:"meat"}],O=function(e){return r.a.createElement("div",{className:"BuildControls"},r.a.createElement("p",null,"Current Price: ",r.a.createElement("string",null,e.price.toFixed(2))),N.map((function(t){return r.a.createElement(C,{key:t.label,label:t.label,check:e.disabled[t.type],added:function(){return e.ingredientAdded(t.type)},removed:function(){return e.ingredientRemoved(t.type)}})})),r.a.createElement("button",{className:"OrderButton",onClick:e.purchased,disabled:!e.purchasable},"ORDER NOW"))},w=(a(31),function(e){return e.show?r.a.createElement("div",{className:"Backdrop",onClick:e.clicked}):null}),j=(a(32),function(e){return r.a.createElement(s,null,r.a.createElement(w,{show:e.show,clicked:e.modalClosed}),r.a.createElement("div",{className:"Modal",style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))}),S=(a(33),function(e){return r.a.createElement("button",{onClick:e.clicked,className:"Button "+e.btnType},e.children)}),B=function(e){var t=Object.keys(e.ingredients).map((function(t){return r.a.createElement("li",{key:t},r.a.createElement("span",{style:{textTransform:"capitalize"}},t),": ",e.ingredients[t])}));return r.a.createElement(s,null,r.a.createElement("h3",null,"Your Order"),r.a.createElement("p",null,"A delicious burger with the following ingredients:"),r.a.createElement("ul",null,t),r.a.createElement("p",null,"Continue to checkout?"),r.a.createElement("p",null,r.a.createElement("strong",null,"Total price: ",e.price.toFixed(2))),r.a.createElement(S,{clicked:e.continued,btnType:"Success"},"CONTINUE"),r.a.createElement(S,{clicked:e.canceled,btnType:"Danger"},"CANCEL"))},P={salad:.5,cheese:1,meat:1.3,bacon:.7},H=function(e){Object(v.a)(a,e);var t=Object(f.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0},totalPrice:2,purchasable:!1,purchased:!1},e.addIngredientHandler=function(t){var a=e.state.ingredients[t]+1,n=Object(h.a)({},e.state.ingredients);n[t]=a;var r=P[t],c=e.state.totalPrice+r;e.setState({totalPrice:c,ingredients:n}),e.updatePurchaseState(n)},e.removeIngredientHandler=function(t){var a=e.state.ingredients[t]-1,n=Object(h.a)({},e.state.ingredients);a>=0&&(n[t]=a);var r=P[t],c=e.state.totalPrice-r;e.setState({totalPrice:c,ingredients:n}),e.updatePurchaseState(n)},e.purchaseHandler=function(){e.setState({purchased:!0})},e.purchaseCancelHandler=function(){e.setState({purchased:!1})},e.purchaseContinueHandler=function(){alert("Cintinue")},e}return Object(E.a)(a,[{key:"updatePurchaseState",value:function(e){var t=Object.values(e).reduce((function(e,t){return e+t}),0);this.setState({purchasable:t>0})}},{key:"render",value:function(){var e=Object(h.a)({},this.state.ingredients);for(var t in e)e[t]=e[t]<=0;return r.a.createElement(s,null,r.a.createElement(j,{show:this.state.purchased,modalClosed:this.purchaseCancelHandler},r.a.createElement(B,{price:this.state.totalPrice,ingredients:this.state.ingredients,canceled:this.purchaseCancelHandler,continued:this.purchaseContinueHandler})),r.a.createElement(y,{ingredients:this.state.ingredients}),r.a.createElement(O,{disabled:e,ingredientRemoved:this.removeIngredientHandler,ingredientAdded:this.addIngredientHandler,price:this.state.totalPrice,purchased:this.purchaseHandler,purchasable:this.state.purchasable}))}}]),a}(n.Component);var T=function(){return r.a.createElement("div",null,r.a.createElement(p,null,r.a.createElement(H,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(c.a,null,r.a.createElement(T,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[18,1,2]]]);
//# sourceMappingURL=main.76396b71.chunk.js.map