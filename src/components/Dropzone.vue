<template>
  <div
    class="dropzone"
    @dragover.prevent="onDragOver"
    @dragleave.prevent="onDragLeave"
    @drop.prevent="onDrop"
    :class="{ 'is-dragover': isDragging }"
    @click="triggerFileInput"
  >
    <p>Click or drag files here to upload</p>
    <input
      type="file"
      ref="fileInput"
      :accept="acceptedTypes.join(',')"
      multiple
      @change="onFileChange"
      hidden
    />
    <ul v-if="validFiles.length">
      <li v-for="(file, index) in validFiles" :key="index">{{ file.name }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// DOM refs
const fileInput = ref(null)

// Drag state
const isDragging = ref(false)

// Store valid files
const validFiles = ref([])

// Allowed MIME types
const acceptedTypes = [
  'image/jpeg',
  'image/png',
  'application/pdf'
]

// Event: Trigger hidden file input
const triggerFileInput = () => {
  fileInput.value?.click()
}

// Event: Drag enters drop zone
const onDragOver = () => {
  isDragging.value = true
}

// Event: Drag leaves drop zone
const onDragLeave = () => {
  isDragging.value = false
}

// Event: Drop files
const onDrop = (event) => {
  isDragging.value = false
  const files = Array.from(event.dataTransfer.files)
  handleFiles(files)
}

// Event: Files selected via click
const onFileChange = (event) => {
  const files = Array.from(event.target.files)
  handleFiles(files)
}

// Filter accepted files
const handleFiles = (files) => {
  validFiles.value = files.filter(file => acceptedTypes.includes(file.type))
}
</script>

<style scoped>
.dropzone {
  border: 2px dashed #888;
  padding: 2rem;
  text-align: center;
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.3s ease;
  background-color: #fafafa;
}
.dropzone.is-dragover {
  background-color: #e6f7ff;
  border-color: #1890ff;
}
ul {
  margin-top: 1rem;
  padding: 0;
  list-style: none;
}
</style>
