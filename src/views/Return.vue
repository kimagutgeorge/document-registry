<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Return"/>
    </div>
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative">
        <SubTitle title="Return"/>
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <form class="row d-flex" @submit.prevent="return_document">
            <div class="col-6 p-4">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Name</label>
                    <input class="form-control" placeholder="Document Name" value="Title Deed 43" readonly>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">File Record No.</label>
                    <input class="form-control" placeholder="2025/28" value="2025/28" readonly>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Returned By</label>
                    <input class="form-control" placeholder="John Doe" value="John Doe" readonly>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Returning Person</label>
                    <select class="form-control">
                        <option >Daniel Mbaraki</option>
                        <option >John Mbugi</option>
                    </select>
                </div>
                
            </div>
            <div class="col-6">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Upload Return Form</label>
                    <input type="file" class="form-control" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Remarks</label>
                    <textarea class="form-control vh-20" placeholder="Remarks" required></textarea>
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
        name: "DocumentReturn",
        components: { PageTitle, ActionResponse, SubTitle},
        data(){
            return{
                message: "",
                is_response_visible: false,
                response_class: null
            }
        },
        methods: {
            return_document(){
                this.response_class = "bg-primary"
                this.is_response_visible = true
                this.message = "Successful"  
            },
            closeAlert(){
                this.is_response_visible = false
            },
        }
    }
      
    </script>