<template>
  <div class="flex-container">
    <div class="item-1">
      <slot name="title"></slot>
    </div>
    <div class="item-2">
      <slot name="deleteButton"></slot>
    </div>
  </div>
</template>

<script>
import { ref, reactive, watch } from "@nuxtjs/composition-api";
export default {
  setup(props, { root }) {},
};
</script>

<style lang="scss" scoped>
[class^="item"] {
  &:not(:last-child) {
    margin-right: pixelToEm(3);
  }
}

.flex-container {
  display: flex;
  margin-top: 1rem;
  height: 45px;
  justify-content: center;
  align-items: center;
}

.item-1 {
  flex-basis: pixelToEm(350);
  height: pixelToEm(50);

  &__task-list {
    height: 100%;
    width: 100%;
    padding-left: pixelToEm(5);
    font-size: pixelToEm(30);
    border: 1px solid #feb2b2;

    &--rounded {
      @include rounded(pixelToEm(6));

      &:hover {
        background-color: #a1f184;
      }
    }
  }
}

.item-2 {
  flex-basis: pixelToEm(60);
  height: pixelToEm(50);

  &__delete-btn {
    height: 100%;
    width: 100%;
    font-family: Arial, sans-serif;
    padding: 0.6em 0.6em;
    background-color: white;
    border: pixelToEm(2) solid #feb2b2;
    color: #fc8181;

    &--rounded {
      @include rounded(pixelToEm(10));
    }

    &:hover,
    &:focus {
      color: white;
      border-color: transparent;
      background-color: #9b2c2c;
      outline: none !important;
    }

    &:active {
      background-color: #e53e3e;
    }
  }
}
</style>
