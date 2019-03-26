import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'
import '../stylus/main.styl'

Vue.use(Vuetify, {
  theme: {
    primary: '#BFDBFF',
    secondary: '#6085B2',
    accent: '#A4CEFF',
    tertiary: '#B29050',
    tertacc: '#FFDFA4',
    error: '#ff4444',
    info: '#33b5e5',
    success: '#00C851',
    warning: '#ffbb33'
  }
})

Vue.use(Vuetify, {
  iconfont: 'md'
})
