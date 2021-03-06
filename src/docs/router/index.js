import Vue from 'vue'
import Router from 'vue-router'
import NProgress from 'nprogress'
import '@/docs/style/nprogress.css'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/button',
      component: () => import('@/docs/view/button/index.vue')
    },
    {
      path: '/icon',
      component: () => import('@/docs/view/icon/index.vue')
    },
    {
      path: '/grid',
      component: () => import('@/docs/view/grid/index.vue')
    },
    {
      path: '/input',
      component: () => import('@/docs/view/input/index.vue')
    },
    {
      path: '/checkbox',
      component: () => import('@/docs/view/checkbox/index.vue')
    },
    {
      path: '/select',
      component: () => import('@/docs/view/select/index.vue')
    },
    {
      path: '/message',
      component: () => import('@/docs/view/message/index.vue')
    },
    {
      path: '/notice',
      component: () => import('@/docs/view/notice/index.vue')
    },
    {
      path: '/switch',
      component: () => import('@/docs/view/switch/index.vue')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
