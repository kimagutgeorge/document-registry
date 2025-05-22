<template>
  <DarkPage v-if="preview_is_visible" @close_preview="close_preview" />
    <div v-if="is_logged_in" class="main-page d-flex">
      <NavBar/>
      <!-- <div class="row col-10 h-100 d-flex no-align"> -->
      <div class="col-10">
        <TopBar @logout="logout"/>
        <div class="page-body scrollable-page mt-2">
          <router-view @show_preview="show_preview" />
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
  import DarkPage from '@/components/PreviewPage.vue';
  
  
  export default {
    name: 'PageLayout',
    data() {
      return {
        is_logged_in: false,
        preview_is_visible: false
      }
    },
    computed: {
  // is_logged_in() {
  //   return this.$store.state.isLoggedIn;
  // }
},
    components: { NavBar, TopBar, UserLogin, DarkPage},
  methods:{
    login(){
      this.is_logged_in = true
      localStorage.setItem("is_logged_in", this.is_logged_in)
      router.push('/home');
    },
    logout(){
      this.is_logged_in = false
      localStorage.setItem("is_logged_in", this.is_logged_in)
    },
    close_preview(){
      this.preview_is_visible = false
    },
    show_preview(){
      this.preview_is_visible = true
    }
  }
  }
  </script>