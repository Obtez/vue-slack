<template>
  <section class="direct-message-wrapper">
    <DirectMessageHeader userName="Slackbot" />
    <DirectMessageTop userName="Slackbot" />
    <DirectMessageDivider />
    <DirectMessageItem userName="Slackbot" />
    <Editor />
    <div id="bottom"></div>
  </section>
</template>

<script>
import DirectMessageHeader from '@/components/direct-message/DirectMessageHeader.vue';
import DirectMessageTop from '@/components/direct-message/DirectMessageTop.vue';
import DirectMessageDivider from '@/components/direct-message/DirectMessageDivider.vue';
import DirectMessageItem from '@/components/direct-message/DirectMessageItem.vue';
import { reactive } from '@vue/reactivity';
// import { quillEditor } from 'vue3-quill';
import Editor from '@/components/general/Editor.vue';

export default {
  name: 'DirectMessage',
  components: {
    DirectMessageHeader,
    DirectMessageTop,
    DirectMessageDivider,
    DirectMessageItem,
    // quillEditor,
    Editor,
  },
  setup() {
    const state = reactive({
      curTheme: 'snow',
      showEditor: 'true',
      content: '<p>Write your message here...</p>',
      editorOption: {
        placeholder: 'core',
        modules: {},
      },
      disabled: false,
    });
    return { state };
  },
  methods: {
    submitMessage() {
      const message = this.state.content;
      console.log(message);
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

  .direct-message-wrapper {
    display: flex;
    flex-direction: column;
    padding-bottom: 6rem;
  }
</style>
