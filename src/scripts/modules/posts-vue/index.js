import { createApp } from 'vue'
import PostsVue from './PostsVue.vue'

const postsVueInit = () => {
  const app = createApp(PostsVue)
  app.mount('#js-posts-vue-app')
}

export default postsVueInit
