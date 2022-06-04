import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import addPage from '@/page/address'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      redirect: '/add'
    },
    {
      path: '/add',
      name: 'address',
      component: addPage,
      props: (route) => {addId: route.query.addId}
    }
  ]
})
