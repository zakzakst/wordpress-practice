import vituum from 'vituum'
import nunjucks from '@vituum/vite-plugin-nunjucks'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import { fileURLToPath } from 'url'
import autoprefixer from 'autoprefixer'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  build: {
    rollupOptions: {
      output: {
        entryFileNames: `assets/js/[name].js`,
        chunkFileNames: 'assets/js/[name].js',
        assetFileNames: 'assets/css/[name].[ext]',
        // assetFileNames: (assetInfo) => {
        //   // 現状CSSのみassetsとして利用している（elseは念のため記載）
        //   const cssRegex = new RegExp('.css$', 'i')
        //   if (cssRegex.test(assetInfo.name)) {
        //     return 'assets/css/[name].[ext]'
        //   } else {
        //     return 'assets/js/[name].[ext]'
        //   }
        // },
      },
    },
  },
  plugins: [
    vituum({
      imports: {
        filenamePattern: {
          '+.css': [],
          '+.scss': 'src/styles',
          '+.js': 'src/scripts',
        },
      },
    }),
    nunjucks({
      root: './src',
    }),
    vue(),
  ],
  resolve: {
    alias: {
      '@/': `${__dirname}/src/`,
      '@styles/': `${__dirname}/src/styles/`,
      '@scripts/': `${__dirname}/src/scripts/`,
    },
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer],
    },
  },
}
