import VueGoodTablePlugin from 'vue-good-table'
// import the styles
import 'vue-good-table/dist/vue-good-table.css'

export default {
  install(app) {
    app.use(VueGoodTablePlugin)
  },
}
