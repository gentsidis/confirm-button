import { defineComponent } from 'vue'
import ConfirmButton from '../components/ConfirmButton.vue'

export default async ({ app }) => {
  app.component('ConfirmButton', defineComponent(ConfirmButton))
}
