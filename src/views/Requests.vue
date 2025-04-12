<template>
  <div class=" with-max-height">
    <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Requests"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
        <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">All Requests</li>
        <div class="col-12 d-flex flex-row-reverse">
            <div class="d-flex flex-no-wrap justify-content-end p-sort float-right">
                <p class="text-secondary f-15">Sort:</p>
            <select class=" f-15 ms-2">
                <option>All</option>
                <option>Pending</option>
                <option>Approved</option>
                <option>Rejected</option>
            </select>
            </div>
            
        </div>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">Doc. Name</th>
                <th scope="col">
                    Requested By
                </th>
                <th scope="col">Date Requested</th>
                <th scope="col">Download issuance</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Document twenty</td>
                <td>John Doe</td>
                <td>Apr 5</td>
                <td><i class="fa-solid fa-download"></i></td>
                <td>
                  <ActionButton 
                  :dropdown_actions="{
                    approve: {
                      action: () => viewItem(itemId),
                      iconClass: 'text-primary'
                    },
                    reject: {
                      action: () => editItem(itemId),
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
    import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionButton from '@/components/buttons/ActionButton.vue';
    export default{
        name: "AllRequests",
        components: { PageTitle, ActionButton}
    }
      
    </script>