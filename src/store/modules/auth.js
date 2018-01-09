import axios from 'axios';
import storage from '../../utils/storage';
import {authAPI} from '../../mock/user';
const checkAuth = {
  actions: {
    checkAuth ({commit}, val) {
      return new Promise((resolve, reject) => {
        axios.post('/api/user',{token: val}).then((res) => {
          if (res.data.message === 'ok') {
              const username = res.data.data.username;
              const token = res.data.data.token;
              const role = res.data.data.role;
              commit('SET_USERNAME', username);
              commit('SET_TOKEN', token);
              commit('SET_ROLE', role);
              storage.set('userInfo', res.data.data);
              resolve();
          } else {
            reject(res.data.message)
          }
        }).catch((err) => {
          reject(err)
        })
      })
    }
  }
}

export default checkAuth;