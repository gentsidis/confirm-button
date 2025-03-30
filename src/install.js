/**
 * Quasar App Extension install script
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/install-api
 */

export default function (api) {
  api.compatibleWith('quasar', '^2.0.0')
  api.compatibleWith('@quasar/app', '^3.0.0')

  api.refisterComponent('ConfirmButton', './src/components/ConfirmButton.vue')
  
  api.extendQuasarConf((conf) => {
    if (!conf.framework.plugins.includes('Notify')) {
      conf.framework.plugins.push('Notify')
      api.onExitLog('Added "Notify" plugin to quasar.config.js')
    }
  })
  
  api.onExitLog('✅ ConfirmButton installed! Use <confirm-button> in templates.')
}
