<template>
  <OverlayComponent :closeOnOutsideClick="closeOnOutsideClick" />

  <section class="modal"
    :class="modalClass"
    v-if="$store.state.showModal">
    <header>
      <span @click="toggleModal()">
        <i class="fa-solid fa-xmark"></i>
      </span>
    </header>
    
    <main>
      <div class="icon">
        <i class="fa-solid"
          :class="iconClass"></i>
      </div>
      <div class="content">
        <div class="title text-title">{{ title }}</div>
        <div class="message">
          <slot name="message"></slot>
        </div>
      </div>
    </main>
    
    <slot name="footer"></slot>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Store from "@/store";

import { MessageType } from '@/enums';
import OverlayComponent from '@/components/overlay.vue';
import ButtonComponent from '@/components/button.vue';

@Options({
  components: {
    OverlayComponent,
    ButtonComponent,
  },
  props: {
    title :{
      type: String,
      require: true,
    },
    state: {
      type: String,
      require: false,
      default: MessageType.INFO
    },
    closeOnOutsideClick: {
      type: Boolean,
      require: false,
      default: true
    }
  }
})
export default class ModalComponent extends Vue {
  $store!: typeof Store;

  title!: string
  state!: string
  closeOnOutsideClick!: boolean

  icons = {
    'info': 'fa-circle-info',
    'success': 'fa-circle-check',
    'warning': 'fa-triangle-exclamation',
    'alert': 'fa-circle-exclamation',
  }

  /**
   * Toggles the modal state by committing the 'TOGGLE_MODAL' mutation to the Vuex store.
   */
  toggleModal() {
    this.$store.commit('TOGGLE_MODAL');
  }

  /**
   * Computes the CSS class for the modal based on its state.
   * @returns {string} The computed CSS class for the modal.
   */
  get modalClass(): string {
    return `modal-${this.state}`
  }

  /**
   * Computes the CSS class for the icon based on the modal's state.
   * @returns {string} The computed CSS class for the icon.
   */
  get iconClass(): string {
    return `${this.icons[this.state as MessageType]} icon-${this.state}`
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

.modal {
  background-color: $bg-color;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  border-radius: 3px;

  &.modal-info { border-top: 3px $color-primary-bg solid; }
  &.modal-success { border-top: 3px $color-success-bg solid; }
  &.modal-warning { border-top: 3px $color-warning-bg solid; }
  &.modal-alert { border-top: 3px $color-alert-bg solid; }

  header {
    display: flex;
    padding: 16px 16px 16px 0;
    justify-content: end;
    color: $color-secondary;
  }

  main {
    display: flex;
    column-gap: 20px;
    padding: 0 36px 36px 36px;

    .icon {
      .icon-info { color: $color-primary-bg; }
      .icon-success { color: $color-success-bg; }
      .icon-warning { color: $color-warning-bg; }
      .icon-alert { color: $color-alert-bg; }
    }

    .content {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .message { color: $color-secondary; }
    }

    @include sm() {
      flex-direction: column;
      align-items: center;
      row-gap: 20px;

      .title, .content {
        text-align: center;
      }
    }
  }

  @include sm() { max-width: 580px; }
}
</style>