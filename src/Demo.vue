<template>
  <tv-demo hideBackground :component="component" :variants="demos"></tv-demo>
</template>

<script>
import { defineComponent, shallowRef } from "vue";
import TvHero from "@/component/TvHero.vue";
import TvDemo from "todovue-demo";
import { demos } from "@/utils/mocks.js";

export default defineComponent({
  name: "TvHeroDemo",
  setup() {
    const component = shallowRef(TvHero);

    return {
      component,
      demos,
    };
  },
  components: {
    TvDemo,
  },
});
</script>

<style lang="scss"></style>
