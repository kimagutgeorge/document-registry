<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Settings/Roles"/>
    </div>
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative">
        <SubTitle title="Roles"/>
        <div class="row d-flex">
            <div class="col-4 p-4">
                <form @submit.prevent="saveRole">
                <div class="form-group w-90 mt-4">
                        <p class="f-15 custom-fw-bold text-secondary">Role Name</p>
                        <input type="text" class="form-control" placeholder="Advocate" required>
                </div>
                <div class="form-group w-75 mt-2">
                    <button class="btn btn-primary">SAVE</button>
                </div>
            </form>
            </div>
            <div class="col-8">
                <!-- roles table -->
                <DefaultTable
                    :headers="tableHeaders"
                    :rows="tableData"
                    :actions="tableActions"
                    :editable-fields="['name', 'email']"
                    @action="handleTableAction"
                    @edit="handleTableEdit"
                />
            </div>
        </div>
        <ActionResponse 
            v-if="showAlert"
            :message="alertMessage"
            @close_alert="handleAlertClose"
        />
    </div>
    </div>
    </div>
    
    </template>
    <script>
    import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
    import SubTitle from '@/components/titles/SubTitle.vue';
    import DefaultTable from '@/components/Tables/Tables.vue'
    export default{
        name: "userRoles",
        components: { PageTitle, ActionResponse, SubTitle, DefaultTable},
        data() {
    return {
        showAlert: false,
        alertMessage: "Saved",
      tableHeaders: [
        { text: '#', key: 'id' },
        { text: 'Role Name', key: 'name' },
      ],
      tableData: [
        { id: 1, name: 'John Doe' },
        { id: 2, name: 'Jane Smith'}
      ],
      tableActions: [
        {
          name: 'delete',
          handler: (row) => this.deleteUser(row.id),
          iconClass: 'text-danger'
        }
      ]
    }
  },
  methods: {
    handleTableAction(actionName, row) {
      console.log('Action:', actionName, 'on row:', row);
    },
    handleTableEdit({row, field, oldValue, newValue}) {
      console.log('Field edited:', field);
      console.log('Old value:', oldValue);
      console.log('New value:', newValue);
      
      // Call your API to save changes
      this.updateUserField(row.id, field, newValue);
    },
    updateUserField(id, field, value) {
      // Your API call to save the edited value
      console.log(`Updating user ${id}, field ${field} to ${value}`);
    },
    saveRole(){
        setTimeout(() => {
            this.showAlert = true;
        }, 500);
    },
    handleAlertClose() {
        this.showAlert = false;
    }
  }
}
</script>