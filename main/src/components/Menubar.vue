<template>
  <div id="menubar">
    <n-layout has-sider content-style="max-height: 100vh">
      <n-layout-sider :native-scrollbar="false" bordered>
        <ul>
          <div class="title">{{ $store.state.carModel.brand }}</div>
          <li
            v-for="model in $store.state.carModel.models"
            :key="model"
            :class="{ active: model == 'RAV4' }"
          >
            {{ model }}
          </li>
        </ul>
        <ul>
          <div class="title">{{ $store.state.carModel.brand }}</div>
          <li v-for="model in $store.state.carModel.models" :key="model">
            {{ model }}
          </li>
        </ul>
        <ul>
          <div class="title">{{ $store.state.carModel.brand }}</div>
          <li v-for="model in $store.state.carModel.models" :key="model">
            {{ model }}
          </li>
        </ul>
        <ul>
          <div class="title">{{ $store.state.carModel.brand }}</div>
          <li v-for="model in $store.state.carModel.models" :key="model">
            {{ model }}
          </li>
        </ul>
      </n-layout-sider>
    </n-layout>
  </div>
</template>

<script>
import { NLayout, NLayoutSider } from "naive-ui";

export default {
  components: {
    NLayout,
    NLayoutSider,
  }
};
</script>

<style lang="scss">

@use "../assets/css/base";

$colorDivider: #e5e5e5;
$colorRegularFont: #4a4a4a;
$colorFadedFont: #c4c4c4;
$colorButton: #18a058;
$colorHoverFont: #18a058;
$colorHoverBg: #e5f5ee;
$pagePadding: 3vw;
$gridWidth: 10vw;
$gridSpan: 1vw;

#menubar,
#menubar * {
  position: relative;
  border: 1px solid base.$colorOrange;
}
#menubar {
  // padding-right: $gridSpan;
  // padding-left: $pagePadding;
  // border-right: 0.5px solid $colorDivider;
  // width: fit-content;
  // max-height: 100vh;
  // overflow-y: scroll;
}
// #menubar ul .title {
//   font-size: 18px;
//   color: $colorFadedFont;
// }
// #menubar ul {
//   width: $gridWidth;
//   color: $colorRegularFont;
//   // margin-left: $gridWidth + $gridSpan;
//   padding: 0;
// }

// #menubar li {
//   list-style: none;
//   padding: 10px;
//   padding-left: 22px;
//   margin-top: 4px;
//   transition: 0.5s;
//   cursor: pointer;
//   border-radius: 3px;
// }
#menubar li:hover {
  color: $colorHoverFont;
  background-color: $colorHoverBg;
}
#menubar li.active {
  color: $colorHoverFont;
  background-color: $colorHoverBg;
}
</style>