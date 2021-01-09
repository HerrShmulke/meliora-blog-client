import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import VueAxios from 'vue-axios';
import axios from 'axios';

import VContainer from './components/VContainer.vue';
import VButton from './components/VButton.vue';

createApp(App)
  .use(store)
  .use(router)
  .use(VueAxios, axios)
  .component('VContainer', VContainer)
  .component('VButton', VButton)
  .mount('#app');
