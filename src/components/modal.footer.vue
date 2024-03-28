<template>
  <div class="footer">
    <div class="checkbox">
      <label>
        <input type="checkbox">
        <span>Ne plus afficher</span>
      </label>
    </div>
    <div class="buttons">
      <ButtonComponent :kindOf="'cancel'" @click="onClose()">
        Annuler
      </ButtonComponent>
      <ButtonComponent :kindOf="$store.state.kindOf" @click="onConfirm()">
        Confirmer
      </ButtonComponent>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Store from "@/store";

import ButtonComponent from '@/components/button.vue';

@Options({
  components: {
    ButtonComponent
  },
  emits: {
    onClose: () => true,
    onConfirm: () => true
  }
})
export default class ModalFooterComponent extends Vue {
  $store!: typeof Store;

  /**
   * Toggles the modal state by committing the 'TOGGLE_MODAL' mutation to the Vuex store.
   */
  private toggleModal() {
    this.$store.commit('TOGGLE_MODAL');
  }

  /**
   * Handler function for the close event.
   * Emits the 'onClose' event and toggles the modal state.
   */
  onClose() {
    this.$emit('onClose')
    this.toggleModal()
  }
  
  /**
   * Handler function for the confirm event.
   * Emits the 'onConfirm' event and toggles the modal state.
   */
  onConfirm() {
    this.$emit('onConfirm')
    this.toggleModal()
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';
@import '@/styles/mixins';

.footer {
  display: flex;
  flex-basis: 100%;
  justify-content: space-between;

  .checkbox {
    display: flex;
    align-items: center;
    
    label {
      display: flex;
      align-items: center;
      column-gap: 6px;
    }
  }

  .buttons {
    display: flex;
    column-gap: 12px;
  }

  @include md() {
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }
}
</style>