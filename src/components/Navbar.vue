<template>
<div class="col-2 d-block bg-white">
    <div class="nav-bar-inner mt-2">
        <div class="col-12 d-flex flex-no-wrap">
            <div class="col-9">
                <!-- <img src="/logo.svg" class="logo ms-2" alt="" style=""> -->
            </div>
            <div class="col-2" style="width:fit-content !important">
                <i class="fa-solid fa-bars ms-4 nav-toggle f-20 text-primary mt-2"></i>
            </div>
            
        </div>
        <div class="d-block col-12 nav-bar mt-4">
            <router-link to="/home" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                <li class="col-10 ">
                    <!-- <router-link to="" class="text-black flex-no-wrap"> -->
                        <i class="fa-solid fa-home text-primary"></i>
                        <span class="ms-2 ">Dashboard</span>
                    <!-- </router-link> -->
                </li>
            </router-link>
            <!-- navbar item -->





<!-- navbar item -->
<div class="accordion" id="accordionClients">
  <div class="accordion-item rounded-0 border-0 border-top border-bottom">
    <h2 class="accordion-header bg-third" id="headingOne">
      <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        <i class="fa-solid fa-users text-primary"></i> <span class="ms-2">Clients</span>
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionClients">
      <div class="accordion-body p-0 bg-white">
        <router-link to="/clients" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                <li class="ms-4 mt-2 col-8">
                    <span class="f-14">View All</span>
                </li>
            </router-link>
            <router-link to="/clients/add" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                <li class="ms-4 mt-2 col-8">
                    <span class="f-14">Add New</span>
                </li>
            </router-link>
      </div>
    </div>
  </div>
</div>
<!-- navbar item -->
<div class="accordion" id="accordionRegistry">
  <div class="accordion-item rounded-0 border-0 border-top border-bottom">
    <h2 class="accordion-header bg-third" id="headingTwo">
      <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        <i class="fa-solid fa-file-contract text-primary"></i> <span class="ms-2">Safe Registry</span>
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionRegistry">
      <div class="accordion-body p-0 bg-third">
        <router-link to="/documents" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                <li class="ms-4 mt-2 col-8">
                    <span class="f-14">View Safe</span>
                </li>
            </router-link>
            <router-link to="/documents/add" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                <li class="ms-4 mt-2 col-8">
                    <span class="f-14">Add New</span>
                </li>
            </router-link>
      </div>
    </div>
  </div>
</div>


















            
           
            <!-- navbar item -->
            <router-link to="/requests" class="row flex-no-wrap p-2 nav-item text-black border-bottom" active-class="bg-third">
                <li class="col-10 p-2">
                        <i class="fa-solid fa-file-signature text-primary ms-1"></i>
                        <span class="ms-2 ">Requests</span>
                </li>
            </router-link>
            
            <!-- navbar item -->
             <div class="accordion" id="accordionReturns">
                <div class="accordion-item rounded-0 border-0 border-top border-bottom">
                    <h2 class="accordion-header bg-third" id="headingThree">
                    <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
                        <i class="fa-solid fa-arrow-right-arrow-left text-primary"></i> <span class="ms-2">Returns & Issuance</span>
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionReturns">
                    <div class="accordion-body p-0 bg-white">
                        <router-link to="/issuance" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                                <li class="ms-4 mt-2 col-8">
                                    <span class="f-14">Issuance</span>
                                </li>
                            </router-link>
                            <router-link to="/returns" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                                <li class="ms-4 mt-2 col-8">
                                    <span class="f-14">Returns</span>
                                </li>
                            </router-link>
                    </div>
                    </div>
                </div>
                </div>

            <!-- navbar item -->

            <div class="accordion" id="accordionLogs">
                <div class="accordion-item rounded-0 border-0 border-top border-bottom">
                    <h2 class="accordion-header bg-third" id="headingFour">
                    <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="true" aria-controls="collapseThree">
                        <i class="fa-solid fa-list text-primary"></i> <span class="ms-2">Forms & Logs</span>
                    </button>
                    </h2>
                    <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionLogs">
                    <div class="accordion-body p-0 bg-white">
                        <router-link to="/forms" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                                <li class="ms-4 mt-2 col-8">
                                    <span class="f-14">Print Forms</span>
                                </li>
                            </router-link>
                    </div>
                    </div>
                </div>
                </div>

            <!-- navbar item -->
             <div class="accordion" id="accordionReports">
                <div class="accordion-item rounded-0 border-0 border-top border-bottom">
                    <h2 class="accordion-header bg-third" id="headingFive">
                    <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                        <i class="fa-solid fa-chart-simple text-primary"></i> <span class="ms-2">Reports</span>
                    </button>
                    </h2>
                    <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionReports">
                    <div class="accordion-body p-0 bg-white">
                        <router-link to="/reports/documents" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Document Reports</span>
                            </li>
                        </router-link>
                        <router-link to="/reports/user-activity" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">User Activity</span>
                            </li>
                        </router-link>
                        <router-link to="/reports/requests" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Request Reports</span>
                            </li>
                        </router-link>
                        <router-link to="/reports/issuance-returns" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Issuance & Return Logs</span>
                            </li>
                        </router-link>
                    </div>
                    </div>
                </div>
                </div>

            <!-- navbar item -->

            <div class="accordion" id="accordionUsers">
                <div class="accordion-item rounded-0 border-0 border-top border-bottom">
                    <h2 class="accordion-header bg-third" id="headingSix">
                    <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="true" aria-controls="collapseSix">
                        <i class="fa-solid fa-users text-primary"></i> <span class="ms-2">Users</span>
                    </button>
                    </h2>
                    <div id="collapseSix" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionUsers">
                    <div class="accordion-body p-0 bg-white">
                        <router-link to="/users" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">All Users</span>
                            </li>
                        </router-link>
                        <router-link to="/users/add" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Add User</span>
                            </li>
                        </router-link>
                    </div>
                    </div>
                </div>
                </div>

            <!-- navbar item -->

            <div class="accordion" id="accordionSettings">
                <div class="accordion-item rounded-0 border-0 border-top border-bottom">
                    <h2 class="accordion-header bg-third" id="headingSix">
                    <button class="accordion-button collapsed rounded-0 " type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="true" aria-controls="collapseSeven">
                        <i class="fa-solid fa-gear text-primary"></i> <span class="ms-2">Settings</span>
                    </button>
                    </h2>
                    <div id="collapseSeven" class="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionSettings">
                    <div class="accordion-body p-0 bg-white">
                        <router-link to="/settings/departments" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Departments</span>
                            </li>
                        </router-link>
                        <router-link to="#" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Form Template</span>
                            </li>
                        </router-link>
                        <router-link to="#" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Users</span>
                            </li>
                        </router-link>
                        <router-link to="#" class="row flex-no-wrap p-2 nav-item text-black" active-class="bg-third">
                            <li class="ms-4 mt-2 col-8">
                                <span class="f-14">Audit & Logs</span>
                            </li>
                        </router-link>
                    </div>
                    </div>
                </div>
                </div>

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