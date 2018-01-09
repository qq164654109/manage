const Mock = require('mockjs');

const userList = [
  {
    id: 0,
    username: 'admin',
    password: 'admin',
    role: 'admin',
    token: 'qwe0123'
  },
  {
    id: 1,
    username: 'zhou',
    password: '123',
    role: 'normal',
    token: 'qwu10990'
  }
];

const loginAPI = Mock.mock('/api/login', 'post', (options) => {
  const data = JSON.parse(options.body);
  const user = userList.filter(item => item.username === data.username);
  if (user.length > 0 && user[0].password === data.password) {
    return {
      message: 'ok',
      data: {
        username: user[0].username,
        token: user[0].token
      }
    }
  } else {
    return {
      message: 'error'
    }
  }
});

const authAPI = Mock.mock('/api/user', 'post', (options) => {
  const data = JSON.parse(options.body);
  const user = userList.filter(item => item.token === data.token);
  if (user.length > 0) {
      return {
        message: 'ok',
        data: {
          token: user[0].token,
          username: user[0].username,
          role: user[0].role
        }
      }
  } else {
      return {
        message: 'error'
      }
  }
});

export default {loginAPI, authAPI};