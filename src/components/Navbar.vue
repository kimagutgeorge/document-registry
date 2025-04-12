<template>
<div class="col-2 d-block">
    <div class="nav-bar-inner ms-2 mt-2">
        <div class="col-12 flex-no-wrap">
            <img src="/icons/logo.png" class="logo" alt="">
            <span class="fw-bold ms-2 f-20 text-primary">SAFE</span>
            <i class="fa-solid fa-bars ms-4 nav-toggle f-20 text-primary"></i>
        </div>
        <div class="d-block col-12 nav-bar bg-white mt-4">
            <div class="row flex-no-wrap p-2 nav-item">
                <li class="col-10 ">
                    <router-link to="/home" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-home text-third"></i>
                        <span class="ms-2 custom-fw-bold">Dashboard</span>
                    </router-link>
                </li>
            </div>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item" @click="toggleDropDown('documents')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-file-contract text-third"></i>
                        <span class="ms-2 custom-fw-bold">Documents</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'documents' ? 'fa-minus' : 'fa-plus' "></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'documents' " class="row flex-no-wrap p-2">
                    <li class="ms-4 mt-2 col-8 ">
                        <router-link to="/documents" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">View All</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8  ">
                        <router-link to="/documents/add" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Add New</span>
                        </router-link> 
                    </li>
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item">
                <li class="col-10 " >
                    <router-link to="/requests" class="text-third flex-no-wrap" >
                        <i class="fa-solid fa-file-signature text-third"></i>
                        <span class="ms-2 custom-fw-bold">Requests</span>
                    </router-link>
                    
                </li>
                <div class="col-2">
                    <!-- <i class="fa-solid text-third" :class="activeDropdown === 'requests' ? 'fa-minus' : 'fa-plus' "></i> -->
                </div>
            </div>
            
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item"  @click="toggleDropDown('issuance')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-arrow-right-arrow-left text-third"></i>
                        <span class="ms-2 custom-fw-bold">Returns & Issuance</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'issuance' ? 'fa-minus' : 'fa-plus'" ></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'issuance' " class="row flex-no-wrap p-2">
                    <li class="ms-4 mt-2 col-8 ">
                        <router-link to="/issuance" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Issuance</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8 ">
                        <router-link to="/returns" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Returns</span>
                        </router-link> 
                    </li>
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item"  @click="toggleDropDown('forms')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-list text-third"></i>
                        <span class="ms-2 custom-fw-bold">Forms & Logs</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'forms' ? 'fa-minus' : 'fa-plus' "></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'forms' " class="row flex-no-wrap p-2">
                    <li class="ms-4 mt-2 col-8 ">
                        <router-link to="/forms" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Print Forms</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8  ">
                        <router-link to="/logs" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">View Logs</span>
                        </router-link> 
                    </li>
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item" @click="toggleDropDown('reports')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-chart-simple text-third"></i>
                        <span class="ms-2 custom-fw-bold">Reports</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'reports' ? 'fa-minus' : 'fa-plus' "></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'reports' " class="row flex-no-wrap p-2">
                    <li class="ms-4 mt-2 col-8 ">
                        <router-link to="/reports/documents" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Document Reports</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8  ">
                        <router-link to="/reports/user-activity" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">User Activity</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8  ">
                        <router-link to="/reports/requests" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Request Reports</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8  ">
                        <router-link to="/reports/issuance-returns" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Issuance & Return Logs</span>
                        </router-link> 
                    </li>
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item" @click="toggleDropDown('users')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-users text-third"></i>
                        <span class="ms-2 custom-fw-bold">Users</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'users' ? 'fa-minus' : 'fa-plus'" ></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'users' " class="row flex-no-wrap p-2">
                    <li class="ms-4 mt-2 col-8 ">
                        <router-link to="/users" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">All Users</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8 ">
                        <router-link to="/users/add" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Add User</span>
                        </router-link> 
                    </li>
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item" @click="toggleDropDown('settings')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-gear text-third"></i>
                        <span class="ms-2 custom-fw-bold">Settings</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'settings' ? 'fa-minus' : 'fa-plus'" ></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'settings' " class="row flex-no-wrap p-2">
                    <li class="ms-4 mt-2 col-8 ">
                        <router-link to="/settings/roles" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Roles</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8 ">
                        <router-link to="/settings/departments" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Departments</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8 ">
                        <router-link to="/settings/templates" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Form Template</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8 ">
                        <router-link to="/settings/users" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Users</span>
                        </router-link> 
                    </li>
                    <li class="ms-4 mt-4 col-8 ">
                        <router-link to="/settings/users" class="text-third flex-no-wrap">
                            <span class="custom-fw-lighter f-14">Audit & Logs</span>
                        </router-link> 
                    </li>
                </div>
            </transition>
            <!-- navbar item -->
        </div>
    </div>
</div>
</template>
<script>
export default {
    name: "NavBar",
    data(){
        return{
            activeDropdown: null,
        }
    },
    methods:{
        toggleDropDown(key){
            this.activeDropdown = this.activeDropdown === key ? null : key;
        }
    }
}
</script>