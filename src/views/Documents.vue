<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex mx-2 no-margin">
        
        <PageTitle page_name="Documents"/>
    </div>
    <div class="card w-100 d-flex w-100 px-2 mt-2 no-border">
        <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">All Documents</li>
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
              <tr>
                <th scope="row">2024/1</th>
                <td>Document twenty</td>
                <td>Log book</td>
                <td>First time</td>
                <td><i class="fa-solid fa-check status-check bg-primary text-white"></i></td>
                <td>Apr 3</td>
                <td>
                  <ActionButton 
                  :dropdown_actions="{
                    view: {
                      action: () => viewItem(itemId),
                      iconClass: 'text-primary'
                    },
                    return: {
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
    export default{
        name: "AllDocuments",
        components: { PageTitle, ActionButton}
    }
      
    </script>