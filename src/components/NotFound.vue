<!-- src/views/NotFound.vue -->
<template>
    <div class="col-12 d-flex justify-content-center vh-100">
        <div class="inner h-100 d-flex justify-content-center flex-column">
            <h1 class="w-100 d-flex justify-content-center">404 - Page Not Found</h1>
            <p class="w-100 d-flex justify-content-center">The page you're looking for doesn't exist.</p>
            <router-link to="/home" class="btn btn-primary">Return to Home</router-link>
        </div>
    </div>
  </template>
  
  <style scoped>
  .not-found {
    text-align: center;
    padding: 2rem;
    max-width: 800px;
    margin: 0 auto;
  }
  
  </style>