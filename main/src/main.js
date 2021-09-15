import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import naive from "naive-ui";
import store from './store/store';

const app = createApp(App);

app.use(router);
app.use(store);
app.use(naive);

app.mount('#app');
