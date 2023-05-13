import { shallowMount } from "@vue/test-utils";
import TvHero from "@/component/TvHero.vue";

describe("TvButton Component", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero: {
          titleText: "TODOvue Blog",
          descriptionText:
            "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js.",
          buttonText: "View all blogs",
          image: "https://todovue.com/logo.png",
          alt: "TODOvue Logo",
        },
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });
});
