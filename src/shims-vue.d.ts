import { DefineComponent } from 'vue';
import { Router } from 'vue-router';

// This is the module declaration for Vue components
declare module '*.vue' {
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }

// Extend the Vue instance with $router
declare module '@vue/runtime-core' {
    // Declare additional properties on the component instance
    interface ComponentCustomProperties {
      $router: Router;  // Add the $router property
    }
  }