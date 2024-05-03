import imagemin from 'imagemin-keep-folder'
import imageminPngquant from 'imagemin-pngquant'
import imageminSvgo from 'imagemin-svgo'
import imageminMozjpeg from 'imagemin-mozjpeg'
import imageminGifsicle from 'imagemin-gifsicle'

const srcDir = './public/assets/img/'
const outDir = './public/assets/img/'

await imagemin([srcDir + '**/*.{jpg,jpeg,png,gif,svg}'], {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => output.replace(srcDir, outDir),
})

console.log('Images optimized!')
