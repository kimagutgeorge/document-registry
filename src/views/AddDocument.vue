<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Documents" child_page_name=" / Add Documents"/>
    </div>
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
                    <label class="text-secondary custom-fw-bold f-14">Type of Document</label>
                    <select class="form-control" required>
                        <option >Title Deed</option>
                        <option >Log books</option>
                    </select>
                </div>
                <div class="form-group w-75 mt-4 d-flex">
                    <div class="col-6 d-flex flex-column justify-content-center">
                        <p class="f-15 custom-fw-bold text-secondary">Is Document Physical?</p>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                          </label>
                    </div>
                    
                </div>
                <div class="form-group w-75 mt-4 d-flex">
                    <div class="col-6 d-flex flex-column justify-content-center">
                        <p class="f-15 custom-fw-bold text-secondary">Is Document 
                            Virtual?</p>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <label class="switch">
                            <input type="checkbox" checked>
                            <span class="slider round"></span>
                          </label>
                    </div>
                    
                </div>
            </div>
            <div class="col-6">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Scan Upload</label>
                    <input type="file" class="form-control" placeholder="2025/28" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Attachment</label>
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
    import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
import SubTitle from '@/components/titles/SubTitle.vue';
    export default{
        name: "AddDocument",
        components: { PageTitle, ActionResponse, SubTitle},
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