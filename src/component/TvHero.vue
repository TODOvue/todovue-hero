<template>
  <div class="container" :class="{ 'is-entry': isEntry }">
    <div class="hero">
      <div class="hero-image">
        <img :src="image" :alt="imageName" />
      </div>
      <div class="hero-content">
        <div class="hero-content_title">
          <slot name="title"></slot>
        </div>
        <div class="hero-content_description">
          <slot name="description"></slot>
        </div>
        <div class="hero-content_actions" v-if="!isEntry">
          <tv-button is-small is-outlined is-rounded @click="clickPrimary">
            <slot name="buttonPrimary"></slot>
          </tv-button>
          <tv-button is-small is-outlined is-rounded @click="clickSecondary">
            <slot name="buttonSecondary"></slot>
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
      required: true,
    },
    imageName: {
      type: String,
      required: true,
    },
    isEntry: {
      type: Boolean,
      default: false,
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

<style scoped>
.dark-mode .container {
  background: var(--color-background-card-dark);
  color: var(--color-text-dark);
}

.dark-mode .container .hero .hero-content .hero-content_title::after {
  background: var(--color-text-button-dark);
  box-shadow: 0 0 10px 0 var(--color-text-button-dark);
}

.light-mode .container {
  background: var(--color-background-card-light);
  color: var(--color-text-light);
}

.light-mode .container .hero .hero-content .hero-content_title::after {
  background: var(--color-text-button-light);
  box-shadow: 0 0 10px 0 var(--color-text-button-light);
}

.container {
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .hero {
  display: flex;
  padding: 40px 0;
  width: 90%;
  max-width: 70%;
}

.container .hero .hero-image {
  width: 40%;
  margin-right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container .hero .hero-image img {
  width: 100%;
}

.container .hero .hero-content {
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.container .hero .hero-content .hero-content_title {
  margin-bottom: 1.5rem;
  text-align: center;
}

.container .hero .hero-content .hero-content_title::after {
  content: "";
  display: block;
  width: 80%;
  height: 3px;
  margin: 1rem auto 0;
}

.container .hero .hero-content .hero-content_description {
  margin-bottom: 1rem;
  font-size: 18px;
  font-weight: 600;
  text-align: center;
}

.container .hero .hero-content .hero-content_actions {
  display: flex;
  gap: 20px;
  justify-content: center;
}

@media (max-width: 768px) {
  .container .hero {
    width: 90%;
  }

  .container .hero .hero-image img {
    width: 200px;
  }

  .container .hero .hero-content .hero-content_title {
    font-size: 14px;
  }

  .container .hero .hero-content .hero-content_description {
    font-size: 12px;
  }
}

@media (max-width: 612px) {
  .container .hero {
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    align-items: center;
  }

  .container .hero .hero-image {
    width: 60%;
    margin-right: 0;
    margin-bottom: 2rem;
  }

  .container .hero .hero-content {
    width: 100%;
  }

  .container .hero .hero-content .hero-content_description {
    padding: 10px 50px;
  }
}

@media (max-width: 425px) {
  .container .hero {
    width: 100%;
    padding: 20px 0 10px 0;
  }

  .container .hero .hero-content .hero-content_title {
    font-size: 12px;
    padding: 0 10px;
    margin: 0;
  }

  .container .hero .hero-content .hero-content_actions {
    align-items: center;
    flex-direction: column;
    gap: 10px;
    padding: 5px;
  }
}

@media (max-width: 325px) {
  .container .hero .hero-content .hero-content_description {
    margin: 0;
    padding: 20px 10px;
  }
}

.container.is-entry {
  display: flex;
}

.container.is-entry .hero {
  width: 100%;
  max-width: 100%;
  padding: 0;
}

.container.is-entry .hero .hero-content {
  width: 100%;
  padding: 10px 20px;
}

.container.is-entry .hero .hero-content .hero-content_title::after {
  display: none;
}

.container.is-entry .hero .hero-image {
  order: 1;
  width: 800px;
  margin: 0;
}

.container.is-entry .hero .hero-content .hero-content_description {
  order: 2;
}

@media (max-width: 768px) {
  .container.is-entry .hero .hero-image {
    width: 100%;
  }

  .container.is-entry .hero .hero-image img {
    width: 100%;
  }

  .container.is-entry .hero .hero-content .hero-content_description {
    font-size: 12px;
    font-weight: 300;
  }
}
</style>
