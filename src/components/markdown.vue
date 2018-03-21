<template>
  <div class="markdown">
    <div class="title">
      <h4>标题：</h4>
      <input type="text" v-model="title">
    </div>
    <div class="toolbar">
      <span @click="append('h1')">h1</span>&nbsp;
      <span @click="append('h2')">h2</span>&nbsp;
      <span @click="append('h3')">h3</span>&nbsp;
      <span @click="append('h4')">h4</span>&nbsp;
      <span @click="append('h5')">h5</span>&nbsp;

      <div class="flex-1"></div>
      <div @click="show_preview = !show_preview">预览</div>
    </div>
    <div class="content">
      <keep-alive>
        <div class="markdown-body preview" v-html="md.render(text)" v-if="show_preview"></div>
        <textarea ref="textarea" v-model="text" rows="20" v-else></textarea>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import MarkdownIt from 'markdown-it';

export default {
  data() {
    return {
      title: '',
      show_preview: false,
      md: new MarkdownIt(),
    }
  },
  props: [ 'value' ],
  computed: {
    text: {
      get() {
        return this.value
      },
      set(val) {
        this.$emit('input', val)
      },
    },
  },
  methods: {
    append(option) {
      const sign = (() => {
        const result = {}
        for (let i = 1; i <= 6; i += 1) {
          result[`h${i}`] = (() => {
            let label = ''
            for (let n = 0; n < i; n += 1) {
              label += '#'
            }
            return `
` + label + ' '
          })(i)
        }
        return result
      })()
      this.text = this.text + sign[option]
      this.$refs.textarea.focus()
    },
  },
}
</script>

<style lang="less" scoped>
.markdown {
  width: 100%;
  // min-height: 200px;
  .title {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 32px;

    margin:2px 0;
    h4 {
      margin: 0;
      padding: 0;
    }
    input {
      flex: 1;
      border: 0;
      height: inherit;
      font-size: 18px;
      font-weight: 500;
    }
  }
  .toolbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    width: 100%;
    border-top: 1px solid #ccc;
  }

  .content {
    display: flex;
    flex-direction: row;

    textarea {
      flex: 1;
      border: 0;
      margin: 0;
      background-color: #f4f5f3;
      resize: none;
    }
    .preview {
      flex: 1;
      background-color: #fdfdfd;
      padding: 20px;
    }
  }
}
</style>
