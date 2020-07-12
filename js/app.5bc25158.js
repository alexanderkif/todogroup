(function(e){function t(t){for(var r,a,i=t[0],u=t[1],c=t[2],p=0,l=[];p<i.length;p++)a=i[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&l.push(n[a][0]),n[a]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);d&&d(t);while(l.length)l.shift()();return s.push.apply(s,c||[]),o()}function o(){for(var e,t=0;t<s.length;t++){for(var o=s[t],r=!0,a=1;a<o.length;a++){var u=o[a];0!==n[u]&&(r=!1)}r&&(s.splice(t--,1),e=i(i.s=o[0]))}return e}var r={},n={1:0},s=[];function a(e){return i.p+"js/"+({}[e]||e)+"."+{2:"991d8030",3:"68914a0b",4:"1fc8dfb3",5:"71391ae8",6:"194bfedd",7:"5cb9551f",8:"5f302cfd"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.e=function(e){var t=[],o=n[e];if(0!==o)if(o)t.push(o[2]);else{var r=new Promise((function(t,r){o=n[e]=[t,r]}));t.push(o[2]=r);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=a(e);var c=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(p);var o=n[e];if(0!==o){if(o){var r=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+s+")",c.name="ChunkLoadError",c.type=r,c.request=s,o[1](c)}n[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(o,r,function(t){return e[t]}.bind(null,r));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var d=c;s.push([0,0]),o()})({0:function(e,t,o){e.exports=o("2f39")},"2f39":function(e,t,o){"use strict";o.r(t);var r={};o.r(r),o.d(r,"getLang",(function(){return L})),o.d(r,"getLangSet",(function(){return j}));var n={};o.r(n),o.d(n,"changeLang",(function(){return T}));var s={};o.r(s),o.d(s,"changeLang",(function(){return _}));var a={};o.r(a),o.d(a,"getUser",(function(){return k})),o.d(a,"getGroupUsers",(function(){return A}));var i={};o.r(i),o.d(i,"setUser",(function(){return M})),o.d(i,"setUsers",(function(){return R})),o.d(i,"createGroup",(function(){return B})),o.d(i,"exitUser",(function(){return F}));var u={};o.r(u),o.d(u,"saveUser",(function(){return W})),o.d(u,"loginUser",(function(){return Y})),o.d(u,"exitUser",(function(){return z})),o.d(u,"getUserById",(function(){return H})),o.d(u,"getUsersByIds",(function(){return K})),o.d(u,"createGroup",(function(){return X}));var c={};o.r(c),o.d(c,"getGroups",(function(){return te})),o.d(c,"getGroup",(function(){return oe}));var p={};o.r(p),o.d(p,"setGroups",(function(){return re})),o.d(p,"setGroup",(function(){return ne})),o.d(p,"renewGroup",(function(){return se})),o.d(p,"toggleItem",(function(){return ae})),o.d(p,"addItemIdToGroup",(function(){return ie})),o.d(p,"removeItemsFromGroup",(function(){return ue})),o.d(p,"exitUser",(function(){return ce}));var d={};o.r(d),o.d(d,"getGroups",(function(){return de})),o.d(d,"getGroup",(function(){return le})),o.d(d,"addUserToGroup",(function(){return me})),o.d(d,"updateGroupItems",(function(){return fe})),o.d(d,"addItemIdToGroup",(function(){return he})),o.d(d,"removeItemsFromGroup",(function(){return ye})),o.d(d,"exitUser",(function(){return be})),o.d(d,"deleteGroupById",(function(){return we}));var l={};o.r(l),o.d(l,"getItems",(function(){return Pe})),o.d(l,"getItem",(function(){return xe}));var g={};o.r(g),o.d(g,"setItems",(function(){return $e})),o.d(g,"setItem",(function(){return Ee})),o.d(g,"exitUser",(function(){return Ne}));var m={};o.r(m),o.d(m,"createItem",(function(){return Oe})),o.d(m,"toggleItem",(function(){return Le})),o.d(m,"getItemsByIds",(function(){return Te})),o.d(m,"exitUser",(function(){return _e})),o.d(m,"deleteItemsByIds",(function(){return Ce}));o("e6cf"),o("5319");var f=o("c973"),h=o.n(f),v=(o("7d6e"),o("e54f"),o("985d"),o("31cd"),o("2b0e")),y=o("1f91"),G=o("42d2"),b=o("b05d"),w=o("515f"),I=o("2a19");v["a"].use(b["a"],{config:{},lang:y["a"],iconSet:G["a"],plugins:{Cookies:w["a"],Notify:I["a"]}});var U=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{attrs:{id:"q-app"}},[o("router-view")],1)},P=[],x={name:"App"},$=x,E=o("2877"),N=Object(E["a"])($,U,P,!1,null,null,null),q=N.exports,O=o("2f62"),S=function(){return{langSet:[{value:"en-us",label:"English"},{value:"ru",label:"Русский"}],lang:""}};function L(e){return e.lang}function j(e){return e.langSet}function T(e,t){e.lang=t}function _(e,t){e.commit("changeLang",t)}var C={namespaced:!0,getters:r,mutations:n,actions:s,state:S},D=function(){return{user:{},users:[]}};function k(e){return e.user}function A(e){return e.users}function M(e,t){e.user=t}function R(e,t){e.users=t}function B(e,t){e.user.groups||(console.log("createGroup mutation: user.groups = []"),e.user.groups=[]),e.user.groups.push(t)}function F(e){e.user={},e.users=[]}var V=o("bc3a"),J=o.n(V);const Q="https://todogroup.vercel.app/users";function W(e,t){console.log("action Users"),console.log(t),J.a.post(""+Q,t).then(t=>{e.commit("setUser",t.data.msg),I["a"].create({type:"positive",position:"top",message:"Welcome, "+t.data.msg.name})}).catch(e=>{console.log("error"),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}function Y(e,t){J.a.post(""+Q,t).then(t=>{console.log("response loginUser"),console.log(t.data.msg),t.data.msg?(e.commit("setUser",t.data.msg),I["a"].create({type:"positive",position:"top",message:"Welcome, "+t.data.msg.name})):I["a"].create({type:"negative",position:"top",message:"User not found"})}).catch(e=>{console.log("error"),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}function z(e){e.commit("exitUser")}function H(e,t){const o=[];o.push(t),J.a.get(`${Q}/list?userids=${o}`).then(t=>{t.data.msg?e.commit("setUser",t.data.msg[0]):I["a"].create({type:"negative",position:"top",message:"User not found"})}).catch(e=>{console.log("error"),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}function K(e,t){J.a.get(`${Q}/list?userids=${t}`).then(t=>{t.data.msg?e.commit("setUsers",t.data.msg):I["a"].create({type:"negative",position:"top",message:"Users not found"})}).catch(e=>{console.log("error"),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}function X(e,t){J.a.post(Q+"/creategroup",t).then(t=>{e.commit("createGroup",t.data.msg),I["a"].create({type:"positive",position:"top",message:`Group ${t.data.msg.groupName} created`})}).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}var Z={namespaced:!0,getters:a,mutations:i,actions:u,state:D},ee=function(){return{group:{},groups:["noloaded"]}};function te(e){return e.groups}function oe(e){return e.group}o("e01a"),o("a434");function re(e,t){e.groups=t}function ne(e,t){e.group=t}function se(e){console.log("renewGroup")}function ae(e,t){const o=e.group.items.findIndex(e=>e.itemName===t.itemName&&e.description===t.description);t.checked=!t.checked,console.log("toggleItem item = ",t),-1!==o&&e.group.items.splice(o,1,t)}function ie(e,t){e.group.items?e.group.items.push(t):e.group.items=[t]}function ue(e,t){e.group.items=e.group.items.filter(e=>!t.includes(e))}function ce(e){e.group={},e.groups="noloaded"}const pe="https://todogroup.vercel.app/groups";function de(e,t){J.a.get(`${pe}?userid=${t}`).then(t=>{e.commit("setGroups",t.data.msg)}).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}function le(e,t){return ge.apply(this,arguments)}function ge(){return ge=h()((function*(e,t){return yield J.a.get(`${pe}/getgroup?id=${t}`).then(t=>(e.commit("setGroup",t.data.msg),t.data.msg)).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})})),ge.apply(this,arguments)}function me(e,t){J.a.post(pe+"/addusertogroup",t).then(t=>{e.commit("renewGroup"),I["a"].create({type:"positive",position:"top",message:"User added."})}).catch(e=>{console.log("addUserToGroup error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error addUserToGroup: "+e.response})})}function fe(e,t){t.id=t._id,J.a.post(pe+"/updategroupitems",t).then(t=>{e.commit("setGroup",t.data.msg),I["a"].create({type:"positive",position:"top",message:`Group ${t.data.msg.groupName} saved.`})}).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Didn't save. Try again. Error: "+e.response})})}function he(e,t){return ve.apply(this,arguments)}function ve(){return ve=h()((function*(e,t){yield e.commit("addItemIdToGroup",t)})),ve.apply(this,arguments)}function ye(e,t){return Ge.apply(this,arguments)}function Ge(){return Ge=h()((function*(e,t){yield e.commit("removeItemsFromGroup",t)})),Ge.apply(this,arguments)}function be(e){e.commit("exitUser")}function we(e,t){console.log("deleteGroupById id = ",t),J.a.get(`${pe}/getgroup?delete=true&id=${t}`).then(e=>{I["a"].create({type:"positive",position:"top",message:`Deleted ${e.data.msg.n} group.`})}).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})}var Ie={namespaced:!0,getters:c,mutations:p,actions:d,state:ee},Ue=function(){return{item:{},items:[]}};function Pe(e){return e.items}function xe(e){return e.item}function $e(e,t){e.items=t}function Ee(e,t){e.item=t}function Ne(e){e.item={},e.items=[]}const qe="https://todogroup.vercel.app/items";function Oe(e,t){return Se.apply(this,arguments)}function Se(){return Se=h()((function*(e,t){return yield J.a.post(""+qe,t).then(e=>(I["a"].create({type:"positive",position:"top",message:`Item ${e.data.msg.itemName} created`}),e.data.msg._id)).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})})),Se.apply(this,arguments)}function Le(e,t){return je.apply(this,arguments)}function je(){return je=h()((function*(e,t){return console.log("action oldAndNewItems = ",t),yield J.a.post(""+qe,t).then(e=>(I["a"].create({type:"positive",position:"top",message:`Item ${e.data.msg.itemName} saved`}),e.data.msg._id)).catch(e=>{console.log("error"),console.log(e),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})})),je.apply(this,arguments)}function Te(e,t){t?J.a.get(`${qe}/list?itemids=${t}`).then(t=>{t.data.msg?e.commit("setItems",t.data.msg):I["a"].create({type:"negative",position:"top",message:"Items not found"})}).catch(e=>{console.log("error"),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})}):e.commit("setItems",{})}function _e(e){e.commit("exitUser")}function Ce(e,t){return De.apply(this,arguments)}function De(){return De=h()((function*(e,t){return yield J.a.get(`${qe}/list?delete=true&itemids=${t}`).then(e=>{e.data.msg?I["a"].create({type:"positive",position:"top",message:e.data.msg}):I["a"].create({type:"negative",position:"top",message:"Items not deleted"})}).catch(e=>{console.log("error"),I["a"].create({type:"negative",position:"top",message:"Error: "+e.response})})})),De.apply(this,arguments)}var ke={namespaced:!0,getters:l,mutations:g,actions:m,state:Ue};v["a"].use(O["a"]);var Ae=function(){const e=new O["a"].Store({modules:{lang:C,user:Z,group:Ie,item:ke},strict:!1});return e},Me=o("8c4f");const Re=[{path:"/",component:()=>Promise.all([o.e(0),o.e(3)]).then(o.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([o.e(0),o.e(7)]).then(o.bind(null,"8b24"))},{path:"options",component:()=>Promise.all([o.e(0),o.e(8)]).then(o.bind(null,"3370"))},{path:"add",component:()=>Promise.all([o.e(0),o.e(4)]).then(o.bind(null,"7cd1"))},{path:"create",component:()=>Promise.all([o.e(0),o.e(5)]).then(o.bind(null,"e6a1"))},{path:"groupdetail",component:()=>Promise.all([o.e(0),o.e(6)]).then(o.bind(null,"424a"))}]}];Re.push({path:"*",component:()=>Promise.all([o.e(0),o.e(2)]).then(o.bind(null,"e51e"))});var Be=Re;v["a"].use(Me["a"]);var Fe=function(){const e=new Me["a"]({scrollBehavior:()=>({x:0,y:0}),routes:Be,mode:"hash",base:""});return e},Ve=function(){return Je.apply(this,arguments)};function Je(){return Je=h()((function*(){const e="function"===typeof Ae?yield Ae({Vue:v["a"]}):Ae,t="function"===typeof Fe?yield Fe({Vue:v["a"],store:e}):Fe;e.$router=t;const o={router:t,store:e,render:e=>e(q),el:"#q-app"};return{app:o,store:e,router:t}})),Je.apply(this,arguments)}var Qe=o("9483");Object(Qe["a"])("service-worker.js",{ready(){},registered(){},cached(){},updatefound(){},updated(){},offline(){},error(){}});var We=o("a925"),Ye={GroupList:{noGroups:"No groups added",create:"Create group",connect:"Connect to group",noDescr:"No description",wait:"Groups not loaded yet."},MainLayout:{title:"To do list"},MainNav:{GroupList:"Groups list",options:"Options",addGroup:"Add group",createGroup:"Create group"},Options:{language:"Language",user:"User"},User:{optional:"Optional",required:"Required",yourName:"Your name",yourPass:"Your password",phone:"Phone",submit:"Submit",newUser:"New user",editUser:"Edit user data",exitUser:"Logout",reset:"Reset",rules:"Please type something"},CreateGroup:{title:"Create new group",groupName:"Group name",required:"Required",save:"Save",reset:"Reset",decsr:"Description"},AddGroup:{title:"Enter the ID of an existing group. Request it from the group member.",groupId:"Group Id",required:"Required",save:"Save",reset:"Reset"},GroupDetail:{noItems:"No items yet.",addTitle:"Add item",itemName:"Item name",required:"Required",save:"Save",reset:"Reset",quantity:"Quantity",decsr:"Description",add:"Add item",saveGroup:"Save group"}},ze={GroupList:{noGroups:"Список групп пустой",create:"Создать группу",connect:"Присоединиться к группе",noDescr:"Описания нет",wait:"Группы пока не загружены."},MainLayout:{title:"Список дел"},MainNav:{GroupList:"Список групп",options:"Настройки",addGroup:"Добавить группу",createGroup:"Создать группу"},Options:{language:"Язык",user:"Пользователь"},User:{optional:"Опциональное",required:"Обязательное",yourName:"Ваше имя",yourPass:"Ваш пароль",phone:"Телефон",newUser:"Новый пользователь",editUser:"Редактировать данные",exitUser:"Выйти",submit:"Отправить",reset:"Сброс",rules:"Пожалуйста введите что-то"},CreateGroup:{title:"Создать новую группу",groupName:"Имя группы",required:"Обязательное",save:"Сохранить",reset:"Сброс",decsr:"Примечания"},AddGroup:{title:"Добавить существующую группу. Запросите ID у участника группы.",groupId:"Идентификатор группы",required:"Обязательное",save:"Сохранить",reset:"Сброс"},GroupDetail:{noItems:"Пока список пустой",addTitle:"Добавить позицию",itemName:"Название",required:"Обязательное",save:"Сохранить",reset:"Сброс",quantity:"Количество",decsr:"Примечания",add:"Добавить позицию",saveGroup:"Сохранить группу"}},He={"en-us":Ye,ru:ze};v["a"].use(We["a"]);const Ke=new We["a"]({locale:"en-us",fallbackLocale:"en-us",messages:He});var Xe=({app:e})=>{e.i18n=Ke};v["a"].prototype.$axios=J.a,/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream&&window.navigator.standalone&&o.e(0).then(o.t.bind(null,"a0db",7));const Ze="";function et(){return tt.apply(this,arguments)}function tt(){return tt=h()((function*(){const{app:e,store:t,router:o}=yield Ve();let r=!1;const n=e=>{r=!0;const t=Object(e)===e?o.resolve(e).route.fullPath:e;window.location.href=t},s=window.location.href.replace(window.location.origin,""),a=[Xe,void 0];for(let u=0;!1===r&&u<a.length;u++)if("function"===typeof a[u])try{yield a[u]({app:e,router:o,store:t,Vue:v["a"],ssrContext:null,redirect:n,urlPath:s,publicPath:Ze})}catch(i){return i&&i.url?void(window.location.href=i.url):void console.error("[Quasar] boot error:",i)}!0!==r&&new v["a"](e)})),tt.apply(this,arguments)}et()},"31cd":function(e,t,o){}});