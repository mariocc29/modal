<template>
  <button class="btn" :class="btnClass" @click="toggleModal">{{ btnLabel }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    'kindOf': {
      type: String
    },
    'btnLabel': {
      type: String
    }
  }
})
export default class Button extends Vue {
  kindOf!: string;
  btnLabel!: string;

  get btnClass(): string {
    return `btn-${this.kindOf}`
  }

  toggleModal() {
    this.$emit('toggle-modal', this.kindOf);
  }
}
</script>

<style lang="scss" scoped>
</style>