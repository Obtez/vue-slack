<template>
  <section class="message-item-container">
    <div class="user-icon-col">
      <div class="user-icon"></div>
    </div>
    <div class="message-col">
        <div class="message-header">
          <span class="username">{{userData.name}}</span>
          <span class="timestamp">{{messageData.time}}</span>
        </div>
        <p class="message" v-for="message in messageData.body" :key="message">
          {{ message }}
        </p>
        <span v-for="channel in messageData.channels" :key="channel.name">
          <ChannelLink :titleData="channel.title" :memberCountData="channel.members"
          :descriptionData="channel.description" />
        </span>
    </div>
  </section>
</template>

<script>
import ChannelLink from '@/components/message-components/ChannelLink.vue';
import store from '@/store';

export default {
  name: 'DirectMessageItem',
  props: ['userName'],
  components: {
    ChannelLink,
  },
  data() {
    return {
      userData: this.getUserData(this.userName),
      messageData: this.getMessageData(),
    };
  },
  methods: {
    getUserData(username) {
      const user = store.state.users.filter((u) => u.name === username)[0];
      return user;
    },
    getMessageData() {
      const user = this.getUserData(this.userName);
      const allMessages = user['direct-messages'];
      const messages = allMessages.filter((m) => m.type === 'message')[0];
      return {
        date: messages.date,
        time: messages.time,
        body: messages.body,
        channels: messages.channelLinks,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.message-item-container {
  color: $dark;
  display: flex;
  padding: 0 20px;
}

.user-icon-col {
  flex-basis: 45px;
  height: 100%;
}

.user-icon {
  width: 36px;
  height: 36px;
  background-color: #333;
  border-radius: 8px;
}

.message-col {
  flex-basis: 100%;
}

.message-header {
  margin-bottom: 10px;
}

span.username {
  font-size: 15px;
  font-weight: 700;
  margin-right: .5rem;
}

span.timestamp {
  font-size: 12px;
  color: $gray;
}

p.message {
  margin-bottom: .5rem;
}
</style>
