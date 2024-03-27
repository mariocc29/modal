<template>
  <router-view />
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPage from '@/pages/MainPage.vue'

@Options({
  components: {
    MainPage
  },
})
export default class App extends Vue {}
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
</style>
