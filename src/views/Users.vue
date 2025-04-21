<template>
<div class=" with-max-height">
  <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Users"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
      <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <SubTitle title="All Users"/>
        <table class="table">
            <thead>
              <tr>
                <th scope="col f-14">Photo</th>
                <th scope="col f-14">Full Name</th>
                <th scope="col f-14">Email</th>
                <th scope="col f-14">Role</th>
                <th scope="col f-14">Department</th>
                <th scope="col f-14">Status</th>
                <th scope="col f-14">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td class="f-14"><img class="user-icon" :src="user.photo"/></td>
                <td class="f-14">{{ user.name }}</td>
                <td class="f-14">{{ user.email }}</td>
                <td class="f-14">{{ user.role }}</td>
                <td class="f-14">{{ user.dep }}</td>
                <td class="f-14">{{ user.status }}</td>
                <td class="f-14">
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
        name: "AllUsers",
        components: { PageTitle, SubTitle, ActionButton, ActionResponse},
        data(){
            return{
              message: "",
              is_response_visible: false,
              response_class: null,
                users: [
                  {
                    photo: '/profiles/profile.png', 
                    name: 'Faith Njeri',
                    email: 'faith.njeri@example.com',
                    role: 'Advocate',
                    dep: 'Legal',
                    status: 'Active',
                },
                {
                    photo: '/profiles/profile2.png', 
                    name: 'Brian Otieno',
                    email: 'brian.otieno@example.com',
                    role: 'Clerk',
                    dep: 'Lands',
                    status: 'Active',
                },
                {
                    photo: '/profiles/profile3.png', 
                    name: 'Alice Wambui',
                    email: 'alice.wambui@example.com',
                    role: 'Advocate',
                    dep: 'Legal',
                    status: 'Active',
                },
                {
                    photo: '/profiles/profile.png', 
                    name: 'Kevin Mutiso',
                    email: 'kevin.mutiso@example.com',
                    role: 'Advocate',
                    dep: 'Legal',
                    status: 'Active',
                },
                {
                    photo: '/profiles/profile4.png', 
                    name: 'Sarah Chebet',
                    email: 'sarah.chebet@example.com',
                    role: 'Advocate',
                    dep: 'Legal',
                    status: 'Active',
                },
                {
                    photo: '/profiles/profile5.png', 
                    name: 'John Mwangi',
                    email: 'john.mwangi@example.com',
                    role: 'Advocate',
                    dep: 'Legal',
                    status: 'Active',
                },
                {
                    photo: '/profiles/profile.png', 
                    name: 'Mercy Achieng',
                    email: 'mercy.achieng@example.com',
                    role: 'Advocate',
                    dep: 'Legal',
                    status: 'Active',
                }

                ]
            }
        },
        methods: {
          deleteItem(index){
            if(confirm('Delete this user?') === false) return;
            const user = index;
            if (user !== -1) {
                this.users.splice(user, 1);
            }
            this.response_class = "bg-danger"
            this.is_response_visible = true
            this.message = "User deleted" 
          },
          closeAlert(){
                this.is_response_visible = false
            },
            viewItem(){
             this.$router.push('/users/add')
            }
        }
    }
      
    </script>