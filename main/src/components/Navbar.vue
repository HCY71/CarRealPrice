<template>
  <div class="navbar">
    <router-link to="/About">
      <img src="@/assets/CarRealPrice.svg" alt="" />
    </router-link>
    <n-input type="text" size="small" placeholder="搜尋" />
    <router-link to="/Login">登入/註冊</router-link>
    <n-switch :value="active" />
  </div>
</template>

<script>
import { NInput, NSwitch } from 'naive-ui';

export default {
  components: {
    NInput,
    NSwitch,
  },
};
</script>

<style lang="scss">
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
