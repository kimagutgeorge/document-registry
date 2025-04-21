<template>
<div class="col-2 d-block">
    <div class="nav-bar-inner mt-2">
        <div class="col-12 flex-no-wrap">
            <img src="/icons/logo.png" class="logo" alt="">
            <span class="fw-bold ms-2 f-20 text-primary">SAFE</span>
            <i class="fa-solid fa-bars ms-4 nav-toggle f-20 text-primary"></i>
        </div>
        <div class="d-block col-12 nav-bar bg-white mt-2">
            <router-link to="/home" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                <li class="col-10 ">
                    <!-- <router-link to="" class="text-third flex-no-wrap"> -->
                        <i class="fa-solid fa-home text-third"></i>
                        <span class="ms-2 custom-fw-bold">Dashboard</span>
                    <!-- </router-link> -->
                </li>
            </router-link>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item text-third nav-drop-down" @click="toggleDropDown('documents')">
                <li class="col-10">
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
                    <router-link to="/documents" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">View All</span>
                        </li>
                    </router-link>
                    <router-link to="/documents/add" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Add New</span>
                        </li>
                    </router-link>
                </div>
            </transition>
            <!-- navbar item -->
            <router-link to="/requests" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                <li class="col-10 ">
                        <i class="fa-solid fa-file-signature text-third"></i>
                        <span class="ms-2 custom-fw-bold">Requests</span>
                </li>
            </router-link>
            
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item text-third nav-drop-down"  @click="toggleDropDown('issuance')">
                <li class="col-10 ">
                    <router-link to="#" class="text-third flex-no-wrap">
                        <i class="fa-solid fa-arrow-right-arrow-left text-third"></i>
                        <span class="ms-2 custom-fw-bold f-15">Returns & Issuance</span>
                    </router-link>
                </li>
                <div class="col-2">
                    <i class="fa-solid text-third" :class="activeDropdown === 'issuance' ? 'fa-minus' : 'fa-plus'" ></i>
                </div>
            </div>
            <transition name="slide-fade">
                <div v-if="activeDropdown === 'issuance' " class="row flex-no-wrap p-2">

                    <router-link to="/issuance" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Issuance</span>
                        </li>
                    </router-link>
                    <router-link to="/returns" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Returns</span>
                        </li>
                    </router-link>
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item text-third nav-drop-down"  @click="toggleDropDown('forms')">
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
                    <router-link to="/forms" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Print Forms</span>
                        </li>
                    </router-link>
                    <!-- <router-link to="/logs" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">View Logs</span>
                        </li>
                    </router-link> -->
                </div>
            </transition>
            <!-- navbar item -->
            <div class="row flex-no-wrap p-2 nav-item text-third nav-drop-down" @click="toggleDropDown('reports')">
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
                    <router-link to="/reports/documents" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Document Reports</span>
                        </li>
                    </router-link>
                    <router-link to="/reports/user-activity"  v-if="user_type === '0' " class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">User Activity</span>
                        </li>
                    </router-link>
                    <router-link to="/reports/requests" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Request Reports</span>
                        </li>
                    </router-link>
                    <router-link to="/reports/issuance-returns" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-4 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Issuance & Return Logs</span>
                        </li>
                    </router-link>
                </div>
            </transition>
            <!-- navbar item -->
            <div  v-if="user_type === '0' " class="row flex-no-wrap p-2 nav-item text-third nav-drop-down" @click="toggleDropDown('users')">
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
                    <router-link to="/users" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">All Users</span>
                        </li>
                    </router-link>
                    <router-link to="/users/add" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Add User</span>
                        </li>
                    </router-link>
                    
                </div>
            </transition>
            <!-- navbar item -->
            <div  v-if="user_type === '0' " class="row flex-no-wrap p-2 nav-item text-third nav-drop-down" @click="toggleDropDown('settings')">
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
                    <!-- <router-link to="/settings/roles" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Roles</span>
                        </li>
                    </router-link> -->
                    <router-link to="/settings/departments" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Departments</span>
                        </li>
                    </router-link>
                    <router-link to="#" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Form Template</span>
                        </li>
                    </router-link>
                    <router-link to="#" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Users</span>
                        </li>
                    </router-link>
                    <router-link to="#" class="row flex-no-wrap p-2 nav-item text-third" active-class="bg-third">
                        <li class="ms-3 mt-2 col-8">
                            <span class="custom-fw-lighter f-14">Audit & Logs</span>
                        </li>
                    </router-link>
                    
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
  data() {
    return {
      activeDropdown: null,
      user_type: null,
    };
  },
  created() {
    this.user_type = localStorage.getItem("user_type");
  },
  methods: {
    toggleDropDown(key) {
      this.activeDropdown = this.activeDropdown === key ? null : key;
    }
  }
};

</script>