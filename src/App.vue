<template>
  <section>
    <article>
      <Button :btnClass="'btn-info'" :btnLabel="'Info'"/>
      <Button :btnClass="'btn-success'" :btnLabel="'Success'"/>
      <Button :btnClass="'btn-warning'" :btnLabel="'Warning'"/>
      <Button :btnClass="'btn-alert'" :btnLabel="'Alert'"/>
    </article>
  </section>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Button from './components/button.vue';

@Options({
  components: {
    Button
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/styles/fonts';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

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
}
</style>
