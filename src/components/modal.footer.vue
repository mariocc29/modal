<template>
  <footer>
    <div class="checkbox">
      <label v-if="showCheckboxOption">
        <input type="checkbox">
        <span>Ne plus afficher</span>
      </label>
    </div>
    <div class="buttons">
      <ButtonComponent :kindOf="'cancel'" @click="toggleModal()">
        Annuler
      </ButtonComponent>
      <ButtonComponent :kindOf="state" @click="toggleModal()">
        Confirmer
      </ButtonComponent>
    </div>
  </footer>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Store from "@/store";

import { MessageType } from '@/enums';
import ButtonComponent from '@/components/button.vue';

@Options({
  components: {
    ButtonComponent
  },
  props: {
    state: {
      type: String,
      require: false,
      default: MessageType.INFO
    },
    showCheckboxOption: {
      type: Boolean,
      require: false,
      default: true
    }
  }
})
export default class ModalFooterComponent extends Vue {
  $store!: typeof Store;

  state!: string
  showCheckboxOption!: boolean

  toggleModal() {
    this.$store.commit('TOGGLE_MODAL');
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/mixins';

footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;
  border-top: 1px $color-tertiary solid;

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