<template>
  <tv-demo invertTheme>
    <h2 class="title">TODOvue hero</h2>
    <div v-for="(demo, index) in demos" :key="`demo-${index}`" class="demo">
      <h2>{{ demo.title }}</h2>
      <tv-hero
        :image="demo.heroProps.image"
        :imageName="demo.heroProps.imageName"
        :isEntry="demo.heroProps.isEntry"
      >
        <template #title>
          <h1>{{ demo.titleHero }}</h1>
        </template>
        <template #description>
          {{ demo.descriptionHero }}
        </template>
        <template #buttonPrimary>
          <span>Primary</span>
        </template>
        <template #buttonSecondary>
          <span>Secondary</span>
        </template>
      </tv-hero>
    </div>
  </tv-demo>
</template>

<script>
import TvDemo from "todovue-demo";
import TvHero from "@/component/TvHero.vue";
export default {
  name: "DemoPage",
  data() {
    return {
      demos: [
        {
          title: "TvHero Main",
          heroProps: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=4d64783f-2259-49cc-a6b4-68e58ce3b227",
            imageName: "TODOvue Logo",
            isEntry: false,
          },
          titleHero: "TODOvue Blog",
          descriptionHero:
            "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        },
        {
          title: "TvHero Entry",
          heroProps: {
            image:
              "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
            imageName: "What is Vue.js?",
            isEntry: true,
          },
          titleHero: "What is Vue.js?",
          descriptionHero:
            "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
        },
      ],
    };
  },
  components: {
    TvHero,
    TvDemo,
  },
};
</script>

<style>
h2 {
  color: white !important;
}
</style>
