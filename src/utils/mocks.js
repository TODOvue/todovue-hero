export const demos = [
  {
    id: 1,
    title: "TODOvue main hero",
    propsData: {
      configHero: {
        titleText: "TODOvue Blog",
        descriptionText:
          "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        buttonText: "View all blogs",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=4d64783f-2259-49cc-a6b4-68e58ce3b227",
        alt: "TODOvue Logo",
      },
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    @click-button="handleClick"
    @click-image="handleClickImage"
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      alt: "TODOvue Logo",
      buttonText: "View all blogs",
      descriptionText: "Introducing my Vue.js blog!...",
      image: "https://todovue.com/logo.png",
      titleText: "TODOvue Blog",
    });
    
    const handleClick = () => {
      console.log("click button");
    }
    
    const handleClickImage = () => {
      console.log("click image");
    }
    
    return {
      configHero,
      handleClick,
      handleClickImage,
    }
  }
}
</script>`,
  },
  {
    id: 2,
    title: "TODOvue main hero with secondary button",
    propsData: {
      configHero: {
        titleText: "TODOvue Blog",
        descriptionText:
          "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        buttonText: "View all blogs",
        buttonSecondaryText: "View last blog",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=4d64783f-2259-49cc-a6b4-68e58ce3b227",
        alt: "TODOvue Logo",
      },
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    @click-button="handleClick"
    @click-secondary-button="handleClickSecondary"
    @click-image="handleClickImage"
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      alt: "TODOvue Logo",
      buttonSecondaryText: "View last blog",
      buttonText: "View all blogs",
      descriptionText: "Introducing my Vue.js blog!...",
      image: "https://todovue.com/logo.png",
      titleText: "TODOvue Blog",
    });
    
    const handleClick = () => {
      console.log("click button");
    }
    
    const handleClickImage = () => {
      console.log("click image");
    }
    
    const handleClickSecondary = () => {
      console.log("click secondary button");
    }
    
    return {
      configHero,
      handleClick,
      handleClickImage,
      handleClickSecondary,
    }
  }
}
</script>`,
  },
  {
    id: 3,
    title: "TODOvue main hero with custom colors",
    propsData: {
      configHero: {
        titleText: "TODOvue Blog",
        descriptionText:
          "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js and discover how this powerful JavaScript framework can help you build beautiful and dynamic user interfaces for your web applications.",
        buttonText: "View all blogs",
        buttonSecondaryText: "View last blog",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=4d64783f-2259-49cc-a6b4-68e58ce3b227",
        alt: "TODOvue Logo",
      },
      customHero: {
        bgBody: "#1e1d23",
        colorBody: "#e1e2dc",
        bgButton: "#8673a1",
        buttonText: "#e1e2dc",
        bgButtonSecondary: "#79308d",
        buttonSecondaryText: "#e1e2dc",
      },
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    :customHero="customHero"
    @click-button="handleClick"
    @click-secondary-button="handleClickSecondary"
    @click-image="handleClickImage"
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      alt: "TODOvue Logo",
      buttonSecondaryText: "View last blog",
      buttonText: "View all blogs",
      descriptionText: "Introducing my Vue.js blog!...",
      image: "https://todovue.com/logo.png",
      titleText: "TODOvue Blog",
    });
    
    const customHero = ref({
      bgBody: "#1e1d23",
      bgButton: "#8673a1",
      bgButtonSecondary: "#79308d",
      buttonSecondaryText: "#e1e2dc",
      buttonText: "#e1e2dc",
      colorBody: "#e1e2dc",
    });
    
    const handleClick = () => {
      console.log("click button");
    }
    
    const handleClickImage = () => {
      console.log("click image");
    }
    
    const handleClickSecondary = () => {
      console.log("click secondary button");
    }
    
    return {
      configHero,
      customHero,
      handleClick,
      handleClickImage,
      handleClickSecondary,
    }
  }
}
</script>`,
  },
  {
    id: 4,
    title: "TODOvue entry hero",
    propsData: {
      configHero: {
        titleText: "What is Vue.js?",
        descriptionText:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/vue.webp?alt=media&token=7b717129-29c3-4f36-846d-c0243b28e216",
        alt: "What is Vue.js?",
      },
      isEntry: true,
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    @click-image="@click-image"
    isEntry
  />
</template>
 
<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      alt: "TODOvue Logo",
      descriptionText: "Introducing my Vue.js blog!...",
      image: "https://todovue.com/logo.png",
      titleText: "TODOvue Blog",
    });

    
    const handleClickImage = () => {
      console.log("click image");
    }
    
    return {
      configHero,
      customHero,
      handleClickImage,
    }
  }
}
</script>`,
  },
  {
    id: 4,
    title: "TODOvue entry hero with custom colors",
    propsData: {
      configHero: {
        titleText: "What is Vue.js?",
        descriptionText:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
        image:
          "https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/cards%2Fcode-g310d81d24_640.webp?alt=media&token=c25e7d00-9386-4823-bf56-f0d1081069d1",
        alt: "What is Vue.js?",
      },
      isEntry: true,
      customHero: {
        bgBody: "#202020",
        colorBody: "#ffffff",
      },
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    :customHero="customHero"
    @click-image="@click-image"
    isEntry
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      alt: "TODOvue Logo",
      descriptionText: "Introducing my Vue.js blog!...",
      image: "https://todovue.com/logo.png",
      titleText: "TODOvue Blog",
    });
    
    const customHero = ref({
      bgBody: "#202020",
      colorBody: "#ffffff",
    });
    
    const handleClickImage = () => {
      console.log("click image");
    }
    
    return {
      configHero,
      customHero,
      handleClickImage,
    }
  }
}
</script>`,
  },
  {
    id: 5,
    title: "TODOvue entry without image hero",
    propsData: {
      configHero: {
        titleText: "What is Vue.js?",
        descriptionText:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
      },
      isEntry: true,
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    isEntry
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      descriptionText: "Introducing my Vue.js blog!...",
      titleText: "TODOvue Blog",
    });
    
    return {
      configHero,
    }
  }
}
</script>`,
  },
  {
    id: 6,
    title: "TODOvue entry without image hero with custom colors",
    propsData: {
      configHero: {
        titleText: "What is Vue.js?",
        descriptionText:
          "Vue.js is a progressive JavaScript framework for building user interfaces. It is designed from the ground up to be incrementally adoptable, and can easily scale between a library and a full-featured framework. It is also one of the most popular JavaScript frameworks, with over 1 million GitHub stars and 100,000+ contributors.",
      },
      isEntry: true,
      customHero: {
        bgBody: "#202020",
        colorBody: "#ffffff",
      },
    },
    html: `<template>
  <tv-hero
    :configHero="configHero"
    :customHero="customHero"
    isEntry
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      descriptionText: "Introducing my Vue.js blog!...",
      titleText: "TODOvue Blog",
    });
    
    const customHero = ref({
      bgBody: "#202020",
      colorBody: "#ffffff",
    });
    
    return {
      configHero,
      customHero,
    }
  }
}
</script>`,
  },
];
