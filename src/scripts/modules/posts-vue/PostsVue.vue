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
  </div>
  <!-- ▲▲▲ 絞り込みフォーム ▲▲▲ -->

  <!-- ▼▼▼ 記事リスト ▼▼▼ -->
  <div
    class="fixed-grid has-2-cols-mobile has-3-cols-tablet has-4-cols-desktop mt-6"
  >
    <div class="grid">
      <div v-for="item in postItems" :key="item.id" class="cell">
        <div class="card">
          <div class="card-image">
            <figure class="image is-4by3">
              <img
                src="https://bulma.io/assets/images/placeholders/1280x960.png"
                alt=""
                width="4"
                height="3"
              />
            </figure>
          </div>
          <div class="card-content">
            <div class="content">タイトル</div>
          </div>
          <footer class="card-footer">
            <a href="/posts/detail.html" class="card-footer-item">記事を見る</a>
          </footer>
        </div>
      </div>
    </div>
  </div>
  <!-- ▲▲▲ 記事リスト ▲▲▲ -->

  <!-- ▼▼▼ ページネーション ▼▼▼ -->
  <div class="mt-6">
    <nav class="pagination is-centered" aria-label="pagination">
      <a href="#" class="pagination-previous">Prev</a>
      <a href="#" class="pagination-next">Next</a>
      <ul class="pagination-list">
        <li>
          <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
        </li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li>
          <a href="#" class="pagination-link" aria-label="Goto page 45">45</a>
        </li>
        <li>
          <a class="pagination-link is-current" aria-current="page">46</a>
        </li>
        <li>
          <a href="#" class="pagination-link" aria-label="Goto page 47">47</a>
        </li>
        <li><span class="pagination-ellipsis">&hellip;</span></li>
        <li>
          <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
        </li>
      </ul>
    </nav>
  </div>
  <!-- ▲▲▲ ページネーション ▲▲▲ -->
</template>

<script setup>
import { ref } from 'vue'
const postItemsData = [
  {
    id: '01',
  },
  {
    id: '02',
  },
  {
    id: '03',
  },
  {
    id: '04',
  },
  {
    id: '05',
  },
  {
    id: '06',
  },
  {
    id: '07',
  },
  {
    id: '08',
  },
  {
    id: '09',
  },
  {
    id: '10',
  },
]
const postItems = ref(postItemsData)
</script>
