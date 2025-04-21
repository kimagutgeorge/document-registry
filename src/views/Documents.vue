<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">   
        <PageTitle page_name="Documents"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
        <SubTitle title="All Documents" />
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <table class="table">

            <thead>
              <tr>
                <th scope="col"># File No.</th>
                <th scope="col">
                    Doc. Name
                </th>
                <th scope="col">Type</th>
                <th scope="col">Status</th>
                <th scope="col">In Safe</th>
                <th scope="col">Last Movement</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(doc, index) in documents" :key="index">
                <th scope="row">{{doc.id }}</th>
                <td>{{doc.name }}</td>
                <td>{{doc.type }}</td>
                <td>{{doc.status }}</td>
                <td><i class="fa-solid fa-check status-check bg-primary text-white"></i></td>
                <td>Apr 3</td>
                <td>
                  <ActionButton 
                  :dropdown_actions="{
                    view: {
                      action: () => viewItem(index),
                      iconClass: 'text-primary'
                    },
                    delete: {
                      action: () => deleteItem(index),
                      iconClass: 'text-danger'
                    }
                  }"
                />
                </td>
              </tr>
              
            </tbody>
          </table>
    </div>
    </div>
    </div>
    </template>
    <script>
    import ActionButton from '@/components/buttons/ActionButton.vue';
import PageTitle from '@/components/titles/PageTitle.vue';
import SubTitle from '@/components/titles/SubTitle.vue';
import ActionResponse from '@/components/Response.vue';
    export default{
        name: "AllDocuments",
        components: { PageTitle, ActionButton, SubTitle, ActionResponse},
        data() {
          return {
            message: "",
            is_response_visible: false,
            response_class: null,
              showAlert: false,
              alertMessage: "Saved",
              documents: [
                {id: "2024/1", name: "Document Twenty", type: "Log book", last_movement: "Apr 3"},
                {id: "2024/2", name: "Title Deep Kapkenda", type: "Title deed", last_movement: "Apr 10"},
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
            }
        }
    }
      
    </script>