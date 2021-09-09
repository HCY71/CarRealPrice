<template>
  <div class="buttons">
    <n-space>
      <n-button>Default</n-button>
      <n-button type="primary">Primary</n-button>
      <n-button type="info">Info</n-button>
      <n-button type="success">Success</n-button>
      <n-button type="warning">Warning</n-button>
      <n-button type="error">Error</n-button>
    </n-space>
  </div>
</template>

<script>
import { NButton, NSpace } from 'naive-ui';

export default {
  components: {
    NButton,
    NSpace,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
