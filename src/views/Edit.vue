<template>
  <div class="zx-edit">
    <header class="header">
      <div class="flex-1"></div>
      <button class="btn" @click="saveArticle">保存编辑</button>
      <button class="btn" @click="$router.push('home')">退出编辑</button>
    </header>
    <article class="content">
      <Markdown v-model="text"></Markdown>
    </article>
  </div>
</template>

<script>
import Markdown from '../components/markdown';
export default {
  components: {
    Markdown,
  },
  data() {
    return {
      text: '',
    }
  },
  methods: {
    saveArticle() {

    },
  },
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100%;
  height: 45px;
  background-color: #ccc;

}
</style>
