<template>
	<div class="wrapper">
		<div class="title">历届主席团成员</div>
		<div class="actcl">
			<iframe class="pdf_iframe" :src="'plugins/pdfjs/web/viewer.html?file='+pdfurl" frameborder="0"></iframe>
		</div>
	</div>
</template>

<style scoped>
	.pdf_iframe{
		width: 100%;
		min-height: 512px;
	}
</style>

<script>
	// 引入axios
	// import axios from 'axios';
	import $ from 'jquery';
	export default{
		name: 'Leader',
		// 数据
		data(){
			return {
				pdfurl:"/files/教育技术工作室主席团成员名单.pdf",
			}
		},
		// 页面载入前
		// async beforeMount(){
		// 	var res = await axios.get('datas/log_datas.json');
		// 	this.loglists = res.data.loglists.reverse();
		// 	// console.log(res);
		// },
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