import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from './store'
import './index.css'
import { format } from 'date-fns';
import { parseDateString } from '@/utils/date';

Vue.config.productionTip = false

Vue.filter('datetimeFormat', function (date, toFormat = 'HH:mm:ss dd/MM/yyyy', fromFormat) {
  const then = typeof date === 'string' ? parseDateString(date, fromFormat) : date;

  return then ? format(then, toFormat) : null;
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
