<template>
  <div
    class="tv-hero-body"
    :class="{ 'tv-hero-entry': isEntry }"
    v-if="hero"
    :style="custom.customHero"
  >
    <div class="tv-hero" :class="{ 'tv-hero-full': !hero.image }">
      <div class="tv-hero-image" v-if="hero.image">
        <img :src="hero.image" :alt="hero.alt" />
      </div>
      <div class="tv-hero-content">
        <div class="tv-hero-title">
          {{ hero.title }}
          <div class="tv-hero-separator" :style="custom.bgAfter"></div>
        </div>
        <div class="tv-hero-description">
          {{ hero.description }}
        </div>
        <div class="tv-hero-actions" v-if="!isEntry">
          <tv-button
            isRounded
            :customStyle="custom.customButton"
            @click-button="handleClick"
          >
            {{ hero.button }}
          </tv-button>
          <tv-button
            v-if="hero.buttonSecondary"
            isRounded
            isOutlined
            :customStyle="custom.customButtonSecondary"
            @click-button="handleClickSecondary"
          >
            {{ hero.buttonSecondary }}
          </tv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
import useHero from "@/composable/useHero";
export default {
  name: "TvHero",
  props: {
    configHero: {
      type: Object,
      default: () => {},
    },
    customHero: {
      type: Object,
      default: () => {},
    },
    isEntry: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    TvButton,
  },
  setup(props) {
    const { handleClick, handleClickSecondary, custom, hero } = useHero(props);

    return {
      handleClick,
      handleClickSecondary,
      custom,
      hero,
    };
  },
  emits: ["clickButton", "clickSecondaryButton"],
};
</script>

<style scoped lang="scss" src="../assets/scss/style.scss"></style>
