import"./vendor.ebc30097.js";/* empty css             *//* empty css               *//* empty css              */import{_ as e,g as t,d as r,C as a,h as l,X as o,Y as n,j as i,N as s,M as u,G as d,O as p,P as c,E as m,o as g,c as f,w as b,a as h,f as y,m as v,Z as S,Q as _,$ as w,q as x,R as C,J as k,K as j,a0 as P,T as N}from"./index.c118f695.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                   */const z={class:"header"},I={key:0},V={key:1},D={key:2},T=h("a",{style:{cursor:"pointer","margin-right":"10px"}},"配货完成",-1),O=h("a",{style:{cursor:"pointer","margin-right":"10px"}},"出库",-1),U=h("a",{style:{cursor:"pointer","margin-right":"10px"}},"关闭订单",-1);var q=e({__name:"Order",setup(e){const q=t({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,orderNo:"",orderStatus:"",options:[{value:"",label:"全部"},{value:0,label:"待支付"},{value:1,label:"已支付"},{value:2,label:"配货完成"},{value:3,label:"出库成功"},{value:4,label:"交易成功"},{value:-1,label:"手动关闭"},{value:-2,label:"超时关闭"},{value:-3,label:"商家关闭"}]});r((()=>{M()}));const M=()=>{q.loading=!0,a.get("/orders",{params:{pageNumber:q.currentPage,pageSize:q.pageSize,orderNo:q.orderNo,orderStatus:q.orderStatus}}).then((e=>{q.tableData=e.list,q.total=e.totalCount,q.currentPage=e.currPage,q.loading=!1}))},R=()=>{q.currentPage=1,M()},$=e=>{q.multipleSelection=e},E=e=>{q.currentPage=e,M()},G=e=>{let t;if(e)t=[e];else{if(!q.multipleSelection.length)return console.log("state.multipleSelection",q.multipleSelection.length),void j.error("请选择项");t=q.multipleSelection.map((e=>e.orderId))}a.put("/orders/checkDone",{ids:t}).then((()=>{j.success("配货成功"),M()}))},H=e=>{let t;if(e)t=[e];else{if(!q.multipleSelection.length)return void j.error("请选择项");t=q.multipleSelection.map((e=>e.orderId))}a.put("/orders/checkOut",{ids:t}).then((()=>{j.success("出库成功"),M()}))},J=e=>{let t;if(e)t=[e];else{if(!q.multipleSelection.length)return void j.error("请选择项");t=q.multipleSelection.map((e=>e.orderId))}a.put("/orders/close",{ids:t}).then((()=>{j.success("关闭成功"),M()}))};return(e,t)=>{const r=l,a=o,j=n,M=i,K=s,Q=u,X=d("router-link"),Y=p,Z=c,A=m;return g(),f(A,{class:"order-container"},{header:b((()=>[h("div",z,[y(r,{style:{width:"200px","margin-right":"10px"},placeholder:"请输入订单号",modelValue:q.orderNo,"onUpdate:modelValue":t[0]||(t[0]=e=>q.orderNo=e),onChange:R,clearable:""},null,8,["modelValue"]),y(j,{onChange:R,modelValue:q.orderStatus,"onUpdate:modelValue":t[1]||(t[1]=e=>q.orderStatus=e),style:{width:"200px","margin-right":"10px"}},{default:b((()=>[(g(!0),v(_,null,S(q.options,(e=>(g(),f(a,{key:e.value,label:e.label,value:e.value},null,8,["label","value"])))),128))])),_:1},8,["modelValue"]),w(' <el-button type="primary" size="small" icon="el-icon-edit">修改订单</el-button> '),y(M,{type:"primary",icon:C(P),onClick:t[2]||(t[2]=e=>G())},{default:b((()=>[x("配货完成")])),_:1},8,["icon"]),y(M,{type:"primary",icon:C(P),onClick:t[3]||(t[3]=e=>H())},{default:b((()=>[x("出库")])),_:1},8,["icon"]),y(M,{type:"danger",icon:C(N),onClick:t[4]||(t[4]=e=>J())},{default:b((()=>[x("关闭订单")])),_:1},8,["icon"])])])),default:b((()=>[y(Y,{load:q.loading,data:q.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:$},{default:b((()=>[y(K,{type:"selection",width:"55"}),y(K,{prop:"orderNo",label:"订单号"}),y(K,{prop:"totalPrice",label:"订单总价"}),y(K,{prop:"orderStatus",label:"订单状态"},{default:b((t=>[h("span",null,k(e.$filters.orderMap(t.row.orderStatus)),1)])),_:1}),y(K,{prop:"payType",label:"支付方式"},{default:b((e=>[1==e.row.payType?(g(),v("span",I,"微信支付")):2==e.row.payType?(g(),v("span",V,"支付宝支付")):(g(),v("span",D,"未知"))])),_:1}),y(K,{prop:"createTime",label:"创建时间戳"}),y(K,{label:"操作"},{default:b((e=>[1==e.row.orderStatus?(g(),f(Q,{key:0,title:"确认配货完成吗？",onConfirm:t=>G(e.row.orderId),"confirm-button-text":"确认","cancel-button-text":"取消"},{reference:b((()=>[T])),_:2},1032,["onConfirm"])):w("v-if",!0),2==e.row.orderStatus?(g(),f(Q,{key:1,title:"确认出库吗？",onConfirm:t=>H(e.row.orderId),"confirm-button-text":"确认","cancel-button-text":"取消"},{reference:b((()=>[O])),_:2},1032,["onConfirm"])):w("v-if",!0),4==e.row.orderStatus||e.row.orderStatus<0?w("v-if",!0):(g(),f(Q,{key:2,title:"确认关闭订单吗？",onConfirm:t=>J(e.row.orderId),"confirm-button-text":"确认","cancel-button-text":"取消"},{reference:b((()=>[U])),_:2},1032,["onConfirm"])),y(X,{to:{path:"/order_detail",query:{id:e.row.orderId}}},{default:b((()=>[x("订单详情")])),_:2},1032,["to"])])),_:1})])),_:1},8,["load","data"]),y(Z,{background:"",layout:"prev, pager, next",total:q.total,"page-size":q.pageSize,"current-page":q.currentPage,onCurrentChange:E},null,8,["total","page-size","current-page"])])),_:1})}}},[["__file","C:/Users/HDR10/source/repos/vue3-admin/src/views/Order.vue"]]);export{q as default};
