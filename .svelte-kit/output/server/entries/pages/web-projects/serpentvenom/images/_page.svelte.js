import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/sv_detail5.png",
      alt: "Homepage design screenshot",
      caption: "The complete homepage design incorporates repetition of the golden ratio throughout the layout",
      title: "The Homepage",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/sv_detail8.png",
      alt: "Responsive tablet view of the SerpentVenom site",
      caption: "Tablet view of the homepage showing how the layout responds to this size viewport",
      title: "Responsive Tablet View",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/sv_detail1.png",
      alt: "Homepage layout detail of the SerpentVenom site",
      caption: "A detail of the homepage layout",
      title: "Homepage Layout Detail",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/sv_detail6.png",
      alt: "Project page design",
      caption: "The product detail page provides in-page navigation to view information about that project",
      title: "Product Page",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/sv_detail2.png",
      alt: "Detail of the design panel of the project page",
      caption: "Each header of the project page revealed a relevant panel with copy and screenshots",
      title: "Project Page Design Panel",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/sv_detail3.png",
      alt: "Detail of the project gallery panel",
      caption: "The project gallery panel features a lightbox to view larger views of the screenshots",
      title: "Project Gallery",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/sv_detail4.png",
      alt: "Project gallery lightbox",
      caption: "The lightbox allows the user to view all of the project gallery images sequentially",
      title: "Project gallery lightbox",
      maxWidth: "40rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/serpentvenom" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-eq1r9s_START -->${$$result.title = `<title>Ugly Bunnies\u2014SerpentVenom Website Design Screenshots</title>`, ""}<!-- HEAD_svelte-eq1r9s_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>SerpentVenom Website Design Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
