import { createApp } from 'vue'
// import Sample from './sample'
import SampleComponent from './SampleComponent.vue'

const vueSampleInit = () => {
  const app = createApp(SampleComponent)
  // const app = createApp({
  //   data() {
  //     return {
  //       message: 'Hello Vue!',
  //     }
  //   },
  //   template: `
  //     <div id="rendered">{{ message }}</div>
  //   `,
  // })
  // console.log(app)
  app.mount('#app')
}

export default vueSampleInit
