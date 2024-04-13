<template>
	<div id="app">
		<!-- Header -->
		<div id="top">
			<p>
				<template v-for="(item, index) in topmenus">
					<a :href="item.href" style="cursor:hand;color:#D7CFCD;" :title="item.title" v-text="item.title" :target="item.target"></a>
					<span v-if="index+1 < topmenus.length">&nbsp;|&nbsp;</span>
				</template>
			</p>
		</div>
		<div id="header">
			<div class="logo">
				<a href="javascript:;" title="教育技术工作室-示范性学生组织">
					<img src="images/logo.gif" alt="教育技术工作室-示范性学生组织" width="289" height="55">
				</a>
			</div>
			<div class="meun">
				<ul id="nav">
					<li v-for="item in headermenus">
						<router-link v-if="item.vueurl" :to="item.href" :title="item.title" v-text="item.title" :target="item.target">Home</router-link>
						<a v-else :href="item.href" :title="item.title" v-text="item.title" :target="item.target"></a>
					</li>
				</ul>
			</div>
		</div>
		<!-- Header End/ -->
		
		
		<!-- 路由匹配到的组件将渲染在这里 -->
		<router-view />
		<!-- 路由匹配到的组件将渲染在这里 -->
		
		<!-- footer -->
		<div class="footer">
			<div class="backgu">
				<p class="fontLink">
					<template v-for="(item,index) in fontLink">
						<router-link v-if="item.vueurl" :to="item.jumpurl" v-text="item.title" :target="item.target"></router-link>
						<a v-else :href="item.jumpurl" v-text="item.title" :target="item.target"></a>
						<span v-if="index+1 < fontLink.length">|</span>
					</template>
				</p>
				<p class="copyright">
					<table border="0" cellpadding="0" cellspacing="0" width="100%" id="table1">
						<tbody>
							<tr v-for="(datas,index) in flhandle" v-cloak>
								<td align="center" style="font-weight: bold;">{{index==0?'友情链接:':''}}</td>
								<td align="center" v-for="(item,index) in datas"><a :href="item.jumpurl" :title="item.title" :target="item.target" v-text="item.title"></a></td>
							</tr>
						</tbody>
					</table>
				</p>
				<br>
				<!-- 访客ip信息 -->
				<!-- <p style="text-align: center;" v-if="isshow_useripinfo == '200'" v-cloak>
					当前访问IP为 : {{useripinfo_ip}} , 欢迎来自 {{useripinfo_detail}} 的小伙伴
				</p> -->
				<!-- 访客ip信息 -->
				<!-- 作者 -->
				<p style="text-align: center;">
					前端设计 By 李耀辉(QQ:46325112)、李观俊、赵宏恩 ; 静态化重构 By 小黄 ; 素材提供 By Mr.Chen、Mr.Liao
				</p>
				<!-- 作者 -->
				<!-- 版权 -->
				<p style="text-align: center;" v-cloak>
					<!-- Copyright ©2002-{{currentyear}} 教育技术工作室 -->
					Copyright ©2002-{{currentyear}} 教育技术工作室
					<!-- <a href="https://beian.miit.gov.cn/" target="_blank">粤ICP备10073925号</a> -->
					<a style="margin-left: 1px;" href="https://beian.miit.gov.cn/" target="_blank">
						<img src="images/miit_logo.png" style="width:18px;height:18px;vertical-align:bottom">粤ICP备10073925号
					</a>
					<a style="margin-left: 1px;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44070502000497" target="_blank">
						<img src="images/gaba_logo.png" style="width:18px;height:18px;vertical-align:bottom">粤公网安备44070502000497号
					</a>
				</p>
				<!-- 版权 -->
				<!-- logo -->
				<p style="text-align: center;padding-top: 3px;">
					<img style="height: 45px;padding-right: 3px;" src="images/turste_logo.svg" title="通过TRUSTe隐私验证">
					<img style="height: 45px;padding-right: 3px;" src="images/kexin_logo.png" title="可信网站">
					<img style="height: 45px;padding-right: 3px;" src="images/support_ipv6_logo.png" title="网站已安全升级到IPv6">
					<img style="height: 45px" src="images/myssl_logo.png" title="通过MySSL安全认证">
				</p>
				<!-- logo -->
			</div>
		</div>
		<!-- 返回顶部 -->
		<transition name="fade">
			<a href="javascript:;" class="float" v-show="showb2t" @click="dob2t()">
				<img style="width:8em" src="images/loli.gif">
			</a>
		</transition>
		<!-- 返回顶部 -->
	</div>
</template>

<!-- 引入css -->
<!-- scoped 可以生成 data-v-xxx -->
<style scoped>
	@import './../public/css/index.css';
	@import './../public/css/reset.css';
	
	/* 返回顶部 */
	.float {
	    position: fixed;
		top: 80%;
		right: 2%;
	}
	.fade-enter-active, .fade-leave-active {
		transition: opacity .5s;
	}
	.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
		opacity: 0;
	}
	/* 返回顶部 */
	
	[v-cloak] {
		display: none !important;
	}
</style>

<script>
	// 引入axios
	import axios from 'axios';
	// 引入jquery
	import $ from 'jquery';
	export default{
		// 数据
		data(){
			return {
				// 顶部菜单
				topmenus:null,
				// 头部菜单
				headermenus:null,
				// fontLink
				fontLink:null,
				// 友情链接
				friendslinks:null,
				// 展示返回顶部,默认不显示
				showb2t:false,
				// 当前年份
				// currentyear:null,
				// ---访客ip信息---
				// 是否显示访客ip信息
				isshow_useripinfo:0,
				// 访客ip
				useripinfo_ip:null,
				// 访客详细信息
				useripinfo_detail:null,
			}
		},
		// 页面载入前
		async beforeMount(){
			// 加载自身配置项
			var res = await axios.get('datas/app_datas.json');
			this.topmenus = res.data.topmenus;
			this.headermenus = res.data.headermenus;
			this.fontLink = res.data.fontLink;
			this.friendslinks = res.data.friendslinks;
			// console.log(res);
			
			// 通过接口获取当前时间
			// var res2 = await axios.get('https://quan.suning.com/getSysTime.do');
			// var res2 = await axios.get('此处填写您的获取时间的接口');
			// var nowtime = res2.data.sysTime2;
			// console.log(nowtime);
			// this.currentyear = this.getcurrentyear(nowtime);
			
			// 通过接口获取访客ip信息
			// var res3 = await axios.get('此处填写您获取访客ip信息的接口');
			// var res3 = await axios.get('此处填写您获取访客ip信息的接口');
			// console.log(res3);
			// this.isshow_useripinfo = res3.data.code;
			// this.useripinfo_ip = res3.data.datas.ip;
			// this.useripinfo_detail = res3.data.datas.detail_info;
			
		},
		// 计算属性
		computed:{
			// 友情链接数组处理
			flhandle:function(){
				return this.splitarray(this.friendslinks,"5");
			},
			// 计算当前年份
			currentyear:function(){
				const date = new Date();
        		// console.log(date.getFullYear());
				return date.getFullYear();
			}
		},
		// 页面加载完成后
		mounted() {
			// 监听页面滚动,并传值给showb2tbtn()
			window.addEventListener('scroll', this.showb2tbtn,true);
		},
		// 方法
		methods:{
			// 数组分割
			splitarray:function(data,num){
				var result = [];
				// 强制转为数字类型，否则报错
				var num = Number(num);
				if(data){
					for(var i=0;i<data.length;i+=num){
						result.push(data.slice(i,i+num));
					}
				}
				return result;
			},
			
			// 展示返回顶部按钮
			// 动态监控变化不能直接用函数,得动态改变data()中的数据才奏效
			showb2tbtn() {
				var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
				// console.log(scrollTop);
				this.showb2t = scrollTop>1 ? true : false;
			},
			// 返回顶部
			dob2t(){
				$("html,body").animate({
					scrollTop: 0
				}, 400); //点击go to top按钮时，以400的速度回到顶部，这里的400可以根据你的需求修改
			},
			
			// 计算当前年份
			// getcurrentyear(value){
			// 	var date = new Date(value);
			// 	var year = date.getFullYear();
			// 	return year;
				
			// }
		}
	}
</script>

