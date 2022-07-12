import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginVue from '@/components/LoginVue'
import HomeVue from '@/components/HomeVue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: LoginVue
  },
  {
    path: '/home',
    component: HomeVue
  }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
