<template>
  <div id="navbar">
        <router-link to="/About" class="logo">
          <img src="@/assets/CarRealPrice.svg" alt="" />
        </router-link>
        <n-input type="text" size="small" placeholder="搜尋" />
        <n-space class="controls" align="center" justify="end" size="small">
            <n-space align="center" justify="end" size="large">
                <router-link to="/Login">登入/註冊</router-link>
                <n-switch @update:value="$store.state.dark = !$store.state.dark" />
            </n-space>
            <n-divider vertical/> 
            <n-button type="primary" ghost>我要發表</n-button>
        </n-space>
  </div>
</template>

<script>
import { NInput, NSwitch, NButton, NSpace, NDivider } from "naive-ui";

export default {
  components: {
    NInput,
    NSwitch,
    NButton,
    NSpace,
    NDivider
  },
};
</script>

<style lang="scss">
$colorDivider: #e5e5e5;
$colorRegularFont: #4a4a4a;
$colorButton: #18a058;
$pagePadding: 3vw;
$gridWidth: 10vw;
$gridSpan: 1vw;

* {
  position: relative;
}
#navbar,
#navbar * {
  box-sizing: border-box;
  // border: solid 1px;
}
#navbar {
  width: 100%;
  padding: 0 $pagePadding;
  height: 50px;
  border: solid 0.5px $colorDivider;
  display: flex;
  align-items: center;
}
#navbar a.logo {
  display: flex;
  width: fit-content;
  height: 30px;
  margin-left: ($gridWidth+$gridSpan);
}

#navbar .n-input{
  width: ($gridWidth+$gridSpan)*3;
  margin-left: $gridWidth*0.5+$gridSpan;
}

#navbar .n-space.controls{
  position: absolute;
  right: 0;
  margin-right: ($gridWidth+$gridSpan) ;
}

#navbar .n-space a{
  text-decoration: none;
  color: $colorRegularFont;
}

</style>