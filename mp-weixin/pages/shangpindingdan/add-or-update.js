(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpindingdan/add-or-update"],{"21eb":function(n,i,e){"use strict";var t=e("54dc"),r=e.n(t);r.a},"22f7":function(n,i,e){"use strict";(function(n){e("a348"),e("921b");t(e("66fd"));var i=t(e("65ae"));function t(n){return n&&n.__esModule?n:{default:n}}n(i.default)}).call(this,e("543d")["createPage"])},"2dbf":function(n,i,e){"use strict";(function(n){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var t=r(e("a34a"));function r(n){return n&&n.__esModule?n:{default:n}}function a(n,i,e,t,r,a,u){try{var s=n[a](u),o=s.value}catch(h){return void e(h)}s.done?i(o):Promise.resolve(o).then(t,r)}function u(n){return function(){var i=this,e=arguments;return new Promise((function(t,r){var u=n.apply(i,e);function s(n){a(u,t,r,s,o,"next",n)}function o(n){a(u,t,r,s,o,"throw",n)}s(void 0)}))}}var s=function(){Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(function(){return resolve(e("2bf0"))}.bind(null,e)).catch(e.oe)},o={data:function(){return{ruleForm:{maijiahao:"",maijiaming:"",shangpinbianhao:"",shangpinmingcheng:"",shangpinleixing:"",shangpintupian:"",shuliang:"",shangpinjiage:"",zongjine:"",zhanghao:"",xingming:"",shouji:"",dizhi:"",goumaishijian:"",beizhu:"",sfsh:"",shhf:"",ispay:"",userid:""},user:{},ro:{maijiahao:!1,maijiaming:!1,shangpinbianhao:!1,shangpinmingcheng:!1,shangpinleixing:!1,shangpintupian:!1,shuliang:!1,shangpinjiage:!1,zongjine:!1,zhanghao:!1,xingming:!1,shouji:!1,dizhi:!1,goumaishijian:!1,beizhu:!1,sfsh:!1,shhf:!1,ispay:!1,userid:!1}}},components:{wPicker:s},computed:{zongjine:{get:function(){return 1*this.ruleForm.shuliang*this.ruleForm.shangpinjiage}}},onLoad:function(){var i=u(t.default.mark((function i(e){var r,a,u,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r=n.getStorageSync("nowTable"),i.next=3,this.$api.session(r);case 3:if(a=i.sent,this.user=a.data,this.ruleForm.zhanghao=this.user.zhanghao,this.ruleForm.xingming=this.user.xingming,this.ruleForm.shouji=this.user.shouji,this.ruleForm.dizhi=this.user.dizhi,this.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(this.ruleForm.refid=e.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=17;break}return this.ruleForm.id=e.id,i.next=15,this.$api.info("shangpindingdan",this.ruleForm.id);case 15:a=i.sent,this.ruleForm=a.data;case 17:if(!e.cross){i.next=88;break}u=n.getStorageSync("crossObj"),i.t0=t.default.keys(u);case 20:if((i.t1=i.t0()).done){i.next=88;break}if(s=i.t1.value,"maijiahao"!=s){i.next=26;break}return this.ruleForm.maijiahao=u[s],this.ro.maijiahao=!0,i.abrupt("continue",20);case 26:if("maijiaming"!=s){i.next=30;break}return this.ruleForm.maijiaming=u[s],this.ro.maijiaming=!0,i.abrupt("continue",20);case 30:if("shangpinbianhao"!=s){i.next=34;break}return this.ruleForm.shangpinbianhao=u[s],this.ro.shangpinbianhao=!0,i.abrupt("continue",20);case 34:if("shangpinmingcheng"!=s){i.next=38;break}return this.ruleForm.shangpinmingcheng=u[s],this.ro.shangpinmingcheng=!0,i.abrupt("continue",20);case 38:if("shangpinleixing"!=s){i.next=42;break}return this.ruleForm.shangpinleixing=u[s],this.ro.shangpinleixing=!0,i.abrupt("continue",20);case 42:if("shangpintupian"!=s){i.next=46;break}return this.ruleForm.shangpintupian=u[s],this.ro.shangpintupian=!0,i.abrupt("continue",20);case 46:if("shuliang"!=s){i.next=50;break}return this.ruleForm.shuliang=u[s],this.ro.shuliang=!0,i.abrupt("continue",20);case 50:if("shangpinjiage"!=s){i.next=54;break}return this.ruleForm.shangpinjiage=u[s],this.ro.shangpinjiage=!0,i.abrupt("continue",20);case 54:if("zongjine"!=s){i.next=58;break}return this.ruleForm.zongjine=u[s],this.ro.zongjine=!0,i.abrupt("continue",20);case 58:if("zhanghao"!=s){i.next=62;break}return this.ruleForm.zhanghao=u[s],this.ro.zhanghao=!0,i.abrupt("continue",20);case 62:if("xingming"!=s){i.next=66;break}return this.ruleForm.xingming=u[s],this.ro.xingming=!0,i.abrupt("continue",20);case 66:if("shouji"!=s){i.next=70;break}return this.ruleForm.shouji=u[s],this.ro.shouji=!0,i.abrupt("continue",20);case 70:if("dizhi"!=s){i.next=74;break}return this.ruleForm.dizhi=u[s],this.ro.dizhi=!0,i.abrupt("continue",20);case 74:if("goumaishijian"!=s){i.next=78;break}return this.ruleForm.goumaishijian=u[s],this.ro.goumaishijian=!0,i.abrupt("continue",20);case 78:if("beizhu"!=s){i.next=82;break}return this.ruleForm.beizhu=u[s],this.ro.beizhu=!0,i.abrupt("continue",20);case 82:if("userid"!=s){i.next=86;break}return this.ruleForm.userid=u[s],this.ro.userid=!0,i.abrupt("continue",20);case 86:i.next=20;break;case 88:this.styleChange();case 89:case"end":return i.stop()}}),i,this)})));function e(n){return i.apply(this,arguments)}return e}(),methods:{styleChange:function(){this.$nextTick((function(){}))},goumaishijianConfirm:function(n){console.log(n),this.ruleForm.goumaishijian=n.result,this.$forceUpdate()},shangpintupianTap:function(){var n=this;this.$api.upload((function(i){n.ruleForm.shangpintupian=n.$base.url+"upload/"+i.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.zongjine=this.zongjine,!this.ruleForm.shuliang||this.$validate.isIntNumer(this.ruleForm.shuliang)){n.next=4;break}return this.$utils.msg("数量应输入整数"),n.abrupt("return");case 4:if(!this.ruleForm.shangpinjiage||this.$validate.isIntNumer(this.ruleForm.shangpinjiage)){n.next=7;break}return this.$utils.msg("商品价格应输入整数"),n.abrupt("return");case 7:if(!this.ruleForm.zongjine||this.$validate.isIntNumer(this.ruleForm.zongjine)){n.next=10;break}return this.$utils.msg("总金额应输入整数"),n.abrupt("return");case 10:if(this.ruleForm.userid){n.next=13;break}return this.$utils.msg("用户id不能为空"),n.abrupt("return");case 13:if(!this.ruleForm.id){n.next=18;break}return n.next=16,this.$api.update("shangpindingdan",this.ruleForm);case 16:n.next=20;break;case 18:return n.next=20,this.$api.add("shangpindingdan",this.ruleForm);case 20:this.$utils.msgBack("提交成功");case 21:case"end":return n.stop()}}),n,this)})));function i(){return n.apply(this,arguments)}return i}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var i=new Date,e=i.getFullYear(),t=i.getMonth()+1,r=i.getDate();return"start"===n?e-=60:"end"===n&&(e+=2),t=t>9?t:"0"+t,r=r>9?r:"0"+r,"".concat(e,"-").concat(t,"-").concat(r)},toggleTab:function(n){this.$refs[n].show()}}};i.default=o}).call(this,e("543d")["default"])},"4fa5":function(n,i,e){"use strict";e.r(i);var t=e("2dbf"),r=e.n(t);for(var a in t)"default"!==a&&function(n){e.d(i,n,(function(){return t[n]}))}(a);i["default"]=r.a},"54dc":function(n,i,e){},"65ae":function(n,i,e){"use strict";e.r(i);var t=e("d83f"),r=e("4fa5");for(var a in r)"default"!==a&&function(n){e.d(i,n,(function(){return r[n]}))}(a);e("21eb");var u,s=e("f0c5"),o=Object(s["a"])(r["default"],t["b"],t["c"],!1,null,"033f0271",null,!1,t["a"],u);i["default"]=o.exports},d83f:function(n,i,e){"use strict";var t={"w-picker":function(){return Promise.all([e.e("common/vendor"),e.e("components/w-picker/w-picker")]).then(e.bind(null,"2bf0"))}},r=function(){var n=this,i=n.$createElement;n._self._c},a=[];e.d(i,"b",(function(){return r})),e.d(i,"c",(function(){return a})),e.d(i,"a",(function(){return t}))}},[["22f7","common/runtime","common/vendor"]]]);