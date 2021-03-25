import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Articles from './views/Articles'
import articleType from './views/articleType'
import Article from './views/Article'
import Login from './views/Login'
import Register from './views/Register'
import UserInfo from './views/UserInfo'
import Mails from './views/Mails'
import Mail from './views/Mail'
import Collection from './views/Collection'
import Admin from './views/admin/Admin'
import WriterArticle from './views/admin/WriterArticle'
import AdminArticle from './views/admin/AdminArticle'
import AdminUsers from './views/admin/AdminUsers'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/articles',
      name: 'Articles',
      component: Articles
    },
    {
      path: '/articleType',
      name: 'articleType',
      component: articleType
    },
    {
      path: '/article/:id',
      name: 'Article',
      component: Article
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/userinfo/:username',
      name: 'UserInfo',
      component: UserInfo
    },
    {
      path: '/mail',
      name: 'Mails',
      component: Mails
    },
    {
      path: '/mailGetter/:id',
      name: 'Mail',
      component: Mail
    },
    {
      path: '/collection/:id',
      name: 'Collection',
      component: Collection
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children:[
        {
          path: 'article',
          component: WriterArticle
        },
        {
          path: 'articles',
          component: AdminArticle
        },
        {
          path: 'users',
          component: AdminUsers
        }
      ]
    }
  ]
})