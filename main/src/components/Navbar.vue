<template>
<<<<<<< HEAD
  <div class="navbar">
    <router-link to="/About">
      <img src="@/assets/CarRealPrice.svg" alt="" />
    </router-link>
    <n-input type="text" size="small" placeholder="搜尋" />
    <router-link to="/Login">登入/註冊</router-link>
    <n-switch :value="active" />
=======
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
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2
  </div>
</template>

<script>
<<<<<<< HEAD
import { NInput, NSwitch } from 'naive-ui';
=======
import { NInput, NSwitch, NButton, NSpace, NDivider } from "naive-ui";
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2

export default {
  components: {
    NInput,
    NSwitch,
<<<<<<< HEAD
=======
    NButton,
    NSpace,
    NDivider
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2
  },
};
</script>

<style lang="scss">
<<<<<<< HEAD
$colorDivider: #e5e5e5;
$colorButton: #18a058;

.navbar,
.navbar * {
  border: solid 1px black;
}
.navbar {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: solid 0.5px $colorDivider;
}
.navbar .n-input {
  width: 500px;
}
</style>
=======

@use "../assets/css/base";


#navbar,
#navbar * {
  box-sizing: border-box;
}
#navbar {
  width: 100%;
  padding: 0 base.$pagePadding;
  height: 50px;
  border: solid 0.5px base.$colorDivider;
  display: flex;
  align-items: center;
}
#navbar a.logo {
  display: flex;
  width: fit-content;
  margin-left: (base.$gridWidth+base.$gridSpan);
  img{
    width: base.$gridWidth;
  }
}

#navbar .n-input{
  width: (base.$gridWidth+base.$gridSpan)*3;
  margin-left: base.$gridWidth*0.5+base.$gridSpan;
}

#navbar .n-space.controls{
  position: absolute;
  right: 0;
  margin-right: (base.$gridWidth+base.$gridSpan) ;
}

#navbar .n-space a{
  text-decoration: none;
  color: base.$colorFontBlack-2;
}

</style>
>>>>>>> 75e9926086ec47d3b39df81496108009c74c96d2
