<template>
  <header>
    <div class="user-banner">
      <span>{{ username }}</span>
    </div>
    <div class="message-header-container">
      <Banner :pinData="false" :bookmark="true" />
    </div>
  </header>
</template>

<script>
import Banner from '@/components/general/Banner.vue';

export default {
  name: 'DirectMessageHeader',
  components: {
    Banner,
  },
  props: ['userName'],
  data() {
    return {
      username: this.userName,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

  .user-banner {
    margin-top: 40px;
    padding: 12px 19px;
  }

  .message-header-container {

  }
</style>
