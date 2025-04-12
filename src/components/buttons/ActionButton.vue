<template>
    <div class="custom-dropdown position-relative">
      <span class="f-15 btn btn-primary" @click="toggleDropdown">
        Action <i class="fa-solid fa-angle-down"></i>
      </span>
      <transition name="slide-fade">
        <div v-if="activeDropdown" class="custom-dropdown-holder d-block bg-white card position-absolute p-2 mt-2">
          <a 
            v-for="(action, name) in dropdown_actions" 
            :key="name"
            class="custom-dropdown-item text-secondary col-12 d-block mt-2" 
            href="#"
            @click.prevent="triggerAction(name)"
          >
            {{ formatDisplayName(name) }}
            <i :class="getActionIcon(name)"></i>
          </a>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    name: "ActionButton",
    props: {
      dropdown_actions: {
        type: Object,
        required: true,
        validator: (value) => {
          return Object.values(value).every(item => typeof item.action === 'function')
        }
      }
    },
    data() {
      return {
        activeDropdown: false,
        iconMappings: {
          view: 'fa-eye',
          edit: 'fa-pen-to-square',
          return: 'fa-check',
          delete: 'fa-trash',
          download: 'fa-download',
          print: 'fa-print',
          share: 'fa-share',
          archive: 'fa-box-archive',
          default: 'fa-circle',
          reject: 'fa-circle-xmark',
          approve: 'fa-check'
        }
      }
    },
    methods: {
      toggleDropdown() {
        this.activeDropdown = !this.activeDropdown
      },
      triggerAction(actionName) {
        this.activeDropdown = false
        this.dropdown_actions[actionName].action()
      },
      formatDisplayName(name) {
        return name
          .replace(/_/g, ' ')
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, str => str.toUpperCase())
      },
      getActionIcon(actionName) {
        const baseIcon = this.iconMappings[actionName] || this.iconMappings.default
        return `fa-solid ${baseIcon} ${this.dropdown_actions[actionName].iconClass || ''}`
      }
    }
  }
  </script>
