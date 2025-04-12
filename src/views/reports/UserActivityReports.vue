<template>
  <div class=" with-max-height">
    <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Reports" child_page_name=" / User Activity"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
        <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">{{report_title}}</li>
        <div class="col-12 d-flex flex-row-reverse">
            <div class="d-flex flex-no-wrap justify-content-end p-export float-right">
                <select class=" f-15 ms-2">
                    <option value="Inventory Report">Export ESV</option>
                    <option value="Movement Report">Export PDF</option>
                </select>
                </div>
          
      </div>
        <table class="table">
            <thead>
              <!-- inventory report -->
              <tr>
                <th class="col f-15">User Name</th>
                <th class="col f-15">Role</th>
                <th class="col f-15">Action Performed</th>
                <th class="col f-15">Timestamp</th>
                <th class="col f-15">Related Document</th>
                <th class="col f-15">Description/Narration</th>
              </tr>
              
            </thead>
            <tbody>
              <tr v-for="(user, index) in users" :key="index">
                <td class="f-14">{{user.name}}</td>
                <td class="f-14">{{user.role}}</td>
                <td class="f-14">{{user.action_performed}}</td>
                <td class="f-14">{{user.time_stamp}}</td>
                <td class="f-14">
                    <span class="f-14"  v-for="(document, index) in user.related_documents" :key="index">{{document.doc_name}}, </span>
                    </td>
                <td class="f-14">
                  {{user.description}}
                </td>
              </tr>
            </tbody>
          </table>
    </div>
    </div>
    </div>
    </template>
    <script>
    import PageTitle from '@/components/titles/PageTitle.vue';
    export default{
        name: "UserActivityReports",
        components: { PageTitle},
        data(){
          return {
            report_title: 'Inventory Report',
            users: [
              {name: 'Document Twenty',
                role: 'Advocate',
                action_performed: 'Request',
                time_stamp: 'Thu, 10 Apr 2025 13:54:56 GMT',
                related_documents : [
                    {doc_name: 'Title Deed 8'},
                    {doc_name: 'Document 4'}
                ],
                description: 'Some description here',
              },
              {name: 'Document Twenty',
                role: 'Advocate',
                action_performed: 'Login',
                time_stamp: 'Thu, 10 Apr 2025 13:54:56 GMT',
                related_documents : [
                    {doc_name: 'Title Deed 8'},
                    {doc_name: 'Document 4'}
                ],
                description: 'Some description here',
              },
              {name: 'Document Twenty',
                role: 'Advocate',
                action_performed: 'Request',
                time_stamp: 'Thu, 10 Apr 2025 13:54:56 GMT',
                related_documents : [
                    {doc_name: 'Title Deed 8'},
                    {doc_name: 'Document 4'}
                ],
                description: 'Some description here',
              }
              
            ],
          }
        }
    }
      
    </script>