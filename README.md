<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue Hero

[![npm](https://img.shields.io/npm/v/todovue-hero.svg)](https://www.npmjs.com/package/todovue-hero) [![Netlify Status](https://api.netlify.com/api/v1/badges/d5abf973-a0e6-4094-a186-ec256966b60b/deploy-status)](https://app.netlify.com/sites/todovue-hero/deploys) [![Pipeline](https://github.com/TODOvue/todovue-hero/actions/workflows/pipeline.yml/badge.svg?branch=master)](https://github.com/TODOvue/todovue-hero/actions/workflows/pipeline.yml) [![npm](https://img.shields.io/npm/dm/todovue-hero.svg)](https://www.npmjs.com/package/todovue-hero)
[![npm](https://img.shields.io/npm/dt/todovue-hero.svg)](https://www.npmjs.com/package/todovue-hero) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-hero) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-hero)

<img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20default.png?alt=media&token=6dbb78cd-9bb7-4b49-b030-7bfa96e6ee3e" alt="TODOvue hero default"> <img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20two%20button.png?alt=media&token=34a672b6-9c31-4e91-afd3-798fe20376c8" alt="TODOvue hero two button"> <img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20custom.png?alt=media&token=03958af3-0d86-4813-9ef7-c759316b520d" alt="TODOvue hero two button custom"> <img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20isimage.png?alt=media&token=2cd4bcb5-90e1-4ec0-b463-cdc81c1a3bda" alt="TODOvue hero is image"> <img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20isimage%20custom.png?alt=media&token=1bea5a63-e335-4784-837c-accec7b1941d" alt="TODOvue hero is image"> <img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20text.png?alt=media&token=9db9342b-0ff3-4220-bf72-cdde8b98b518" alt="TODOvue hero text"> <img width="800" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/imagesGit%2FTvHero%2Ftvhero%20text%20custom.png?alt=media&token=5d9dadb0-a210-40f5-b3ea-221fa0df4a99" alt="TODOvue hero text custom">

## Table of Contents
- [Demo](https://todovue-hero.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Customize](#customize)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-hero/blob/master/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-hero/blob/master/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-hero/blob/master/LICENSE)

## Installation
Install with npm or yarn as development dependency
```bash
npm install todovue-hero
```
```bash
yarn add todovue-hero
```

Import
```js
import { TvHero } from 'todovue-hero'
```
You can also import it directly in the **main.js** file, so you don't have to import it in the pages
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvHero from "todovue-hero";

const app = createApp(App);
app.component("TvHero", TvHero);
app.mount("#app");
```

## Usage
```html
<template>
  <tv-hero
    :configHero="configHero"
    @click-button="handleClick"
  />
</template>

<script>
  import { ref } from "vue";

  export default {
    setup() {
      const configHero = ref({
        alt: "TODOvue Logo",
        button: "View all blogs",
        description: "Introducing my Vue.js blog!...",
        image: "https://todovue.com/logo.png",
        title: "TODOvue Blog",
      });

      const handleClick = () => {
        console.log("click button");
      }

      return {
        configHero,
        handleClick,
      }
    }
  }
</script>
```

## Props
| Name       | Type    | Default                  | Description                                         | Required |
|------------|---------|--------------------------|-----------------------------------------------------|----------|
| configHero | Object  | [See below](#configHero) | Hero configuration                                  | `true`   |
| customHero | Object  | [See below](#customHero) | Custom hero configuration                           | `false`  |
| isEntry    | Boolean | false                    | Change the hero's style to display it in blog posts | `false`  |

### configHero
| Name            | Type   | Default | Description           | Required |
|-----------------|--------|---------|-----------------------|----------|
| alt             | String | `""`    | Image alt             | `false`  |
| button          | String | `""`    | Button text           | `true`   |
| description     | String | `""`    | Hero description      | `true`   |
| image           | String | `""`    | Image url             | `false`  |
| title           | String | `""`    | Hero title            | `true`   |
| buttonSecondary | String | `""`    | Secondary button text | `false`  |

### customHero
| Name                | Type   | Default       | Description                       | Required |
|---------------------|--------|---------------|-----------------------------------|----------|
| bgBody              | String | `#0E131F`     | Background color body             | `false`  |
| colorBody           | String | `#F4FAFF`     | Color body                        | `false`  |
| bgButton            | String | `#Ef233C`     | Background color button           | `false`  |
| buttonText          | String | `#F4FAFF`     | Color button                      | `false`  |
| bgButtonSecondary   | String | `transparent` | Background color secondary button | `false`  |
| buttonSecondaryText | String | `#EF233C`     | Color secondary button            | `false`  |

## Customize
You can customize the hero by passing the `customHero` prop, which accepts an object with the following properties:
```js
const customHero = ({
  bgBody: "#0E131F",
  colorBody: "#F4FAFF",
  bgButton: "#Ef233C",
  buttonText: "#F4FAFF",
  bgButtonSecondary: "transparent",
  buttonSecondaryText: "#EF233C",
});
```
```js
<template>
  <tv-hero
    :configHero="configHero"
    :customHero="customHero"
    @click-button="handleClick"
    @click-secondary-button="handleClickSecondary"
  />
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const configHero = ref({
      alt: "TODOvue Logo",
      buttonSecondary: "View last blog",
      button: "View all blogs",
      description: "Introducing my Vue.js blog!...",
      image: "https://todovue.com/logo.png",
      title: "TODOvue Blog",
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
    
    const handleClickSecondary = () => {
      console.log("click secondary button");
    }
    
    return {
      configHero,
      customHero,
      handleClick,
      handleClickSecondary,
    }
  }
}
</script>
```

## Development
Clone the repository and install the dependencies
```bash
git clone https://github.com/TODOvue/todovue-hero.git
```
```bash
cd todovue-hero
```

Install the dependencies
```bash
yarn install
```
Run the project
```bash
yarn demo
```
Run the tests
```bash
yarn test:unit
```
Run the linter
```bash
yarn lint
```
Run the build It is not necessary to generate build, since it is generated when you do PR to the master branch
```bash
yarn build
```

## License
[MIT](https://github.com/TODOvue/todovue-hero /blob/master/LICENSE)

