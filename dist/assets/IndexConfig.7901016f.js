import"./vendor.ebc30097.js";/* empty css             *//* empty css               *//* empty css              */import{_ as e,r as o,g as r,o as a,c as l,w as t,a as n,f as i,q as d,K as s,C as u,h as c,i as p,l as m,j as g,L as f,v as y,u as b,d as v,M as _,N as h,O as k,P as x,E as C,m as F,Q as T,R as w,J as V,S as j,T as U,p as I,b as S}from"./index.c118f695.js";/* empty css                  *//* empty css                     *//* empty css                 *//* empty css                   *//* empty css                *//* empty css                  */const P={class:"dialog-footer"};var R=e({__name:"DialogAddGood",props:{type:String,configType:Number,reload:Function},setup(e,{expose:y}){const b=e,v=o(null),_=r({visible:!1,ruleForm:{name:"",link:"",id:"",sort:""},rules:{name:[{required:"true",message:"名称不能为空",trigger:["change"]}],id:[{required:"true",message:"编号不能为空",trigger:["change"]}],sort:[{required:"true",message:"排序不能为空",trigger:["change"]}]},id:""}),h=()=>{v.value.validate((e=>{if(e){if(_.ruleForm.id<0||_.ruleForm.id>200)return void s.error("商品编号不能小于 0 或大于 200");"add"==b.type?u.post("/indexConfigs",{configType:b.configType||3,configName:_.ruleForm.name,redirectUrl:_.ruleForm.link,goodsId:_.ruleForm.id,configRank:_.ruleForm.sort}).then((()=>{s.success("新增成功"),_.visible=!1,b.reload&&b.reload()})):u.put("/indexConfigs",{configId:_.id,configType:b.configType||3,configName:_.ruleForm.name,redirectUrl:_.ruleForm.link,goodsId:_.ruleForm.id,configRank:_.ruleForm.sort}).then((()=>{s.success("修改成功"),_.visible=!1,b.reload&&b.reload()}))}}))};return y({open:e=>{_.visible=!0,e?(_.id=e,(e=>{u.get(`/indexConfigs/${e}`).then((e=>{_.ruleForm={name:e.configName,id:e.goodsId,link:e.redirectUrl,sort:e.configRank}}))})(e)):_.ruleForm={name:"",id:"",link:"",sort:""}},close:()=>{_.visible=!1}}),(o,r)=>{const s=c,u=p,y=m,b=g,k=f;return a(),l(k,{title:"add"==e.type?"新增商品":"修改商品",modelValue:_.visible,"onUpdate:modelValue":r[5]||(r[5]=e=>_.visible=e),width:"400px"},{footer:t((()=>[n("span",P,[i(b,{onClick:r[4]||(r[4]=e=>_.visible=!1)},{default:t((()=>[d("取 消")])),_:1}),i(b,{type:"primary",onClick:h},{default:t((()=>[d("确 定")])),_:1})])])),default:t((()=>[i(y,{model:_.ruleForm,rules:_.rules,ref_key:"formRef",ref:v,"label-width":"100px",class:"good-form"},{default:t((()=>[i(u,{label:"商品名称",prop:"name"},{default:t((()=>[i(s,{type:"text",modelValue:_.ruleForm.name,"onUpdate:modelValue":r[0]||(r[0]=e=>_.ruleForm.name=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"商品链接",prop:"link"},{default:t((()=>[i(s,{type:"text",modelValue:_.ruleForm.link,"onUpdate:modelValue":r[1]||(r[1]=e=>_.ruleForm.link=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"商品编号",prop:"id"},{default:t((()=>[i(s,{type:"number",min:"0",modelValue:_.ruleForm.id,"onUpdate:modelValue":r[2]||(r[2]=e=>_.ruleForm.id=e)},null,8,["modelValue"])])),_:1}),i(u,{label:"序号",prop:"sort"},{default:t((()=>[i(s,{type:"number",modelValue:_.ruleForm.sort,"onUpdate:modelValue":r[3]||(r[3]=e=>_.ruleForm.sort=e)},null,8,["modelValue"])])),_:1})])),_:1},8,["model","rules"])])),_:1},8,["title","modelValue"])}}},[["__file","C:/Users/HDR10/source/repos/QCShop-Admin/src/components/DialogAddGood.vue"]]);const D={class:"header"},N=["href"],z=["onClick"],q=(e=>(I("data-v-c24c5f2c"),e=e(),S(),e))((()=>n("a",{style:{cursor:"pointer"}},"删除",-1)));var B=e({__name:"IndexConfig",setup(e){const l={hot:3,new:4,recommend:5},c=y(),p=b(),m=o(null),f=o(null),I=r({loading:!1,tableData:[],multipleSelection:[],total:0,currentPage:1,pageSize:10,type:"add",configType:3});c.beforeEach((e=>{["hot","new","recommend"].includes(e.name)&&(I.configType=l[e.name],I.currentPage=1,S())})),v((()=>{I.configType=l[p.name],S()}));const S=()=>{I.loading=!0,u.get("/indexConfigs",{params:{pageNumber:I.currentPage,pageSize:I.pageSize,configType:I.configType}}).then((e=>{I.tableData=e.list,I.total=e.totalCount,I.currentPage=e.currPage,I.loading=!1}))},P=()=>{I.type="add",f.value.open()},B=e=>{I.multipleSelection=e},G=()=>{I.multipleSelection.length?u.delete("/indexConfigs",{ids:I.multipleSelection.map((e=>e.configId))}).then((()=>{s.success("删除成功"),S()})):s.error("请选择项")},A=e=>{I.currentPage=e,S()};return(e,o)=>{const r=g,l=_,c=h,p=k,y=x,b=C;return a(),F(T,null,[i(b,{class:"index-container"},{header:t((()=>[n("div",D,[i(r,{type:"primary",icon:w(j),onClick:P},{default:t((()=>[d("新增")])),_:1},8,["icon"]),i(l,{title:"确认删除吗？",confirmButtonText:"确认",cancelButtonText:"取消",onConfirm:G},{reference:t((()=>[i(r,{type:"danger",icon:w(U)},{default:t((()=>[d("多选删除")])),_:1},8,["icon"])])),_:1})])])),default:t((()=>[i(p,{load:I.loading,ref_key:"multipleTable",ref:m,data:I.tableData,"tooltip-effect":"dark",style:{width:"100%"},onSelectionChange:B},{default:t((()=>[i(c,{type:"selection",width:"55"}),i(c,{prop:"configName",label:"商品标题"}),i(c,{label:"商品链接"},{default:t((e=>[n("a",{target:"_blank",href:e.row.redirectUrl},V(e.row.redirectUrl),9,N)])),_:1}),i(c,{prop:"configRank",label:"序号",width:"120"}),i(c,{prop:"goodsId",label:"商品编号",width:"200"}),i(c,{prop:"createTime",label:"新增时间戳",width:"200"}),i(c,{label:"提交",width:"100"},{default:t((e=>[n("a",{style:{cursor:"pointer","margin-right":"10px"},onClick:o=>{return r=e.row.configId,I.type="edit",void f.value.open(r);var r}},"修改",8,z),i(l,{title:"确认删除吗？",confirmButtonText:"确认",cancelButtonText:"取消",onConfirm:o=>{return r=e.row.configId,void u.delete("/indexConfigs",{ids:[r]}).then((()=>{s.success("删除成功"),S()}));var r}},{reference:t((()=>[q])),_:2},1032,["onConfirm"])])),_:1})])),_:1},8,["load","data"]),i(y,{background:"",layout:"prev, pager, next",total:I.total,"page-size":I.pageSize,"current-page":I.currentPage,onCurrentChange:A},null,8,["total","page-size","current-page"])])),_:1}),i(R,{ref_key:"addGood",ref:f,reload:S,type:I.type,configType:I.configType},null,8,["type","configType"])],64)}}},[["__scopeId","data-v-c24c5f2c"],["__file","C:/Users/HDR10/source/repos/QCShop-Admin/src/views/IndexConfig.vue"]]);export{B as default};
