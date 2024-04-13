import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

// 进度条
// 引入进度条
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

// 简单配置
// 可以通过调用 .set(n)来设置进度，n是0-1的数字。
// NProgress.set(0.0);     // Sorta same as .start()
// NProgress.set(0.4);
// NProgress.set(1.0);     // Sorta same as .done()
// 可以使用inc()随机增长进度条，注意，这个方法永远不会让进度条达到100%。
NProgress.inc()

NProgress.configure({ 
	easing: 'ease', // 动画方向
	// speed: 3000, // 动画速度，单位毫秒ms
	// showSpinner: false,// 禁用进度环
	// trickle:false,// 关闭进度条步进
	// trickleRate : 10,// 每次步进增长多少
	// trickleSpeed : 200,// 每次步进间隔，单位毫秒ms
	// minimum : 0.08,// 最小百分比
	
})
// 进度条

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
	meta:{
		// 页面标题title
		title: '欢迎访问教育技术工作室'
	}
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
	redirect: '/about/team',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
	children:[
		{
			path: 'contact',
			name: 'Contact',
			component: () => import(/* webpackChunkName: "about" */ '../views/Contact.vue'),
			meta:{
				// 页面标题title
				title: '联系我们-教育技术工作室'
			}
		},
		{
			path: 'team',
			name: 'Team',
			component: () => import(/* webpackChunkName: "about" */ '../views/Team.vue'),
			meta:{
				// 页面标题title
				title: '团队建设-教育技术工作室'
			}
		},
		{
			path: 'constitute',
			name: 'Constitute',
			component: () => import(/* webpackChunkName: "about" */ '../views/Constitute.vue'),
			meta:{
				// 页面标题title
				title: '团队构成-教育技术工作室'
			}
		},
		{
			path: 'log',
			name: 'Log',
			component: () => import(/* webpackChunkName: "about" */ '../views/Log.vue'),
			meta:{
				// 页面标题title
				title: '网站更新日志-教育技术工作室'
			}
		},
		{
			path: 'leader',
			name: 'Leader',
			component: () => import(/* webpackChunkName: "about" */ '../views/Leader.vue'),
			meta:{
				// 页面标题title
				title: '历届主席团成员-教育技术工作室'
			}
		},
		{
			path: 'privacy',
			name: 'Privacy',
			component: () => import(/* webpackChunkName: "about" */ '../views/Privacy.vue'),
			meta:{
				// 页面标题title
				title: '隐私政策-教育技术工作室'
			}
		}
	],
  },
  {
    path: '/news',
    name: 'News',
    component: () => import(/* webpackChunkName: "about" */ '../views/News.vue'),
  	meta:{
  		// 页面标题title
  		title: '新闻中心-教育技术工作室'
  	}
  },
  {
    path: '/department',
    name: 'Department',
    component: () => import(/* webpackChunkName: "about" */ '../views/Department.vue'),
  	meta:{
  		// 页面标题title
  		title: '部门职能-教育技术工作室'
  	}
  },
  {
    path: '/culture',
    name: 'Culture',
    component: () => import(/* webpackChunkName: "about" */ '../views/Culture.vue'),
  	meta:{
  		// 页面标题title
  		title: '组织文化-教育技术工作室'
  	}
  },
  {
    path: '/information',
    name: 'Information',
    component: () => import(/* webpackChunkName: "about" */ '../views/Information.vue'),
  	meta:{
  		// 页面标题title
  		title: '校园信息-教育技术工作室'
  	}
  },
  {
    path: '/activity',
    name: 'Activity',
	redirect: '/Activity/promotional-video',
    component: () => import(/* webpackChunkName: "about" */ '../views/Activity.vue'),
	children:[
		{
			path: 'promotional-video',
			name: 'Promotional-video',
			component: () => import(/* webpackChunkName: "about" */ '../views/Promotional-video.vue'),
			meta:{
				// 页面标题title
				title: '宣传片合集-教育技术工作室'
			}
		},
	],
  },
]


const router = new VueRouter({
	// 强制跳转后从顶部开始阅读
	scrollBehavior(to,from,saveTop){ 
		if(saveTop){ 
			return saveTop; 
		}else{ 
			return {x:0,y:0} 
		}
	},
	// 路由配置参数
	routes
})

router.beforeEach((to, from, next) => {
  // 启动进度条
  NProgress.start();
  // 如果设置标题，拦截后设置标题
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {
	// 移除进度条
	NProgress.done();
	// NProgress.remove();
})

export default router
