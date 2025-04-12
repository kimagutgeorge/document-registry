<template>
<div class=" with-max-height">
  <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Users"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
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
                      action: () => viewItem(itemId),
                      iconClass: 'text-primary'
                    },
                    edit: {
                      action: () => editItem(itemId),
                      iconClass: 'text-primary'
                    },
                    delete: {
                      action: () => deleteItem(itemId),
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
    export default{
        name: "AllUsers",
        components: { PageTitle, SubTitle, ActionButton},
        data(){
            return{
                users: [
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                    {
                        photo: '/profiles/profile.png', 
                        name: 'George Kimagut',
                        email: 'geojimagut@gmail.com',
                        role: 'Advocate',
                        dep: 'Legal',
                        status: 'Active',
                    },
                ]
            }
        }
    }
      
    </script>