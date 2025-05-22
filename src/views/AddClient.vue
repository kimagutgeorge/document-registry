<template>
    <div class=" with-max-height">
        <div class="with-max-height-inner">
    <!-- <div class="row d-flex px-2 no-margin">
        <PageTitle page_name="Clients" child_page_name=" / Add Client"/>
    </div> -->
    <div class="card w-100 d-flex w-100 p-4 mt-2 no-border bordered-0 position-relative">
        <SubTitle title="Add Client"/>
        <form class="row d-flex" @submit.prevent="addClient">
            <div class="col-6 p-4">
                <div class="form-group w-75">
                    <SubTitle title="Client Details"/>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">First Name</label>
                    <input class="form-control" placeholder="First Name" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Middle Name</label>
                    <input class="form-control" placeholder="Middle Name" >
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Last Name</label>
                    <input class="form-control" placeholder="Last Name" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <label class="text-secondary custom-fw-bold f-14">Nationality</label>
                    <select class="form-control" name="county" onfocus='this.size=10;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();' required>
                <!-- Northern Africa -->
                <option value="Kenya" selected>Kenya</option>
                <option value="kenya">Algeria</option>
                <option value="egypt">Egypt</option>
                <option value="libya">Libya</option>
                <option value="morocco">Morocco</option>
                <option value="sudan">Sudan</option>
                <option value="tunisia">Tunisia</option>
                <option value="western-sahara">Western Sahara</option>

                <!-- Western Africa -->
                <option value="benin">Benin</option>
                <option value="burkina-faso">Burkina Faso</option>
                <option value="cabo-verde">Cabo Verde</option>
                <option value="cote-divoire">Côte d’Ivoire</option>
                <option value="gambia">Gambia</option>
                <option value="ghana">Ghana</option>
                <option value="guinea">Guinea</option>
                <option value="guinea-bissau">Guinea‑Bissau</option>
                <option value="liberia">Liberia</option>
                <option value="mali">Mali</option>
                <option value="mauritania">Mauritania</option>
                <option value="niger">Niger</option>
                <option value="nigeria">Nigeria</option>
                <option value="senegal">Senegal</option>
                <option value="sierra-leone">Sierra Leone</option>
                <option value="togo">Togo</option>

                <!-- Central Africa -->
                <option value="cameroon">Cameroon</option>
                <option value="central-african-republic">Central African Republic</option>
                <option value="chad">Chad</option>
                <option value="congo">Republic of the Congo</option>
                <option value="democratic-republic-of-the-congo">Democratic Republic of the Congo</option>
                <option value="equatorial-guinea">Equatorial Guinea</option>
                <option value="gabon">Gabon</option>
                <option value="sao-tome-and-principe">São Tomé and Príncipe</option>

                <!-- Eastern Africa -->
                <option value="burundi">Burundi</option>
                <option value="comoros">Comoros</option>
                <option value="djibouti">Djibouti</option>
                <option value="eritrea">Eritrea</option>
                <option value="ethiopia">Ethiopia</option>
                <option value="madagascar">Madagascar</option>
                <option value="malawi">Malawi</option>
                <option value="mauritius">Mauritius</option>
                <option value="mozambique">Mozambique</option>
                <option value="rwanda">Rwanda</option>
                <option value="seychelles">Seychelles</option>
                <option value="somalia">Somalia</option>
                <option value="south-sudan">South Sudan</option>
                <option value="tanzania">Tanzania</option>
                <option value="uganda">Uganda</option>
                
                <!-- Southern Africa -->
                <option value="angola">Angola</option>
                <option value="botswana">Botswana</option>
                <option value="eswatini">Eswatini (Swaziland)</option>
                <option value="lesotho">Lesotho</option>
                <option value="namibia">Namibia</option>
                <option value="south-africa">South Africa</option>
                <option value="zambia">Zambia</option>
                <option value="zimbabwe">Zimbabwe</option>
              </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary" required>Gender</p>
                    <select class="form-control" onfocus='this.size=2;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();'>
                        <option>Male</option>
                        <option>Female</option>
                    </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary" required>Identification Type</p>
                    <select class="form-control" onfocus='this.size=2;' onblur='this.size=1;' 
              onchange='this.size=1; this.blur();'>
                        <option value="National ID">National ID</option>
                        <option value="Passport">Passport</option>
                    </select>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Identification Number</p>
                        <input type="number" class="form-control" placeholder="000X0X0XX" required>
                </div>
            </div>
            <div class="col-6">
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Occupation</p>
                        <input type="text" class="form-control" placeholder="Occupation" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Physical Address</p>
                        <input type="text" class="form-control" placeholder="Physical Address" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Postal Address</p>
                        <input type="text" class="form-control" placeholder="Postal Address" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Phone Number</p>
                        <input type="number" class="form-control" placeholder="0700000000" required>
                </div>
                <div class="form-group w-75 mt-4">
                    <p class="f-15 custom-fw-bold text-secondary">Email</p>
                        <input type="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group mt-4">
                    <SubTitle title="Files"/>
                </div>
                <div class="form-group w-75 mt-4">
                        <Dropzone/>
                </div>
                <div class="form-group w-75 mt-4">
                    <button class="btn btn-primary">SAVE</button>
                </div>
            </div>
        </form>
        <ActionResponse :message="message" :class="response_class" @close_alert="closeAlert" v-if="is_response_visible" />
    </div>
    </div>
    </div>
    
    </template>
    <script>
    // import PageTitle from '@/components/titles/PageTitle.vue';
    import ActionResponse from '@/components/Response.vue'
import SubTitle from '@/components/titles/SubTitle.vue';
import Dropzone from '@/components/Dropzone.vue';
    export default{
        name: "AddClient",
        components: { /* PageTitle, */ ActionResponse, SubTitle, Dropzone},
        data() {
            return {
                input_type: "password",
                profile_pic: '',
                message: "",
                is_response_visible: false,
                response_class: null
            }
        },
        methods: {
            viewPassword(){
                if(this.input_type === "password"){
                    this.input_type = "text"
                }else{
                    this.input_type = "password"
                }
                
            },
            closeAlert(){
                this.is_response_visible = false
            },
            
            addClient(){
                this.response_class = "bg-primary"
                this.is_response_visible = true
                this.message = "Added successfully"   
            }
            
        }
    }
      
    </script>