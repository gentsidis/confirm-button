import { boot } from 'quasar'
import ConfirmButton from '../components/ConfirmButton.vue'

export default boot(({ app }) => {
  app.component('ConfirmButton', ConfirmButton)
})

