<script setup>

import Home from './components/pages/Home.vue'
import Examples from './components/pages/Examples.vue'
import { ref } from 'vue'

const currentTab = ref('Home')

const tabs = {
  Home,
  Examples
}

</script>

<template>
  <div class="bg-sky-600 w-full subhead">  
  <nav class="navi">
     <div class="flex flex-row bg-sky-900 w-full center">    
                <div><button onclick="location.href='#'" class="butt-head">MLPermissions</button></div>
                <div><button onclick="location.href='https://github.com/MaddLogic/MLPermissions/stargazers'" class="butt-head">StarGazers</button></div>
                <div><button onclick="location.href='https://github.com/MaddLogic/MLPermissions/network/members'" class="butt-head">Fork</button></div>
                <div><button onclick="location.href='https://github.com/MaddLogic/MLPermissions/network'" class="butt-head">Network</button></div>    
                <div><button onclick="location.href='https://github.com/MaddLogic/MLPermissions'" class="butt-head">GitHub</button></div>                  
     </div>  
  </nav>  
  <header>    
                            
       <div ><h1 class="text-3xl font-bold plain" >V-Permit Vue.js 3.0 Plugin</h1></div>
      
       <br><br>
          <div class="flex flex-row w-full">
            <h3 class="text-xl center plain w-full">V-Permit is a tool that help implement website permissions and access control on the UI.  It is not the end all be all
              of Access Control, but it is the first line of defense in providing correct access to functionality in your website.
            </h3>
          </div>
        <br><br>

        <br><br>
          <div class="flex flex-row center">            
              <div><button onclick="location.href='https://github.com/MaddLogic/MLPermissions/archive/refs/heads/main.zip'" class="butt-down">Download</button></div>   
                
        </div>
          
        <br><br>        
    
  </header>
  </div>
  <main>
    <div class="demo">      
            <button
              v-for="(_, tab) in tabs"
             :key="tab"
             :class="['tab-button', { active: currentTab === tab }]"
             @click="currentTab = tab"
            >
              {{ tab }}
            </button>
          <component :is="tabs[currentTab]" class="tab"></component>
    </div>
  </main>
</template>

<style>
@import './assets/base.css';
@import './assets/home.css';
</style>