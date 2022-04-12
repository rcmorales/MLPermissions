<script setup>
import CodeBlock from '../content/CodeBlock.vue'
import QuickStart from '../content/QuickStart.vue'
import QSList from '../content/QSList.vue'
import Usage from '../content/Usage.vue'
import ByManual from '../content/ByManual.vue'
import ByNpm from '../content/ByNpm.vue'
import Release from '../content/Release.vue'
import API from '../content/API.vue'

import CodeHighlight from "vue-code-highlight/src/CodeHighlight.vue";
import "vue-code-highlight/themes/duotone-sea.css";
import "vue-code-highlight/themes/window.css";


</script>


<template>
   <div class="tab">

    <h1 class="text-3xl font-bold blue">
    <br/>
    Getting Started
    <hr>
    </h1>
    <br/>
    <h1 class="text-2xl" >Quick start</h1>
    <br/>
    <QuickStart/>
    <br/>
    <QSList/>
    <br/>    
    
    <!--for every "<" change it to  "&lt;" and every ">" change to "&gt;"-->   
    <CodeBlock>             
       <!-- Latest compiled and minified CSS -->
         &lt;link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">&gt;<br/>

        <!-- Latest compiled and minified JavaScript -->
         &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"&gt; &lt;/script&gt;<br/>

        <!-- (Optional) Latest compiled and minified JavaScript translation files -->
        &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/i18n/defaults-*.min.js"&gt;&lt;/script&gt;<br/>
        The CDN is updated after the release is made public, which means that there is a delay between the publishing of a release and its availability on the CDN.
    </CodeBlock>
  <br/>  
  <br/>
    <h1 class="text-2xl">Usage</h1>
    <hr>
    <br/>
    <Usage/>
    <h1 class="text-xl">By Select Picker</h1>
    <br/>
     <code-highlight>
         &lt;select class="selectpicker"&gt;<br>
         &lt;option&gt;Mustard&lt;/option&gt;<br>
         &lt;option&gt;Ketchup&lt;/option&gt;<br>
         &lt;option&gt;Barbecue&lt;/option&gt;<br>
         &lt;/select&gt;
    </code-highlight>
    <br/>
    <ByManual>
      <template #step1><CodeBlock><p> import MLPermissions from './components/plugins/MLPermissions/src/index.js'</p></CodeBlock></template>
      <template #step2><CodeBlock><p> 
        <span>// create instance of permission</span><br>
        let mlp = new MLPermissions();</p></CodeBlock>
       </template>
      <template #step3><CodeBlock><p>
        <span>// specify permission</span><br>
         mlp.permissions = ['Read', 'Update', 'Disable'];</p><br>
         <span>// create mlp function</span><br>
         <span>mlp.permitted = function(data){</span><br>
        <span>console.log("permitted", data);</span><br>
        <span>return false;}</span><br></CodeBlock>
         </template>      
    </ByManual>
    <ByNpm/>
  <br/>
   <br/>
    <h1 class="text-2xl">Latest Release</h1>
    <hr>
    <br/>
    <Release/>
    <br/>
     <br/>
    <h1 class="text-2xl">API Reference</h1>
    <hr>
    <br/>
    <API/>
    <br/>
  </div> 

  <div>
    <h2>vue-code-highlight example</h2>
    <code-highlight>
      // this is use for vue code highlighter
          let isPalindrome = (word) => {
          let [length, result] = [word.length, true];
          for (let i = 0; i &lt; length / 2; i++) {
          if (word[i] !== word[length - 1 - i]) result = false;
          }
          return result;
          }
          module.exports = isPalindrome;
    </code-highlight>
  </div> 

  

</template>

<style scoped>
.list-disc a{
  color: green;
}

.boxp{
  border: 1px solid orange;
  padding: 50px;
  margin: 20px;
}

</style>