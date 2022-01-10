<template>
  <div class="editor-container">
    <quillEditor
      v-if="state.showEditor"
      v-model:value="state.content"
      :options="state.editorOption"
      :disabled="state.disabled"
    />
    <div class="btn-container">
      <button @click="submitMessage"><i class="fas fa-paper-plane"></i></button>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity';
import { quillEditor } from 'vue3-quill';
import store from '@/store';

export default {
  name: 'Editor',
  components: {
    quillEditor,
  },
  setup() {
    const state = reactive({
      curTheme: 'snow',
      showEditor: 'true',
      content: '',
      editorOption: {
        placeholder: 'Write your message here...',
        modules: {
          toolbar: [
            ['bold', 'italic', 'strike'],
            ['code-block'],
            ['link'],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ indent: '-1' }, { indent: '+1' }],
          ],
        },
      },
      disabled: false,
    });
    return { state };
  },
  methods: {
    submitMessage() {
      const message = this.state.content;
      const postData = {
        channel: 'intro',
        post: message,
        user: 'Da Hedgey',
        timestamp: '13:55 PM',
      };
      store.commit('addChannelPost', postData);
      this.state.content = '';
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';

.editor-container {
  margin: 0 1rem;
  margin-top: 3rem;
  margin-bottom: 3rem;
  height: 100px;
}

.btn-container {
  border: 1px solid #ccc;
  background-color: $bg-light;
  border-top: none;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
}

.btn-container button {
  width: auto;
  display: block;
  margin-left: auto;
  padding: .5rem 1.5rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: $gray;
  border-bottom-right-radius: 8px;

  &:hover {
    background-color: $gray;
    color: $white;
  }
}

</style>
