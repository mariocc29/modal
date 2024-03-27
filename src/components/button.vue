<template>
  <button class="btn" :class="btnClass">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    'kindOf': {
      type: String,
    }
  }
})
export default class ButtonComponent extends Vue {
  kindOf!: string;

  /**
   * Returns a string representing the CSS class that will be applied to the button.
   * This class is derived from the 'kindOf' property of the component and is used
   * to determine the style of the button.
   * 
   * @returns {string} A string representing the CSS class that will be applied to the button.
   */
  get btnClass(): string {
    return `btn-${this.kindOf}`
  }
}
</script>

<style lang="scss" scoped>
@import '@/styles/variables';

.btn {
  border-radius: 2px;
	display:inline-block;
	cursor:pointer;
	font-size:15px;
	padding:6px 24px;
	text-decoration:none;

  &.btn-info {
    background-color: $color-primary-bg;
    border:1px solid $color-primary-border;
    color: $color-primary-text;
  }

  &.btn-success {
    background-color: $color-success-bg;
    border:1px solid $color-success-border;
    color: $color-success-text;
  }

  &.btn-warning {
    background-color: $color-warning-bg;
    border:1px solid $color-warning-border;
    color: $color-warning-text;
  }

  &.btn-alert {
    background-color: $color-alert-bg;
    border:1px solid $color-alert-border;
    color: $color-alert-text;
  }

  &.btn-cancel {
    background-color: $color-cancel-bg;
    border:1px solid $color-cancel-border;
    color: $color-cancel-text;
  }
}
</style>