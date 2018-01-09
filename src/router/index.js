import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/views/Login';
import Home from '@/components/views/Home';
import Dashboard from '@/components/dashboard/Dashboard';
import Pie from '@/components/charts/Pie';
import Bar from '@/components/charts/Bar';
import Worker from '@/components/worker/Worker';
import AllWorker from '@/components/worker/AllWorker';
import WorkerManager from '@/components/worker/WorkerManager';
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login',
    },
    {
      path: '/login',
      name: '登陆',
      component: Login,
      meta: {
        auth: false
      }
    },
    {
      path: '/home',
      name: '主页',
      component: Home,
      meta: {
        auth: true
      },
      children: [
        {
          path: '/home',
          name: '主页展示',
          component: Dashboard,
          meta: {
            auth:true,
            icon: '',
            role: ['admin','normal']
          }
        },
        {
          path: '/home/worker',
          name: '人员列表',
          component: Worker,
          children: [
            {
              path: '/home/worker/allWorker',
              name: '所有人员',
              component: AllWorker,
              meta: {
                auth: true,
                role: ['admin', 'normal']
              }
            },
            {
              path: '/home/worker/workerManager',
              name: '人员管理',
              component: WorkerManager,
              meta: {
                auth:true,
                role: ['admin']
              }
            }
          ]
        }
      ]
    }
  ]
})
