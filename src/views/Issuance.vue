<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Issuance"/>
    </div>
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative">
        <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">Issuance</li>
        <form class="row d-flex">
            <div class="col-6 p-4">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Name</label>
                    <input class="form-control" placeholder="Document Name" value="Title Deed 43" readonly>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">File Record No.</label>
                    <input class="form-control" placeholder="2025/28" value="2025/28" readonly>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Requested By</label>
                    <input class="form-control" placeholder="John Doe" value="John Doe" readonly>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Collecting Person</label>
                    <select class="form-control">
                        <option >Daniel Mbaraki</option>
                        <option >John Mbugi</option>
                    </select>
                </div>
                
            </div>
            <div class="col-6">
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Upload Issuance Form</label>
                    <input type="file" class="form-control" placeholder="2025/28">
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Remarks</label>
                    <textarea class="form-control vh-20" placeholder="Remarks"></textarea>
                </div>
                <div class="form-group w-75 mt-4">
                    <button class="btn btn-primary">SAVE</button>
                </div>
            </div>
        </form>
        <ActionResponse message="Added successfully"/>
    </div>
    </div>
    </div>
    </template>
    <script>
    import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
    export default{
        name: "DocumentIssuance",
        components: { PageTitle, ActionResponse}
    }
      
    </script>