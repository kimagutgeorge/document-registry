<template>
  <div class=" with-max-height">
    <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Reports" child_page_name=" / Returns & Issuance"/>
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
              <option value="Issuance Log">Issuance Log</option>
              <option value="Return Log">Return Log</option>
          </select>
          </div>
          
      </div>
        <table class="table">
            <thead>
              <!-- inventory report -->
              <tr v-if="report_title === 'Issuance Log' ">
                <th class="f-15">Document</th>
                <th class="f-15">File Number</th>
                <th class="f-15">Issued To</th>
                <th class="f-15">Date Issued</th>
                <th class="f-15">Issued By</th>
                <th class="f-15">Remarks</th>
              </tr>
              <tr v-if="report_title === 'Return Log' ">
                <!-- document movement -->
                <th class="f-15">Document</th>
                <th class="f-15">File Number</th>
                <th class="f-15">Returned By</th>
                <th class="f-15">Date Returned</th>
                <th class="f-15">Received By</th>
                <th class="f-15">Remarks</th>
              </tr>
              
            </thead>
            <tbody  v-if="report_title === 'Issuance Log' " >
              <tr v-for="(issuance, index) in issuance_data" :key="index">
                <td class="f-14">{{issuance.name}}</td>
                <td class="f-14">{{issuance.no}}</td>
                <td class="f-14">{{issuance.issued_to}}</td>
                <td class="f-14">{{issuance.date_of_issuance}}</td>
                <td class="f-14">{{issuance.issued_by}}</td>
                <td class="f-14">
                  {{issuance.remarks}}
                </td>
              </tr>
            </tbody>
            <tbody  v-if="report_title === 'Return Log' " >
              <tr v-for="(rerturn, index) in return_data" :key="index">
                <td class="f-14">{{rerturn.name}}</td>
                <td class="f-14">{{rerturn.no}}</td>
                <td class="f-14">{{rerturn.issued_to}}</td>
                <td class="f-14">{{rerturn.date_of_issuance}}</td>
                <td class="f-14">{{rerturn.received_by}}</td>
                <td class="f-14">{{rerturn.remarks}}</td>
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
        name: "ReturnIssuance",
        components: { PageTitle},
        data(){
          return {
            report_title: 'Issuance Log',
            issuance_data: [
              {
                name: 'Document Twenty',
                no: '024/1',
                issued_to: 'George Kimagut',
                date_of_issuance: '2024/2/34',
                issued_by : 'John Doe',
                remarks: 'court session'
              },
              {
                name: 'Title Deed 43',
                no: 'H2-3SHC/23',
                issued_to: 'Jackson Agema',
                date_of_issuance: '2024/2/34',
                issued_by : 'John Doe',
                remarks: 'court session'
              }
            ],
            return_data: [
                {
                name: 'Document Twenty',
                no: 'H2-3SHC/23',
                issued_to: 'Jackson Agema',
                date_of_issuance: '2024/2/34',
                received_by : 'John Doe',
                remarks: 'court session'
              }
            ]
          }
        }
    }
      
    </script>