import fs from 'fs'
import path from 'path'
import cheerio from 'cheerio'
import { minify } from 'terser'
import cleanCss from 'clean-css'
import minifyInlineJson from 'minify-inline-json'

/**
 * フォルダ配下のファイルプルパスの配列取得
 * @param folderPath 対象のフォルダ
 * @returns string[] フォルダ配下のファイルプルパスの配列
 */
const readSubDirSync = (folderPath) => {
  let result = []
  const readTopDirSync = (folderPath) => {
    let items = fs.readdirSync(folderPath)
    items = items.map((itemName) => {
      return path.join(folderPath, itemName)
    })
    items.forEach((itemPath) => {
      result.push(itemPath)
      if (fs.statSync(itemPath).isDirectory()) {
        readTopDirSync(itemPath)
        //再帰処理
      }
    })
  }
  readTopDirSync(folderPath)
  return result
}

/**
 * HTMLのスクリプト要素を縮小
 * @param html スクリプト要素を縮小するHTMLの文字列
 * @returns スクリプト要素縮小後のHTML文字列
 */
const minifyHtmlScript = async (html) => {
  const $ = cheerio.load(html)
  const scriptEls = $('script')
  // スクリプト要素縮小実行
  const funcArr = Array.from(scriptEls).map(async (el) => {
    const scriptEl = $(el)
    const isJsonLd = scriptEl[0].attribs?.type === 'application/ld+json'
    const scriptText = scriptEl.text().trim()
    if (!isJsonLd && scriptText !== '') {
      // TODO: 追々余裕ができたら、よりいいoptionsを検討する
      const scriptTextMin = await minify(scriptText, {})
      scriptEl.text(scriptTextMin.code)
    }
    return Promise.resolve()
  })
  await Promise.all(funcArr)
  // 縮小後のhtmlを返す
  return $.html()
}

/**
 * HTMLのスタイル要素を縮小
 * @param html スタイル要素を縮小するHTMLの文字列
 * @returns スタイル要素縮小後のHTML文字列
 */
const minifyHtmlCss = async (html) => {
  const $ = cheerio.load(html)
  const styleEls = $('style')
  // スタイル要素
  Array.from(styleEls).forEach((el) => {
    const styleEl = $(el)
    const styleText = styleEl.text().trim()
    // TODO: 追々余裕ができたら、よりいいoptionsを検討する
    const styleTextMin = new cleanCss({}).minify(styleText).styles
    styleEl.text(styleTextMin)
  })
  // 縮小後のhtmlを返す
  return $.html()
}

/**
 * HTML縮小
 * @param filePath 縮小するHTMLファイルのパス
 */
const minifyHtmlCode = async (filePath) => {
  let html = fs.readFileSync(filePath, 'utf8')
  html = await minifyHtmlScript(html)
  html = await minifyHtmlCss(html)
  html = minifyInlineJson(html)
  fs.writeFileSync(filePath, html)
}

/**
 * フォルダ配下のHTML縮小
 * @param folderPath 対象のフォルダパス
 */
const minifyHtmlCodes = (folderPath) => {
  // HTMLファイルのみのパス配列取得
  const filePaths = readSubDirSync(folderPath)
  const htmlFilePattern = /.html$/i
  const htmlFilePaths = filePaths.filter((filePath) =>
    htmlFilePattern.test(filePath)
  )
  htmlFilePaths.forEach(async (filePath) => {
    await minifyHtmlCode(filePath)
  })
  console.log('minify html code!')
}

minifyHtmlCodes('dist')
