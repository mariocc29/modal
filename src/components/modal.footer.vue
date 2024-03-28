<template>
  <div class="footer">
    <div class="checkbox">
      <label>
        <input type="checkbox">
        <span>Ne plus afficher</span>
      </label>
    </div>
    <div class="buttons">
      <ButtonComponent :kindOf="'cancel'" @click="toggleModal()">
        Annuler
      </ButtonComponent>
      <ButtonComponent :kindOf="$store.state.kindOf" @click="toggleModal()">
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
  }
})
export default class ModalFooterComponent extends Vue {
  $store!: typeof Store;

  /**
   * Toggles the modal state by committing the 'TOGGLE_MODAL' mutation to the Vuex store.
   */
  toggleModal() {
    this.$store.commit('TOGGLE_MODAL');
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