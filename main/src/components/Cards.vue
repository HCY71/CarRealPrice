<template>
  <div id="cards">
    <div class="card" v-for="post in $store.state.posts" :key="post">
      <div class="header">
        {{ post.author }} | {{ post.menu.location }} | {{ post.menu.car.brand }}
        <div class="date">{{ post.postTime.date }}</div>
      </div>
      <div class="title">
        {{ post.menu.car.year }} {{ post.menu.car.brand }}
        {{ post.menu.car.model }} {{ post.menu.car.type }}
      </div>
      <div class="content">{{ post.share.substring(0, 50) }}...</div>
      <div class="functions">
        <div class="like flexCenter">
          <n-icon size="15">
            <like-outlined />
          </n-icon>
          {{ post.likes }}
        </div>
        <div class="comments flexCenter">
          <n-icon size="15">
            <comment-16-regular />
          </n-icon>
          {{ post.comments.length }}
        </div>
        <div class="share flexCenter">
          <n-icon size="15">
            <share />
          </n-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NIcon } from 'naive-ui';
import { LikeOutlined } from '@vicons/antd';
import { Comment16Regular } from '@vicons/fluent';
import { Share } from '@vicons/carbon';

export default {
  components: {
    NIcon,
    LikeOutlined,
    Comment16Regular,
    Share,
  },
};
</script>

<style lang="scss">
@use "../assets/css/base";

#cards {
  padding-top: 25px;
  padding-bottom: 45px;
  padding-left: base.$gridWidth * 0.5 + base.$gridSpan;
  border: solid base.$colorDivider 1px;
  width: base.$gridWidth * 4.5 + base.$gridSpan * 4;
  margin-left: base.$gridWidth * 0.5;
  margin-top: 45px;
  .card {
    width: base.$gridWidth * 3.5 + base.$gridSpan * 3;
    border: solid base.$colorDivider 1px;
    padding: 12px base.$gridWidth * 0.5 + base.$gridSpan 8px 16px;
    display: flex;
    flex-direction: column;
    margin-top: base.$gridSpan;
    border-radius: 5px;
    transition: base.$transition;
    .header {
      font-size: 14px;
      color: base.$colorFontBlack-2;
      display: flex;
      .date {
        margin-left: 10px;
        font-size: 9px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        color: base.$colorFontBlack-1;
      }
    }
    .title {
      font-size: 18px;
      margin-top: 8px;
      color: base.$colorFontBlack-3;
    }
    .content {
      margin-top: 3px;
      font-size: 9px;
      color: base.$colorFontBlack-2;
    }
    .functions {
      display: flex;
      margin-top: 9px;
      width: 108px;
      justify-content: space-between;
      color: base.$colorFontBlack-1;
      .n-icon {
        cursor: pointer;
        color: base.$colorFontBlack-2;
        margin-right: 1px;
      }
    }
  }
  .card:hover {
    box-shadow: -2px 3px 10px 1px rgba(black, 0.15);
    transform: translate(2px, -3px);
    cursor: pointer;
  }
}
</style>
