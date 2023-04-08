import { shallowMount } from "@vue/test-utils";
import TvHero from "@/component/TvHero.vue";

describe("TvButton Component", () => {
  it("should matches snapshot", () => {
    const wrapper = shallowMount(TvHero, {
      props: {
        titleText: "TODOvue",
        descriptionText: "TODOvue Blog",
        buttonPrimaryText: "Primary",
        buttonSecondaryText: "Secondary",
      },
    });
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("emits a click event when the button is clicked", () => {
    const wrapper = shallowMount(TvHero);
    wrapper.find("tv-button-stub").trigger("click");
    expect(wrapper.emitted("click")).toBeTruthy();
  });

  it("emits 'clickPrimary' event when clickPrimary method is called", async () => {
    const wrapper = shallowMount(TvHero);
    await wrapper.vm.clickPrimary();

    expect(wrapper.emitted("clickPrimary")).toBeTruthy();
  });

  it("emits 'clickSecondary' event when clickSecondary method is called", async () => {
    const wrapper = shallowMount(TvHero);
    await wrapper.vm.clickSecondary();

    expect(wrapper.emitted("clickSecondary")).toBeTruthy();
  });

  it("renders the title correctly", () => {
    const titleText = "Test title";
    const wrapper = shallowMount(TvHero, {
      propsData: {
        image: "https://todovue.com/img/todovue-logo.png",
        imageName: "Test image",
        titleText: titleText,
      },
      slots: {
        title: `<div>${titleText}</div>`,
        image: `<img src="https://todovue.com/img/todovue-logo.png" alt="Test image" />`,
      },
    });
    expect(wrapper.find(".tv-hero-title").text()).toBe(titleText);
    expect(wrapper.find("img").attributes("alt")).toBe("Test image");
    expect(wrapper.find("img").attributes("src")).toBe(
      "https://todovue.com/img/todovue-logo.png"
    );
  });
});
