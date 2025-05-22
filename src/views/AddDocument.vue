<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <!-- <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Documents" child_page_name=" / Add Documents"/>
    </div> -->
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative with-max-height">
        <SubTitle title="Add Document"/>
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <form class="row d-flex" @submit.prevent="addDocument">
            <div class="col-6 p-4">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Name</label>
                    <input class="form-control" placeholder="Document Name" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">File Record No.</label>
                    <input class="form-control" placeholder="2025/28" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Location</label>
                    <select class="form-control" onfocus='this.size=10;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();'>
                        <option>L 1</option>
                        <option>L 2</option>
                        <option>L 3</option>
                        <option>L 4</option>
                        <option>L 5</option>
                        <option>L 6</option>
                        <option>L 7</option>
                        <option>L 8</option>
                        <option>L 9</option>
                        <option>L 10</option>
                    </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Type of Document</label>
                    <select class="form-control" onfocus='this.size=3;' onblur='this.size=1;' 
                        onchange='this.size=1; this.blur();'>
                        <option>Title Deed</option>
                        <option>Log Books</option>
                        <option>Healthcare</option>
                    </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Assign To</label>
                    <select class="form-control" onfocus='this.size=5;' onblur='this.size=1;' 
                        onchange='this.size=1; this.blur();'>
                        <option>Daniel Omondi</option>
                        <option>Fatima Amina Mohammed</option>
                        <option>Samule Kipkoech</option>
                        <option>Denis Kimosop</option>
                        <option>Mwangi Hellen</option>
                    </select>
                </div>
                
            </div>
            <div class="col-6">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Scan Upload</label>
                    <input type="file" class="form-control" placeholder="2025/28" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Description</label>
                    <textarea class="form-control vh-20" placeholder="Document description" required></textarea>
                </div>
                <div class="form-group w-75 mt-4">
                    <button class="btn btn-primary">SAVE</button>
                </div>
            </div>
        </form>
        
    </div>
    </div>
    </div>
    </template>
    <script>
    // import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
import SubTitle from '@/components/titles/SubTitle.vue';
    export default{
        name: "AddDocument",
        components: { /* PageTitle, */ ActionResponse, SubTitle},
        data(){
            return{
                message: "",
                is_response_visible: false,
                response_class: null
            }
        },
        methods: {
            closeAlert(){
                this.is_response_visible = false
            },
            addDocument(){
                this.response_class = "bg-primary"
                this.is_response_visible = true
                this.message = "Added successfully"   
            }
        }
    }
      
    </script>