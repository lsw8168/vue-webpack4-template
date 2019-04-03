<template>
  <div class="container center-content">
    <router-link to="/">Home</router-link>
    <router-view />
    <div id="Btn">
      <div v-if="hasResult">
        <div
          v-for="post in posts"
          :key="post.id"
        >
          <h1>{{ post.title }}</h1>
          <p>{{ post.body }}</p>
        </div>
      </div>
      <button
        v-else
        @click="searchBtn"
      >글 불러오기</button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Btn',
  data: function () {
    return {
      posts: []
    }
  },
  computed: {
    hasResult: function () {
      return this.posts.length > 0
    }
  },
  methods: {
    searchBtn: function () {
      const baseURI = 'https://jsonplaceholder.typicode.com'
      this.$http.get(`${baseURI}/posts`).then((result) => {
        console.log(result)
        this.posts = result.data
      }).catch((ex) => {
        console.log('ERR', ex)
      })
    }
  }
}

</script>

<style scoped>
.container {
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  max-width: 1200px;
}
</style>
