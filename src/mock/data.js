const Mock = require('mockjs');

const mainData = Mock.mock('api/mainData', 'get', {
  'lineData|8': [{
    'name|+1': 2010,
    'clothes|200-500': 1,
    'food|180-400': 1,
    'electronics|300-550': 1
  }],
  circleData: {
    allocated: [4300, 10000, 28000, 35000, 50000, 19000],
    actual: [5000, 14000, 28000, 31000, 42000, 21000]
  },
  cardData: {
    'trade|2000-4000': 1,
    'custormos|1000-2000': 1,
    'comment|200-500': 1,
    'referral|500-1000': 1
  },
  'userData|5': [{
    name: '@name',
    'status|1': [
      '成功',
      '待处理',
    ],
    date: '@DATE',
    'price|50-100.2': 1
  }],
  'commentData|3': [{
    avatar() {
      return Mock.Random.image('48x48', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
    },
    name: '@name',
    comment: '@sentence',
    date() {
      return `2017-${Mock.Random.date('MM_dd')} ${Mock.Random.time('HH:mm:ss')}`
    }
  }]
})
let userList = Mock.mock({
  'data|20': [{
    id: '@id',
    name: '@name',
    avatar() {
      return Mock.Random.image('24x24', Mock.Random.color(), '#757575', 'png', this.name.substr(0, 1))
    },
    'age|20-40': 1,
    'sex|1': [
      '男',
      '女'
    ],
    'phone': /^1[385][1-9]\d{8}/,
    email: '@email',
    address: '@province' + '@city' + '@county'
  }] 
})
let database = userList.data
const workerData = Mock.mock('api/workerData', 'get', {
  data: database
})

export default {
  mainData,
  workerData
};
