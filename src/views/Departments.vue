<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Settings/Departments"/>
    </div>
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative">
        <SubTitle title="Add Department"/>
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
        <div class="row d-flex">
            <div class="col-4 p-4">
                <form @submit.prevent="saveRole">
                <div class="form-group w-90 mt-4">
                        <p class="f-15 custom-fw-bold text-secondary">Department Name</p>
                        <input type="text" class="form-control" placeholder="Registration" required>
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
        name: "UserDepartments",
        components: { PageTitle, ActionResponse, SubTitle, DefaultTable},
        data() {
          
    return {
      message: "",
      is_response_visible: false,
      response_class: null,
        showAlert: false,
        alertMessage: "Saved",
      tableHeaders: [
        { text: '#', key: 'id' },
        { text: 'Department Name', key: 'name' },
      ],
      tableData: [
        { id: 1, name: 'Clerk' },
        { id: 2, name: 'Registration Office'}
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
      this.response_class = "bg-primary"
      this.is_response_visible = true
      this.message = "Added successfully" 
    },
    closeAlert(){
                this.is_response_visible = false
            },
            deleteUser(id){
              if(confirm('Delete this department?') === false) return;
            const dep = id;
            if (dep !== -1) {
                this.tableData.splice(dep, 1);
            }
            this.response_class = "bg-danger"
            this.is_response_visible = true
            this.message = "Department deleted" 
            }
  }
}
</script>