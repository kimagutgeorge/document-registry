<template>
    <div class="main-page d-flex">
      <NavBar/>
      <!-- <div class="row col-10 h-100 d-flex no-align"> -->
      <div class="col-10">
        <TopBar/>
        <div class="page-body scrollable-page">
          <router-view/>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/Navbar.vue';
  import TopBar from '@/components/TopBar.vue';
  
  
  export default {
    name: 'PageLayout',
    components: {
      NavBar, 
      TopBar,
      
    }
  }
  </script>