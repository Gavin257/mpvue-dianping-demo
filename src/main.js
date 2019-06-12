import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  config: {
    pages: [
      "./pages/index/main",
      "./pages/rank/main",
      "./pages/follow/main",
      "./pages/my/main"
    ],
    window: {
      "backgroundTextStyle": 'light',
      "navigationBarBackgroundColor": '#fff',
      "navigationBarTitleText": '大众点评',
      "navigationBarTextStyle": 'black'
    }
  }
}
