<template>
  <MainView />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainView from './views/main.vue'

@Options({
  components: {
    MainView
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
@import '@/styles/variables';
@import '@/styles/fonts';

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
}
</style>
