<template>
  <section class="modal modal-info">
    <header>
      Close button
    </header>
    <main>
      Title
      Text
    </main>
    <footer>
      Checkbox | Annuler | Confirmer 
    </footer>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

export default class extends Vue {
  
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.modal {
  background-color: $bg-color;

  &.modal-info {
    border-top: 3px $btn-primary-bg solid;
  }
}
</style>