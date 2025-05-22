<template>
  <div class="alert text-white action-response position-fixed float-right alert-primary alert-dismissible fade show" role="alert" style="bottom: 30px; right: 30px; width: fit-content; z-index: 1010;">
      {{ message }}
      <button type="button" class="close btn" @click="$emit('close_alert')">
          <span aria-hidden="true">&times;</span>
      </button>
  </div>
</template>

<script>
export default {
  name: "ActionResponse",
  props: {
      message: String
  },
}
</script>