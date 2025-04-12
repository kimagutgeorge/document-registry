<template>
  <div class=" with-max-height">
    <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Reports" child_page_name=" / Documents"/>
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
          <div class="d-flex flex-no-wrap justify-content-end p-sort float-right">
              <p class="text-secondary f-15">Sort:</p>
          <select class=" f-15 ms-2" @change="changeReport" v-model="report_title">
              <option value="Inventory Report">Inventory Report</option>
              <option value="Movement Report">Movement Report</option>
              <option>Overdue Documents Reports</option>
          </select>
          </div>
          
      </div>
        <table class="table">
            <thead>
              <!-- inventory report -->
              <tr v-if="report_title === 'Inventory Report' ">
                <th scope="col f-15">Name</th>
                <th scope="col f-15">
                  No.
                </th>
                <th scope="col f-15">Type</th>
                <th scope="col f-15">Status</th>
                <th scope="col f-15">Last Issued To</th>
                <th scope="col f-15">Last Return Date</th>
              </tr>
              <tr v-if="report_title === 'Movement Report' ">
                <!-- document movement -->
                <th class="f-15">Name</th>
                <th class="f-15">No.</th>
                <th class="f-15">Requested By</th>
                <th class="f-15">Date of Request</th>
                <th class="f-15">Approved By</th>
                <th class="f-15">Date of Issuance</th>
                <th class="f-15">Returned By</th>
                <th class="f-15">Date Returned</th>
                <th class="f-15">Current Location</th>
              </tr>
              
            </thead>
            <tbody  v-if="report_title === 'Inventory Report' " >
              <tr v-for="(inventory, index) in inventory_data" :key="index">
                <td class="f-14">{{inventory.name}}</td>
                <td class="f-14">{{inventory.no}}</td>
                <td class="f-14">{{inventory.type}}</td>
                <td class="f-14">{{inventory.status}}</td>
                <td class="f-14">{{inventory.issued_to}}</td>
                <td class="f-14">
                  {{inventory.last_issue_date}}
                </td>
              </tr>
            </tbody>
            <tbody  v-if="report_title === 'Movement Report' " >
              <tr v-for="(movement, index) in movement_data" :key="index">
                <td class="f-14">{{movement.name}}</td>
                <td class="f-14">{{movement.no}}</td>
                <td class="f-14">{{movement.requested_by}}</td>
                <td class="f-14">{{movement.date_of_request}}</td>
                <td class="f-14">{{movement.approved_by}}</td>
                <td class="f-14">{{movement.date_of_issuance}}</td>
                <td class="f-14">{{movement.returned_by}}</td>
                <td class="f-14">{{movement.date_of_return}}</td>
                <td class="f-14">
                  {{movement.current_location}}
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
        name: "DocumentReports",
        components: { PageTitle},
        data(){
          return {
            report_title: 'Inventory Report',
            inventory_data: [
              {name: 'Document Twenty',
                no: '024/1',
                type: 'Log book',
                status: 'First Time',
                issued_to : 'George Kimagut',
                last_issue_date: '10.04.2025'
              },
              {name: 'Document 34',
                no: '2024/2/34',
                type: 'Title Deed',
                status: 'Return',
                issued_to : 'Daniel Dambuki',
                last_issue_date: '10.04.2025'
              }
            ],
            movement_data: [
              {name: 'Document 34',
                no: '2024/2/34',
                requested_by: 'Title Deed',
                date_of_request: '04.04.2025',
                approved_by : 'Daniel Dambuki',
                date_of_issuance: '10.04.2025',
                returned_by: 'Kipkorir Jackson',
                date_of_return: '10.04.2025',
                current_location: 'Safe',
              }
            ]
          }
        }
    }
      
    </script>