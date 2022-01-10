<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <div class="layout">
    <Topbar class="topbar" />
    <Sidebar class="sidebar" />
    <router-view class="content" />
  </div>
</template>

<script>
import Topbar from '@/components/Topbar.vue';
import Sidebar from '@/components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Topbar,
    Sidebar,
  },
};
</script>

<style lang="scss">
.layout {
  display: grid;
  grid-template-rows: auto 1fr;
  grid-template-columns: auto 1fr;
  grid-template-areas:
  'topbar topbar'
  'sidebar content';
}

.topbar {
  grid-area: topbar;
}

.sidebar {
  grid-area: sidebar;
}

.content {
  grid-area: content;
}
</style>
