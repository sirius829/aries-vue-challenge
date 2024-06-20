import Vue from 'vue'
import App from './App.vue'
import { Chart, registerables } from 'chart.js/auto';
import zoomPlugin from 'chartjs-plugin-zoom';

Vue.config.productionTip = false

Chart.register(...registerables, zoomPlugin);

new Vue({
  render: h => h(App),
}).$mount('#app')
