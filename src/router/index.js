import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginVue from '@/components/LoginVue'
import HomeVue from '@/components/HomeVue'
import WelcomeVue from '@/components/WelcomeVue'
import UserList from '@/components/user/UserList'
import RightsVue from '@/components/power/RightsVue'
import RolesVue from '@/components/power/RolesVue'
import GoodsCate from '@/components/goods/GoodsCate'
import GoodsParams from '@/components/goods/GoodsParams'
import GoodsList from '@/components/goods/GoodsList'
import AddGoods from '@/components/goods/AddGoods'
import OrderList from '@/components/order/OrderList'
import ReportVue from '@/components/report/ReportVue'

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
    component: HomeVue,
    redirect: '/welcome',
    children: [
      {
        path: '/welcome',
        component: WelcomeVue
      },
      {
        path: '/users',
        component: UserList
      },
      {
        path: '/rights',
        component: RightsVue
      },
      {
        path: '/roles',
        component: RolesVue
      },
      {
        path: '/categories',
        component: GoodsCate
      },
      {
        path: '/params',
        component: GoodsParams
      },
      {
        path: '/goods',
        component: GoodsList
      },
      {
        path: '/goods/add',
        component: AddGoods
      },
      {
        path: '/orders',
        component: OrderList
      },
      {
        path: '/reports',
        component: ReportVue
      }
    ]
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
