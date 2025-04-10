<template>
    <div class="alert bg-primary text-white action-response position-absolute float-right alert-primary alert-dismissible fade show" role="alert">
    {{ message }}
        <button type="button" class="close btn" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
</template>
<script>
export default{
    name: "ActionResponse",
    props: {
        message: String
    }
}
</script>