<template>
<div class="w-100 position-absolute bg-third" style="z-index: 1001; margin-top: calc(9vh - 3px); height: 88vh; ">
        <div class="w-100 h-100 bg-transparent ">
            <div class=" border-0 rounded-0 p-2">
                <div class="d-flex p-2">
                    <div class="col-6">
                        <h4 class="fs-6">{{file_name}}</h4>
                        <p class="f-14"><span><i class="fa-solid fa-server text-primary"></i> {{ location }}</span> > <span> <i class="fa-solid fa-folder text-primary"></i> {{ folder }}</span></p>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <button class="p-1 border border-primary f-12 bg-transparent text-primary" style="height:fit-content" @click="display_properties"><i class="fa-solid" :class="show_properties === true ? 'fa-close text-danger' : 'fa-list' "></i> Details</button>
                        <button class="p-1 border border-primary f-12 bg-transparent text-primary ms-2" style="height:fit-content"><i class="fa-solid fa-download"></i> Download</button>
                        <button class="p-1 border border-primary f-12 bg-transparent text-primary ms-2" style="height:fit-content"><i class="fa-solid fa-paperclip"></i> Copy Link</button>
                        <i class="fa-solid fa-close p-1 fs-6 border-primary border text-primary ms-2" style="height:fit-content; cursor: pointer;" @click="$emit('close_preview') "></i>
                    </div>
                </div>
                  <!-- properties tab -->
                     <div v-if="show_properties" class="card p-2 bg-third rounded-0 position-absolute" style="z-index: 100; width: 300px; left: calc(100% - 300px); height: 75vh;">
                        <h4 class="fs-6 mt-4">{{file_name}}</h4>
                        <h4 class="f-14 mt-4">Location</h4>
                        <p class="f-14"><span><i class="fa-solid fa-server text-primary"></i> {{ location }}</span> > <span> <i class="fa-solid fa-folder text-primary"></i> {{ folder }}</span></p>

                        <h4 class="f-14 mt-4">Assigned To</h4>
                        <p class="f-14"><i class="fa-solid fa-user text-primary"></i> {{ assigned_to }}</p>
                        <h4 class="f-14 mt-4">Reg. Time</h4>
                        <p class="f-14"><i class="fa-solid fa-calendar text-primary"></i> {{ reg_time }}</p>
                        <h4 class="f-14 mt-4">Description</h4>
                        <p class="f-14">{{ description }}</p>
                     </div>
                <!-- main-body -->
                 
                <div class="preview-body bg-white w-100 d-flex justify-content-center position-relative" style="height: 75vh; max-height: 75vh; overflow-y:scroll">
                  
                    <div class="col-8 card rounded-0 border-top-0 border-bottom-0 p-1 border-right border-left" style="height: fit-content;">
                        <img src="/files/file-4.png"  class="w-100" />
                    </div>
                </div>
        </div>
    </div>
    
</div>
</template>
<script>
// import SubTitle from './titles/SubTitle.vue';
export default{
    name: 'DarkPage',
    //  components: {SubTitle},
     data(){
        return{
            location: 'L 1',
            folder: 'Healthcare',
            file_name: 'Title Deed Vipingo',
            assigned_to: 'Albert Shehi',
            show_properties: false,
            reg_time: 'Jan 9, 8:48 AM',
            description: 'Land Titles for pending vipingo case'
        }
     },
     methods:{
        display_properties(){
            this.show_properties = !this.show_properties;
        }
     }
    // props: [{location: String, folder: String, file_name}]
}
</script>