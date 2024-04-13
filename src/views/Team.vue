<template>
	<div class="wrapper">
		<div class="title">团队建设</div>
		<div class="actcl">
			<img class="amplify" v-image-preview src="images/aboutgzs_1.gif" title="教育技术工作室" height="68px">
			<p style="color:#CC0000; font-size:13px" v-cloak>
				<b>教育技术工作室在现代教育中心的的领导下，努力创建示范性学生组织....</b>
			</p>
			<p style="text-indent:2rem" v-cloak>　
				教育技术工作室在江门职业技术学院现代教育技术中心的领导和指导下，成立至今{{gzsage}}年，在无数的日日夜夜里，我们在丰富学院校园文化的同时，也在中心领导的指导下，提出创建示范性学生组织的目标，我们将会以此为动力，完善自我，努力创新，提高自己，树立自身品牌。
			</p>
			<p style="text-indent:2rem" v-cloak>
				教育技术工作室作为江门职业技术学院一个特色的学生组织，在完成自身的技能充实上，积极配合学院校园文化的建设，无论在校运会、中大型晚会、网站建设、会议摄影摄像和等级考试还是每一个多媒体课室的维护管理上都有我们默默贡献的身影，我们始终把丰富学院校园文化作为奋斗的目标之一。
			</p>
			<p style="text-indent: 2rem;" v-cloak>
				总结过去，面向未来，教育技术工作室在过去的{{gzsage - 1}}年间，不断开拓创新，勇于争先，始终牢记“技术为本，服务第一”的宗旨，积极开展各项工作，并在现代教育技术中心指导主任及老师的领导下，以江门职业技术学院的校园文化作为自己奋斗的起点，坚实步伐，从不骄傲自满，找寻弱点，发挥长处，为自身发展寻找突破点。新的一届伊始，中心李耀麟主任在换届及室员大会上始终把建设示范性学生组织、示范性团队建设摆在第一位，我们牢记这个目标，并坚信我们有能力，有信心，依托教育技术工作室大舞台，以及室员上下一心，在江门职业技术学院现代教育技术中心的领导下，始终为建设示范性学生组织不断前进。
			</p>
			<p style="color:#CC0000 ;" v-cloak>
				<b>我们的口号：有能力、有信息、争创示范性学生组织。</b>
			</p>
			<p style="text-indent: 2rem;" v-cloak>    
				The Education technology studio in jiangmen vocational college education in modern technology center of leadership and guidance, since its establishment, in {{gzsage}} years, day and night, the night of countless rich campus culture in our college, but also in the center of the leadership, creating exemplary student organizations goals, we will regard this as the motive force, self-improvement, innovation, improve their own brand, set up.
			</p>
			<p style="text-indent: 2rem;" v-cloak>
				Education technology studio as jiangmen vocational technical college student organizations, characteristic of a complete their skills in full, and actively cooperate with the college campus culture construction, whether in the sports meeting, large party, website construction, meeting videotape and grade exam or every multimedia classroom maintenance and management are we, our contribution silently college campus culture, the rich always as one goal.
			</p>
			<p style="text-indent: 2rem;" v-cloak>
				The education technology, facing the future, in the past {{gzsage - 1}} years studio, develops the innovation unceasingly, dares to rush, always remember that "technology as the foundation, service first" purpose, actively carry out all work in modern education technology, and the center director and, under the leadership of the teachers in vocational and technical college of jiangmen campus culture as the starting point, solid struggle, never conceited, seek to develop your strengths, weaknesses, looking for its development, the breakthrough point. At the beginning of a new LiYaoLin center director, change and room member conference always construction demonstrativeness student organizations in the first team construction demonstrativeness. We remember this goal, and believe we have the ability and confidence, relying on technology, education and room studios in jiangmen, with member institute of technology of profession of modern education technology center, under the leadership of the construction of demonstrative student organizations to move forward.
			</p>
			<p style="color:#CC0000 ;" v-cloak>
				<b>Our slogan: capable and information and strive for the exemplary student organization.</b>
			</p>
		</div>
	</div>
</template>

<style>
	[v-cloak] {
		display: none !important;
	}
</style>

<script>
	// 引入axios
	import axios from 'axios';
	export default{
		// 数据
		data(){
			return {
				// 成立时间
				// age:null,
			}
		},
		// 页面载入前
		async beforeMount(){
			
			// 通过接口获取当前时间
			// var res2 = await axios.get('https://quan.suning.com/getSysTime.do');
			// var res2 = await axios.get('');
			// var nowtime = res2.data.sysTime2;
			// console.log(nowtime);
			// this.age = this.getage(nowtime);
			
		},
		// 计算属性
		computed:{
			// 计算工作室成立时间
			gzsage:function(){
				// 开始年份
				let bornyear = Number("2002");
				// 当前年份
				const date = new Date();
        		// console.log(date.getFullYear());
				let nowyear = Number(date.getFullYear());
				// 返回成立时间
				return String(nowyear - bornyear);
			}
		},
		// 方法
		// methods:{
			
		// 	// 计算当前年份
		// 	getage(value){
		// 		// 开始年份
		// 		var bornyear = Number("2002");
				
		// 		var date = new Date(value);
		// 		var nowyear = Number(date.getFullYear());
				
		// 		var age = nowyear - bornyear;
		// 		// console.log(age);
				
		// 		return age;
				
		// 	}
		// }
	}
</script>