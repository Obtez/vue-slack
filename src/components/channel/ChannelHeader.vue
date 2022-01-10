<template>
  <header class="channel-header-container">
    <div class="header-top">
      <h1># intro</h1>
      <p>
        Welcome! We are happy to have you. Please be kind.
        Our code of conduct is available here: http//ios-developers.io/coc
        </p>
    </div>
      <Banner pinData="4" bookmark="true" />
  </header>
</template>

<script>
import Banner from '@/components/general/Banner.vue';

export default {
  name: 'ChannelHeader',
  components: {
    Banner,
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.channel-header-container {
  position: fixed;
  z-index: 2;
  background-color: $white;
  width: 100%;
  top: 34px;
  height: auto;
  display: flex;
  flex-direction: column;
}

.header-top {
  padding: 18px 20px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.header-top > h1 {
  font-size: 18px;
  color: $dark;
}

.header-top > p {
  font-size: 13px;
  color: $gray;
}
</style>
