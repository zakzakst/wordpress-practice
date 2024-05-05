<template>
  <!-- TODO: ページネーションの表示処理作成 -->
  <div>{{ props.total }}, {{ props.current }}, {{ props.perPage }}</div>
  <nav class="pagination is-centered" aria-label="pagination">
    <button type="button" class="pagination-previous" @click="onClickPrev">
      Prev
    </button>
    <button type="button" class="pagination-next" @click="onClickNext">
      Next
    </button>
    <ul class="pagination-list">
      <li>
        <button
          type="button"
          class="pagination-link"
          aria-label="Goto page 1"
          @click="onClickPagination(1)"
        >
          1
        </button>
      </li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li>
        <button
          type="button"
          class="pagination-link"
          aria-label="Goto page 45"
          @click="onClickPagination(45)"
        >
          45
        </button>
      </li>
      <li>
        <button
          class="pagination-link is-current"
          aria-current="page"
          @click="onClickPagination(46)"
        >
          46
        </button>
      </li>
      <li>
        <button
          type="button"
          class="pagination-link"
          aria-label="Goto page 47"
          @click="onClickPagination(47)"
        >
          47
        </button>
      </li>
      <li><span class="pagination-ellipsis">&hellip;</span></li>
      <li>
        <button
          type="button"
          class="pagination-link"
          aria-label="Goto page 86"
          @click="onClickPagination(86)"
        >
          86
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const props = defineProps({
  total: Number,
  current: Number,
  perPage: Number,
})
const emit = defineEmits(['movePage'])

const onClickPrev = () => {
  emit('movePage', 'prev')
}

const onClickNext = () => {
  emit('movePage', 'next')
}

const onClickPagination = (page) => {
  emit('movePage', page)
}
</script>
