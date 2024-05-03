import path from 'path'
import { fileURLToPath } from 'url'
import purgecss from '@fullhuman/postcss-purgecss'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  plugins: [purgecss({ content: [`${__dirname}/dist/**/*.html`] })],
}
