<template>
  <div class="banner">
    <span>{{ pins }}</span>
    <span v-show="canBookmark">+ Add a bookmark</span>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['pinData', 'bookmark'],
  data() {
    return {
      pins: `${this.pinData} pinned` || '',
      canBookmark: this.bookmark,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.banner {
  width: 100%;
  padding: 12px 19px 14px 19px;
  border-bottom: 1px solid $banner-border-dark;
  box-shadow: 0 1px 8px hsla(0, 0%, 83%, 0.8);
  display: flex;
  align-items: center;
  gap: 14px;
  color: $gray;
}
</style>
