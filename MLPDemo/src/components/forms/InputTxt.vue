<script setup>
import { ref } from 'vue'

const msg = ref('')

</script>

<template>
  <div>
    <!--<p v-permit:read="msg">Message is: {{ msg }}</p>-->
    <p>Message is: {{ msg }}</p>
	  <input v-model="message" placeholder="edit me" class="inputtxt"  />
  </div>  
</template>

<style scoped>

.inputtxt{
  border: 1px solid orange;
  padding: 20px;
  margin: 20px;
}
</style>