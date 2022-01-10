<template>
  <div class="divider">
    <hr />
    <span>June 9th, 2021</span>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'DirectMessageDivider',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.divider {
  margin: 14px 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  align-items: center;
}

.divider hr {
  flex-grow: 1;
  border: none;
  border-bottom: 1px solid $banner-border-dark;
}

.divider span {
  padding: .5rem 1rem;
  border-radius: 24px;
  flex-basis: auto;
  border: 1px solid $banner-border-dark;
  font-size: 13px;
  font-weight: 700;
  color: $dark;
}
</style>
