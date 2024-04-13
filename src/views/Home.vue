<template>
	<div id="main">
		
		<!-- MainLeft -->
		<div id="mainLeft">
			<div id="left_show" class="flash" title="工作室flash" v-html="imgorswf(leftshow)"></div>
			<div class="aboutgzs" title="关于工作室">
				<!--关于工作室-->
			</div>
			<div class="aboutgzs_1" title="关于工作室">
				<!--关于工作室-->
			</div>
			<div class="aboutgzs_2" title="关于工作室">
				<p style="color:#CC0000;text-indent:2em;max-width: 560px;">教育技术工作室是江门职业技术学院现代教育技术中心倡导并建立的示范性学生组织...</p>
				<p style="text-indent:2em;max-width: 560px;">教育技术工作室于2002年成立于江门教育学院。教育技术工作室与其他组织，社团有着与众不同的地方。教育技术工作室是学院唯一一个掌握精品课程制作、网页制作及维护、图片图像美工、电脑系统维护、摄影摄像舞台音响技术、电教（多媒体）设备的使用和管理等知识为一体，是以技术为主导、服务为宗旨、也是一个以人为服务第一的组织...　　<router-link to="/about/team">&gt;&gt;&gt;更多</router-link></p>
			</div>
		</div>
		<!-- MainLeft -->
		
		<!-- MainRigt -->
		<div id="mainRight">
			<div class="flashJng" id="right_show" title="工作室flash" v-html="imgorswf(rightshow)"></div>
			<div class="newsgzs">
				<!--工作室动态-->
				<div class="falshR">
					<!-- 照片墙 -->
					<div class="wrapper" style="height:160px;border: 5px solid #bbb7b3;border-radius: 20px;overflow: hidden;">
						<!-- <img class="amplify" v-image-preview src="images/2010102412511817.jpg" height="100%" width="100%" alt="工作室照片墙" title="工作室照片墙"> -->
						<!-- 配置slider组件 -->
						<!-- <slider ref="slider" :options="options" @slide='slide' @tap='onTap' @init='onInit'> -->
						<slider ref="slider" :options="options">
							<!-- 直接使用slideritem slot -->
							<slideritem v-for="(item,index) in banner_lists" :key="index" :style="item.style">{{item.html}}</slideritem>
							<!-- 设置loading,可自定义 -->
							<div slot="loading">loading...</div>
						</slider>
						<!-- 配置slider组件 -->
					</div>
					<!-- 照片墙 -->
				</div>
				<div class="news_gzs">		
					<!-- Tab切换选卡 -->
					<div id="tab">
						<div class="menuBox">
							<ul>
								<li v-for="(item,index) in trendstitles" @click="setTab($event,index)" @mouseover="setTab($event,index)" :class="index==0 ? 'hover' : ''" :title="item.title"><a :href="item.href" :title="item.title" v-text="item.title" :target="item.target" style="-webkit-user-select: none;-moz-user-select: none;-o-user-select: none;user-select: none;pointer-events: none;"></a></li>
							</ul>
						</div>
						<div class="contentBox">
							<template>
								<div class="mNew">
									<!-- 照片区 -->
									<div class="mNewPic">
										<div align="center">
											<table border="0" cellpadding="0" cellspacing="0" width="100%" id="tableasdaDF1">
												<tbody>
													<tr>
														<td align="center" style="font-size:9pt;line-height:150%">
															<a v-if="tthover != null" :href="trendscontents[tthover].image.jumpurl" :target="trendscontents[tthover].image.target" :title="trendscontents[tthover].image.title">
																<img hspace="2" v-image-preview vspace="2" border="0" width="73" height="93" :src="trendscontents[tthover].image.imgurl">
																<font style="font-size:9pt"></font>
															</a>
														</td>
													</tr>
												</tbody>
											</table>
										</div>
									</div>
									<!-- 照片区 -->
									<!-- 内容区 -->
									<ul>
										<li>
											<table border="0" cellpadding="0" cellspacing="0" width="100%">
												<tbody>
													<tr v-for="(item,index) in tthover!=null?trendscontents[tthover].contents:''">
														<td height="22" style="max-width: 130px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;">
															<a :href="item.jumpurl" :target="item.target" :title="item.title">
																<font :color="item.titlecolor" style="font-size:9pt;" :style="{ fontWeight: item.titlefw }" v-text="item.title"></font>
															</a>
														</td>
														<td align="right" style="max-width: 70px;overflow: hidden;text-overflow: ellipsis;white-space: nowrap;" v-cloak>
															<font :color="item.timecolor" style="font-size:9pt" :style="{ fontWeight: item.timefw }">({{item.time}})</font>
														</td>
													</tr>
												</tbody>
											</table>
											<div align="right">
												<a href="javascript:;">
													<font style="font-size:9pt">更多内容 >></font>
												</a>
											</div>
										</li>
									</ul>
									<!-- 内容区 -->
								</div>
							</template>
						</div>
					</div>
					<!-- Tab切换选卡 End/ -->
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	/* 保证图片放大控件位于顶层 */
	.vue-directive-image-previewer{
		z-index: 10000 !important;
	}
</style>

<script>
	// 引入axios
	import axios from 'axios';
	// 引入jquery
	import $ from 'jquery';
	// import slider components
	import { slider, slideritem } from 'vue-concise-slider';
	export default{
		name: 'Home',
		// 数据
		data(){
			return {
				// 左侧动画
				leftshow:null,
				// 右侧动画
				rightshow:null,
				// 工作室动态
				trendstitles:null,
				tthover:null,
				trendscontents:null,
				
				// 轮播图
				// banner图片集合
				banner_lists:null,
				
				//Sliding configuration [obj]
				options: {
					// 当前页码
					currentPage: 0,
					// 滑动判定距离
					thresholdDistance:100,
					// 滑动判定时间
					thresholdTime:500,
					// 自动滚动[ms]
					autoplay:5000,
					// 循环滚动
					loop:true,
					// 方向设置，垂直滚动
					direction:'horizontal',
					// 无限滚动前后遍历数
					loopedSlides:1,
					// 每次滑动项数
					slidesToScroll:1,
					// 滑动方式
					timingFunction: 'ease',
					// 速度
					speed: 300
				},
			}
		},
		
		// 页面载入前
		async beforeMount(){
			var res = await axios.get('datas/home_datas.json');
			this.leftshow = res.data.leftshow;
			this.rightshow = res.data.rightshow;
			this.trendstitles = res.data.trendstitles;
			this.tthover = res.data.tthover;
			this.trendscontents = res.data.trendscontents;
			this.banner_lists = res.data.banner_lists;
			// console.log(res);
		},
		// 加载组件
		components: {
			slider,
			slideritem,
		},
		// 页面加载完成后
		mounted() {
			// 检测浏览器是否支持flash
			if(!this.hasUsableFlash()){
				alert("检测到浏览器不支持Flash！Flash动画部分将显示为静态图片。请更换支持Flash的浏览器以获得更棒的体验！");
			}
		},
		// 方法
		methods:{
			// 检查是否支持flash
			hasUsableFlash:function(){
				var flashObj;
				if(typeof window.ActiveXObject != "undefined"){
					flashObj= new  ActiveXObject("ShockwaveFlash.ShockwaveFlash");
				}else{
					flashObj= navigator.plugins['Shockwave Flash'];
				}
				return flashObj? true : false;
			},
			// 动画与图片智能转换
			imgorswf:function(obj){
				if(obj){
					// console.log(obj.width);
					if(this.hasUsableFlash()){
						return '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,28,0" width="'+obj.width+'" height="'+obj.height+'"> <param name="movie" value="'+obj.swfurl+'" /> <param name="quality" value="high" /> <embed src="'+obj.swfurl+'" quality="high" pluginspage="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" type="application/x-shockwave-flash" width="'+obj.width+'" height="'+obj.height+'"></embed> </object>';
					}else{
						return '<img src="'+obj.imgurl+'" width="'+obj.width+'" height="'+obj.height+'" alt="">';
					}
				}
			},
			// 选项卡切换
			setTab:function(event,index){
				this.tthover = index;
				// console.log(event.target);
				$(event.target).addClass("hover");
				$(event.target).siblings().removeClass("hover");
			},
			// 轮播图监听事件
			// Listener event
			// slide (data) {
			// 	console.log(data)
			// },
			// onTap (data) {
			// 	console.log(data)
			// },
			// onInit (data) {
			// 	console.log(data)
			// }
		}
	}
</script>