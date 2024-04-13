import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// 全局使用图片放大插件
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
Vue.use(VueDirectiveImagePreviewer, {
	background: {     // or : background: '#000'
		color: '#000', // or rgba or rgb     // or image: 'url(xxx)'
		backgroundColor:'rgba(255, 255, 255, 0.9)',
	},
	// transition
	animate: {
		duration: 600,
		delay: 500
	},
	// loading (not supported)
	// loading: {
	// 	image: ''
	// },
	// cursor(css)
	cursor: 'pointer',
	// clickMethod: 'doubleClick'   // click or doubleClick(not supported)
		
	// Number类型，默认为1
	// zIndex:1,
	// 布尔类型，默认为true。如果是true，那么当你预览图片时，被点击的原始的图片不会消失；如果是false，被点击的原始的图片就会消失
	// copy：true,
	// Number类型，限制图片最大宽度
	// maxWidth:1000|"1000px"|"100%",
	// Number类型，限制图片最大高度
	// maxHeight:1000|"1000px"|"100%",
	// Number类型，预览图片的大小。举例，如果值为2，那么预览图片的宽高就是原始图片大小的两倍
	// previewSize:2|"20%",
	// 如何实现全屏预览
	//先获取客户端显示屏幕屏幕的宽高
	// var height=screen.height
	// var width=screen.width
	//previewSize可以设置大一点，之后预览的图片就可以无限放大，直到宽或高达到了限制的最大宽高,即屏幕宽高。它不会压缩拉伸图片的原本比例。
	// Vue.use(VueDirectiveImagePreviewer,{
	// 	previewSize:10,
	// 	maxWidth:width,
	// 	maxHeight:height
	// }) 	
})

// 引入 font-awesome
import '../public/css/Font-Awesome/css/font-awesome.min.css';

import './registerServiceWorker'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
