import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

import store from './store/store';

const app = createApp(App);

app.use(router);
app.use(store);

<<<<<<< HEAD
app.mount('#app');
=======
app.mount('#app')
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2
