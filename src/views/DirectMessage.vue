<template>
  <section class="direct-message-wrapper">
    <DirectMessageHeader userName="Slackbot" />
    <DirectMessageTop userName="Slackbot" />
    <DirectMessageDivider />
    <DirectMessageItem userName="Slackbot" />
    <div class="editor-container">
    <quill-editor
      v-if="state.showEditor"
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
    />
    <button @click="submitMessage">Send</button>
    </div>
  </section>
</template>

<script>
import DirectMessageHeader from '@/components/direct-message/DirectMessageHeader.vue';
import DirectMessageTop from '@/components/direct-message/DirectMessageTop.vue';
import DirectMessageDivider from '@/components/direct-message/DirectMessageDivider.vue';
import DirectMessageItem from '@/components/direct-message/DirectMessageItem.vue';
import { reactive } from '@vue/reactivity';
import { quillEditor } from 'vue3-quill';

export default {
  name: 'DirectMessage',
  components: {
    DirectMessageHeader,
    DirectMessageTop,
    DirectMessageDivider,
    DirectMessageItem,
    quillEditor,
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
  },
};
</script>

<style lang="scss" scoped>

  .direct-message-wrapper {
    display: flex;
    flex-direction: column;
  }

  .editor-container {
    margin: 0 1rem;
  }
</style>
