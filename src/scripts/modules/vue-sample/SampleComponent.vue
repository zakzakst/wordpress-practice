<template>
  <div class="sample">
    {{ text }}
  </div>
</template>

<script setup>
import { ref } from 'vue'
const text = ref('Sample Vue Component!')
</script>

<!-- NOTE: vueファイルにstyle設定するとdistにcssが生成される -->
<!-- <style scoped>
.sample {
  color: #f00;
}
</style> -->
