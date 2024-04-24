import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/uf-homepage1.png",
      alt: "Homepage Detail screenshot",
      caption: "A Detail of the homepage",
      title: "Homepage detail",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/UF_detail4.png",
      alt: "Example of the theme in production",
      caption: "An example of the theme in production with one column",
      title: "Theme in Production",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/UF_detail5.png",
      alt: "Example of the theme in production",
      caption: "An example of the theme in production with two columns",
      title: "Theme in Production",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/UF_detail6.png",
      alt: "Example of the theme in production",
      caption: "An example of the theme in production with two columns",
      title: "Theme in Production",
      maxWidth: "40rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/urban-forest" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-bxagff_START -->${$$result.title = `<title>Ugly Bunnies\u2014Urban Forest: Theme Design for Sandvox Screenshots</title>`, ""}<!-- HEAD_svelte-bxagff_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>Urban Forest: Theme Design for Sandvox Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
