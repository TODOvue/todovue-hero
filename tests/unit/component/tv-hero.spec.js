import { shallowMount } from "@vue/test-utils";
import TvHero from "@/component/TvHero.vue";

describe("TvButton Component", () => {
  const configHero = {
    titleText: "TODOvue Blog",
    descriptionText:
      "Introducing my Vue.js blog! Get ready to dive into the world of Vue.js.",
    buttonText: "View all blogs",
    image: "https://todovue.com/logo.png",
    alt: "TODOvue Logo",
  };

  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should not render card when configCard is null", () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero: null,
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should emmit event when primary button is clicked", async () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero,
      },
    });
    wrapper.vm.handleClick();
    expect(wrapper.emitted("clickButton")).toBeTruthy();
  });

  it("should emmit event when secondary button is clicked", async () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero: {
          ...configHero,
          buttonSecondaryText: "View more",
        },
      },
    });
    wrapper.vm.handleClickSecondary();
    expect(wrapper.emitted("clickSecondaryButton")).toBeTruthy();
  });

  it("should render custom style", () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero: {
          ...configHero,
          buttonSecondaryText: "View last blog",
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
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should return null when customHero is null", () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        configHero,
        customHero: null,
      },
    });
    expect(wrapper.vm.customHero).toEqual(null);
  });
});
