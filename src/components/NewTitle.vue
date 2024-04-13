<template>
	<div class="newtitle">
		<div class="left">
			<div class="newlist">
				<ul>
					<template v-for="(item,index) in left">
						<li>
							<a href="javascript:;" class="inactive" @click="inactive($event)" v-text="item.title"></a>
							<dl :style="{display:(item.isshow?'block':'none')}">
								<dd v-for="(data,index) in item.contents">
									<span :style="{color:data.timecolor,fontWeight:data.timefw}" v-text="data.time"></span>
									<a :style="{color:data.titlecolor,fontWeight:data.titlefw}" :href="data.jumpurl" :title="data.title" v-text="data.title" :target="data.target"></a>
								</dd>
							</dl>
						</li>
					</template>
				</ul>
			</div>	
		</div>
		<div class="center">
			<div class="newlist">
				<ul>
					<template v-for="(item,index) in center">
						<li>
							<a href="javascript:;" class="inactive" @click="inactive($event)" v-text="item.title"></a>
							<dl :style="{display:(item.isshow?'block':'none')}">
								<dd v-for="(data,index) in item.contents">
									<span :style="{color:data.timecolor,fontWeight:data.timefw}" v-text="data.time"></span>
									<a :style="{color:data.titlecolor,fontWeight:data.titlefw}" :href="data.jumpurl" :title="data.title" v-text="data.title" :target="data.target"></a>
								</dd>
							</dl>
						</li>
					</template>
				</ul>
			</div>	
		</div>
		<div class="right">
			<div class="newlist">
				<ul>
					<template v-for="(item,index) in right">
						<li>
							<a href="javascript:;" class="inactive" @click="inactive($event)" v-text="item.title"></a>
							<dl :style="{display:(item.isshow?'block':'none')}">
								<dd v-for="(data,index) in item.contents">
									<span :style="{color:data.timecolor,fontWeight:data.timefw}" v-text="data.time"></span>
									<a :style="{color:data.titlecolor,fontWeight:data.titlefw}" :href="data.jumpurl" :title="data.title" v-text="data.title" :target="data.target"></a>
								</dd>
							</dl>
						</li>
					</template>
				</ul>
			</div>	
		</div>
	</div>
</template>

<style scoped>
	.newtitle {
		padding-bottom: 10px;
	}

	.newtitle .center {
		float: left;
		height: 970px;
		width: 500px;
		border: 1px solid #999900;
		overflow: hidden;
		display: inline;
	}

	.newtitle .left {
		float: left;
		height: 970px;
		width: 210px;
		display: inline;
		border: 1px solid #999900;
		margin: 0 5px;
	}

	.newtitle .right {
		float: right;
		height: 970px;
		width: 260px;
		display: inline;
		border: 1px solid #999900;
		margin: 0 5px;
	}

	.newlist {
		width: 100%;
		height: 100%;
	}

	.newlist ul li {
		width: 100%;
		/* 背景这种相对路径是显示不了的，所以弄了个在线的图片 */
		/* background: url("images/new3.png") no-repeat; */
		background: url("https://upload-bbs.miyoushe.com/upload/2024/04/13/369690819/fc4f860c5f67b23bfaa24533d445b721_8289529703268603186.png") no-repeat;
	}

	.newlist ul li a {
		margin-left: 60px;
		margin-top: 8px;
		padding-left: 10px;
		display: block; 
		font-weight:bold; 
		height:40px;
		line-height: 40px;
		position: relative;
	}
	
	.newlist dl dd span{
		display: block; 
		font-weight:normal;
		height:20px;
		line-height: 20px;
		float: right;
		color:#999;
		padding-right:5px ;
	}
	
	.center .newlist dl dd a{
		max-width: 230px;
	}
	
	.newlist dl dd a{
		margin-left: 0px;
		margin-top: px;
		padding-left: 5px;
		display: block; 
		font-weight:normal;
		height:20px;
		line-height: 20px;
		/* 超出省略号 */
		max-width: 130px;
		overflow: hidden; 
		text-overflow: ellipsis; 
		white-space: nowrap;
	}

	.newlist li {
		list-style-type: none;
	}
	.newlist dl {
		max-height: 200px;
		overflow: auto;
	}
</style>

<script>
	import $ from 'jquery';
	export default {
		name: 'NewTitle',
		props: ['left','center','right'],
		// 方法
		methods:{
			inactive:function(event){
				var _this = event.target;
				if($(_this).next().css('display')=='block'){
					// 当前点击的处于开启状态
					$(_this).parents('.newlist').find('dl').slideUp(100);
				}else{
					$(_this).parents('.newlist').find('dl').slideUp(100);
					$(_this).next().slideDown(100);
				}
			}
		}
	}
</script>