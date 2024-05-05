<template>
  <!-- ▼▼▼ 絞り込みフォーム ▼▼▼ -->
  <div class="box">
    <div class="field">
      <label class="label">カテゴリー</label>
      <div class="control">
        <label class="radio">
          <input type="radio" name="question" />
          商品コラム
        </label>
        <label class="radio">
          <input type="radio" name="question" />
          イベント情報
        </label>
      </div>
    </div>
    <div class="field">
      <label class="label">キーワード</label>
      <div class="control">
        <input class="input" type="text" placeholder="例）イベント" />
      </div>
    </div>
    <div class="field mt-5">
      <div class="control">
        <button type="button" class="button is-link">絞り込む</button>
      </div>
    </div>
  </div>
  <!-- ▲▲▲ 絞り込みフォーム ▲▲▲ -->

  <!-- ▼▼▼ 記事リスト ▼▼▼ -->
  <div
    class="fixed-grid has-2-cols-mobile has-3-cols-tablet has-4-cols-desktop mt-6"
  >
    <div class="grid">
      <div v-for="item in postItems" :key="item.id" class="cell">
        <PostsVueCard
          :title="item.title"
          :thumbnail="item.thumbnail"
          :link="item.link"
        />
      </div>
    </div>
  </div>
  <!-- ▲▲▲ 記事リスト ▲▲▲ -->

  <!-- ▼▼▼ ページネーション ▼▼▼ -->
  <div class="mt-6">
    <PostsVuePagination v-bind="pagination" @move-page="onMovePage" />
  </div>
  <!-- ▲▲▲ ページネーション ▲▲▲ -->
</template>

<script setup>
import { ref } from 'vue'
import PostsVueCard from './PostsVueCard.vue'
import PostsVuePagination from './PostsVuePagination.vue'

const postItemsData = [...Array(10)].map((item, index) => {
  return {
    id: index,
    title: 'タイトル',
    thumbnail: 'https://bulma.io/assets/images/placeholders/1280x960.png',
    link: '/posts/detail.html',
  }
})
const postItems = ref(postItemsData)

const paginationData = {
  total: 860,
  current: 46,
  perPage: 10,
}
const pagination = ref(paginationData)

const onMovePage = (e) => {
  console.log('move page', e)
}
</script>
