import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/RJM_home.png",
      alt: "Home page",
      caption: "The complete homepage design featuring layered backgrounds and patterns",
      title: "The Homepage",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/RJM_services.png",
      alt: "Two-column layout",
      caption: "This page featured the two-column layout design",
      title: "The Services Page",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/RJM_staff.png",
      alt: "Full-width layout",
      caption: "Here is a full-width layout page design",
      title: "Full-width design",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/rjm_home_detail1.png",
      alt: "Home page detail of the masthead",
      caption: "This is a detail of the masthead on the homepage",
      title: "The Masthead",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/rjm_home_detail2.png",
      alt: "Home page detail of coupon section",
      caption: "This is a detail view of the service coupons section of the homepage",
      title: "Homepage Detail",
      maxWidth: "40rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/rejuvenation-site" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-1rlczxl_START -->${$$result.title = `<title>Ugly Bunnies\u2014Rejuvenation Medi-Spas Website Design Screenshots</title>`, ""}<!-- HEAD_svelte-1rlczxl_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>Rejuvenation Medi-Spas Website Design Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
