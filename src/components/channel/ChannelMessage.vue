<template>
  <section class="message-item-container">
    <div class="user-icon-col">
      <div class="user-icon"></div>
    </div>
    <div class="message-col">
      <div class="message-header">
        <span class="username">{{username}}</span>
        <span class="timestamp">{{ timestamp }}</span>
      </div>
      <p class="message">
        <span v-html="body" />
      </p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChannelMessage',
  props: ['postData'],
  data() {
    return {
      username: this.postData.user,
      timestamp: this.postData.timestamp,
      body: this.postData.body,
    };
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.message-item-container {
  color: $dark;
  display: flex;
  padding: 0 1.25rem;
  margin-top: 14px;
}

.user-icon-col {
  flex-basis: 45px;
  height: 100%;
}

.user-icon {
  width: 36px;
  height: 36px;
  background-color: #333;
  border-radius: .5rem;
}

.message-col {
  flex-basis: 100%;
}

.message-header {
  margin-bottom: .625rem;
}

span.username {
  font-size: 0.938rem;
  font-weight: 700;
  margin-right: .5rem;
}

span.timestamp {
  font-size: .75rem;
  color: $gray;
}

p.message {
  margin-bottom: .5rem;
}
</style>
