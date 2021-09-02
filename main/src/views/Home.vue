<template>
  <div class="home">
    <Navbar/>
    <!-- <HelloWorld/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbar'

export default {
  name: 'Home',
  components: {
    // HelloWorld,
    Navbar
  }
}
</script>
