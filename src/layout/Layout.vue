<template>
    <div v-if="is_logged_in" class="main-page d-flex">
      <NavBar/>
      <!-- <div class="row col-10 h-100 d-flex no-align"> -->
      <div class="col-10">
        <TopBar/>
        <div class="page-body scrollable-page">
          <router-view/>
        </div>
      </div>
    </div>
    <!-- login page -->
    <div v-else class="main-page d-flex">
      <UserLogin/>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/Navbar.vue';
  import TopBar from '@/components/TopBar.vue';
  import UserLogin from '@/views/Login.vue'
  
  
  export default {
    name: 'PageLayout',
    computed: {
  is_logged_in() {
    return this.$store.state.isLoggedIn;
  }
},
    components: { NavBar, TopBar, UserLogin}
  }
  </script>