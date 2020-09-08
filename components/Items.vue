<template>
  <div class="items">
    <div class="items__div">
      <li class="items__div__list" type="none">Hellofdsfsdadasd</li>
      <button class="items__div__btn items__div__btn--rounded">Delete</button>
    </div>
  </div>
</template>


<script >
import { ref, reactive, watch } from "@nuxtjs/composition-api";
export default {
  setup() {},
};
</script>


<style lang="scss" scoped>
.items {
  margin: 0 auto 0;
  width: 20%;

  &__div {
    margin-top: pixelToEm(10);
    display: flex;
    justify-content: space-between;

    &__list{
        @apply px-2;
        @apply bg-teal-200;
    }

    &__btn {
      font-family: Arial, sans-serif;
      padding: 0.2em 0.4em;
      background-color: white;
      border: pixelToEm(2) solid  #f56565;;
      color: #fc8181;

      &:focus {
        outline: none !important;
      }

      &--rounded {
        @include rounded(pixelToEm(6));
      }
    }
  }
}
</style>