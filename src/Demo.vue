<template>
  <tv-demo hideBackground :component="component" :variants="demos" />
</template>

<script>
import { shallowRef } from "vue";
import TvHero from "@/component/TvHero.vue";
import { demos } from "@/utils/mocks.js";

export default {
  name: "DemoHero",
  setup() {
    const component = shallowRef(TvHero);

    return {
      component,
      demos,
    };
  },
};
</script>

<style></style>
