<template>
  <div id="home">
    <Navbar class="fixedTop"/>
    <Menubar/>
    <Cards/>
    <div>This is a book</div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent } from 'vue';



import Navbar from '@/components/Navbar'
import Menubar from '@/components/Menubar'
import Cards from '@/components/Cards'

export default defineComponent({
  setup(){
    return {
          
    }
  },
  name: 'Home',
  components: {
    Navbar,
    Menubar,
    Cards,
  }
});

</script>

<style lang="scss">

$pagePadding: 3vw;



// #home{
//   padding: 50px 0 0 0;
//   display: flex;
// }
// .fixedTop{
//   position: fixed;
//   top: 0;
// }

</style>