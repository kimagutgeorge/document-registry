<template>
    <div class="w-100 h-100 d-flex justify-content-center">
        <div class="h-100 d-flex flex-column justify-content-center">
            <form class="c-form" @submit.prevent="handleLogin">
                <input type="email" class="w-100 form-control" placeholder="Username" required>

                <div class="form-group d-flex flex-no-wrap form-control mt-2">
                <input :type="input_type" class="w-100 " placeholder="Password" required>
                <span class="btn bg-white login-btn" style="height:fit-content;" @click="viewPassword"><i class="fa-solid text-primary" :class="input_type === 'password' ? 'fa-eye' : 'fa-eye-slash' "></i></span>
                </div>
                <div class="form-group">
                    <select class="w-100 form-control mt-2" v-model="user_type" required>
                        <option value="0">Admin</option>
                        <option value="1">Registratin Office</option>
                    </select>
                </div>
                <button class="btn btn-primary w-100 mt-2" >Login <i class="fa-solid fa-lock"></i></button>
                <div class="mt-2">
                <router-link to="#" class="text-secondary">Forgot Password?</router-link>
            </div>
            </form>
            
        </div>
    </div>
</template>
<script>
export default{
    name: "UserLogin",
    data() {
            return {
                input_type: "password",
                user_type: '1'
            }
        },
    methods: {
        viewPassword(){
                if(this.input_type === "password"){
                    this.input_type = "text"
                }else{
                    this.input_type = "password"
                }
                
            },
            handleLogin() {
                localStorage.setItem('user_type', this.user_type)
                this.$emit('login', this.user_type)
    }
        
    }
}
</script>