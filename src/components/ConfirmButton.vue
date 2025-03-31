<template>
  <q-btn :disable="disabled" @click="handleClick()" :color="color" :text-color="textColor">
    <q-icon v-if="icon" :name="icon" />
    {{ `${props.label.toUpperCase()}`}}
  </q-btn>
</template>

<script setup lang="ts">
import { QBtn, QIcon, Notify } from 'quasar'
import { useI18n } from 'vue-i18n'
const { locale }  = useI18n()

const emit = defineEmits(['dismissed', 'confirmed', 'cancelled'])

const props = defineProps({
  type: { type: String, default: 'warning' },
  notifyColor: { type: String, default: 'warning' },
  notifyTextColor: { type: String, default: 'primary' },
  message: { type: String, default: null },
  caption: { type: String, default: null },
  notifyIcon: { type: String, default: '' },
  iconColor: { type: String, default: 'primary' },
  avatar: { type: String, default: '' },
  spinner: { type: Boolean, default: false },
  spinnerColor: { type: String, default: 'primary' },
  spinnerSize: { type: String, default: '20px' },
  position: { type: String, default: 'bottom' },
  group: { type: [Boolean, String, Number], default: true },
  badgeColor: { type: String, default: 'orange' },
  badgeTextColor: { type: String, default: 'primary' },
  badgePosition: { type: String, default: 'top left' },
  badgeStyle: { type: [String, Array, Object], default: '' },
  badgeClass: { type: [String, Array, Object], default: '' },
  progress: { type: Boolean, default: true },
  progressClass: { type: [String, Array, Object], default: '' },
  classes: {type: String, default: ''},
  attrs: {type: Object, default: () => ({role: 'alertdialog'})},
  timeout: { type: Number, default: 5000 },
  
  icon: { type: String, default: 'delete' },
  color: { type: String, default: 'negative' },
  textColor: { type: String, default: 'primary' },
  label: { type: String, default: '' },
  labelYes: { type: String, default: null },
  labelNo: { type: String, default: null },
  disabled: { type: Boolean, default: false },
})

// Translations
const areYouSure = () => locale.value==='el' ? 'Είσαι σίγουρος;' : 'Are you sure?'
const deleteMsg = () => locale.value==='el' ? 'Ζήτησες τη διαγραφή αυτού του στοιχείου' : 'You asked the deletion of this element'
const translatedYes = () => locale.value==='el' ? 'Ναι' : 'Yes'
const translatedNo = () => locale.value==='el' ? 'Όχι' : 'No'

let dismissedByUser = false

const handleClick = () => {
      Notify.create({
        type: props.type,
        color: props.notifyColor,
        textColor: props.notifyTextColor,
        icon: props.notifyIcon,
        iconColor: props.iconColor,
        avatar: props.avatar,
        spinner: props.spinner,
        spinnerColor: props.spinnerColor,
        spinnerSize: props.spinnerSize,
        position: props.position,
        group: props.group,
        badgeColor: props.badgeColor,
        badgeTextColor: props.badgeTextColor,
        badgePosition: props.badgePosition,
        badgeStyle: props.badgeStyle,
        badgeClass: props.badgeClass,
        progress: props.progress,
        progressClass: props.progressClass,
        classes: props.classes,
        attrs: props.attrs,
        timeout: props.timeout,
        message: props.message || areYouSure(),
        caption: props.caption || deleteMsg(),
        
        onDismiss: () => {
          if (!dismissedByUser) emit('dismissed')
        },
        actions: [
          {
            label: `${(props.labelYes || translatedYes()).toUpperCase()}`,
            handler: () => {
              dismissedByUser = true
              emit('confirmed')
            }
          },
          {
            label: `${(props.labelNo || translatedNo()).toUpperCase()}`,
            handler: () => {
              dismissedByUser = true
              emit('cancelled')
            }
          }
        ]
      })
    }
</script>
