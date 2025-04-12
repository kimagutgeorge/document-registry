<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Print Form"/>
    </div>
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border position-relative">
        <li class="text-dark px-2 custom-fw-bold f-14 sm-title mt-2">Print Form</li>
        <div class="row d-flex col-12 p-4">
            <div class="col-12 d-flex p-2">
                <div class="col-6">
                    <h2 class="custom-fw-bold text-third f-20">Kapenda LTD</h2>
                    <p class="text-dark f-15">Tom Mboya Street</p>
                    <p class="text-dark f-15">Nairobi, Kenya</p>
                    <p class="text-dark f-15">+254 759 200 998</p>
                </div>
                <div class="col-6 d-flex justify-content-end">
                    <h2 class="custom-fw-bold text-third f-22">ISSUANCE FORM</h2>
                </div>
            </div>
            <div class="col-12 d-flex mt-2 card form-card">
                <div class="col-12 d-flex flex-wrap p-2 border-bottom">
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark f-15">Document Name: </p>
                        <p class="text-dark f-15">Title Deed - Plot 42</p>
                    </div>
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark f-15">File Record No.: </p>
                        <p class="text-dark f-15">8892-KAP-KP</p>
                    </div>
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark f-15">Date of Request: </p>
                        <p class="text-dark f-15">10 April 2025</p>
                    </div>
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark f-15">Requested By: </p>
                        <p class="text-dark f-15">Advocate John Doe</p>
                    </div>
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark f-15">Requested For: </p>
                        <p class="text-dark f-15">Clerk Mary</p>
                    </div>
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark f-15">Type of Document: </p>
                        <p class="text-dark f-15">First-Time Request</p>
                    </div>
                </div>
                <div class="col-12 d-flex p-2 border-bottom">
                    <div class="col-12">
                        <p class="custom-fw-bold text-dark">Description: </p>
                        <p class="text-dark">
                            For land verification
                        </p>
                    </div>
                </div>
                <div class="col-12 d-flex flex-no-wrap p-2 border-bottom">
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark">Approved By: </p>
                    </div>
                    <div class="col-4">
                        <p class="text-dark">Jane W.</p>
                    </div>
                </div>
                <div class="col-12 d-flex flex-no-wrap p-2 border-bottom">
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark">Date of Approval: </p>
                    </div>
                    <div class="col-4">
                        <p class="text-dark">11 April 2024</p>
                    </div>
                </div>
                <div class="col-12 d-flex flex-no-wrap p-2 border-bottom">
                    <div class="col-4">
                        <p class="custom-fw-bold text-dark">Date of Issuance: </p>
                    </div>
                    <div class="col-4">
                        <p class="text-dark">11 April 2024</p>
                    </div>
                </div>
                <div class="col-12 d-flex flex-no-wrap p-2 border-bottom">
                        <p class="custom-fw-bold text-dark">Issued By : ...................................................</p>
                </div>
                <div class="col-12 d-flex flex-no-wrap p-2 border-bottom">
                        <p class="custom-fw-bold text-dark">Received By : ...................................................</p>
                </div>
                
            </div>
        </div>
        <div class="col-11 d-flex flex-no-wrap justify-content-end p-2">
            <button class="btn btn-primary">PRINT <i class="fa-solid fa-print text-white"></i></button>
        </div>
        <ActionResponse message="Added successfully"/>
    </div>
    </div>
    </div>
    </template>
    <script>
    import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
    export default{
        name: "PrintForm",
        components: { PageTitle, ActionResponse}
    }
      
    </script>