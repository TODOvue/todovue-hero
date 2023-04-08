export const demos = [
  {
    id: 1,
    title: "TODOvue main hero (default)",
    propsData: {
      titleText: "TODOvue Blog",
      descriptionText:
        "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
      buttonPrimaryText: "View all blogs",
      buttonSecondaryText: "View last blog",
      image:
        "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=4d64783f-2259-49cc-a6b4-68e58ce3b227",
      imageName: "TODOvue Logo",
    },
    html: `<tv-hero
  image="https://todovue.com/logo.png"
  imageName="TODOvue Logo"
>
  <template #title>
    <h1>TODOvue Blog</h1>
  </template>
  <template #description>
    Introducing my Vue.js blog! Get ...
  </template>
  <template #buttonPrimary>
    <span>View all blogs</span>
  </template>
  <template #buttonSecondary>
    <span>View last blog</span>
  </template>
</tv-hero>`,
  },
  {
    id: 2,
    title: "TODOvue entry hero",
    propsData: {
      titleText: "What is Vue.js?",
      descriptionText:
        "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
      image:
        "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
      imageName: "What is Vue.js?",
      isEntry: true,
    },
    html: `<tv-hero
  image="https://todovue.com/vue.webp"
  imageName="What is Vue.js?"
  isEntry
>
  <template #title>
    <h1>What is Vue.js?</h1>
  </template>
  <template #description>
    Vue.js is a progressive JavaScript ...
  </template>
</tv-hero>`,
  },
  {
    id: 3,
    title: "TODOvue entry without image hero",
    propsData: {
      titleText: "What is Vue.js?",
      descriptionText:
        "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
      isEntry: true,
    },
    html: `<tv-hero
  isEntry
>
  <template #title>
    <h1>What is Vue.js?</h1>
  </template>
  <template #description>
    Vue.js is a progressive JavaScript ...
  </template>
</tv-hero>`,
  },
];
