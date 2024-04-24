import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/platzner-full-homepage.png",
      alt: "Homepage screenshot",
      caption: "The complete view of the homepage",
      title: "The Homepage",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/platznerBlogMockup.png",
      alt: "Layout of the blog post page",
      caption: "Example of the blog index page layout",
      title: "Blog Index Page",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/platzner-wallpaper.png",
      alt: "Detail of the tiled wallpaper",
      caption: "Detail of the tiled wallpaper used as the background for the site",
      title: "Art Deco Wallpaper",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/platzner-widgets.png",
      alt: "Detail of the tiled wallpaper",
      caption: "Detail of the custom elements for bullets, and the vertical and horizontal rules.",
      title: "Art Deco Widgets",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/platzner-full-homepage-detail1.png",
      alt: "Detail of the homepage masthead",
      caption: "Detail of the homepage including the masthead and logo",
      title: "Homepage Detail",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/platznerContentMockup.png",
      alt: "Layout of the content page",
      caption: "Example of the content page layout",
      title: "Content Page Detail",
      maxWidth: "48rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/platzner" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-8qs6qn_START -->${$$result.title = `<title>Ugly Bunnies\u2014Proposed Platzner &amp; Co. Website Screenshots</title>`, ""}<!-- HEAD_svelte-8qs6qn_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>Proposed Platzner &amp; Co. Website Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
