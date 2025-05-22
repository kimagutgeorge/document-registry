<template>
    <div class="w-100 h-100 d-flex ">
        <div class="col-6 d-flex justify-content-center">
            <div class="h-100 d-flex flex-column justify-content-center">
                <img src="/logo.svg">
            </div>
        </div>
        <div class="col-6">
            <div class="w-100 h-100 d-flex flex-column justify-content-center">
            <form class="c-form col-10" @submit.prevent="handleLogin">
                <div class=" bg-white" style="width: 450px;padding:70px 40px 70px">
                <div class="form-group">
                    <label class="f-14 fw-bold text-muted">Login As</label>
                </div>
                <div class="d-flex flex-no-wrap mt-2">
                    <div class="p-2 border-1 w-50" :class="user_type === '0' ? 'bg-primary text-white': ''" style="cursor:pointer;" @click="change_user('0')">Admin</div>
                    <div class="p-2 border-1 w-50" :class="user_type === '1' ? 'bg-primary text-white': ''" style="cursor:pointer;" @click="change_user('1')">Reg. Office</div>
                </div>
                <div class="form-group mt-4">
                    <label class="f-14 fw-bold text-muted">Username</label>
                    <input type="email" class="w-100 form-control p-2 mt-2" placeholder="Username" required>
                </div>
                <div class="form-group mt-4">
                    <label class="f-14 fw-bold text-muted">Password</label>
                </div>
                <div class="form-group d-flex flex-no-wrap form-control mt-2">
                <input :type="input_type" class="w-100 p-2" placeholder="*********" required>
                <span class="btn bg-white login-btn p-2" style="height:fit-content;" @click="viewPassword"><i class="fa-solid text-primary" :class="input_type === 'password' ? 'fa-eye' : 'fa-eye-slash' "></i></span>
                </div>
                <button class="btn btn-primary w-100 mt-2 p-2" >Login <i class="fa-solid fa-lock"></i></button>
                <div class="mt-2">
                <router-link to="#" class="text-secondary">Forgot Password?</router-link>
            </div>
            </div>
            </form>
            
        </div>
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
            },
            change_user(user_type){
                this.user_type = user_type
                console.log(this.user_type)
            }
        
    }
}
</script>