import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/adge_detail4.png",
      alt: "Homepage  screenshot",
      caption: "A view of the full homepage design",
      title: "Full Homepage",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/adge_detail5.png",
      alt: "Service page screenshot",
      caption: "A view of the service page design",
      title: "Service Page",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/adge_detail1.png",
      alt: "Homepage masthead and banner screenshot",
      caption: "Detail of the homepage masthead and banner",
      title: "Homepage Detail",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/adge_detail6.png",
      alt: "Homepage service matrix detail",
      caption: "Detail of the service matrix on the homepage",
      title: "Service Matrix Detail",
      maxWidth: "40rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/adge" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-15dpxs3_START -->${$$result.title = `<title>Ugly Bunnies\u2014Adge IT Consultants Screenshots</title>`, ""}<!-- HEAD_svelte-15dpxs3_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>Adge IT Consultants Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
