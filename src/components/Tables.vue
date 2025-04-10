<template>
    <table class="table">
        <thead>
          <!-- inventory report -->
          <tr>
            <th class="col f-15">User Name</th>
            <th class="col f-15">Role</th>
            <th class="col f-15">Action Performed</th>
            <th class="col f-15">Timestamp</th>
            <th class="col f-15">Related Document</th>
            <th class="col f-15">Description/Narration</th>
          </tr>
          
        </thead>
        <tbody>
          <tr>
            
            <td class="f-14">
              {{inventory.last_issue_date}}
            </td>
          </tr>
        </tbody>
      </table>
</template>