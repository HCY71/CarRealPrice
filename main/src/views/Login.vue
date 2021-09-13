<template>
  <div id="login" class="flexCenter">
    <div class="navbar">
      <router-link to="/" class="logo">
        <img src="@/assets/CarRealPrice.svg" alt="" />
      </router-link>
      <n-space class="modeController" align="center" justify="end" size="large">
        <div class="darkMode">深色模式</div>
        <n-switch @update:value="$store.state.dark = !$store.state.dark" />
      </n-space>
    </div>
    <div class="menu flexCenter">
        <div class="title">
            一機在手 登入自由
        </div>
        <n-input class="phone" placeholder="手機號碼">
        </n-input>
        <div class="otp">
            <n-input class="check" placeholder="驗證碼"></n-input>
            <n-button class="send" type="primary" ghost>發送驗證碼</n-button>
        </div>
        <div class="contract">
            我同意
            <a href="">服務條款</a>
            、
            <a href="">免責聲明</a>
            及
            <a href="">隱私權聲明</a>
            等內容
        </div>
        <n-button type="primary" class="enter">註冊/登入</n-button>
    </div>
    <router-link to="/" class="goHome">前往討論區</router-link>
  </div>
</template>

<script>
import {NInput, NSwitch, NSpace,NButton } from "naive-ui";

export default {
  components: {
    NSwitch,
    NSpace,
    NButton,
    NInput
  },
};
</script>

<style lang="scss">
@use "../assets/css/base";

#login .navbar {
  width: 100%;
  padding: 0 base.$pagePadding;
  height: 50px;
  border: solid 0.5px base.$colorDivider;
  display: flex;
  align-items: center;
  justify-content: center;
  .darkMode{
      color: base.$colorFontBlack-2;
  }
}

#login .navbar .modeController {
  position: absolute;
  right: base.$gridWidth + base.$pagePadding + base.$gridSpan;
}

#login{
    flex-direction: column;
    .menu{
        border: base.$colorDivider 1px solid;
        padding: 36px 50px 62px 50px;
        flex-direction: column;
        margin-top: calc(100vh / 8);
        border-radius: 12px;
        .title{
            font-size: 24px;
            color: base.$colorFontBlack-3;
        }
        .phone{
            margin-top: 36px;
        }
        .otp{
            margin-top: 15px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .check{
                margin-right: 32px;
            }
        }
        .contract{
            margin-top: 32px;
        }
        .enter{
            width: 100%;
            margin-top: 48px;
            padding: 18px;
            border-radius: 5px;
        }
    }
    .goHome{
        margin-top: calc(100vh / 16);
        text-decoration: none;
        color: base.$colorFontBlack-2;
        &:after{
            content: "";
            border: solid 2px transparent;
            position: absolute;
            width: 100%;
            height: 100%;
            left: -2px;
            top: -3px;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform base.$transition/2 ease-out;
            border-bottom-color: base.$colorHoverFont;
        }
        &:hover::after{
            transform: scaleX(1);
            transform-origin: left;
        }
    }
}

</style>