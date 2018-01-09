import router from "./index";
import store from '../store';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import storage from "../utils/storage";

router.beforeEach((to, from, next) => {
  NProgress.start();
  const userInfo = storage.get('userInfo');
  if (userInfo) {
    if (to.meta.auth) {
      store.dispatch('checkAuth', userInfo.token).then(() => {
        next();
      }).catch((err) => {
        console.log(err);
        next({path: '/login'});
      })
    } else {
      next();
    }
  } else {
    if (to.path === '/login') {
      next()
    } else {
      next({path: '/login'})
    }
  }
});
router.afterEach((transition) => {
  NProgress.done();
});