<template>
  <section class="message-item-container">
    <div class="user-icon-col">
      <div class="user-icon"></div>
    </div>
    <div class="message-col">
      <div class="message-header">
        <span class="username">Ashley Porciuncula</span>
        <span class="timestamp">11:34 AM</span>
      </div>
      <p class="message">
        Hello everyone! I'm Ashley, co-founder of Orbital. Our virtual offices are a whole new take
        on remote communication. Pop in for meetings, quick chats, open-door office hours, or cowork
        together through the day - all in the same open 24/7 space.
      </p>
      <p>I'm also a developer, parent, foodie, and board + video gamer. Looking forward to getting
      to know the community here!</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ChannelMessage',
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
