<template>
    <table class="table">
      <thead>
        <tr>
          <th class="col f-14" v-for="(header, index) in headers" :key="'header-'+index">
            {{ header.text }}
          </th>
          <th class="f-14" v-if="hasActions">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowIndex) in rows" :key="'row-'+rowIndex">
          <td class="f-14" v-for="(header, colIndex) in headers" :key="'cell-'+rowIndex+'-'+colIndex">
            <template v-if="editableFields.includes(header.key) && editingRow === rowIndex">
              <input
                v-model="row[header.key]"
                @blur="saveEdit(row)"
                @keyup.enter="saveEdit(row)"
                class="form-control form-control-sm"
              >
            </template>
            <template v-else>
              <span @dblclick="startEdit(rowIndex, header.key)" class="editable-cell">
                {{ getCellValue(row, header.key) }}
              </span>
            </template>
          </td>
          <td v-if="hasActions">
            <ActionButton
              :dropdown_actions="getRowActions(row)"
              @action="handleAction($event, row)"
            />
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import ActionButton from '@/components/buttons/ActionButton.vue';

export default {
  name: "DefaultTable",
  components: {
    ActionButton
  },
  props: {
    headers: {
      type: Array,
      required: true,
      validator: (value) => value.every(item => 'text' in item && 'key' in item)
    },
    rows: {
      type: Array,
      required: true,
      default: () => []
    },
    actions: {
      type: Array,
      default: () => [],
      validator: (value) => value.every(action => 'name' in action && 'handler' in action)
    },
    editableFields: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      editingRow: null,
      editingField: null,
      originalValue: null
    }
  },
  computed: {
    hasActions() {
      return this.actions.length > 0;
    }
  },
  methods: {
    getCellValue(row, key) {
      return Object.prototype.hasOwnProperty.call(row, key) ? row[key] : '-';
    },
    getRowActions(row) {
      return this.actions.reduce((acc, action) => {
        acc[action.name] = {
          action: () => action.handler(row),
          iconClass: action.iconClass || ''
        };
        return acc;
      }, {});
    },
    handleAction(actionName, row) {
      this.$emit('action', actionName, row);
    },
    startEdit(rowIndex, field) {
      if (this.editableFields.includes(field)) {
        this.editingRow = rowIndex;
        this.editingField = field;
        this.originalValue = this.rows[rowIndex][field];
      }
    },
    saveEdit(row) {
      this.$emit('edit', {
        row: row,
        field: this.editingField,
        oldValue: this.originalValue,
        newValue: row[this.editingField]
      });
      this.cancelEdit();
    },
    cancelEdit() {
      this.editingRow = null;
      this.editingField = null;
      this.originalValue = null;
    }
  }
}
</script>