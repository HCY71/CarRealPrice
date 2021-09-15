<template>
  <div id="newPost">
    <div class="nav-container">
      <Navbar />
    </div>
    <n-layout class="main" has-sider>
      <n-layout-sider :native-scrollbar="false">
        <div class="main-container">
          <div class="username">{{ $store.state.currentUser }}</div>
          <div class="currentTime">
            <span class="date">
              {{ $store.state.currentTime.date }}
            </span>
            <span class="time">
              {{ $store.state.currentTime.time }}
            </span>
          </div>
          <n-divider />
          <div class="content-container">
            <div class="left">
              <div class="brand">
                <div class="title">品牌</div>
                <n-select
                  class="selector"
                  v-model:value="$store.state.newPost.brand"
                  size="small"
                  placeholder="Toyota"
                  :options="$store.getters.brandOptions"
                  @update:value="$store.dispatch('setDefaultModelData')"
                />
                <div class="model">
                  <div class="subtitle">款式</div>
                  <n-select
                    class="selector"
                    v-model:value="$store.state.newPost.model"
                    placeholder="RAV4"
                    size="small"
                    :options="$store.getters.modelOptions"
                  />
                  <n-select
                    class="selector"
                    v-model:value="$store.state.newPost.model"
                    placeholder="2.5 Hybrid旗艦 4WD"
                    size="small"
                    :options="$store.getters.modelOptions"
                  />
                </div>
              </div>
              <div class="menuDate">
                <div class="title">報價日期</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="location">
                <div class="title">詢價地點</div>
                <n-select
                  class="selector"
                  v-model:value="$store.state.newPost.location"
                  size="small"
                  :options="$store.getters.locationOptions"
                />
              </div>
              <div class="menuType">
                <div class="title">菜單類型</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="payMethod">
                <div class="title">付款方式</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
            </div>
            <div class="right">
              <div class="insurance">
                <div class="title">保險</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="fee">
                <div class="title">規費</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="additional">
                <div class="title">自費配件</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="giftFromSales">
                <div class="title">業務贈送</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="price">
                <div class="title">總價</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div>
              <div class="more">
                <div class="title">備註</div>
                <n-select
                  class="selector"
                  :value="value"
                  size="small"
                  :options="options"
                />
              </div> 
            </div>
          </div>
          <n-divider />
          <div class="share">
            <div class="title">詢價/購車心得</div>
            <n-input
              class="words"
              type="textarea"
              maxlength="3000"
              show-count
              placeholder="說點甚麼吧"
              :autosize="{
                minRows: 8,
              }"
            />
          </div>
          <!-- <div class="tags">
            <n-dynamic-tags :value="tags" />
          </div> -->

          <div class="button-container">
            <n-button class="post" type="primary">發布</n-button>
          </div>
        </div>
      </n-layout-sider>
    </n-layout>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Navbar from "@/components/Navbar";
// import store from "../store/store.js";

export default defineComponent({
  setup() {
    return {
    };
  },
  components: {
    Navbar
  },
});
</script>

<style lang="scss">
@use "../assets/css/base";

#newPost {
  .main {
    height: 95vh;
    width: 100vw;
    .n-scrollbar-content {
      display: flex;
      justify-content: center;
    }
    .main-container {
      margin-top: 30px;
      margin-bottom: 50px;
      border-radius: 10px;
      padding: 47px 120px 120px 120px;
      width: base.$gridWidth * 4 + base.$gridSpan * 3;
      border: solid 1px base.$colorDivider;
      .username {
        color: base.$colorFontBlack-2;
        font-size: 14px;
      }
      .currentTime {
        color: base.$colorFontBlack-1;
        font-size: 9px;
        .time {
          margin-left: 5px;
        }
      }
      .n-divider {
        margin: 20px 0px 20px 0px;
      }
      .title {
        color: base.$colorFontBlack-3;
        font-size: 16px;
        margin-top: 15px;
      }
      .subtitle {
        color: base.$colorFontBlack-2;
        font-size: 12px;
        margin-top: 5px;
      }
      .n-select {
        margin-top: 5px;
        font-size: 8px;
      }
      .share {
        .words {
          width: 100%;
          padding: 8px 10px;
          margin-top: 5px;
          font-size: 12px;
          color: base.$colorFontBlack-2;
          ::-webkit-scrollbar {
            display: none;
          }
        }
      }
    }
    .content-container {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      .left {
        width: base.$gridWidth + base.$gridSpan;
      }
      .right {
        width: base.$gridWidth + base.$gridSpan;
      }
    }
    .tags {
      margin-top: 25px;
    }
    .button-container {
      margin-top: 38px;
      width: 100%;
      display: flex;
      justify-content: center;
      .post {
        padding: 5px 30px;
        border-radius: 5px;
      }
    }
  }
}
</style>