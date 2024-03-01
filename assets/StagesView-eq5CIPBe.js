import{d as v,c as d,a as e,t as i,o as c,z as m,g as S,F as g,r as h,u as N,A as y,i as f,B as _,q as j,s as I,E as B,p as z,n as C,_ as q}from"./index-69ogqRqS.js";import{n as D,a as O}from"./stages-e224cJSa.js";import{_ as V}from"./0-8S0ubkj6.js";import{_ as E}from"./MaterialIcon.vue_vue_type_script_setup_true_lang-ZvnDI4cU.js";import"./images-GjvRfO82.js";const M=["data-tip"],F={class:"transform transition-transform duration-500 overflow-hidden relative"},H=["src"],R={class:"absolute text-white bottom-0.5 right-0.5 rounded bg-gray-700 rounded-tl px-1 py-px text-xs max-w-[7.775rem] lg:max-w-[9.775rem] whitespace-nowrap overflow-hidden overflow-ellipsis"},A=e("div",{class:"overlay absolute inset-0 bg-gray-500 opacity-0 group-hover:opacity-50 transition-opacity duration-300"},null,-1),x=v({__name:"StageSelectionIcon",props:{stage:{type:Object,required:!0},stageName:{type:String,required:!0}},setup(r){const t=r,s=()=>D(t.stage,t.stageName);return(l,o)=>(c(),d("div",{class:"tooltip relative overflow-hidden group cursor-pointer","data-tip":l.$t(s().stage)},[e("div",F,[e("img",{src:s().stageImagePath,alt:"Border Image",class:"w-32 lg:w-40 rounded transform transition-transform duration-300 group-hover:scale-110"},null,8,H),e("div",R,i(l.$t(s().stage)),1),A])],8,M))}}),G={class:"custom-box custom-border"},L={class:"space-y-1"},P={class:"text-white text-2xl font-bold py-1"},J={class:"flex items-center"},K={class:"text-white text-lg font-bold"},Q=e("div",{class:"w-9 rounded pb-0.5"},[e("img",{src:V,alt:"avatar"})],-1),T={class:"flex justify-center"},U={class:"custom-box custom-border"},W={class:"text-white"},X={class:"custom-item-list"},Y=v({__name:"StageDisplay",props:{selectedStage:{type:Object,required:!0},stageName:{type:String,required:!0}},setup(r){const t=r;return(s,l)=>(c(),d(g,null,[e("div",G,[e("div",L,[e("h2",P,i(s.$t(t.stageName)),1),e("p",{class:m(["",{"text-error":t.selectedStage.category==="Story","text-purple-400":t.selectedStage.category==="Hard","text-indigo-400":t.selectedStage.category==="Insight","text-yellow-400":t.selectedStage.category==="Resource"}])},i(s.$t(t.selectedStage.category)),3),e("div",J,[e("p",K,i(t.selectedStage.cost),1),Q]),e("div",T,[S(x,{stage:t.selectedStage,stageName:t.stageName},null,8,["stage","stageName"])])])]),e("div",U,[e("h2",W,i(s.$t("possible-drops")),1),e("div",X,[(c(!0),d(g,null,h(N(O)(t.selectedStage),o=>(c(),y(E,{key:o.Material,material:o},null,8,["material"]))),128))])])],64))}}),Z=r=>(z("data-v-e7be92cd"),r=r(),C(),r),ee={class:"responsive-spacer"},te={class:"flex pb-4"},se={class:"text-2xl text-white font-bold"},ae=Z(()=>e("div",{class:"pb-4"},[e("div",{role:"alert",class:"alert alert-info custom-gradient-gray-blue text-white"},[e("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"stroke-current shrink-0 w-6 h-6"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})]),e("p",{class:"text-sm lg:text-base"}," 1.4 drop rates have been displayed. ")])],-1)),oe={class:"wrapper"},re={class:"container"},ce={class:"card custom-border"},le={class:"flex flex-wrap justify-center gap-y-2"},ne={class:"flex flex-wrap justify-center space-x-2 gap-y-2 py-1.5"},ie=["onClick"],de={class:"card custom-border h-[calc(40vh)] lg:h-[calc(66vh)]"},ue={class:"custom-item-list"},pe={class:"flex flex-wrap justify-center gap-x-5 gap-y-2"},ge={class:"container"},_e=v({__name:"StagesView",setup(r){const t=["Story","Hard","Resource","Insight"],s=f(_().selectedStage),l=f(_().selectedStage.category),o=j().stages1_4,b=_(),w=n=>{s.value=n},$=I(()=>Object.keys(o).reduce((u,a)=>(o[a].category===l.value&&(u[a]=o[a]),u),{}));return B(()=>{const n=Object.values(o).find(u=>u.id===b.selectedStage.id);s.value=n||Object.values(o)[0]}),(n,u)=>(c(),d("div",ee,[e("div",te,[e("h2",se,i(n.$t("stages")),1)]),ae,e("div",oe,[e("div",re,[e("div",ce,[e("div",le,[e("div",ne,[(c(),d(g,null,h(t,(a,p)=>e("button",{key:p,onClick:k=>l.value=a,class:m(["hover:bg-info rounded-md text-white py-1 px-3",l.value===a?"border-button":""])},i(n.$t(a)),11,ie)),64))])])]),e("div",de,[e("div",ue,[e("div",pe,[(c(!0),d(g,null,h($.value,a=>{var p;return c(),y(x,{key:a.name,stage:a,stageName:a.name,onClick:k=>w(a),class:m(((p=s.value)==null?void 0:p.name)===a.name?"custom-border-white":"custom-border-transparent")},null,8,["stage","stageName","onClick","class"])}),128))])])])]),e("div",ge,[S(Y,{selectedStage:s.value,stageName:s.value.name},null,8,["selectedStage","stageName"])])])]))}}),ye=q(_e,[["__scopeId","data-v-e7be92cd"]]);export{ye as default};
