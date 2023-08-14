import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import { library } from '@fortawesome/fontawesome-svg-core';
import store from './store/index';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUserSecret, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

library.add(faUserSecret, faEye, faEyeSlash);

createApp(App)
    .use(router)
    .use(store)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app');
