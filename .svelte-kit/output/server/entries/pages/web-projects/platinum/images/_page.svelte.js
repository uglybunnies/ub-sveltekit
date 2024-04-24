import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/platinum_home.png",
      alt: "Home page screenshot",
      caption: "The complete homepage design featuring the reflection topnav",
      title: "The Homepage",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/platinum_home_detail1.png",
      alt: "Topnav detail view",
      caption: "A detailed look at the topnav with the relection visual effect",
      title: "Topnav Detail View",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/platinum_hero.png",
      alt: "Screen shot of the homepage above-the-fold crop.",
      caption: "Screen shot of the homepage above-the-fold crop",
      title: "Above the Fold View",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/platinum_services.png",
      alt: "Services page feature section menu on the left",
      caption: "Services page featuring the section menu in the left sidebar",
      title: "Services Page",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/platinum_home_detail2.png",
      alt: "Deals section of the homepage",
      caption: "This is a detail of the service deals/discounts on the homepage",
      title: "Service Deals",
      maxWidth: "40rem"
    },
    {
      src: "/assets/web-projects/platinum-contact.png",
      alt: "Contact page layout",
      caption: "Contact page layout with no sidebars",
      title: "Contact Page",
      maxWidth: "48rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/platinum" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-p416y5_START -->${$$result.title = `<title>Ugly Bunnies\u2014Platinum Medical Spa Website Design Screenshots</title>`, ""}<!-- HEAD_svelte-p416y5_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>Platinum Medical Spa Website Design Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
