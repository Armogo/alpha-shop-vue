(function(t){function e(e){for(var s,n,l=e[0],c=e[1],o=e[2],d=0,p=[];d<l.length;d++)n=l[d],Object.prototype.hasOwnProperty.call(a,n)&&a[n]&&p.push(a[n][0]),a[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,o||[]),i()}function i(){for(var t,e=0;e<r.length;e++){for(var i=r[e],s=!0,l=1;l<i.length;l++){var c=i[l];0!==a[c]&&(s=!1)}s&&(r.splice(e--,1),t=n(n.s=i[0]))}return t}var s={},a={app:0},r=[];function n(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=s,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(i,s,function(e){return t[e]}.bind(null,s));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/alpha-shop-vue/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var o=0;o<l.length;o++)e(l[o]);var u=c;r.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},r=[],n=(i("5c0b"),i("2877")),l={},c=Object(n["a"])(l,a,r,!1,null,null,null),o=c.exports,u=i("8c4f"),d=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main-app"}},[i("Navbar"),i("main",{attrs:{id:"main-content"}},[i("div",{staticClass:"container main-container"},[i("div",{staticClass:"main-grid"},[i("LeftContent",{attrs:{"initial-user":t.user,"initial-cities":t.cities},on:{"previous-step-clicked":t.onPreviousStepClicked,"next-step-clicked":t.onNextStepClicked,"final-step-clicked":t.handleSubmit}}),i("RightContent",{attrs:{"initial-user":t.user,"initial-items":t.items},on:{"item-add-one":t.onItemAdded,"item-reduce-one":t.onItemReduced}})],1)])]),i("Footer")],1)},p=[],v=i("5530"),m=(i("b0c0"),i("99af"),i("d81d"),i("a9e3"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),f=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"nav-container"},[i("input",{staticClass:"navbar-toggle",attrs:{type:"checkbox",id:"navbar-toggle"}}),i("nav",{staticClass:"d-flex justify-content-between align-items-center header-nav"},[i("div",{staticClass:"nav-left"},[i("ul",{staticClass:"nav-list d-flex"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("男裝")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("女裝")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("最新消息")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("客製商品")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("聯絡我們")])])])]),i("div",{staticClass:"nav-mid"},[i("a",{staticClass:"text-center",attrs:{href:"#"}},[i("img",{attrs:{src:"https://i.ibb.co/K6qCSys/aclogo.png"}})])]),i("div",{staticClass:"nav-right"},[i("ul",{staticClass:"nav-list d-flex"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[i("i",{staticClass:"fas fa-search"})])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[i("i",{staticClass:"fas fa-shopping-cart"})])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:"#"}},[i("i",{staticClass:"far fa-moon"})])])])])]),i("label",{staticClass:"navbar-toggle-label",attrs:{for:"navbar-toggle"}},[i("span",{staticClass:"box-shadow-menu"}),i("span",{staticClass:"shop-logo"},[i("img",{attrs:{src:"https://i.ibb.co/K6qCSys/aclogo.png"}})])])])}],h={},C=Object(n["a"])(h,m,f,!1,null,null,null),b=C.exports,_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"left-content"},[i("StepPanel",{attrs:{"form-step":t.user.formStep}}),i("FormPanel",{attrs:{"initial-user":t.user,"initial-cities":t.initialCities},on:{"previous-step-clicked":t.onPreviousStepClicked,"next-step-clicked":t.onNextStepClicked,"final-step-clicked":t.onFinalStepClicked,"delivery-changed":t.onDeliveryChanged}})],1)},y=[],g=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"stepper-panel",attrs:{id:"step-control"}},[i("h1",[t._v("結帳")]),i("div",{staticClass:"container stepper-container"},[i("div",{staticClass:"step-part",class:[1===t.formStep?"active":"",2===t.formStep||3===t.formStep?"checked":""]},[t._m(0)]),i("div",{staticClass:"step-part",class:[2===t.formStep?"active":"",3===t.formStep?"checked":""]},[t._m(1)]),i("div",{staticClass:"step-part",class:3===t.formStep?"active":""},[t._m(2)])])])},x=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step"},[i("div",{staticClass:"circle-container"}),i("div",{staticClass:"label-container"},[t._v("寄送地址")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step"},[i("div",{staticClass:"circle-container"}),i("div",{staticClass:"connect-line"}),i("div",{staticClass:"label-container"},[t._v("運送方式")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"step"},[i("div",{staticClass:"circle-container"}),i("div",{staticClass:"connect-line"}),i("div",{staticClass:"label-container"},[t._v("付款資訊")])])}],k={props:{formStep:{type:Number,required:!0}}},O=k,S=Object(n["a"])(O,g,x,!1,null,null,null),w=S.exports,j=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"form-panel"},[i("div",{staticClass:"container form-container"},[1===t.initialUser.formStep?i("Form1",{attrs:{"initial-user":t.initialUser,"initial-cities":t.initialCities},on:{"next-step-clicked":t.onNextStepClicked}}):t._e(),2===t.initialUser.formStep?i("Form2",{attrs:{"initial-user":t.initialUser},on:{"previous-step-clicked":t.onPreviousStepClicked,"next-step-clicked":t.onNextStepClicked}}):t._e(),3===t.initialUser.formStep?i("Form3",{attrs:{"initial-user":t.initialUser},on:{"previous-step-clicked":t.onPreviousStepClicked,"final-step-clicked":t.onFinalStepClicked}}):t._e()],1)])},$=[],P=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{attrs:{id:"a-form"}},[i("div",{staticClass:"form-content"},[i("div",{staticClass:"part"},[i("h2",[t._v("寄送地址")]),i("div",{staticClass:"full-name"},[i("div",{staticClass:"form-row gender"},[i("label",{attrs:{for:"prefix"}},[t._v("稱謂")]),i("div",{staticClass:"select-wrapper"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.user.prefix,expression:"user.prefix"}],attrs:{name:"a-type",id:"prefix",required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"prefix",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"",disabled:""}},[t._v("稱謂")]),i("option",{attrs:{value:"man"}},[t._v("先生")]),i("option",{attrs:{value:"woman"}},[t._v("女士")])])])]),i("div",{staticClass:"form-row name"},[i("label",{attrs:{for:""}},[t._v("姓名")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.name,expression:"user.name"}],attrs:{id:"name",type:"text",placeholder:"請輸入姓名",required:""},domProps:{value:t.user.name},on:{input:function(e){e.target.composing||t.$set(t.user,"name",e.target.value)}}})])]),i("div",{staticClass:"cotact-info"},[i("div",{staticClass:"form-row phone"},[i("label",{attrs:{for:""}},[t._v("電話")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],attrs:{id:"phone",type:"tel",pattern:"\\d+",placeholder:"請輸入行動電話",required:""},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})]),i("div",{staticClass:"form-row email"},[i("label",{attrs:{for:""}},[t._v("Email")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],attrs:{id:"email",type:"email",placeholder:"請輸入電子郵件",required:""},domProps:{value:t.user.email},on:{input:function(e){e.target.composing||t.$set(t.user,"email",e.target.value)}}})])]),i("div",{staticClass:"location"},[i("div",{staticClass:"form-row city"},[i("label",{attrs:{for:"city"}},[t._v("縣市")]),i("div",{staticClass:"select-wrapper"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.user.city,expression:"user.city"}],attrs:{name:"a-type",id:"city",required:""},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.user,"city",e.target.multiple?i:i[0])}}},[i("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("請選擇縣市")]),t._l(t.cities,(function(e){return i("option",{key:e.id,domProps:{value:e.name}},[t._v(" "+t._s(e.name)+" ")])}))],2)])]),i("div",{staticClass:"form-row address"},[i("label",{attrs:{for:"address"}},[t._v("地址")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.address,expression:"user.address"}],attrs:{id:"address",type:"text",placeholder:"請輸入地址",required:""},domProps:{value:t.user.address},on:{input:function(e){e.target.composing||t.$set(t.user,"address",e.target.value)}}})])])])]),i("div",{staticClass:"control-panel",attrs:{id:"btn-control"}},[i("button",{staticClass:"btn btn-primary ml-4",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.nextStep.apply(null,arguments)}}},[t._v(" 下一步 → ")])])])},N=[],q=i("2909"),U={methods:{fetchUser:function(){this.user=Object(v["a"])({},this.initialUser)}}},E={mixins:[U],props:{initialUser:{type:Object,required:!0},initialCities:{type:Array,requred:!0}},data:function(){return{cities:[],user:{prefix:"",name:"",phone:"",email:"",city:"",address:""}}},created:function(){this.fetchCities(),this.fetchUser()},methods:{fetchCities:function(){this.cities=Object(q["a"])(this.initialCities)},nextStep:function(){var t=this.user,e=t.prefix,i=t.name,s=t.phone,a=t.email,r=t.city,n=t.address;if(!e||!i||!s||!a||!r||!n)return window.alert("請填寫所有欄位");this.$emit("next-step-clicked",this.user)}}},F=E,D=Object(n["a"])(F,P,N,!1,null,null,null),V=D.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{attrs:{id:"a-form"}},[i("div",{staticClass:"form-content"},[i("div",{staticClass:"part",attrs:{id:"delivery"}},[i("h2",[t._v("運送方式")]),i("div",{staticClass:"form-row delivery-way"},[i("div",{staticClass:"delivery d-flex align-items-center"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.delivery,expression:"user.delivery"}],staticClass:"free",attrs:{name:"delivery",type:"radio",value:"0"},domProps:{checked:t._q(t.user.delivery,"0")},on:{change:function(e){return t.$set(t.user,"delivery","0")}}}),t._m(0)])]),i("div",{staticClass:"form-row col-1-6"},[i("div",{staticClass:"delivery d-flex align-items-center"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.delivery,expression:"user.delivery"}],staticClass:"fee",attrs:{name:"delivery",type:"radio",value:"500"},domProps:{checked:t._q(t.user.delivery,"500")},on:{change:function(e){return t.$set(t.user,"delivery","500")}}}),t._m(1)])])])]),i("div",{staticClass:"control-panel",attrs:{id:"btn-control"}},[i("button",{staticClass:"btn btn-outline",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.previousStep.apply(null,arguments)}}},[t._v(" ← 上一步 ")]),i("button",{staticClass:"btn btn-primary ml-4",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.nextStep.apply(null,arguments)}}},[t._v(" 下一步 → ")])])])},T=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:""}},[i("div",{staticClass:"delivery-title"},[i("div",{staticClass:"title"},[t._v("標準運送")]),i("div",{staticClass:"cost"},[t._v("免費")])]),i("div",{staticClass:"description"},[t._v("約3-4個工作天")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("label",{attrs:{for:""}},[i("div",{staticClass:"delivery-title"},[i("div",{staticClass:"title"},[t._v("DHL貨運")]),i("div",{staticClass:"cost"},[t._v("$500")])]),i("div",{staticClass:"description"},[t._v("48小時內送達")])])}],I={mixins:[U],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:{delivery:""}}},created:function(){this.fetchUser()},methods:{previousStep:function(){this.$emit("previous-step-clicked",this.user)},nextStep:function(){var t=this.user.delivery;if(!t)return window.alert("請選擇運送方式");this.$emit("next-step-clicked",this.user)}}},L=I,M=Object(n["a"])(L,A,T,!1,null,null,null),H=M.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{attrs:{id:"a-form"}},[i("div",{staticClass:"form-content"},[i("div",{staticClass:"part"},[i("h2",[t._v("付款資訊")]),i("div",{staticClass:"form-row payer-name"},[i("label",{attrs:{for:""}},[t._v("持卡人姓名")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.payerName,expression:"user.payerName"}],attrs:{type:"text",placeholder:"John Doe",required:""},domProps:{value:t.user.payerName},on:{input:function(e){e.target.composing||t.$set(t.user,"payerName",e.target.value)}}})]),i("div",{staticClass:"form-row card-number"},[i("label",{attrs:{for:""}},[t._v("卡號")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.cardNumber,expression:"user.cardNumber"}],attrs:{type:"text",placeholder:"1111 2222 3333 4444",pattern:"\\d{4} \\d{4}",required:""},domProps:{value:t.user.cardNumber},on:{input:function(e){e.target.composing||t.$set(t.user,"cardNumber",e.target.value)}}})]),i("div",{staticClass:"date-cvc"},[i("div",{staticClass:"form-row date"},[i("label",{attrs:{for:""}},[t._v("有效日期")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.goodThru,expression:"user.goodThru"}],attrs:{type:"text",placeholder:"MM/YY",pattern:"\\d{2}\\/\\d{2}",required:""},domProps:{value:t.user.goodThru},on:{input:function(e){e.target.composing||t.$set(t.user,"goodThru",e.target.value)}}})]),i("div",{staticClass:"form-row CVC"},[i("label",{attrs:{for:""}},[t._v("CVC/CCV")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.user.CVC,expression:"user.CVC"}],attrs:{type:"number",placeholder:"123",min:"0",required:""},domProps:{value:t.user.CVC},on:{input:function(e){e.target.composing||t.$set(t.user,"CVC",e.target.value)}}})])])])]),i("div",{staticClass:"control-panel",attrs:{id:"btn-control"}},[i("button",{staticClass:"btn btn-outline",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.previousStep.apply(null,arguments)}}},[t._v(" ← 上一步 ")]),i("button",{staticClass:"btn btn-primary ml-4",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.finalStep.apply(null,arguments)}}},[t._v(" 確認下單 ")])])])},K=[],Y={mixins:[U],props:{initialUser:{type:Object,required:!0}},data:function(){return{user:{payerName:"",cardNumber:"",goodThru:"",CVC:""}}},created:function(){this.fetchUser()},methods:{previousStep:function(){this.$emit("previous-step-clicked",this.user)},finalStep:function(){var t=this.user,e=t.payerName,i=t.cardNumber,s=t.goodThru,a=t.CVC;if(!e||!i||!s||!a)return window.alert("請填寫所有欄位");this.$emit("final-step-clicked",this.user)}}},J=Y,G=Object(n["a"])(J,R,K,!1,null,null,null),Q=G.exports,X={mixins:[U],components:{Form1:V,Form2:H,Form3:Q},props:{initialUser:{type:Object,required:!0},initialCities:{type:Array,required:!0}},data:function(){return{user:{}}},created:function(){this.fetchUser()},methods:{onPreviousStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.user.formStep>0&&(this.user.formStep-=1),this.$emit("previous-step-clicked",this.user)},onNextStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.user.formStep<3&&(this.user.formStep+=1),this.$emit("next-step-clicked",this.user)},onFinalStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.$emit("final-step-clicked",this.user)}}},z=X,B=Object(n["a"])(z,j,$,!1,null,null,null),W=B.exports,Z={mixins:[U],components:{StepPanel:w,FormPanel:W},props:{initialUser:{type:Object,required:!0},initialCities:{type:Array,requred:!0}},data:function(){return{user:{}}},created:function(){this.fetchUser()},methods:{onPreviousStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.$emit("previous-step-clicked",this.user)},onNextStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.$emit("next-step-clicked",this.user)},onFinalStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.$emit("final-step-clicked",this.user)},onDeliveryChanged:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.$emit("delivery-changed",this.user)}}},tt=Z,et=Object(n["a"])(tt,_,y,!1,null,null,null),it=et.exports,st=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"right-content"},[i("div",{staticClass:"card list-container"},[i("h4",{staticClass:"shopping-cart"},[t._v("購物籃")]),i("div",{staticClass:"shopping-list"},t._l(t.items,(function(e){return i("div",{key:e.id,staticClass:"item"},[i("div",{staticClass:"item-img"},[i("img",{attrs:{src:e.img}})]),i("div",{staticClass:"count-panel"},[i("div",{staticClass:"item-part"},[i("p",{staticClass:"item-name"},[t._v(t._s(e.name))]),i("div",{staticClass:"count"},[i("div",{staticClass:"reduce-circle",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.reduceOne(e.id)}}}),i("div",{staticClass:"item-num"},[t._v(t._s(e.amount))]),i("div",{staticClass:"add-circle",on:{click:function(i){return i.stopPropagation(),i.preventDefault(),t.addOne(e.id)}}})])]),i("div",{staticClass:"item-cost"},[t._v("$"+t._s(e.price))])])])})),0),i("div",{staticClass:"cal"},[i("div",{staticClass:"fee"},[i("span",{staticClass:"fee-title"},[t._v("運費")]),i("span",{staticClass:"fee-cost"},[t._v(t._s(t.user.delivery))])]),i("div",{staticClass:"sum"},[i("span",{staticClass:"sum-title"},[t._v("小計")]),i("span",{staticClass:"sum-cost"},[t._v("$"+t._s(t.totalPrice))])])])])])},at=[],rt={mixins:[U],props:{initialUser:{type:Object,required:!0},initialItems:{type:Array,required:!0}},data:function(){return{user:{},items:[]}},created:function(){this.fetchUser(),this.fetchItems()},methods:{fetchItems:function(){this.items=Object(q["a"])(this.initialItems)},addOne:function(t){this.$emit("item-add-one",t)},reduceOne:function(t){this.$emit("item-reduce-one",t)}},computed:{totalPrice:function(){var t=0;return this.items.map((function(e){t+=e.amount*e.price})),t+=Number(this.user.delivery),t}},watch:{initialUser:{handler:function(){this.fetchUser()},deep:!0}}},nt=rt,lt=Object(n["a"])(nt,st,at,!1,null,null,null),ct=lt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"footer"},[i("div",{staticClass:"container footer-content"},[i("div",{staticClass:"logo"},[i("img",{attrs:{src:"https://i.ibb.co/K6qCSys/aclogo.png"}})]),i("div",{staticClass:"nav"},[t._v(" 客戶服務 "),i("ul",{staticClass:"nav-list d-flex flex-column"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("運送說明")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("退換貨說明")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("付款資訊")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("FAQ")])])])]),i("div",{staticClass:"nav"},[t._v(" 關於我們 "),i("ul",{staticClass:"nav-list d-flex flex-column"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("品牌故事")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("媒體連繫")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Press kit")])])])]),i("div",{staticClass:"nav"},[t._v(" 資訊 "),i("ul",{staticClass:"nav-list d-flex flex-column"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("隱私權政策")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("Cookie")])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("GDPR")])])])]),i("div",{staticClass:"nav"},[t._v(" 追蹤 ALPHA SHOP "),i("ul",{staticClass:"nav-list d-flex flex-column"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[t._v("+886 02123-45678")])]),i("div",{staticClass:"contact d-flex flex-row"},[i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[i("i",{staticClass:"fab fa-facebook-f"})])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[i("i",{staticClass:"fab fa-instagram"})])]),i("li",{staticClass:"nav-item"},[i("a",{staticClass:"nav-link",attrs:{href:""}},[i("i",{staticClass:"fab fa-whatsapp"})])])])])])])])}],dt={},pt=Object(n["a"])(dt,ot,ut,!1,null,null,null),vt=pt.exports,mt={name:"Checkout",components:{Navbar:b,LeftContent:it,RightContent:ct,Footer:vt},data:function(){return{user:{prefix:"",name:"",phone:"",email:"",city:"",address:"",id:-1,delivery:"",payerName:"",cardNumber:"",goodThru:"",CVC:"",formStep:1,totalPrice:0},cities:[{name:"基隆市",id:"1"},{name:"台北市",id:"2"},{name:"新北市",id:"3"},{name:"桃園市",id:"4"},{name:"新竹市",id:"5"},{name:"新竹縣",id:"6"},{name:"苗栗市",id:"7"},{name:"台中縣",id:"8"},{name:"彰化縣",id:"9"},{name:"南投縣",id:"10"},{name:"雲林縣",id:"11"},{name:"嘉義市",id:"12"},{name:"嘉義縣",id:"13"},{name:"台南市",id:"14"},{name:"高雄市",id:"15"},{name:"屏東縣",id:"16"},{name:"台東縣",id:"18"},{name:"花蓮縣",id:"19"},{name:"宜蘭縣",id:"20"},{name:"澎湖縣",id:"21"},{name:"金門縣",id:"22"},{name:"連江縣",id:"23"}],items:[{name:"破洞補釘牛仔褲",img:"https://i.ibb.co/vXLmvf0/1.jpg",amount:1,price:3999,id:1},{name:"刷色直筒牛仔褲",img:"https://i.ibb.co/qYnKGs7/2.jpg",amount:1,price:1299,id:2}]}},methods:{onPreviousStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t)},onNextStepClicked:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t)},handleSubmit:function(t){this.user=Object(v["a"])(Object(v["a"])({},this.user),t),this.totalPrice();var e=this.user,i=e.prefix,s=e.name,a=e.phone,r=e.email,n=e.city,l=e.address,c=e.id,o=e.delivery,u=e.payerName,d=e.cardNumber,p=e.goodThru,m=e.CVC,f=e.totalPrice;window.alert("\n        Yeaaah you made a successful purchase💖\n\n        稱謂: ".concat("woman"===i?"女士":"先生","\n        姓名: ").concat(s,"\n        電話: ").concat(a,"\n        email: ").concat(r,"\n        縣市: ").concat(n,"\n        地址: ").concat(l,"\n        id: ").concat(c,"\n        運送方式: ").concat("500"===o?"DHL":"標準","\n        付款人: ").concat(u,"\n        信用卡號: ").concat(d,"\n        有效日期: ").concat(p,"\n        CVC: ").concat(m,"       \n        總價格: ").concat(f,"\n      "))},onItemAdded:function(t){this.items.map((function(e){e.id===t&&(e.amount+=1)}))},onItemReduced:function(t){this.items.map((function(e){e.id===t&&e.amount>0&&(e.amount-=1)}))},totalPrice:function(){var t=0;this.items.map((function(e){t+=e.amount*e.price})),t+=Number(this.user.delivery),this.user.totalPrice=t}}},ft=mt,ht=Object(n["a"])(ft,d,p,!1,null,null,null),Ct=ht.exports,bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("h1",[t._v("404 Page Not Found")])},_t=[],yt={},gt=Object(n["a"])(yt,bt,_t,!1,null,null,null),xt=gt.exports;s["a"].use(u["a"]);var kt=[{path:"/",name:"Home",redirect:"/alphashop/checkout"},{path:"/alphashop/checkout",name:"Checkout",component:Ct},{path:"*",name:"not-found",component:xt}],Ot=new u["a"]({routes:kt}),St=Ot;s["a"].config.productionTip=!1,new s["a"]({router:St,render:function(t){return t(o)}}).$mount("#app")},"5c0b":function(t,e,i){"use strict";i("9c0c")},"9c0c":function(t,e,i){}});
//# sourceMappingURL=app.9a973369.js.map