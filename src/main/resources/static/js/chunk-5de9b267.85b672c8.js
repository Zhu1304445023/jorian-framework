(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5de9b267"],{"5a23":function(e,t,i){"use strict";i.d(t,"c",function(){return a}),i.d(t,"d",function(){return o}),i.d(t,"a",function(){return l}),i.d(t,"e",function(){return r}),i.d(t,"b",function(){return s});var n=i("b775");function a(){return Object(n["a"])({url:"system/resource/tree",method:"get"})}function o(e){return Object(n["a"])({url:"system/resource/"+e,method:"get"})}function l(e){return Object(n["a"])({url:"system/resource/add",method:"post",data:e})}function r(e){return Object(n["a"])({url:"system/resource/update",method:"put",data:e})}function s(e){return Object(n["a"])({url:"system/resource/delete/"+e,method:"delete"})}},"965c":function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"app-container"},[i("el-input",{staticStyle:{"margin-bottom":"30px"},attrs:{placeholder:"请输入过滤词"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),e._v(" "),i("el-table",{staticStyle:{width:"100%","margin-bottom":"20px"},attrs:{data:e.tableData.filter(function(t){return!e.search||t.name.toLowerCase().includes(e.search.toLowerCase())}),border:"","row-key":"id"}},[i("el-table-column",{attrs:{label:"资源名称","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-tag",{attrs:{size:"medium"}},[e._v(e._s(t.row.title))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"类型","min-width":"60",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[1===t.row.type?i("span",{staticStyle:{color:"sandybrown"}},[e._v("菜单")]):0==t.row.type?i("span",{staticStyle:{color:"sandybrown"}},[e._v("按钮")]):e._e()]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Path","min-width":"160"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticStyle:{color:"sandybrown"}},[e._v(e._s(t.row.path))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"权限标识",width:"180"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",{staticStyle:{color:"sandybrown"}},[e._v(e._s(t.row.permission))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"Icon",width:"65",align:"center"},scopedSlots:e._u([{key:"default",fn:function(e){return[i("svg-icon",{attrs:{"icon-class":e.row.icon}})]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"是否校验",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.isVerify?i("span",{staticStyle:{color:"sandybrown"}},[e._v("是")]):t.row.isVerify?e._e():i("span",{staticStyle:{color:"sandybrown"}},[e._v("否")])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"创建时间",width:"135",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("span",[e._v(e._s(e._f("parseTime")(t.row.createTime,"{y}-{m}-{d} {h}:{i}")))])]}}])}),e._v(" "),i("el-table-column",{attrs:{label:"操作",align:"center","min-width":"340"},scopedSlots:e._u([{key:"default",fn:function(t){return[i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleCreate(t.row,"brother")}}},[e._v("添加同级\n        ")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(i){return e.handleCreate(t.row,"children")}}},[e._v("添加下级\n        ")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"success"},on:{click:function(i){return e.handleUpdate(t.row)}}},[e._v("修改")]),e._v(" "),i("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(i){return e.deleteItem(t.row)}}},[e._v("删除")])]}}])})],1),e._v(" "),i("el-dialog",{attrs:{title:e.textMap[e.dialogStatus],visible:e.dialogFormVisible},on:{"update:visible":function(t){e.dialogFormVisible=t}}},[i("el-form",{ref:"dataForm",staticStyle:{width:"400px","margin-left":"50px"},attrs:{rules:e.rules,model:e.temp,"label-position":"left","label-width":"85px"}},[e._e(),e._v(" "),e._e(),e._v(" "),i("el-form-item",{attrs:{label:e.$t("资源名称"),prop:"title"}},[i("el-input",{model:{value:e.temp.title,callback:function(t){e.$set(e.temp,"title",t)},expression:"temp.title"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("Path"),prop:"path"}},[i("el-input",{model:{value:e.temp.path,callback:function(t){e.$set(e.temp,"path",t)},expression:"temp.path"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("面包屑跳转"),prop:"redirect"}},[i("el-input",{model:{value:e.temp.redirect,callback:function(t){e.$set(e.temp,"redirect",t)},expression:"temp.redirect"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("组件名"),prop:"name"}},[i("el-input",{model:{value:e.temp.name,callback:function(t){e.$set(e.temp,"name",t)},expression:"temp.name"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("组件路径"),prop:"component"}},[i("el-input",{model:{value:e.temp.component,callback:function(t){e.$set(e.temp,"component",t)},expression:"temp.component"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("是否隐藏"),prop:"hidden"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.hidden,callback:function(t){e.$set(e.temp,"hidden",t)},expression:"temp.hidden"}},e._l(e.hiddenOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("资源类型"),prop:"type"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.type,callback:function(t){e.$set(e.temp,"type",t)},expression:"temp.type"}},e._l(e.typeOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("权限标识"),prop:"permission"}},[i("el-input",{model:{value:e.temp.permission,callback:function(t){e.$set(e.temp,"permission",t)},expression:"temp.permission"}})],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("图标"),prop:"icon"}},[i("el-input",{model:{value:e.temp.icon,callback:function(t){e.$set(e.temp,"icon",t)},expression:"temp.icon"}}),i("el-button",{attrs:{type:"text"},on:{click:function(t){e.iconPanelVisible=!0}}},[e._v("选择图标")])],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("是否校验"),prop:"isVerify"}},[i("el-select",{staticClass:"filter-item",attrs:{placeholder:"请选择"},model:{value:e.temp.isVerify,callback:function(t){e.$set(e.temp,"isVerify",t)},expression:"temp.isVerify"}},e._l(e.isVerifyOptions,function(e){return i("el-option",{key:e.key,attrs:{label:e.display_name,value:e.key}})}),1)],1),e._v(" "),i("el-form-item",{attrs:{label:e.$t("序号"),prop:"sort"}},[i("el-input",{attrs:{type:"textarea"},model:{value:e.temp.sort,callback:function(t){e.$set(e.temp,"sort",t)},expression:"temp.sort"}})],1)],1),e._v(" "),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(t){e.dialogFormVisible=!1}}},[e._v(e._s(e.$t("取消")))]),e._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(t){"create"===e.dialogStatus?e.createData():e.updateItem()}}},[e._v(e._s(e.$t("确认")))])],1)],1),e._v(" "),i("el-dialog",{attrs:{title:e.$t("图标"),visible:e.iconPanelVisible},on:{"update:visible":function(t){e.iconPanelVisible=t}}},[i("Icons",{on:{closeMoule:e.closeMoule}})],1)],1)},a=[],o=(i("96cf"),i("3b8d")),l=i("5176"),r=i.n(l),s=i("5a23"),c=i("105d"),p=[{key:0,display_name:"按钮"},{key:1,display_name:"菜单"}],u=[{key:!0,display_name:"是"},{key:!1,display_name:"否"}],d=[{key:!0,display_name:"是"},{key:!1,display_name:"否"}],m={name:"CustomTreeTableDemo",components:{Icons:c["default"]},data:function(){return{search:"",tableData:[],temp:{id:void 0,pid:void 0,title:void 0,name:void 0,component:void 0,redirect:void 0,type:void 0,permission:void 0,icon:void 0,path:void 0,isVerify:!0,sort:void 0,children:[],createTime:new Date,updateTime:new Date},row:{},dialogFormVisible:!1,iconPanelVisible:!1,dialogStatus:"",textMap:{update:"修改",create:"创建"},isVerifyOptions:u,typeOptions:p,hiddenOptions:d,rules:{updateDate:[{type:"date",required:!0,message:"时间必须有",trigger:"change"}],title:[{required:!0,message:"名称必须有",trigger:"blur"}],sort:[{required:!0,message:"paixu必须有",trigger:"blur"}]},createType:""}},watch:{},created:function(){this.getData()},methods:{resetTemp:function(){this.temp={id:void 0,pid:void 0,name:void 0,title:void 0,component:void 0,redirect:void 0,type:void 0,permission:void 0,icon:void 0,path:void 0,isVerify:!0,children:[],createTime:new Date,updateTime:new Date}},handleCreate:function(e,t){var i=this;this.resetTemp(),"children"===t&&(this.temp.pid=e.id),"brother"===t&&(this.temp.pid=e.pid),this.dialogStatus="create",this.dialogFormVisible=!0,this.$nextTick(function(){i.$refs["dataForm"].clearValidate()})},handleUpdate:function(e){var t=this;this.temp=r()({},e),this.temp.updateDate=new Date(this.temp.updateDate),this.row=e,this.dialogStatus="update",this.dialogFormVisible=!0,this.$nextTick(function(){t.$refs["dataForm"].clearValidate()})},getData:function(){var e=this;Object(s["c"])().then(function(t){e.tableData=t.data,setTimeout(function(){},1500)})},updateItem:function(){var e=Object(o["a"])(regeneratorRuntime.mark(function e(){var t=this;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:Object(s["e"])(this.temp).then(function(e){t.getData(),t.dialogFormVisible=!1,t.$notify({title:"成功",message:"操作成功",type:"success",duration:2e3})});case 1:case"end":return e.stop()}},e,this)}));function t(){return e.apply(this,arguments)}return t}(),createData:function(){var e=this;Object(s["a"])(this.temp).then(function(t){e.getData(),e.dialogFormVisible=!1,e.$notify({title:t.code,message:t.msg,type:"success",duration:2e3})})},deleteItem:function(e){var t=this;Object(s["b"])(e.id).then(function(e){t.getData(),t.$notify({title:e.code,message:e.msg,type:"success",duration:2e3})})},selectChange:function(e){console.log(e)},closeMoule:function(e){this.temp.icon=e,this.iconPanelVisible=!1}}},f=m,b=i("2877"),v=Object(b["a"])(f,n,a,!1,null,null,null);t["default"]=v.exports}}]);