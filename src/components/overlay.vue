<template>
  <div class="overlay" 
    :class="{'fade-out': !$store.state.showModal, 'fade-in': $store.state.showModal}"
    @click="onClose()">
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Store from "@/store";

@Options({
  props: {
    closeOnOutsideClick: {
      type: Boolean,
      require: false,
      default: true
    }
  },
  emits: {
    onClose: () => true
  }
})
export default class OverlayComponent extends Vue {
  $store!: typeof Store;
  
  closeOnOutsideClick!: boolean

  /**
   * Handles the close event when clicking outside the overlay, if enabled.
   * Emits the 'onClose' event if 'closeOnOutsideClick' is true.
   */
  onClose() {
    if( this.closeOnOutsideClick )
      this.$emit('onClose')
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: $color-primary;

  &.fade-out {
    opacity: 0;
    transition: opacity 0.3s ease-out;
    pointer-events: none;
  }

  &.fade-in {
    opacity: 0.7;
    transition: opacity 0.3s ease-in;
    pointer-events: all;
  }
}
</style>