<template>
	<div id="main">
		<div class="top_activity">
			<span>教育技术工作室活动瞬间</span>
		</div>
		<div class="activity_content">
			<!-- 左侧导航 -->
			<div class="left" style="min-height: 300px;">
				<LeftMenu :leftmenus="leftmenus" />
			</div>
			<!-- 左侧导航 -->
			<!-- 右侧导航 -->
			<div class="right">
				<router-view />
			</div>
			<!-- 右侧导航 -->
		</div>
	</div>
</template>

<script>
	// @ is an alias to /src
	import LeftMenu from '@/components/LeftMenu.vue'

	import $ from 'jquery'
	
	// 引入axios
	import axios from 'axios'

	export default {
		name: 'Activity',
		// 数据
		data(){
			return {
				leftmenus:null,
			}
		},
		// 组件
		components: {
			LeftMenu
		},
		// 页面载入前
		async beforeMount(){
			var res = await axios.get('datas/activity_LeftMenu_datas.json');
			// this.leftmenus = res.data.menulist;
			// console.log(res);
			// 设置数据
			this.leftmenus = res.data.menulist;
		},
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
