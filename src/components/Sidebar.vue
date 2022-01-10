<template>
  <aside class="sidebar-container">
<div class="sidebar-fixed">
    <div class="sidebar-channel-header">
      <h1>iOS Developers</h1>
      <div class="new-message-icon"></div>
    </div>

    <div class="sidebar-channel-body">
      <ul>
        <li class="sidebar-list-item">Threads</li>
        <li class="sidebar-list-item">Slack Connect</li>
        <li class="sidebar-list-item">More</li>

        <li class="sidebar-list-item">
          Channels
          <ul class="channel-list">
            <li class="channel-list-item"># announcements</li>
            <li class="channel-list-item"># help</li>
            <li class="channel-list-item"># intro</li>
            <li class="channel-list-item"># meta</li>
            <li class="channel-list-item"># share</li>
            <li class="channel-list-item"># swift-lang</li>
            <button class="add-channels-btn" type="button">Add channels</button>
          </ul>
        </li>

        <li class="sidebar-list-item">
          Direct messages
          <ul class="direct-messages-list">
            <li class="message-list-item">Slackbot</li>
            <li class="message-list-item">David Beer <span class="user-tag">you</span></li>
            <button type="button">Add teammates</button>
          </ul>
        </li>
      </ul>
    </div>
    </div>
  </aside>
</template>

<script>
export default {
  name: 'Sidebar',
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

button {
  background-color: $light-purple;
  color: $bright-purple;
  border: none;
}

.sidebar-container {
  width: 260px;
  min-height: 100vh;
  height: 100%;
  background-color: $purple;
  padding: 0 1rem;
  padding-top: 34px;
  color: $white;
}

.sidebar-fixed {
  width: 100%;
  position: fixed;
}

.sidebar-container li {
  color: $bright-purple;
}

.sidebar-channel-header {
  padding: .5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid $purple-border;
}

.sidebar-channel-header h1 {
  font-size: 1.188rem;
}

.sidebar-channel-header .new-message-icon {
  background-color: $white;
  width: 35px;
  height: 35px;
  border-radius: 100%;
}

.sidebar-channel-body {
  padding: .5rem 0;
}

.sidebar-channel-body ul {
  list-style: none;
}

.sidebar-list-item {
  margin-bottom: 1rem;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: -4%;
}

.channel-list,
.direct-messages-list {
  padding-left: 1rem;
  margin-top: 1rem;
  list-style: none;
}

li.channel-list-item {
  margin-bottom: 1rem;
  font-weight: 700;
  color: $white;
}

.message-list-item {
  margin-bottom: 1rem;
}

.user-tag {
  font-size: .75rem
}
</style>
