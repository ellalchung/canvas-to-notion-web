/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify.js'
import router from '../router/index.js'

// Types
import type { App } from 'vue'
import { createPinia } from 'pinia'

export function registerPlugins (app: App) {
  const pinia = createPinia();

  app
    .use(vuetify)
    .use(router)
    .use(pinia)
}
