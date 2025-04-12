<template>
  <div class=" with-max-height">
    <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Logs"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
        <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">Audit Logs</li>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Document Name</th>
                <th scope="col">File Number</th>
                <th scope="col">User</th>
                <th scope="col">Role</th>
                <th scope="col">Date & Time</th>
                <th scope="col">Action</th>
                <th scope="col">Remarks</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="f-15">Title Deed</td>
                <td class="f-15">8892-KAP-KP</td>
                <td class="f-15">John Advocate</td>
                <td class="f-15">Advocate</td>
                <td class="f-15">10-Apr-2025 14:21</td>
                <td class="f-15">Requested</td>
                <td class="f-15">Requesting for court submission</td>
                <td class="f-15"><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td class="f-15">Title Deed</td>
                <td class="f-15">8892-KAP-KP</td>
                <td class="f-15">Jane W.</td>
                <td class="f-15">Registration Office</td>
                <td class="f-15">10/4/2025 15:10</td>
                <td class="f-15">Approved</td>
                <td class="f-15">Document checked and cleared</td>
                <td class="f-15"><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
              </tr>
              <tr>
                <td  class="f-15" >Log book</td>
                <td  class="f-15" >8892-KAP-DP</td>
                <td  class="f-15" >Jane W.</td>
                <td  class="f-15" >Registration Office</td>
                <td  class="f-15" >10/4/2025 15:11</td>
                <td  class="f-15" >Approved</td>
                <td  class="f-15" >Document checked and cleared</td>
                <td  class="f-15" ><button class="btn btn-primary f-15">View</button> </td>
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
        name: "AuditLogs",
        components: { PageTitle}
    }
      
    </script>