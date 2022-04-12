<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button id="buttonblock" class="buttex" @click="count++" >
    You clicked me {{ count }} times.
  </button>
</template>

<style scoped>

.buttex{
  border: 1px solid orange;
  padding: 20px;
  margin: 20px;
}
</style>