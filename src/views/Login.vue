<template>
    <div class="w-100 h-100 d-flex justify-content-center">
        <div class="h-100 d-flex flex-column justify-content-center">
            <form class="c-form">
                <input type="text" class="w-100 form-control" placeholder="Username">
                <input type="password" class="w-100 form-control mt-2" placeholder="Password">
                <button class="btn btn-primary w-100 mt-2">Login <i class="fa-solid fa-lock"></i></button>
                <span class="text-secondary mt-2">Forgot Password?</span>
            </form>
            
        </div>
    </div>
</template>
<script>
export default{
    name: "UserLogin"
}
</script>