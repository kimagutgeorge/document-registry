<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Users" child_page_name=" / Add user"/>
    </div>
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative">
        <SubTitle title="Add User"/>
        <form class="row d-flex">
            <div class="col-6 p-4">
                <div class="form-group w-75 mt-4">
                    <div class="col-12 d-flex flex-no-wrap">
                        <div class="col-8">
                            <label class="text-secondary custom-fw-bold f-14">Profile</label>
                        <input type="file" accept="image/*" class="form-control" required @change="previewImage">
                        </div>
                        <div class="col-4 ms-4 mt-3">
                            <img v-if="profile_pic" :src="profile_pic" class="photo-preview"/>
                        </div>
                    </div>
                    
                    
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">First Name</label>
                    <input class="form-control" placeholder="John">
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Last Name</label>
                    <input class="form-control" placeholder="Doe">
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Email</label>
                    <input type="email" class="form-control" placeholder="johndoe@example.com">
                </div>
                <div class="form-group w-75 mt-4">
                        <p class="f-15 custom-fw-bold text-secondary">Phone Number</p>
                        <input type="number" class="form-control" placeholder="07000000">
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Password</p>
                    <div class="col-12 d-flex flex-no-wrap">
                        <input :type="input_type" class="form-control" placeholder="Password">
                        <span class="btn btn-primary" @click="viewPassword"><i class="fa-solid" :class="input_type === 'password' ? 'fa-eye' : 'fa-eye-slash' "></i></span>
                    </div>
                    
                </div>
            </div>
            <div class="col-6">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Role</label>
                    <select name="role" class="form-control">
                        <option>Admin</option>
                        <option>Registration Office</option>
                        <option>Advocate</option>
                        <option>Clerk</option>
                        <option>Normal User</option>
                      </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Department</label>
                    <select name="role" class="form-control">
                        <option>Legal</option>
                        <option>Lands</option>
                      </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Status</label>
                    <select name="status" class="form-control">
                        <option>Active</option>
                        <option>Inactive</option>
                      </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <button class="btn btn-primary">SAVE</button>
                </div>
            </div>
        </form>
        <ActionResponse message="Added successfully"/>
    </div>
    </div>
    </div>
    
    </template>
    <script>
    import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
import SubTitle from '@/components/titles/SubTitle.vue';
    export default{
        name: "AddUser",
        components: { PageTitle, ActionResponse, SubTitle},
        data() {
            return {
                input_type: "password",
                profile_pic: '',
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
            /* preview image*/
            previewImage(event){
                const file = event.target.files[0];
                if (file && file.type.match('image.*')) {
                    const reader = new FileReader();
                    
                    reader.onload = (e) => {
                    this.profile_pic = e.target.result;
                    };
                    
                    reader.readAsDataURL(file);
                } else {
                    this.profile_pic = '';
                }
            }
        }
    }
      
    </script>