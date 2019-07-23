import Home from '@/views/Home'
import one from '@/views/One'
import two from '@/views/Two'
import Webcome from '@/views/Webcome'
export const routes = [{
  path: '/',
  name: 'Home',
  component: Home,
  redirect: '/webcome',
  meta: {
    title: '首页'
  },
  children: [
    {
      path: '/webcome',
      name: 'webcome',
      component: Webcome,
      meta: {
        title: 'webcome'
      }
    },
    {
      path: '/one',
      name: 'one',
      component: one,
      meta: {
        title: 'one'
      }
    },
    {
      path: '/two',
      name: 'two',
      component: two,
      meta: {
        title: 'two'
      }
    }
  ]
}]
