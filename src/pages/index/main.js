/*对每个页面生成vue实例，并挂载*/
import Vue from 'vue'
import App from './index'

const app = new Vue(App)
app.$mount()