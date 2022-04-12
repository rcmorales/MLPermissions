<script setup>
import { ref, onBeforeUpdate, onMounted } from "vue";
import Prism from 'prism-es6';

const el = ref()

onBeforeUpdate(() => {
  
  var map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;'
  };
  if ( typeof this.$slots.default[0] === 'string' ) {
    const newText = this.$el.querySelector('code').textContent.replace(/[&<>"']/g, function(m) { return map[m]; });
    this.$el.querySelector('code').textContent = newText;
    Prism.highlightAllUnder(this.$refs.codeBlock);
  }
})

</script>
<template>
 <div class="boxpgray" id="codeblock">
  <div ref="codeBlock">      
      <pre class="language-javascript">
        <code>
          <slot/>
        </code>
      </pre>  
  </div>   
  </div>
</template>

<style scoped>
.boxpgray{  
 background-color:#d5d2d2;
 margin:0;
 padding:0;
}

</style>
