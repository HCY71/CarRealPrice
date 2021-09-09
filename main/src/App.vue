<template>
  <n-config-provider :theme="theme">
    <router-view />
  </n-config-provider>
</template>

<<<<<<< HEAD
<style></style>
=======
<script>
import{darkTheme, NConfigProvider} from 'naive-ui'
import store from './store/store.js';
import {mapState, mapMutations, mapActions} from 'vuex'

export default {
  setup() {
    return{
      theme: store.state.dark ? darkTheme : null
    }
  },
  components:{
    NConfigProvider
  },
  computed:{
    ...mapState(['carModel'])
  },
  methods:{
    ...mapMutations(['setCarModels','setPostDatas']),
    ...mapActions(['loadCarModelDatas','loadPostDatas'])
  },
  created(){
    this.loadCarModelDatas();
    this.loadPostDatas();
  }
}
</script>


<style lang="scss">

*{
  box-sizing: border-box;
  position: relative;
}
html, body{
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2
