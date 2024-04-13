<template>
	<div id="main">
		<div class="top_adnew">
			<span>教育技术工作室</span>
		</div>
		<NewTitle :left="left" :center="center" :right="right"></NewTitle>
	</div>
</template>

<script>
	// 引入axios
	import axios from 'axios';
	import NewTitle from '@/components/NewTitle.vue'
	export default{
		name: 'News',
		// 数据
		data(){
			return {
				left:null,
				center:null,
				right:null,
			}
		},
		// 组件
		components: {
			NewTitle
		},
		// 页面载入前
		async beforeMount(){
			var res = await axios.get('datas/news_datas.json');
			this.left = res.data.left;
			this.center = res.data.center;
			this.right = res.data.right;
			// console.log(res);
		},
	}
</script>
