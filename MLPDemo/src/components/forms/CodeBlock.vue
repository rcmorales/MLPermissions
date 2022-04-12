<script setup>
defineProps({
  message: {
    type: String,
    required: true
  }
})


</script>

<template>
  <p>Message is: {{ message }}</p>
	<input v-model="message" placeholder="edit me" class="inputtxt" />
</template>

<style scoped>

.inputtxt{
  border: 1px solid orange;
  padding: 20px;
  margin: 20px;
}
</style>