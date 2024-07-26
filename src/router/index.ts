import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/view.vue'
import Goods from '@/views/goods/view.vue'
import goodsList from '@/views/goodsList/view.vue'
import Tutorials from '@/views/Tutorials/view.vue'
import Switch from '@/views/switch/view.vue'
import login from '@/views/login/view.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/Goods',
          name: 'Goods',
          component: Goods
        }, {
          path: '/Switch',
          name: 'Switch',
          component: Switch
        }, {
          path: '/goodsList',
          name: 'goodsList',
          component: goodsList
        }, {
          path: '/Tutorials',
          name: 'Tutorials',
          component: Tutorials
        },
      ]
    }, {
      path: '/login',
      name: 'login',
      component: login
    },


  ]
})
router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if (!token) {
    if (to.name === "login") {
      next();
    } else {
      next("/login");
    }
  } else {
    if (to.name === "login") {
    } else {
      next();
    }
  }
});
export default router
