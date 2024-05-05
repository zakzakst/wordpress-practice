<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="props.thumbnail" alt="" width="4" height="3" />
      </figure>
    </div>
    <div class="card-content">
      <div class="content">
        {{ props.title }}
      </div>
    </div>
    <footer class="card-footer">
      <a :href="props.link" class="card-footer-item">記事を見る</a>
    </footer>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  thumbnail: String,
  link: String,
})
</script>
