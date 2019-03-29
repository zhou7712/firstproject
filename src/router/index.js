import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import Mine from '../components/mine'
// import Cpage from '../page/mine/c'
// import Dpage from '../page/mine/d'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: resolve => require(["@/ES6/lesson.vue"], resolve)
    },
    {
      path: '/lesson',
      component: resolve => require(["@/ES6/lesson.vue"], resolve)
    },
    {
      path: '/Dialog',
      component: resolve => require(["@/components/Dialog.vue"], resolve)
    },
    {
      path: '/parent',
      component: resolve => require(["@/demos/parent.vue"], resolve)
    },
    {
      path: '/kid',
      component: resolve => require(["@/demos/kid.vue"], resolve)
    },
    {
      path: '/mine',
      name: 'Mine',
      //component:Mine,
      component: resolve => require(["@/components/mine.vue"], resolve),
      children:[
        {
            path:'/',
            //component:Cpage,
            component: resolve => require(["@/page/mine/c.vue"], resolve)
        },
        {
            path:'/mine/c',
            //component:Cpage,
            component: resolve => require(["@/page/mine/c.vue"], resolve)
        },
        {
            path:'/mine/d',
            //component:Dpage,
            component: resolve => require(["@/page/mine/d.vue"], resolve)
        }
      ]
      //children这是嵌套的部分
    }
  ],
  mode:"history"//去掉路径上的'#'
})
