<template>
  <div class="banner">
    <span v-show="pins">{{ pins }}</span>
    <span v-show="canBookmark">+ Add a bookmark</span>
  </div>
</template>

<script>
export default {
  name: 'Banner',
  props: ['pinData', 'bookmark'],
  data() {
    return {
      pins: this.validatePins(),
      canBookmark: this.bookmark,
    };
  },
  methods: {
    validatePins() {
      console.log(this.pinData);
      if (this.pinData === false) {
        return false;
      }
      if (this.pinData === 1) {
        return `${this.pinData} pin`;
      }
      return `${this.pinData} pins`;
    },
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
