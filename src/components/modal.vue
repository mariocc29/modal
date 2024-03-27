<template>
  <section class="modal modal-info">
    <header>
      <span>
        <i class="fa-solid fa-xmark"></i>
      </span>
    </header>
    <main>
      <div class="icon">
        <i class="fa-solid fa-circle-info icon-info"></i>
      </div>
      <div class="content">
        <div class="text-title">
          Ceci est le titre d'une modale d'info
        </div>
        <div class="message">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eu
          laoreet orci. Quisque mollis nibh eros, nec pretium leo luctus vitae.
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia Curae; Ut nec mauris nisl. Integer urna lorem,
          venenatis et varius et, rutrum vitae arcu.
        </div>
      </div>
    </main>
    <footer>
      <div class="checkbox">
        <label>
          <input type="checkbox">
          <span>Ne plus afficher</span>
        </label>
      </div>
      <div class="buttons">
        <button class="btn btn-cancel">Annuler</button>
        <button class="btn btn-info">Confirmer</button>
      </div> 
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
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 2;
  transform: translate(-50%, -50%);
  border-radius: 3px;

  &.modal-info {
    border-top: 3px $color-primary-bg solid;
  }

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
      .icon-info {
        color: $color-primary-bg;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      row-gap: 20px;

      .message {
        color: $color-secondary;
      }
    }
  }

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
  }
}
</style>