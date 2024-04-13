<template>
	<div class="wrapper">
		<div class="title">教育技术工作室宣传视频合集</div>
		<div class="actcl">
			<br>
			<div class="video_content">
				<!-- 20230821 不再自己托管或解析视频了，视频统一用bilibili -->
				<!-- <video controls preload="none" playsinline controlsList="nodownload" :poster="videoposter" :src="videourl"></video> -->
				<iframe :src="videourl" scrolling="no" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
				<div class="switch_video">
					<select class="select-style" v-model="defaultvideoselect" @change="changevideo($event)">
						<!--选择项的value值默认选择项文本 可动态绑定选择项的value值 更改v-model指令绑定数据-->
						<!-- <option v-for="(item, index) in videolists" :value ="item.videoid" :data-videourl="item.videourl" :data-videoposter="item.videoposter" v-text="item.videotitle"></option> -->
						<!-- <option v-for="(item, index) in videolists" :value ="item.videoid" :data-videoparm="item.videoparm" v-text="item.videotitle"></option> -->
						<option v-for="(item, index) in videolists" :value ="item.videoid" :data-videoaid="item.videoaid" :data-videobvid="item.videobvid" :data-videocid="item.videobcid" v-text="item.videotitle"></option>
					</select>
				</div>
			</div>
			<br>
		</div>
	</div>
</template>

<style scoped>
	.video_content{
		text-align: center;
		padding-top: 10px;
		padding-bottom: 20px;
	}
	/* .video_content video{
		width: 640px;
		height: 360px;
	} */
	.video_content iframe{
		width: 640px;
		height: 360px;
		border: none;
	}
	.select-style{  
	    background:#fafdfe;  
	    height:28px;  
	    /* width:180px;  */
	    line-height:28px;  
	    border:1px solid #9bc0dd;  
	    -moz-border-radius:2px;  
	    -webkit-border-radius:2px;  
	    border-radius:2px;
		cursor:pointer;
	}
	.switch_video{
		padding-top: 10px;
		padding-bottom: 5px;
	}
</style>

<script>
	// 引入axios
	import axios from 'axios';
	export default{
		name: 'Promotional-video',
		// 数据
		data(){
			return {
				videolists:null,
				defaultvideoselect:null,
				videourl:null,
				// videoposter:null,
				// videoapiuri:"",
				videoapiuri:"https://player.bilibili.com/player.html",
			}
		},
		// 页面载入前
		async beforeMount(){
			var res = await axios.get('datas/promotional-video_datas.json');
			this.videolists = res.data.videolists;
			
			// console.log(res.data.videolists.length);
			var randnum = Math.floor(Math.random() * res.data.videolists.length);
			// console.log(randnum);
			// 设置默认下拉选择
			this.defaultvideoselect = res.data.videolists[randnum].videoid;
			// 设置默认播放视频
			// this.videourl = res.data.videolists[randnum].videourl;
			// this.videoposter = res.data.videolists[randnum].videoposter;
			// 20230821 不再自己托管或解析视频了，视频统一用bilibili
			// this.videourl = this.combineURL(this.videoapiuri , {parm:res.data.videolists[randnum].videoparm,rez:0,format:"jvideo"});
			// this.videoposter = this.combineURL(this.videoapiuri , {parm:res.data.videolists[randnum].videoparm,rez:0,format:"jimage"});
			this.videourl = this.combineURL(this.videoapiuri , {aid:res.data.videolists[randnum].videoaid,bvid:res.data.videolists[randnum].videobvid,cid:res.data.videolists[randnum].videocid,high_quality:1});
			// console.log(res);
		},
		// 方法
		methods:{
			// 切换视频
			changevideo(e){
				// 获取对象
				// console.log(e);
				// 获取选中索引
				// console.log(e.target.selectedIndex);
				// 获取选中对象的参数
				// console.log(e.target.options[e.target.selectedIndex].getAttribute('data-videourl'));
				// console.log(e.target.options[e.target.selectedIndex].dataset.videourl);
				
				// 定义选中对象
				var selobj = e.target.options[e.target.selectedIndex];
				// 改变视频参数
				// this.videourl = selobj.dataset.videourl;
				// this.videoposter = selobj.dataset.videoposter;
				// 20230821 不再自己托管或解析视频了，视频统一用bilibili
				// this.videourl = this.combineURL(this.videoapiuri , {parm:selobj.dataset.videoparm,rez:0,format:"jvideo"});
				// this.videoposter = this.combineURL(this.videoapiuri , {parm:selobj.dataset.videoparm,rez:0,format:"jimage"});
				this.videourl = this.combineURL(this.videoapiuri , {aid:selobj.dataset.videoaid,bvid:selobj.dataset.videobvid,cid:selobj.dataset.videocid,high_quality:1});
			},
			// 组装url
			combineURL(baseURL = "",keysObj = {}){
				// 给 baseURL 拼接上?
				if(baseURL != ""){		
					baseURL += "?"; 
				}
				let valueArr = [];				
				for(let key in keysObj){
					valueArr.push( key + "=" + keysObj[key]);
				}
				let keyStr = "";
				keyStr = valueArr.join("&");
				return baseURL + keyStr;
			}
		}
	}
</script>