<template>
  <button class="btn" :class="btnClass">{{ btnLabel }}</button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    'btnClass': {
      type: String
    },
    'btnLabel': {
      type: String
    }
  }
})
export default class Button extends Vue {
  btnClass!: string;
  btnLabel!: string;
}
</script>

<style lang="scss">
@import "@/styles/variables";

.btn {
  border-radius: 2px;
	display:inline-block;
	cursor:pointer;
	font-size:15px;
	padding:6px 24px;
	text-decoration:none;

  &.btn-info {
    background-color: $btn-primary-bg;
    border:1px solid $btn-primary-border;
    color: $btn-primary-text;
  }

  &.btn-success {
    background-color: $btn-success-bg;
    border:1px solid $btn-success-border;
    color: $btn-success-text;
  }

  &.btn-warning {
    background-color: $btn-warning-bg;
    border:1px solid $btn-warning-border;
    color: $btn-warning-text;
  }

  &.btn-alert {
    background-color: $btn-alert-bg;
    border:1px solid $btn-alert-border;
    color: $btn-alert-text;
  }
}
</style>