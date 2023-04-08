<template>
  <div class="tv-hero-body" :class="{ 'tv-hero-entry': isEntry }">
    <div class="tv-hero" :class="{ 'tv-hero-full': !image }">
      <div class="tv-hero-image" v-if="image">
        <img :src="image" :alt="imageName" />
      </div>
      <div class="tv-hero-content">
        <div class="tv-hero-title">
          <slot name="title" v-if="!titleText"></slot>
          <template v-if="titleText">{{ titleText }}</template>
        </div>
        <div class="tv-hero-description">
          <slot name="description" v-if="!descriptionText"></slot>
          <template v-if="descriptionText">{{ descriptionText }}</template>
        </div>
        <div class="tv-hero-actions" v-if="!isEntry">
          <tv-button isRounded @click="clickPrimary">
            <slot name="buttonPrimary" v-if="!buttonPrimaryText"></slot>
            <template v-if="buttonPrimaryText">
              {{ buttonPrimaryText }}
            </template>
          </tv-button>
          <tv-button isRounded isOutlined @click="clickSecondary">
            <slot name="buttonSecondary" v-if="!buttonSecondaryText"></slot>
            <template v-if="buttonSecondaryText">
              {{ buttonSecondaryText }}
            </template>
          </tv-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TvButton from "todovue-button";
export default {
  name: "TvHero",
  props: {
    image: {
      type: String,
      default: null,
    },
    imageName: {
      type: String,
      default: null,
    },
    isEntry: {
      type: Boolean,
      default: false,
    },
    titleText: {
      type: String,
      default: null,
    },
    descriptionText: {
      type: String,
      default: null,
    },
    buttonPrimaryText: {
      type: String,
      default: null,
    },
    buttonSecondaryText: {
      type: String,
      default: null,
    },
  },
  components: {
    TvButton,
  },
  methods: {
    clickPrimary() {
      this.$emit("clickPrimary");
    },
    clickSecondary() {
      this.$emit("clickSecondary");
    },
  },
};
</script>

<style></style>
