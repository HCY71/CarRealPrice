<template>
  <div id="navbar">
    <router-link to="/" class="logo">
      <img src="@/assets/CarRealPrice.svg" alt="" />
    </router-link>
    <n-input type="text" size="small" placeholder="搜尋" />
    <n-space class="controls" align="center" justify="end" size="small">
      <n-space align="center" justify="end" size="large">
        <router-link class="login" to="/Login">登入/註冊</router-link>
        <n-switch @update:value="$store.state.dark = !$store.state.dark" />
      </n-space>
      <n-divider vertical />
      <n-button type="primary" ghost>
        <router-link class="newPost" to="/newPost"> 我要發表 </router-link>
      </n-button>
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
    NDivider,
  },
};
</script>

<style lang="scss">
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
  margin-left: (base.$gridWidth + base.$gridSpan);
  img {
    width: base.$gridWidth;
  }
}
#navbar .newPost{
  color: base.$colorFontButton;
  text-decoration: none;
}

#navbar .n-input {
  width: (base.$gridWidth + base.$gridSpan) * 3;
  margin-left: base.$gridWidth * 0.5 + base.$gridSpan;
}

#navbar .n-space.controls {
  position: absolute;
  right: 0;
  margin-right: (base.$gridWidth + base.$gridSpan);
}

#navbar .n-space a.login {
  text-decoration: none;
  color: base.$colorFontBlack-2;
}
</style>