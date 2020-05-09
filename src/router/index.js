import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/Home/Home')
const Category = () => import('../views/Category/Category')
const Love = () => import('../views/love/Love')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Search = () => import('../views/search/Search')

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
    {
      path: '/love',
      name: 'Love',
      component: Love
    },
    {
      path: '/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/detail/:id',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
  ]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
