<script setup>
import { ref } from 'vue'
const count = ref(0)
</script>

<template>
  <button id="buttonpermit" class="buttperm" >
    Permit/Unpermit
  </button>
</template>

<style scoped>

.buttperm{
  border: 1px solid orange;
  background-color:teal;
  color:white;
  padding: 20px;
  margin: 20px;
}
</style>