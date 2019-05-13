import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/index/Index'
import Friend from '@/pages/friend/Friend'
import My from '@/pages/my/My'
import News from '@/pages/news/News'
import Release from '@/pages/release/Release'

import Detail from '@/pages/pagesto/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/friend',
      name: 'Friend',
      component: Friend
    },
    {
      path: '/news',
      name: 'News',
      component: News
    },
    {
      path: '/release',
      name:'Release',
      component:Release
    },
    {
      path: '/detail/:id',
      name:'Detail',
      component:Detail
    }
  ]
})
