<template>
  <main class="body-container">
    <h1>Hi, {{userData.name}} here!</h1>
    <div class="message-body">
      <div class="user-avatar-col">
        <div class="user-avatar"></div>
      </div>
      <div class="message-col">
        <p v-for="message in topMessage" :key="message">
          {{message}}
        </p>
      </div>
    </div>

  </main>
</template>

<script>
import store from '@/store';

export default {
  name: 'DirectMessageBody',
  props: ['userName'],
  data() {
    return {
      userData: this.getUserData(this.userName),
      topMessage: this.getTopMessage(),
      count: 1,
    };
  },
  methods: {
    getTopMessage() {
      const user = this.getUserData(this.userName);
      const messages = user['direct-messages'];
      const topMessage = messages.filter((m) => m.type === 'top')[0];
      return topMessage.body;
    },
    getUserData(username) {
      const user = store.state.users.filter((u) => u.name === username)[0];
      return user;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.body-container {
  padding: 60px 20px 18px 20px;
  color: $dark;
}

.body-container h1 {
  margin-bottom: 20px;
  font-size: 28px;
}

.message-body {
  display: flex;
}
.user-avatar-col {
  flex-basis: 80px;
  height: 100%;
}

.user-avatar {
  width: 48px;
  height: 48px;
  background-color: #333;
  border-radius: 8px;
}

.message-col {
  flex-basis: 100%;
  height: 100%;
}

.message-col p {
  margin-bottom: 29px;
  font-size: 18px;
}

.message-col a {
  text-decoration: none;
  color: blue;
}
</style>
