<template>
  <section class="channel-wrapper">
    <ChannelHeader />
    <div class="messages-container">
      <ChannelMessage v-for="post in posts" :key="post.id" :postData="post" />
      <Editor />
      <div id="bottom"></div>
    </div>
  </section>
</template>

<script>
import ChannelHeader from '@/components/channel/ChannelHeader.vue';
import ChannelMessage from '@/components/channel/ChannelMessage.vue';
import Editor from '@/components/general/Editor.vue';
import store from '@/store';

export default {
  name: 'Channel',
  components: {
    ChannelHeader,
    ChannelMessage,
    Editor,
  },
  computed: {
    posts() {
      return this.getPosts('intro');
    },
  },
  methods: {
    getPosts(title) {
      const posts = store.state.channels.filter((c) => c.title === title)[0];
      return posts.posts;
    },
    scrollToElement() {
      const el = this.$el.querySelector('#bottom');
      el.scrollIntoView({ behavior: 'smooth' });
    },
  },
  mounted() {
    this.scrollToElement();
  },
};
</script>

<style lang="scss" scoped>
.messages-container {
  padding: 9rem 0 4.5rem 0;
}
</style>
