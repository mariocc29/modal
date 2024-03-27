<template>
  
  <section class="wrapper">
    <article>
      <Button :kindOf="'info'" :btnLabel="'Info'" @toggle-modal="toggleModal"/>
      <Button :kindOf="'success'" :btnLabel="'Success'" @toggle-modal="toggleModal"/>
      <Button :kindOf="'warning'" :btnLabel="'Warning'" @toggle-modal="toggleModal"/>
      <Button :kindOf="'alert'" :btnLabel="'Alert'" @toggle-modal="toggleModal"/>
    </article>
  </section>

  <div class="overlay" 
    :class="{'fade-out': !showOverlay, 'fade-in': showOverlay}"></div>
  
  <Modal v-if="showOverlay"/>

</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './components/button.vue';
import Modal from './components/modal.vue';

@Options({
  components: {
    Button,
    Modal
  },
})
export default class App extends Vue {
  showOverlay = false;

  toggleModal(kindOf: string) {
    console.log(kindOf)
    this.showOverlay = !this.showOverlay;
  }
}
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/fonts';
@import '@/styles/buttons';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  color: $color-primary;
  background-color: $bg-color;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#app {
  position: relative;

  .wrapper {
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
}
</style>
