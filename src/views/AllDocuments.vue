<template>

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
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">View <i class="fa-solid fa-eye text-white"></i></a>
                          <a class="dropdown-item" href="#">Return <i class="fa-solid fa-check text-white"></i></a>
                          <a class="dropdown-item" href="#">Delete <i class="fa-solid fa-trash text-danger"></i></a>
                        </div>
                      </div>
                </td>
              </tr>
              <tr>
                <th scope="row">133/2</th>
                <td>Grant 5</td>
                <td>Grant</td>
                <td>Return</td>
                <td><span class="status-check bg-primary text-white f-15">Issued</span></td>
                <td>Apr 5</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">View <i class="fa-solid fa-eye text-white"></i></a>
                          <a class="dropdown-item" href="#">Return <i class="fa-solid fa-check text-white"></i></a>
                          <a class="dropdown-item" href="#">Delete <i class="fa-solid fa-trash text-danger"></i></a>
                        </div>
                      </div>
                </td>
              </tr>
              <tr>
                <th scope="row">122/3</th>
                <td>Title deed</td>
                <td>Docuent 20</td>
                <td>First time</td>
                <td><span class="status-check bg-primary text-white f-15">Issued</span></td>
                <td>Apr 4</td>
                <td>
                    <div class="dropdown">
                        <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action
                        </button>
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                          <a class="dropdown-item" href="#">View <i class="fa-solid fa-eye text-white"></i></a>
                          <a class="dropdown-item" href="#">Return <i class="fa-solid fa-check text-white"></i></a>
                          <a class="dropdown-item" href="#">Delete <i class="fa-solid fa-trash text-danger"></i></a>
                        </div>
                      </div>
                </td>
              </tr>
            </tbody>
          </table>
    </div>
    </template>
    <script>
    import PageTitle from '@/components/titles/PageTitle.vue';
    export default{
        name: "AllDocuments",
        components: { PageTitle}
    }
      
    </script>