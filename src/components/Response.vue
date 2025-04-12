<template>
  <div class="alert bg-primary text-white action-response position-absolute float-right alert-primary alert-dismissible fade show" role="alert">
      {{ message }}
      <button type="button" class="close btn" @click="handleClose">
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
  methods: {
      handleClose() {
          this.$emit('close_alert');
      }
  }
}
</script>