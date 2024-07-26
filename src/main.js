import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/main.css'
import veeValidatePlugin from './plugins/vee-validate'
import vueGoodTablePlugin from './plugins/vue-good-table'
import piniaPersistedState from './plugins/piniaPersistedState'
import apolloClient from './apolloClient'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { PerfectScrollbarPlugin } from 'vue3-perfect-scrollbar'
import 'vue3-perfect-scrollbar/style.css'
import VueApexCharts from 'vue3-apexcharts'
import vClickOutside from 'click-outside-vue3'
import DashboardLayout from './components/DashboardLayout.vue'
import EmptyLayout from './components/EmptyLayout.vue'
const app = createApp(App)

app.use(router)
app.component('DefaultLayout', DashboardLayout)
app.component('EmptyLayout', EmptyLayout)
// Use the plugins
app.use(piniaPersistedState)
app.use(veeValidatePlugin)
app.use(vueGoodTablePlugin)
app.use(PerfectScrollbarPlugin)
app.use(VueApexCharts)
app.use(vClickOutside)
app.provide(DefaultApolloClient, apolloClient)
app.mount('#app')
