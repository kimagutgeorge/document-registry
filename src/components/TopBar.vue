<template>
    <div class="row col-12 d-flex mt-2 top-bar">
        <div class="col-7">
            <div class="search-panel flex-no-wrap w-50">
                <input type="text" class="no-border" placeholder="Search">
                <button class="float-right">
                    <i class="fa-solid fa-search text-primary"></i>
                </button>
            </div>
        </div>
        <div class="col-5">
            <div class="d-flex justify-content-end">
                    <div class="position-relative notification-panel-holder">
                    <i class="fa-solid fa-bell text-primary f-20 nav-item position-absolute mt-2" @click="toggleDropdown"></i>
                    <div class="notification-dot position-absolute bg-danger d-flex justify-content-center ms-2 nav-item" @click="toggleDropdown">
                        <div class="h-100 d-flex flex-column justify-content-center f-15 text-white">
                            2
                        </div>
                    </div>
                    <!-- notification panel -->
                    <transition name="slide-fade">
                     <div v-if="activeDropdown" class="col-12 d-block bg-primary notification-panel w-100">
                        <div class="not-item d-flex col-12 p-2">
                            <div class="icon-holder">
                                <img src="/profiles/profile.png" alt="" class="user-icon">
                            </div>
                            <div class="d-block ms-2">
                                <h5 class="f-15 text-white">John</h5>
                                <p class="text-white">File Request</p>
                            </div>
                        </div>
                        <!--  item -->
                        <div class="not-item d-flex col-12 p-2">
                            <div class="icon-holder">
                                <img src="/profiles/profile2.png" alt="" class="user-icon">
                            </div>
                            <div class="d-block ms-2">
                                <h5 class="f-15 text-white">Daniel</h5>
                                <p class="text-white">File Return</p>
                            </div>
                        </div>
                     </div>
                     </transition>
                    </div>
                    <div class="user-panel d-flex flex-no-wrap ms-4 col-4 position-relative">
                        <div class="icon-holder nav-item" @click="toggleUserDropdown">
                            <img src="/profiles/profile.png" class="user-icon">
                        </div>
                        <div class="d-block ms-2 nav-item" @click="toggleUserDropdown">
                            <h5 class="text-primary f-15 text-uppercase fw-bold">John Doe <i class="fa-solid fa-angle-down text-primary"></i></h5>
                            <span class="f-15 text-primary ">Admin</span>
                        </div>
                        <!-- user settings -->
                        <transition name="slide-fade">
                            <div v-if="activeUserDropdown" class="d-block bg-primary notification-panel w-100 position-absolute">
                                <div class="col-12 p-2">
                                    <li class="nav-item">
                                        <i class="fa-solid fa-user text-white"></i> 
                                        <span class="text-white ms-2">User Profile</span>
                                    </li>
                                    <li class="nav-item mt-2">
                                    <router-link to="/settings">
                                        <i class="fa-solid fa-gear text-white"></i> 
                                        <span class="text-white ms-2">Settings</span>
                                    </router-link>
                                </li>
                                    <li class="nav-item mt-2" @click="$emit('logout')">
                                        <i class="fa-solid fa-power-off text-white"></i> 
                                        <span class="text-white ms-2">Logout</span>
                                    </li>
                                </div>
                            </div>
                        </transition>
                    </div>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    name: "TopBar",
    data(){
        return{
            activeDropdown: null,
            activeUserDropdown: null
        }
    },
    methods: {
        toggleDropdown(){
            this.activeDropdown = !this.activeDropdown
        },
        toggleUserDropdown(){
            this.activeUserDropdown = !this.activeUserDropdown
        }
    }
}
</script>
