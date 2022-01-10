<template>
  <header>
    <div class="user-banner">
      <span>{{ username }}</span>
    </div>
    <div class="bookmark-banner">
      <span>+ Add a bookmark</span>
    </div>
  </header>
</template>

<script>
export default {
  name: 'DirectMessageHeader',
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
    padding: 12px 19px;
    /* border-bottom: 1px solid $banner-border; */
  }

  .bookmark-banner {
    padding: 12px 19px 14px 19px;
    border-bottom: 1px solid $banner-border-dark;
    box-shadow: 0 1px 8px hsla(0, 0%, 83%, 0.8);
  }
</style>
