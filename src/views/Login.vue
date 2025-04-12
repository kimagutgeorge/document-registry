<template>
    <div class="w-100 h-100 d-flex justify-content-center">
        <div class="h-100 d-flex flex-column justify-content-center">
            <form class="c-form">
                <input type="text" class="w-100 form-control" placeholder="Username">
                <input type="password" class="w-100 form-control mt-2" placeholder="Password">
                <button class="btn btn-primary w-100 mt-2" @click="login">Login <i class="fa-solid fa-lock"></i></button>
                <div class="mt-2">
                <router-link class="text-secondary">Forgot Password?</router-link>
            </div>
            </form>
            
        </div>
    </div>
</template>
<script>
export default{
    name: "UserLogin",
    methods: {
        login(){
        this.$store.commit('setLoginState', true);
        this.$store.dispatch('login');
        }
    }
}
</script>