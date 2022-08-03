<template>
<!-- navbar here -->
<nav class="px-2 sm:px-4 py-2.5 dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b">
  <div class="max-w-6xl mx-auto px-4">
    <div class="flex justify-between">
      <div class="hidden md:flex space-x-4">
        <!-- primary nav -->
          <div div class="hidden md:flex items-center space-x-1">
              <router-link to="/" class="py-5 px-3 text-gray-700 hover:text-black">Home</router-link>
              <router-link to="/about" class="py-5 px-3 text-gray-700 hover:text-black">About Me</router-link>
          </div>
      </div>
      <!-- logo -->
          <div>
            <router-link to="/" class="flex items-center py-3 px-2 text-gray-700 hover:text-black">
              <img src="https://emojipedia-us.s3.amazonaws.com/source/microsoft-teams/337/rabbit_1f407.png" 
            alt="logo" class="h-12 w-12">

            <!-- <span class="font-bold">Aire Watterson</span> -->
            </router-link>
        </div>
      <!-- secondary nav -->
      <div class="hidden md:flex items-center space-x-1">
        <router-link to="/work" class="py-5 px-3 text-gray-700 hover:text-black">My Work</router-link>
        <router-link to="/contact" class="py-5 px-3 text-white bg-blue-600 hover:bg-blue-400 transition duration-150 rounded shadow">Contact</router-link>
      </div>
      <!-- mobile button -->
      <div class="md:hidden flex items-center">
        <button class="mobile-menu-button">
          <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><title>Menu</title><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg>
        </button>
      </div>
    </div>
  </div>



<!-- mobile menu -->
<div class="hidden mobile-menu md:hidden">
  <router-link to="/" class="block py-4 px-4 text-sm hover:bg-gray-200">Home</router-link>
  <router-link to="/about" class="block py-4 px-4 text-sm hover:bg-gray-200">About Me</router-link>
  <router-link to="/work" class="block py-4 px-4 text-sm hover:bg-gray-200">My Work</router-link>
  <router-link to="/contact" class="block py-4 px-4 text-sm hover:bg-gray-200">Contact</router-link>
</div>

</nav>
<router-view />
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu&display=swap');
@font-face {
  font-family: 'Taipei Sans TC Beta';
  src: local("TaipeiSansTCBeta-Regular"), 
  url(./assets/fonts/TaipeiSansTCBeta-Regular.ttf) format("truetype");
}

</style>

<script>
//以下是自適應導航列程式
  //指定所有變數
  const btn=document.querySelector("button.mobile-menu-button");
  const menu=document.querySelector(".mobile-menu");
  
  //event listeners
  btn.addEventListener("click",()=>{
    menu.classList.toggle("hidden");
  });
</script> 