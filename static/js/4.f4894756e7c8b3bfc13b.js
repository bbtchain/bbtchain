webpackJsonp([4],{"2NXm":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o={name:"",components:{},props:{},data:function(){return{}},computed:{},created:function(){},mounted:function(){},destroyed:function(){},methods:{getWalletAddress:function(){alert("点了获取"),imToken.callAPI("user.getCurrentAccount",function(t,e){t?imToken.callAPI("native.toastInfo","授权获取地址失败，请重新获取"):(alert("获取成功"),sessionStorage.setItem("address",e),alert("获取结束1"),this.$router.push({path:"/home"}),alert("获取结束2"))})}}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("main",[e("button",{attrs:{type:"button"},on:{click:this.getWalletAddress}},[this._v("获取当前钱包地址")])])},staticRenderFns:[]};var s=n("VU/8")(o,r,!1,function(t){n("WzZj")},"data-v-1a8cb63e",null);e.default=s.exports},WzZj:function(t,e){}});