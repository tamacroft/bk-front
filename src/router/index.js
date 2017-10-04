import Vue from 'vue'
import Router from 'vue-router'

import index from '@/pages/default.vue'
import login from '@/pages/Login.vue'
import loginMurid from '@/pages/MuridLogin.vue'
import loginGuru from '@/pages/GuruLogin.vue'
import loginOrtu from '@/pages/OrtuLogin.vue'

import dasGuru from '@/pages/Dashboard/Guru/default.vue'

import dasMurid from '@/pages/Dashboard/Murid/default.vue'

import dasOrtu from '@/pages/Dashboard/Ortu/default.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/login-guru',
      name: 'login_guru',
      component: loginGuru
    },
    {
      path: '/login-murid',
      name: 'login_murid',
      component: loginMurid
    },
    {
      path: '/login-ortu',
      name: 'login_ortu',
      component: loginOrtu
    },
    {
      path: '/dashboard-guru',
      name: 'das_guru',
      component: dasGuru
    },
    {
      path: '/dashboard-murid',
      name: 'das_murid',
      component: dasMurid
    },
    {
      path: '/dashboard-ortu',
      name: 'das_ortu',
      component: dasOrtu
    }
  ]
})
