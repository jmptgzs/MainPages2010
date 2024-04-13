<template>
	<div class="wrapper">
		<div class="title">网站更新日志</div>
		<div class="actcl">
				<p style="font-size: 15px;"><b>更新记录:</b></p>
				<!-- Log记录 -->
				<ul class="layui-timeline">
					<li v-for="(item, index) in loglists" class="layui-timeline-item">
						<i class="fa fa-circle-o fa-fw layui-timeline-axis"></i>
						<div class="layui-timeline-content layui-text">
							<h3 class="layui-timeline-title">{{ "V" + item.upversion }}&nbsp;<span class="layui-badge-rim" v-text="item.uptime"></span></h3>
							<ul>
								<li v-for="(item, index) in item.upcontent" v-html="item"></li>
							</ul>
						</div>
					</li>
				</ul>
				<!-- Log记录 -->
				<!-- 特别鸣谢 -->
				<p style="font-size: 15px;"><b>特别鸣谢:</b></p>
				<p style="text-indent:2rem;">Mr.Chen、Mr.Lee 提供工作室宣传视频资源；Mr.Liao 提供文字素材资源</p>
				<!-- 特别鸣谢 -->
		</div>
	</div>
</template>

<style scoped>
	.layui-timeline {
		padding-left: 5px;
	}

	.layui-timeline-item {
		position: relative;
		padding-bottom: 20px;
	}

	li {
		list-style: none;
	}

	.layui-timeline-item:first-child:before {
		display: block;
	}

	.layui-timeline-item:before {
		content: '';
		position: absolute;
		left: 5px;
		top: 0;
		z-index: 0;
		width: 1px;
		height: 100%;
	}

	.layui-timeline-item:before,
	hr {
		background-color: #D1D1D1;
	}

	.layui-timeline-axis {
		position: absolute;
		left: -5px;
		top: 0;
		z-index: 10;
		width: 20px;
		height: 20px;
		line-height: 20px;
		background-color: #fff;
		color: #b6a59b;
		border-radius: 50%;
		text-align: center;
		cursor: pointer;
	}

	.layui-icon {
		font-family: layui-icon !important;
		font-size: 16px;
		font-style: normal;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
	}

	.layui-btn,
	.layui-disabled,
	.layui-icon,
	.layui-unselect {
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
	}

	.layui-timeline-content {
		padding-left: 25px;
	}

	.layui-text {
		line-height: 22px;
		font-size: 14px;
		color: #666;
	}

	.layui-timeline-axis:hover {
		color: #696969;
	}

	.layui-text h3 {
		font-size: 18px;
	}

	.layui-text h1,
	.layui-text h2,
	.layui-text h3 {
		font-weight: 500;
		color: #333;
	}

	.layui-timeline-title {
		position: relative;
		margin-bottom: 10px;
	}

	.fa {
		font-size: 14px;
	}
	.layui-text ul li {
	    margin-top: 5px;
	    list-style-type: disc;
	}
	.layui-badge-rim {
	    height: 18px;
	    line-height: 18px;
	    border-width: 1px;
	    border-style: solid;
	    background-color: #fff;
	    color: #666;
		font-size: 12px;
		padding: 0 6px;
		border-radius: 2px;
		text-align: center;
		border-color: #b6a59b;
	}
	
</style>

<script>
	// 引入axios
	import axios from 'axios';
	import $ from 'jquery';
	export default{
		name: 'Log',
		// 数据
		data(){
			return {
				loglists:null,
			}
		},
		// 页面载入前
		async beforeMount(){
			var res = await axios.get('datas/log_datas.json');
			this.loglists = res.data.loglists.reverse();
			// console.log(res);
		},
		/**
		 * 因为是先加载About页面再加载Log页面，所以会导致左侧导航高度不准
		 * 因此在页面Log页面加载完成和数据更新完成后要重新设置左侧导航的高度
		 * */
		// 页面加载完成后
		mounted() {
			// 设置左侧导航的高度
			$(".left").height($(".right").height());
			// console.log($(".right").outerHeight(true));
		},
		// 数据更新后
		updated(){
			// 设置左侧导航的高度
			$(".left").height($(".right").height());
			// console.log($(".right").outerHeight(true));
		}
	}
</script>