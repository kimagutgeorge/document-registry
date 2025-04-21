<template>
    <div v-if="is_logged_in" class="main-page d-flex">
      <NavBar/>
      <!-- <div class="row col-10 h-100 d-flex no-align"> -->
      <div class="col-10">
        <TopBar @logout="logout"/>
        <div class="page-body scrollable-page">
          <router-view/>
        </div>
      </div>
    </div>
    <!-- login page -->
    <div v-else class="main-page d-flex">
      <UserLogin @login="login"/>
    </div>
  </template>
  
  <script>
  import NavBar from '@/components/Navbar.vue';
  import TopBar from '@/components/TopBar.vue';
import router from '@/router';
  import UserLogin from '@/views/Login.vue'
  
  
  export default {
    name: 'PageLayout',
    data() {
      return {
        is_logged_in: false
      }
    },
    computed: {
  // is_logged_in() {
  //   return this.$store.state.isLoggedIn;
  // }
},
    components: { NavBar, TopBar, UserLogin},
  methods:{
    login(){
      this.is_logged_in = true
      localStorage.setItem("is_logged_in", this.is_logged_in)
      router.push('/home');
    },
    logout(){
      this.is_logged_in = false
      localStorage.setItem("is_logged_in", this.is_logged_in)
    }
  }
  }
  </script>