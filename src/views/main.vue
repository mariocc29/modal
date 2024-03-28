<template>
  <section>
    <article>

      <ButtonComponent 
        :kindOf="kindOfInfo"
        @click="toggleModal(kindOfInfo)">Info</ButtonComponent>

      <ButtonComponent 
        :kindOf="kindOfSuccess"
        @click="toggleModal(kindOfSuccess)">Success</ButtonComponent>

      <ButtonComponent 
        :kindOf="kindOfWarning"
        @click="toggleModal(kindOfWarning)">Warning</ButtonComponent>

      <ButtonComponent 
        :kindOf="kindOfAlert"
        @click="toggleModal(kindOfAlert)">Alert</ButtonComponent>

    </article>
  </section>

  <ModalComponent
    :title="modalTitles[kindOf as MessageType]"
    :state="kindOf"
    :closeOnOutsideClick="true">
    
    <template v-slot:content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
      laoreet orci. Quisque mollis nibh eros, nec pretium leo luctus vitae.
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
      posuere cubilia Curae; Ut nec mauris nisl. Integer urna lorem,
      venenatis et varius et, rutrum vitae arcu.
    </template>

    <template v-slot:footer>
      <ModalFooterComponent v-if="showCheckboxOption"/>
    </template>
    
  </ModalComponent>
</template>

<script lang="ts">

import { Options, Vue } from 'vue-class-component';
import { defineAsyncComponent } from 'vue';
import Store from "@/store";

import { MessageType } from '@/enums';
import ButtonComponent from '@/components/button.vue';

@Options({
  components: {
    ButtonComponent,
    ModalComponent: defineAsyncComponent(() => import('@/components/modal.vue')),
    ModalFooterComponent: defineAsyncComponent(() => import('@/components/modal.footer.vue'))
  }
})
export default class MainView extends Vue {
  $store!: typeof Store;
  
  kindOfInfo: MessageType = MessageType.INFO;
  kindOfSuccess: MessageType = MessageType.SUCCESS;
  kindOfWarning: MessageType = MessageType.WARNING;
  kindOfAlert: MessageType = MessageType.ALERT;
  
  kindOf: string = MessageType.INFO;
  showCheckboxOption = false;
  
  modalTitles = {
    'info': "Ceci est le titre d'une modale d'info",
    'success': "Ceci est le titre d'une modale de success",
    'warning': "Ceci est le titre d'une modale d'alerte",
    'alert': "Ceci est le titre d'une modale de Danger"
  }

  /**
   * Toggles the modal state and updates the kindOf property.
   * @param kindOf - The kind of modal to toggle.
   */
  toggleModal(kindOf: string) {
    this.kindOf = kindOf
    this.showCheckboxOption = (this.kindOf == this.kindOfInfo)
    this.$store.commit('SET_KIND_OF_MODAL', this.kindOf)
    this.$store.commit('TOGGLE_MODAL');
  }
}
</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100svh;

  article {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
  }
}
</style>