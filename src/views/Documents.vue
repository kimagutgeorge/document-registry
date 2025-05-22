<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">   
        <!-- <PageTitle page_name="Safe Registry"/> -->
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 rounded-0 no-border">
      <!-- <div class="row d-flex p-2">
        <div class="col-6">
          <!-- <SubTitle title="Safe" /> ->
        </div>
        <div class="col-6 d-flex justify-content-end">
          <router-link to="/documents/add" class="btn btn-primary">Add</router-link>
        </div>
      </div> -->
        
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <div class="col-12 d-flex flex-no-wrap justify-content-end mt-2 border-bottom" style="padding-bottom: 10px">
          <div class="p-1 d-flex justify-content-center ms-2" :class="main_panel === 'clients' ? 'bg-primary text-white' : 'text-primary'" @click="change_view('clients')" style="border:1px solid #2E5AEF; cursor:pointer;">
            <i class="fa-solid fa-users mt-1"></i> <span class="ms-2">Clients</span>
          </div>
          <div class="p-1 d-flex justify-content-center" :class="main_panel === 'files' ? 'bg-primary text-white' : 'text-primary'" @click="change_view('files')" style="border:1px solid #2E5AEF; cursor:pointer;">
            <i class="fa-solid fa-file mt-1"></i> <span class="ms-2">Files</span>
          </div>
        </div>
        <div class="col-12 d-flex flex-wrap mt-2 position-relative" v-if="main_panel === 'clients'">
          <div v-if="option_panel_view" class="position-absolute w-100 p-2 border d-flex" style="z-index: 400; background-color: rgb(245, 245, 245);">
              <div class="col-3 d-flex flex-no-wrap">
                <span><input type="checkbox" @click="select_all"></span>
                <span class="f-12 ms-4">{{ selected_items.length }} Item(s) Selected</span>
              </div>
              <div class="col-6 d-flex justify-content-center">
                <button class="p-1 border border-primary f-14 bg-transparent text-primary"><i class="fa-solid fa-paperclip"></i> Copy Link</button>
                <button class="p-1 border border-primary f-14 bg-transparent text-primary ms-2"><i class="fa-solid fa-download"></i> Download</button>
                <button class="p-1 border border-primary f-14 bg-transparent text-primary ms-2" @click="$emit('show_preview')" ><i class="fa-solid fa-eye"></i> Preview</button>
                <button class="p-1 border border-primary f-14 bg-transparent text-primary ms-2"><i class="fa-solid fa-angle-right"></i> Go To Location</button>
              </div>
              <div class="col-3 d-flex justify-content-end">
                <span class="p-1 text-black f-12 clear-btn" @click="clear_items('files')">Clear <i class="fa-solid fa-close"></i></span>
              </div>
          </div>
          <!-- users table -->
          <div class="col-12" v-if="files_shown === '' " >
              <table class="table">

            <thead>
              <tr>
                <th scope="col" hidden>#</th>
                <th scope="col">
                    Name
                </th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <!-- <th scope="col">Files</th> -->
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(client, index) in clients" :key="index">
                <th scope="row" hidden>{{client.id }}</th>
                <td>{{client.name }}</td>
                <td>{{client.phone }}</td>
                <td>{{client.email }}</td>
                <!-- <td>{{client.no_of_files }}</td> -->
                <td>
                  <ActionButton 
                  :dropdown_actions="{
                    view: {
                      action: () => show_files(client.name),
                      iconClass: 'text-primary'
                    },
                    add: {
                      action: () => show_files('add_file', client.name),
                      iconClass: 'text-primary'
                    }
                  }"
                />
                </td>
              </tr>
              
            </tbody>
          </table>
          </div>
          <div v-if="files_shown === 'client_docs' " class="col-12 p-2 rounded-1" >
            <div class="w-100 d-flex justify-content-end">
              <i class="fa-solid fa-close f-16 border border-primary text-primary p-1 " style="cursor:pointer;" @click="show_files('is_hidden')"></i>
            </div>
            <SubTitle :title="client_in_view"/>
            <div class="col-12 d-flex flex-wrap" >
            <SubTitle v-if="files.length < 1" :title="files.length < 1 ? 'Empty' : '' "/>
            <!-- preview files -->
            <div class="col-3 thumb-nail-holder p-2" v-for="(file, index) in files" :key="index" @click="select_item(index)">
              <div class="w-100 p-2" :class="file.is_selected ? 'custom_bg_hover border border-primary' : 'custom_bg' ">
                <div class="thumb-nail w-100 overflow-hidden">
                  <img :src="file.image_url" class="w-100 "/>
                </div>
                <div class="thumb-nail-text d-flex justify-content-center mt-2">
                    <input type="text" class="text-muted W-100 text-hidden p-2 f-14 bg-transparent border-0" :readonly="text_is_readonly" style="cursor:pointer;" :value="file.name"  />
                </div>
                
              </div>
            </div>
          </div>
          </div>
          <!-- add client files -->
          <div v-if="files_shown === 'add_file' " class="col-12 p-2 rounded-1" >
            <div class="w-100 d-flex justify-content-end">
              <i class="fa-solid fa-close f-16 border border-primary text-primary p-1 " style="cursor:pointer;" @click="show_files('is_hidden')"></i>
            </div>
            <SubTitle :title="client_in_view"/>
            <div class="col-12 d-flex flex-wrap" >
              <form class="w-100 row" @submit.prevent="addDocument">
                <div class="col-6">
                
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
        <!-- show folders and locations -->
        <div class="col-12 d-flex flex-wrap mt-2 position-relative" v-if="main_panel === 'files'">
          <div v-if="option_panel_view" class="position-absolute w-100 p-2 border d-flex" style="z-index: 400; background-color: rgb(245, 245, 245);">
              <div class="col-3 d-flex flex-no-wrap">
                <span><input type="checkbox" @click="select_all"></span>
                <span class="f-12 ms-4">{{ selected_items.length }} Item(s) Selected</span>
              </div>
              <div class="col-6 d-flex justify-content-center">
                <button class="p-1 border border-primary f-14 bg-transparent text-primary"><i class="fa-solid fa-paperclip"></i> Copy Link</button>
                <button class="p-1 border border-primary f-14 bg-transparent text-primary ms-2"><i class="fa-solid fa-download"></i> Download</button>
                <button class="p-1 border border-primary f-14 bg-transparent text-primary ms-2" @click="$emit('show_preview') "><i class="fa-solid fa-eye"></i> Preview</button>
                <button class="p-1 border border-primary f-14 bg-transparent text-primary ms-2"><i class="fa-solid fa-angle-right"></i> Go To Location</button>
              </div>
              <div class="col-3 d-flex justify-content-end">
                <span class="p-1 text-black f-12 clear-btn" @click="clear_items('files')">Clear <i class="fa-solid fa-close"></i></span>
              </div>
          </div>

          <div class="col-2" style="border-right:1px solid rgb(200, 200, 200); padding-right: 20px;">
            <SubTitle title="Locations" />
            <div class="w-100 d-flex flex-column safe-scrollars mt-4" style="max-height: 65vh; overflow-y:scroll">
              <div class="card bordered w-100 d-flex p-2 flex-row mt-2  position-relative" v-for="(location, index) in locations" :key="index" :class="current_location === index ? 'bg-danger' : '' " >
                <transition name="slide-fade">
                    <div v-if="active_location === index" class="d-block bg-primary notification-panel position-absolute p-2 mt-2 col-9">
                      <li class="text-white f-14" style="cursor:pointer;">Add Files <i class="fa-solid fa-plus text-white"></i></li>
                      <li class="text-white f-14 mt-2" style="cursor:pointer;" @click="delete_location(location.id)">Delete <i class="fa-solid fa-close text-white"></i></li>
                    </div>
                    
                  </transition>
                <div class="col-11 d-flex justify-content-center" @click="show_location_folders(location.name)" style="cursor:pointer;">
                  <span class="fw-bold fs-6">{{ location.name }}</span>
                </div>
                <div class="col-1 d-flex justify-content-end">
                  
                  <div class="options d-flex flex-column justify-content-center" style="cursor:pointer">
                    <i class="fa-solid f-10" :class="active_location === index ? 'fa-close  text-danger' : 'fa-ellipsis-vertical text-primary'" style="cursor:pointer;" @click="set_active_location(index)"></i>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <!-- folder column -->
          <div class="col-2"style="border-right:1px solid rgb(200, 200, 200); padding:0px 20px;">
            <SubTitle title="Folders" />
            <SubTitle :title="current_location" style="list-style:none" />
            <div class="w-100 d-flex flex-column safe-scrollars" style="max-height: 65vh; overflow-y:scroll">
              <SubTitle v-if="folders.length < 1" :title="folders.length < 1 ? 'Empty' : '' "/>
              <div class="card bordered w-100 d-flex p-2 flex-row mt-2  position-relative" v-for="(folder, index) in folders" :key="index">
                <transition name="slide-fade">
                    <div v-if="active_folder === index" class="d-block bg-primary notification-panel position-absolute p-2 mt-2 col-9">
                      <li class="text-white f-14" style="cursor:pointer;">Add Files <i class="fa-solid fa-plus text-white"></i></li>
                      <li class="text-white f-14 mt-2" style="cursor:pointer;" >Delete <i class="fa-solid fa-close text-white"></i></li>
                    </div>
                    
                  </transition>
                <div class="col-11 d-flex justify-content-center" style="cursor:pointer;" @click="show_folder_files(folder.name)">
                  <span class="fs-6">{{ folder.name }}</span>
                </div>
                <div class="col-1 d-flex justify-content-end">
                  
                  <div class="options d-flex flex-column justify-content-center" style="cursor:pointer">
                    <i class="fa-solid f-10 " :class="active_folder === index ? 'fa-close  text-danger' : 'fa-ellipsis-vertical text-primary'"  style="cursor:pointer;" @click="set_active_folder(index)"></i>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <!-- users table -->
          <div class="col-8 d-flex flex-wrap" style="max-height: 80vh; overflow-y:scroll;">
            <SubTitle v-if="files.length < 1" :title="files.length < 1 ? 'Empty' : '' "/>
            <!-- preview files -->
            <div class="col-4 thumb-nail-holder p-2" v-for="(file, index) in files" :key="index" @click="select_item(index)">
              <div class="w-100 p-2" :class="file.is_selected ? 'custom_bg_hover border border-primary' : 'custom_bg' ">
                <div class="thumb-nail w-100 overflow-hidden">
                  <img :src="file.image_url" class="w-100 "/>
                </div>
                <div class="thumb-nail-text d-flex justify-content-center mt-2">
                    <input type="text" class="text-muted W-100 text-hidden p-2 f-14 bg-transparent border-0" :readonly="text_is_readonly" style="cursor:pointer;" :value="file.name"  />
                </div>
                
              </div>
            </div>
          </div>
          
        </div>
        <!-- add files panel -->

    </div>
    </div>
    </div>
    </template>
    <script>
    import ActionButton from '@/components/buttons/ActionButton.vue';
    // import PageTitle from '@/components/titles/PageTitle.vue';
    import SubTitle from '@/components/titles/SubTitle.vue';
    import ActionResponse from '@/components/Response.vue';
    export default{
        name: "AllDocuments",
        components: { /* PageTitle, */ SubTitle, ActionResponse, ActionButton},
        data() {
          return {
            message: "",
            is_response_visible: false,
            response_class: null,
              showAlert: false,
              active_location: '',
              current_location:'',
              active_folder: '',
              main_panel: 'clients',
              files_shown: '',
              alertMessage: "Saved",
              text_is_readonly: true,
              selected_all: false,
              client_in_view: '',
              option_panel_view: false,
              selected_items: [],
              single_selected_item:'',
              clients: [
                {id: 1, name: "George Kimagut", phone: "0752 832 992", email: "someone@example.com", no_of_files: "4" },
                {id: 1, name: "John Doe", phone: "0712 234 283", email: "jdoe@example.com", no_of_files: "2"},
              ],
              locations: [
              {id: 1, name: 'L 1'},
              {id: 2, name: 'L 2'},
              {id: 3, name: 'L 3'},
              {id: 4, name: 'L 4'},
              {id: 5, name: 'L 5'},
              {id: 6, name: 'L 6'},
              {id: 7, name: 'L 7'},
              {id: 8, name: 'L 8'},
              {id: 9, name: 'L 9'},
              {id: 10, name: 'L 10'},
              {id: 11, name: 'L 11'},
              {id: 12, name: 'L 12'},
              ],
              folders: [
                {id: 1, name: 'Healthcare', parent_location: 'L 1'},
                {id: 2, name: 'Title Deeds', parent_location: 'L 1'},
                {id: 2, name: 'Divorce', parent_location: 'L 5'},
                {id: 3, name: 'Log Books', parent_location: 'L 3'},
                {id: 2, name: 'Title Deeds 4', parent_location: 'L 4'},
                {id: 2, name: 'Certificates', parent_location: 'L 3'},
                {id: 2, name: 'Title Deeds', parent_location: 'L 5'},
              ],
              all_folders: [
                  {id: 1, name: 'Healthcare', parent_location: 'L 1'},
                {id: 2, name: 'Title Deeds', parent_location: 'L 1'},
                {id: 2, name: 'Divorce', parent_location: 'L 5'},
                {id: 3, name: 'Log Books', parent_location: 'L 3'},
                {id: 2, name: 'Title Deeds 4', parent_location: 'L 4'},
                {id: 2, name: 'Certificates', parent_location: 'L 3'},
                {id: 2, name: 'Title Deeds', parent_location: 'L 5'},
              ], // back up folder,
              files: [
                {image_url: '/files/file.webp', name: 'Title Deed 5', parent_folder: 'Title Deeds', assigned_to:'', is_selected: false},
                {image_url: '/files/file-3.jpg', name: 'Kapekenda Land Documents', parent_folder: 'Healthcare', assigned_to:'', is_selected: false},
                {image_url: '/files/file-4.png', name: 'Legal Docs 20/23', parent_folder: 'Log Books', assigned_to:'', is_selected: false},
                {image_url: '/files/file-5.png', name: 'Title Deed 3', parent_folder: 'Healthcare', assigned_to:'', is_selected: false},
              ],
              all_files: [
                {image_url: '/files/file.webp', name: 'Title Deed 5', parent_folder: 'Title Deeds'},
                {image_url: '/files/file-3.jpg', name: 'Kapekenda Land Documents', parent_folder: 'Healthcare'},
                {image_url: '/files/file-4.png', name: 'Legal Docs 20/23', parent_folder: 'Log Books'},
                {image_url: '/files/file-5.png', name: 'Title Deed 3', parent_folder: 'Healthcare'},
              ]
            
          }
        },
        methods: {
          deleteItem(index){
            if(confirm('Delete this document?') === false) return;
            const doc = index;
            if (doc !== -1) {
                this.documents.splice(doc, 1);
            }
            this.response_class = "bg-danger"
            this.is_response_visible = true
            this.message = "Document deleted" 
          },
          closeAlert(){
                this.is_response_visible = false
            },
            viewItem(){
             this.$router.push('/documents/add')
            },
            set_active_location(index){
              if(this.active_location == index){
                this.active_location = ''
              }else{
                this.active_location = index
              }
              
            },
            set_active_folder(index){
              if(this.active_folder == index){
                this.active_folder = ''
              }else{
                this.active_folder = index
              }
              
            },
            show_location_folders(key){
              this.current_location = key
              this.folders = this.all_folders.filter(
              folder => folder.parent_location === key
            );
            },
            show_folder_files(key){
              this.current_location = key
              this.files = this.all_files.filter(
              file => file.parent_folder === key
            );
            },
            delete_location(key){
              if(confirm('Delete this Location') === false) return;
              this.locations = this.locations.filter(
                (location) => location.id != key
              );
              // hide options panel
              this.active_location = ''
            },
            change_view(key){
              this.main_panel = key
            },
            show_files(key, name){
              const key_name = key;

              if(key_name == 'is_hidden'){
                this.files_shown = ''
              }else if(key_name == 'add_file'){
                this.files_shown = 'add_file'
                this.client_in_view = name
              }else{
                this.client_in_view = key_name
                this.files_shown = 'client_docs'
              }
              
            },
            select_item(key) {
            if (this.files[key]) {
              this.option_panel_view = true;
              const was_selected = this.files[key].is_selected;

              // Toggle selection
              this.files[key].is_selected = !was_selected;

              if (was_selected) {
                // Deselect: remove one item
                this.selected_items.pop();
                if(this.selected_items.length < 1){
                  this.option_panel_view = false
                }
              } else {
                // Select: add this item
                this.selected_items.push({ item_index: key });
              }

            }
          },
            clear_items(key){
              if(key === 'files'){
                this.option_panel_view = false; 
                this.selected_items = []; 

                this.files.forEach(file => {
                    file.is_selected = false
                });
              }

            },
            select_all(){
              this.selected_all = !this.selected_all
              if(this.selected_all === true){
                this.selected_items = []; 
                this.files.forEach((file, index) => {
                    file.is_selected = true
                    this.selected_items.push({item_index: index})
                });
              }else{
                this.files.forEach(file => {
                    file.is_selected = false
                });
                  this.option_panel_view = false
                  this.selected_items = []; 
              }
              
            },
            add_files(key){
              this.main_panel = key
            },
            addDocument(){
                this.response_class = "bg-primary"
                this.is_response_visible = true
                this.message = "Added successfully"   
            }
        }
    }
      
    </script>