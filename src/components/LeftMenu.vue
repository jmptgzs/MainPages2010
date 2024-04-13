<template>
	<ul id="Amennu">
		<li v-for="(item,index) in leftmenus">
			<router-link v-if="item.vueurl" :to="item.jumpurl" :title="item.title" v-text="item.title" :target="item.target" ></router-link>
			<a v-else :href="item.jumpurl" :title="item.title" v-text="item.title" :target="item.target"></a>
		</li>
	</ul>
</template>

<style scoped>
	#Amennu .router-link-exact-active {
	    background: #b6a59b;
	    color: #FFFFFF;
	    border-left: solid 8px #696969;
		font-weight: normal;
	}
</style>

<script>
	// 引入axios
	// import axios from 'axios'
	export default {
		name: 'LeftMenu',
		// 接收传入变量
		props: ['leftmenus'],
		
		//--------------------------
		// 数据
		// data(){
		// 	return {
		// 		leftmenus:null,
		// 	}
		// },
		// 页面载入前
		// async beforeMount(){
		// 	var res = await axios.get('datas/LeftMenu_datas.json');
		// 	this.leftmenus = res.data.menulist;
		// 	// console.log(res);
		// },
	}
</script>