(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/shangpindingdan/detail"],{"23c8":function(n,t,e){"use strict";(function(n){e("26fc");a(e("66fd"));var t=a(e("5c14"));function a(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("543d")["createPage"])},"453c":function(n,t,e){"use strict";var a=e("f8f3"),s=e.n(a);s.a},5847:function(n,t,e){"use strict";e.r(t);var a=e("5a88"),s=e.n(a);for(var r in a)"default"!==r&&function(n){e.d(t,n,(function(){return a[n]}))}(r);t["default"]=s.a},"5a88":function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=s(e("a34a"));function s(n){return n&&n.__esModule?n:{default:n}}function r(n,t,e,a,s,r,i){try{var u=n[r](i),o=u.value}catch(c){return void e(c)}u.done?t(o):Promise.resolve(o).then(a,s)}function i(n){return function(){var t=this,e=arguments;return new Promise((function(a,s){var i=n.apply(t,e);function u(n){r(i,a,s,u,o,"next",n)}function o(n){r(i,a,s,u,o,"throw",n)}u(void 0)}))}}var u={data:function(){return{autoplaySwiper:!0,intervalSwiper:5e3,btnColor:["#409eff","#67c23a","#909399","#e6a23c","#f56c6c","#356c6c","#351c6c","#f093a9","#a7c23a","#104eff","#10441f","#a21233","#503319"],id:"",detail:{},swiperList:[],commentList:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:3,textNoMore:"~ 没有更多了 ~"},hasNext:!0,user:{},sfshIndex:-1,sfshOptions:["通过","不通过"],count:0}},computed:{SecondToDate:function(){var n=this.count;return null!=n&&""!=n&&(n=n>60&&n<3600?parseInt(n/60)+"分钟"+parseInt(60*(parseFloat(n/60)-parseInt(n/60)))+"秒":n>=3600&&n<86400?parseInt(n/3600)+"小时"+parseInt(60*(parseFloat(n/3600)-parseInt(n/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(n/3600)-parseInt(n/3600)))-parseInt(60*(parseFloat(n/3600)-parseInt(n/3600)))))+"秒":n>=86400?parseInt(n/3600/24)+"天"+parseInt(24*(parseFloat(n/3600/24)-parseInt(n/3600/24)))+"小时"+parseInt(60*(parseFloat(n/3600)-parseInt(n/3600)))+"分钟"+parseInt(60*(parseFloat(60*(parseFloat(n/3600)-parseInt(n/3600)))-parseInt(60*(parseFloat(n/3600)-parseInt(n/3600)))))+"秒":parseInt(n)+"秒"),n}},onLoad:function(n){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.id=n.id;case 1:case"end":return e.stop()}}),e)})))()},onShow:function(t){var e=this;return i(a.default.mark((function t(){var s,r;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.init(),s=n.getStorageSync("nowTable"),t.next=4,e.$api.session(s);case 4:r=t.sent,e.user=r.data,e.btnColor=e.btnColor.sort((function(){return.5-Math.random()}));case 7:case"end":return t.stop()}}),t)})))()},destroyed:function(){},methods:{onPayTap:function(){n.setStorageSync("paytable","shangpindingdan"),n.setStorageSync("payObject",this.detail),this.$utils.jump("../pay-confirm/pay-confirm?type=1")},onAcrossTap:function(t){n.setStorageSync("crossTable","shangpindingdan"),n.setStorageSync("crossObj",this.detail),this.$utils.jump("../".concat(t,"/add-or-update?cross=true"))},init:function(){var n=this;return i(a.default.mark((function t(){var e;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n.$api.info("shangpindingdan",n.id);case 2:e=t.sent,n.detail=e.data,n.swiperList=n.detail.shangpintupian?n.detail.shangpintupian.split(","):[];case 5:case"end":return t.stop()}}),t)})))()},mescrollInit:function(n){this.mescroll=n},downCallback:function(n){this.hasNext=!0,n.resetUpScroll()},upCallback:function(n){var t=this;return i(a.default.mark((function e(){return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:n.endSuccess(n.size,t.hasNext);case 1:case"end":return e.stop()}}),e)})))()},onChatTap:function(){this.$utils.jump("../chat/chat")},download:function(t){var e=this;n.downloadFile({url:t,success:function(n){200===n.statusCode&&(e.$utils.msg("下载成功"),window.open(t))}})},onCartTabTap:function(){this.$utils.tab("../shop-cart/shop-cart")},onCommentTap:function(){this.$utils.jump("../discussshangpindingdan/add-or-update?refid=".concat(this.id))},zan:function(){var t=this;return i(a.default.mark((function e(){var s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=t,n.showModal({title:"提示",content:"是否点赞",success:function(){var n=i(a.default.mark((function n(t){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.confirm){n.next=5;break}return s.detail.thumbsupnum=parseInt(s.detail.thumbsupnum)+1,n.next=4,s.$api.update("shangpindingdan",s.detail);case 4:s.$utils.msg("点赞成功");case 5:case"end":return n.stop()}}),n)})));function t(t){return n.apply(this,arguments)}return t}()});case 2:case"end":return e.stop()}}),e)})))()},cai:function(){var t=this;return i(a.default.mark((function e(){var s;return a.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:s=t,n.showModal({title:"提示",content:"是否点踩",success:function(){var n=i(a.default.mark((function n(t){return a.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.confirm){n.next=5;break}return s.detail.crazilynum=parseInt(s.detail.crazilynum)+1,n.next=4,s.$api.update("shangpindingdan",s.detail);case 4:s.$utils.msg("点踩成功");case 5:case"end":return n.stop()}}),n)})));function t(t){return n.apply(this,arguments)}return t}()});case 2:case"end":return e.stop()}}),e)})))()},onSHTap:function(){this.$refs.popup.open()},onFinishTap:function(){var n=this;return i(a.default.mark((function t(){return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.detail.sfsh){t.next=3;break}return n.$utils.msg("请选择审核状态"),t.abrupt("return");case 3:if(n.detail.shhf){t.next=6;break}return n.$utils.msg("请填写审核回复"),t.abrupt("return");case 6:return"通过"==n.detail.sfsh&&(n.detail.sfsh="是"),"不通过"==n.detail.sfsh&&(n.detail.sfsh="否"),t.next=10,n.$api.update("shangpindingdan",n.detail);case 10:n.$utils.msg("审核成功"),n.$refs.popup.close();case 12:case"end":return t.stop()}}),t)})))()},onCloseWinTap:function(){this.$refs.popup.close()},sfshChange:function(n){console.log(this.detail),this.sfshIndex=n.target.value,this.detail.sfsh=this.sfshOptions[this.sfshIndex]}}};t.default=u}).call(this,e("543d")["default"])},"5c14":function(n,t,e){"use strict";e.r(t);var a=e("65bf"),s=e("5847");for(var r in s)"default"!==r&&function(n){e.d(t,n,(function(){return s[n]}))}(r);e("453c");var i,u=e("f0c5"),o=Object(u["a"])(s["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],i);t["default"]=o.exports},"65bf":function(n,t,e){"use strict";e.d(t,"b",(function(){return s})),e.d(t,"c",(function(){return r})),e.d(t,"a",(function(){return a}));var a={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"e3fb"))},uniPopup:function(){return e.e("components/uni-popup/uni-popup").then(e.bind(null,"dd57"))}},s=function(){var n=this,t=n.$createElement,e=(n._self._c,n.isAuth("shangpindingdan","支付")),a=n.isAuth("shangpindingdan","支付"),s=n.isAuth("shangpindingdan","退款"),r=n.isAuth("shangpindingdan","审核");n.$mp.data=Object.assign({},{$root:{m0:e,m1:a,m2:s,m3:r}})},r=[]},f8f3:function(n,t,e){}},[["23c8","common/runtime","common/vendor"]]]);