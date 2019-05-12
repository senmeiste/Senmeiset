// import Vue from 'vue'
// import Router from 'vue-router'
// import Home from "@/pages/home/Home"
// import City from "@/pages/city/City"
// import Detail from "@/pages/detail/Detail"
// import Manger from "@/pages/manger/Manger"
// Vue.use(Router)
// 
// export default new Router({
// 	routes: [{
// 			path: '/',
// 			name: 'Home',
// 			component: Home
// 		},
// 		{
// 			path: '/city',
// 			name: 'City',
// 			component: City
// 		},
// 		{
// 			path: '/detail/:id',
// 			name: 'Detail',
// 			component: Detail
// 		},
// 		{
// 			path: '/manger',
// 			name: 'Manger',
// 			component: Manger
// 		}
// 	],
// 	scrollBehavior (to, from, savedPosition) {
// 		return { x: 0, y: 0 }
// 	}
// })




// 上是统一加载



/*




在项目较小时，直接统一加载并不会拖慢项目加载速度



**/



///下是按需加载




import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
	routes: [{
			path: '/',
			name: 'Home',
			component: () => import("@/pages/home/Home")
		},
		{
			path: '/city',
			name: 'City',
			component: () => import("@/pages/city/City")
		},
		{
			path: '/detail/:id',
			name: 'Detail',
			component: () => import("@/pages/detail/Detail")
		},
		{
			path: '/manger',
			name: 'Manger',
			component: () => import("@/pages/manger/Manger")
		}
	],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})

