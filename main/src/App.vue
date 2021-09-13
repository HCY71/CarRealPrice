<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<script>
import { darkTheme, NConfigProvider } from 'naive-ui';
import store from './store/store.js';
<<<<<<< HEAD
import {mapState, mapActions} from 'vuex'
=======
import { mapState, mapMutations, mapActions } from 'vuex';
>>>>>>> 94131a93c5a12da5d54746758a9325b7ab2f9dc2

export default {
  setup() {
    return {
      theme: store.state.dark ? darkTheme : null,
    };
  },
  components: {
    NConfigProvider,
  },
  computed: {
    ...mapState(['carModel']),
  },
<<<<<<< HEAD
  methods:{
    // ...mapMutations(['setCarModels','setPostDatas']),
    ...mapActions(['loadCarModelDatas','loadPostDatas','updateTime'])
=======
  methods: {
    ...mapMutations(['setCarModels', 'setPostDatas']),
    ...mapActions(['loadCarModelDatas', 'loadPostDatas']),
>>>>>>> 94131a93c5a12da5d54746758a9325b7ab2f9dc2
  },
  created() {
    this.loadCarModelDatas();
    this.loadPostDatas();
<<<<<<< HEAD
    this.updateTime();
  }
}
=======
  },
};
>>>>>>> 94131a93c5a12da5d54746758a9325b7ab2f9dc2
</script>

<style lang="scss">
* {
  box-sizing: border-box;
  position: relative;
}
html,
body {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
