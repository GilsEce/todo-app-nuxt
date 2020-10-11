import { computed } from "@nuxtjs/composition-api";

export default function useVuexHelper(store) {
  function useGetters(gettersObject) {
    const mapGetters = {};
    for (const [key, value] of Object.entries(gettersObject)) {
      mapGetters[key] = computed(() => store.getters[value]);
    }
    return mapGetters;
  }

  function useActions(typesObject) {
    const mapActions = {};
    for (const [key, value] of Object.entries(typesObject)) {
      mapActions[key] = payload => store.dispatch(value, payload);
    }

    return mapActions;
  }

  return [useGetters, useActions];
}
