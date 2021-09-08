<template>
  <div id="menubar">
    <n-layout has-sider content-style="max-height: 95vh">
      <n-layout-sider :native-scrollbar="false" bordered >
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
  },
};
</script>

<style lang="scss">
@use "../assets/css/base";

#menubar{
  .n-scrollbar-content{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
}
#menubar ul {
  color: base.$colorFontBlack-2;
  padding: 0;
  padding-right: base.$gridSpan+base.$gridSpan;
  width: fit-content;
  .title {
    font-size: 18px;
    color: base.$colorFadedFont;
  }
  li {
    list-style: none;
    padding: 10px 0;
    padding-left: 22px;
    margin-top: 4px;
    transition: 0.5s;
    cursor: pointer;
    border-radius: 3px;
    width: base.$gridWidth;
  }
}

#menubar li:hover {
  color: base.$colorHoverFont;
  background-color: base.$colorHoverBg;
}
#menubar li.active {
  color: base.$colorHoverFont;
  background-color: base.$colorHoverBg;
}
</style>