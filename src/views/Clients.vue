<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <!-- <div class="row d-flex mx-2 no-margin">   
        <PageTitle page_name="Clients"/>
    </div> -->
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border rounded-0">
        
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <div class="col-12 d-flex mt-2">
          <div class="col-6">
            <SubTitle title="Clients" />
          </div>
          <div class="col-6 d-flex justify-content-end">
            <!-- <router-link to="/clients/add">
              <DefaultButton title="Add New" icon_class="fa-solid fa-plus"/>
            </router-link> -->
          </div>
        </div>
        <table class="table mt-4">

            <thead>
              <tr>
                <th hidden>#</th>
                <th>
                    Full Name
                </th>
                <th>Gender</th>
                <th>ID Number</th>
                <th>Occupation</th>
                <th>Contact Details</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody class="f-14">
              <tr v-for="(client, index) in clients" :key="index">
                <th hidden>{{client.id }}</th>
                <td>{{client.f_name }} {{ client.m_name }}  {{ client.l_name }}</td>
                <td>{{client.gender }}</td>
                <td>
                  <p class="text-muted f-14"><span class="text-dark custom-fw-bold">{{ client.id_type }}: </span>{{ client.id_number }}</p>
                </td>
                <td>{{ client.occupation }}</td>
                <td>
                  <p class="text-muted f-14"><span class="text-dark custom-fw-bold">Phone: </span>{{ client.phone }}</p>
                  <p class="text-muted f-14"><span class="text-dark custom-fw-bold">Email: </span>{{ client.email }}</p>
                </td>
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
// import PageTitle from '@/components/titles/PageTitle.vue';
import SubTitle from '@/components/titles/SubTitle.vue';
import ActionResponse from '@/components/Response.vue';
// import DefaultButton from '@/components/buttons/DefaultButton.vue';
    export default{
        name: "AllClients",
        components: { /*PageTitle, */ ActionButton, SubTitle, ActionResponse, /* DefaultButton */},
        data() {
          return {
            message: "",
            is_response_visible: false,
            response_class: null,
              showAlert: false,
              alertMessage: "Saved",
              clients: [
                {
                  id: 1,
                  f_name: 'George',
                  m_name: '',
                  l_name: 'Kimagut',
                  nationality: 'Kenyan',
                  gender: 'Male',
                  id_type: 'National ID',
                  id_number: '35298373',
                  occupation: 'Dev',
                  physical_address: 'Eldama Ravine',
                  postal_address: 'P.O. BOX 832 Kapsabet',
                  phone: '0700300983',
                  email: 'someone@example.com'
                },
                {
                  id: 2,
                  f_name: 'Grace',
                  m_name: 'Wanjiku',
                  l_name: 'Kuria',
                  nationality: 'Kenyan',
                  gender: 'Female',
                  id_type: 'Passport',
                  id_number: 'A12345678',
                  occupation: 'Lawyer',
                  physical_address: 'Nairobi',
                  postal_address: 'P.O. BOX 123 Nairobi',
                  phone: '0712345678',
                  email: 'grace.kuria@example.com'
                },
                {
                  id: 3,
                  f_name: 'Samuel',
                  m_name: 'Kipkoech',
                  l_name: 'Mutai',
                  nationality: 'Kenyan',
                  gender: 'Male',
                  id_type: 'National ID',
                  id_number: '28192345',
                  occupation: 'Teacher',
                  physical_address: 'Kericho',
                  postal_address: 'P.O. BOX 459 Kericho',
                  phone: '0723456789',
                  email: 'sam.mutai@example.com'
                },
                {
                  id: 4,
                  f_name: 'Fatuma',
                  m_name: 'Amina',
                  l_name: 'Mohamed',
                  nationality: 'Kenyan',
                  gender: 'Female',
                  id_type: 'National ID',
                  id_number: '33298712',
                  occupation: 'Engineer',
                  physical_address: 'Mombasa',
                  postal_address: 'P.O. BOX 998 Mombasa',
                  phone: '0798765432',
                  email: 'fatuma.m@example.com'
                },
                {
                  id: 5,
                  f_name: 'Daniel',
                  m_name: '',
                  l_name: 'Omondi',
                  nationality: 'Kenyan',
                  gender: 'Male',
                  id_type: 'Passport',
                  id_number: 'B9876543',
                  occupation: 'Pilot',
                  physical_address: 'Kisumu',
                  postal_address: 'P.O. BOX 765 Kisumu',
                  phone: '0743216789',
                  email: 'dan.omondi@example.com'
                },
                {
                  id: 6,
                  f_name: 'Joyce',
                  m_name: 'Chebet',
                  l_name: 'Cherono',
                  nationality: 'Kenyan',
                  gender: 'Female',
                  id_type: 'National ID',
                  id_number: '36781234',
                  occupation: 'Pharmacist',
                  physical_address: 'Nakuru',
                  postal_address: 'P.O. BOX 543 Nakuru',
                  phone: '0789123456',
                  email: 'joyce.cherono@example.com'
                },
                {
                  id: 7,
                  f_name: 'Elijah',
                  m_name: 'Otieno',
                  l_name: 'Ochieng',
                  nationality: 'Kenyan',
                  gender: 'Male',
                  id_type: 'National ID',
                  id_number: '29874561',
                  occupation: 'Electrician',
                  physical_address: 'Siaya',
                  postal_address: 'P.O. BOX 812 Siaya',
                  phone: '0734567890',
                  email: 'elijah.o@example.com'
                },
                {
                  id: 8,
                  f_name: 'Mary',
                  m_name: 'Atieno',
                  l_name: 'Okoth',
                  nationality: 'Kenyan',
                  gender: 'Female',
                  id_type: 'Passport',
                  id_number: 'C2233445',
                  occupation: 'Nurse',
                  physical_address: 'Busia',
                  postal_address: 'P.O. BOX 334 Busia',
                  phone: '0711223344',
                  email: 'mary.okoth@example.com'
                }
              ],
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