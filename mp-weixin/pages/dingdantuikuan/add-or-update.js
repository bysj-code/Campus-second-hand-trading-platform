(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/dingdantuikuan/add-or-update"],{"29a5":function(n,i,e){},"51d8":function(n,i,e){"use strict";(function(n){e("a348"),e("921b");t(e("66fd"));var i=t(e("ec22"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},"52b3":function(n,i,e){"use strict";var t=e("29a5"),a=e.n(t);a.a},7173:function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"2bf0"))}},a=function(){var n=this,i=n.$createElement;n._self._c},r=[];e.d(i,"b",(function(){return a})),e.d(i,"c",(function(){return r})),e.d(i,"a",(function(){return t}))},d65f:function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=a(e("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,i,e,t,a,r,u){try{var s=n[r](u),o=s.value}catch(h){return void e(h)}s.done?i(o):Promise.resolve(o).then(t,a)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,a){var u=n.apply(i,e);function s(n){r(u,t,a,s,o,"next",n)}function o(n){r(u,t,a,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("2bf0"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{maijiahao:"",maijiaming:"",shangpinbianhao:"",shangpinmingcheng:"",shangpinleixing:"",shangpintupian:"",shangpinjiage:"",shuliang:"",zongjine:"",zhanghao:"",xingming:"",shouji:"",dizhi:"",tuikuanshijian:"",tuikuanyuanyin:"",sfsh:"",shhf:"",ispay:"",userid:""},user:{},ro:{maijiahao:!1,maijiaming:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,shangpintupian:!1,shangpinjiage:!1,shuliang:!1,zongjine:!1,zhanghao:!1,xingming:!1,shouji:!1,dizhi:!1,tuikuanshijian:!1,tuikuanyuanyin:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:s},computed:{},onLoad:function(){var i=u(t.default.mark((function i(e){var a,r,u,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n.getStorageSync("nowTable"),i.next=3,this.$api.session(a);case 3:if(r=i.sent,this.user=r.data,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=13;break}return this.ruleForm.id=e.id,i.next=11,this.$api.info("dingdantuikuan",this.ruleForm.id);case 11:r=i.sent,this.ruleForm=r.data;case 13:if(!e.cross){i.next=84;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 16:if((i.t1=i.t0()).done){i.next=84;break}if(s=i.t1.value,"maijiahao"!=s){i.next=22;break}return this.ruleForm.maijiahao=u[s],this.ro.maijiahao=!0,i.abrupt("continue",16);case 22:if("maijiaming"!=s){i.next=26;break}return this.ruleForm.maijiaming=u[s],this.ro.maijiaming=!0,i.abrupt("continue",16);case 26:if("shangpinbianhao"!=s){i.next=30;break}return this.ruleForm.shangpinbianhao=u[s],this.ro.shangpinbianhao=!0,i.abrupt("continue",16);case 30:if("shangpinmingcheng"!=s){i.next=34;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,i.abrupt("continue",16);case 34:if("shangpinleixing"!=s){i.next=38;break}return this.ruleForm.shangpinleixing=u[s],this.ro.shangpinleixing=!0,i.abrupt("continue",16);case 38:if("shangpintupian"!=s){i.next=42;break}return this.ruleForm.shangpintupian=u[s],this.ro.shangpintupian=!0,i.abrupt("continue",16);case 42:if("shangpinjiage"!=s){i.next=46;break}return this.ruleForm.shangpinjiage=u[s],this.ro.shangpinjiage=!0,i.abrupt("continue",16);case 46:if("shuliang"!=s){i.next=50;break}return this.ruleForm.shuliang=u[s],this.ro.shuliang=!0,i.abrupt("continue",16);case 50:if("zongjine"!=s){i.next=54;break}return this.ruleForm.zongjine=u[s],this.ro.zongjine=!0,i.abrupt("continue",16);case 54:if("zhanghao"!=s){i.next=58;break}return this.ruleForm.zhanghao=u[s],this.ro.zhanghao=!0,i.abrupt("continue",16);case 58:if("xingming"!=s){i.next=62;break}return this.ruleForm.xingming=u[s],this.ro.xingming=!0,i.abrupt("continue",16);case 62:if("shouji"!=s){i.next=66;break}return this.ruleForm.shouji=u[s],this.ro.shouji=!0,i.abrupt("continue",16);case 66:if("dizhi"!=s){i.next=70;break}return this.ruleForm.dizhi=u[s],this.ro.dizhi=!0,i.abrupt("continue",16);case 70:if("tuikuanshijian"!=s){i.next=74;break}return this.ruleForm.tuikuanshijian=u[s],this.ro.tuikuanshijian=!0,i.abrupt("continue",16);case 74:if("tuikuanyuanyin"!=s){i.next=78;break}return this.ruleForm.tuikuanyuanyin=u[s],this.ro.tuikuanyuanyin=!0,i.abrupt("continue",16);case 78:if("userid"!=s){i.next=82;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,i.abrupt("continue",16);case 82:i.next=16;break;case 84:this.styleChange();case 85:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},tuikuanshijianConfirm:function(n){console.log(n),this.ruleForm.tuikuanshijian=n.result,this.$forceUpdate()},shangpintupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.shangpintupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.userid){n.next=3;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 3:if(!this.ruleForm.id){n.next=8;break}return n.next=6,this.$api.update("dingdantuikuan",this.ruleForm);case 6:n.next=10;break;case 8:return n.next=10,this.$api.add("dingdantuikuan",this.ruleForm);case 10:this.$utils.msgBack("提交成功");case 11:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,a=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(e,"-").concat(t,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};i.default=o}).call(this,e("543d")["default"])},dba6:function(n,i,e){"use strict";e.r(i);var t=e("d65f"),a=e.n(t);for(var r in t)"default"!==r&&function(n){e.d(i,n,(function(){return t[n]}))}(r);i["default"]=a.a},ec22:function(n,i,e){"use strict";e.r(i);var t=e("7173"),a=e("dba6");for(var r in a)"default"!==r&&function(n){e.d(i,n,(function(){return a[n]}))}(r);e("52b3");var u,s=e("f0c5"),o=Object(s["a"])(a["default"],t["b"],t["c"],!1,null,"08d9692a",null,!1,t["a"],u);i["default"]=o.exports}},[["51d8","common/runtime","common/vendor"]]]);