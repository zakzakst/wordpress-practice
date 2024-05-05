import { createApp } from 'vue'
import PostsVue from './PostsVue.vue'

const postsVueInit = () => {
  console.log('posts-vue')
  const app = createApp(PostsVue)
  app.mount('#js-posts-vue-app')
}

export default postsVueInit
