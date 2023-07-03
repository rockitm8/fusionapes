import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import {
  faFacebook,
  faTelegram,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';

/* add icons to the library */
library.add(faFacebook, faTelegram, faYoutube, faInstagram);

/* add font awesome icon component */

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app');
