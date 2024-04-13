//在根目录下创建vue.config.js,如下配置：
module.exports = {
	// 设置VueCliBuild后的相对路径
	publicPath: "./",

	// 指定静态资源目录
	// assetsDir:"static",

	// 关闭代码格式提示
	lintOnSave: false,

	// 代理
	// devServer: {
	// 	proxy: {
	// 		'/api': {
	// 			target: 'http://localhost:8080', //路径指向本地主机地址及端口号
	// 			ws: true,
	// 			changeOrigin: true,
	// 			pathRewrite: {
	// 				'^/api': '/datas' //路径转发代理
	// 			}
	// 		}
	// 	}
	// }

	// 路径&名称定义
	pages: {
		index: {
			// page 的入口
			entry: 'src/main.js',
			// 模板来源
			template: 'public/index.html',
			// 在 dist/index.html 的输出
			filename: 'index.html',
			// 当使用 title 选项时，
			// template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
			title: '教育技术工作室官方站点',
			// 在这个页面中包含的块，默认情况下会包含
			// 提取出来的通用 chunk 和 vendor chunk。
			chunks: ['chunk-vendors', 'chunk-common', 'index']
		}
	},

	// pwa
	pwa: {
		// 应用名称
		name: '教育技术工作室',
		themeColor: '#cdccc6',
		msTileColor: '#cdccc6',
		manifestOptions: {
			// 应用短名称
			short_name: '教育技术工作室',
			// 启动画面显示类型
			// fullscreen 应用占满整个屏幕
			// standalone 隐藏浏览器ui
			// minimal-ui 与standalone类似
			// browser 与普通网页打开一致
			display: 'standalone',
			// 描述
			description: '以技术为中心，以服务为宗旨。',
			// 首页
			start_url: '/',
			// 启动画面背景
			background_color: '#cdccc6',
		},
		// workbox的模式，GenerateSW使用默认模式，InjectManifest使用自定义模式
		// workboxPluginMode: 'GenerateSW',
		// workboxOptions: {
		// 	// 引入workbox依赖库的方式，默认的依赖库在Google的cdn上
		// 	importWorkboxFrom: 'cdn',
		// }
		// 配置 workbox 插件
		workboxPluginMode: 'InjectManifest',
		workboxOptions: {
			// InjectManifest 模式下 swSrc 是必填的。
			swSrc: './src/service-worker.js',
			importWorkboxFrom: 'local',
			// ...其它 Workbox 选项...
			// 包含和不包含的缓存文件列表
			include: [],
			exclude: []
		}
	},

	// 禁用map文件
	// 浏览器按f12键。点击source可以看到webpack：//的目录，里面包含了项目里所有的源码
	productionSourceMap: false,
	configureWebpack: {
		devtool: false,
	}
}