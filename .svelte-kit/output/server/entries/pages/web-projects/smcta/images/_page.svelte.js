import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/smcta-homepage.png",
      alt: "Homepage screenshot",
      caption: "The complete view of the homepage",
      title: "The Homepage",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/smcta-content-page.png",
      alt: "content page screenshot",
      caption: "The complete view of content page",
      title: "The Content Page",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/smcta-live-homepage.png",
      alt: "Live version of the homepage",
      caption: "Here is a screenshot of the  homepage after launch",
      title: "The Live Homepage",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/smcta-homepage-detail.png",
      alt: "Detail of the homepage",
      caption: "Detail of the homepage",
      title: "Hmepage Detail",
      maxWidth: "42rem"
    },
    {
      src: "/assets/web-projects/smcta-nav-detail.png",
      alt: "Detail of the navigation and mastead",
      caption: "Detail of the navigation and mastead",
      title: "Site Navigation",
      maxWidth: "38rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/smcta" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-xaf4uw_START -->${$$result.title = `<title>Ugly Bunnies\u2014San Mateo County Transit Authority Website Screenshots</title>`, ""}<!-- HEAD_svelte-xaf4uw_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>SMCTA Website Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
