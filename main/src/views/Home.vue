<template>
  <div id="home">
    <div class="nav-container">
      <Navbar />
    </div>
    <div class="wrapper">
      <div class="menu-container">
        <Menubar />
      </div>
      <n-layout
        class="content-container"
        has-sider
        content-style="max-height: 95vh"
      >
        <n-layout-sider :native-scrollbar="false" content-style="width: 100%">
          <Cards />
        </n-layout-sider>
      </n-layout>
    </div>
  </div>
</template>ㄒ

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent } from "vue";
import { NLayout, NLayoutSider } from "naive-ui";
import Navbar from "@/components/Navbar";
import Menubar from "@/components/Menubar";
import Cards from "@/components/Cards";

export default defineComponent({
  setup() {
    return {};
  },
  name: "Home",
  components: {
    Navbar,
    Menubar,
    Cards,
    NLayout,
    NLayoutSider,
  },
});
</script>

<style lang="scss">
@use "../assets/css/base";

#home {
  .content-container {
    flex-grow: 1;
  }
  .menu-container {
    width: (base.$gridWidth + base.$gridSpan) * 2 + base.$pagePadding +
      base.$gridSpan;
    display: flex;
    justify-content: flex-end;
  }
  .wrapper {
    display: flex;
  }
}
</style>