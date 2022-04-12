<script setup>
defineProps({
  srcurl: String
})
</script>


<template>
  <div class="container">
          <iframe
            :src= srcurl
            width="100%"
            height="400px"
            frameborder="8" 
            class="iframeborder"
            >            
           </iframe>
    </div>
</template>

<style scoped>
.iframeborder{
  border: 2px solid orange;
  border-radius: 4px;
  position: relative;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
</style>