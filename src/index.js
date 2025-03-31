export default function (api) {
  api.compatibleWith('quasar', '^2.0.0')

  api.extendQuasarConf((conf) => {
    // Ensure framework.plugins array exists
    conf.framework = conf.framework || {}
    conf.framework.plugins = conf.framework.plugins || []

    // Add Notify plugin if not already included
    if (!conf.framework.plugins.includes('Notify')) {
      conf.framework.plugins.push('Notify')
      api.onExitLog('Added "Notify" plugin to quasar.config.js')
    }

    // Register boot file
    conf.boot = conf.boot || []
    conf.boot.push('confirm-button')
  })

  api.onExitLog('✅ ConfirmButton installed! Use <ConfirmButton> in templates.')
}