import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import * as firebase from 'firebase';

Vue.config.productionTip = false

const configOptions = {
  apiKey: "AIzaSyCuudam1fdJBpC9M7zG4ZAbIcP4TjBjaf4",
    authDomain: "vue-proj-b910a.firebaseapp.com",
    databaseURL: "https://vue-proj-b910a.firebaseio.com",
    projectId: "vue-proj-b910a",
    storageBucket: "vue-proj-b910a.appspot.com",
    messagingSenderId: "582314666817",
    appId: "1:582314666817:web:e4402c56714bc79b00cfc0",
    measurementId: "G-NXL39YZFLK"
}

firebase.initializeApp(configOptions);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
