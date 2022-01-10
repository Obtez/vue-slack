<template>
  <section class="direct-message-wrapper">
    <DirectMessageHeader userName="Slackbot" />
    <DirectMessageTop userName="Slackbot" />
    <DirectMessageDivider />
    <DirectMessageItem userName="Slackbot" />
  </section>
</template>

<script>
import DirectMessageHeader from '@/components/direct-message/DirectMessageHeader.vue';
import DirectMessageTop from '@/components/direct-message/DirectMessageTop.vue';
import DirectMessageDivider from '@/components/direct-message/DirectMessageDivider.vue';
import DirectMessageItem from '@/components/direct-message/DirectMessageItem.vue';

export default {
  name: 'DirectMessage',
  components: {
    DirectMessageHeader,
    DirectMessageTop,
    DirectMessageDivider,
    DirectMessageItem,
  },
};
</script>

<style lang="scss" scoped>
  .direct-message-wrapper {
    display: flex;
    flex-direction: column;
  }
</style>
