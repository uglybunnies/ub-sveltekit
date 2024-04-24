import { c as create_ssr_component, d as each, v as validate_component } from "../../../../../chunks/index.js";
import { I as ImageSection } from "../../../../../chunks/ImageSection.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics = [
    {
      src: "/assets/web-projects/satsuki-home.png",
      alt: "Homepage screenshot",
      caption: "Detail of the homepage top section",
      title: "The Homepage",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/satsuki-topnav-desktop.png",
      alt: "Detail of the dropdown menu",
      caption: "Detail of the dropdown menu navigation for desktop viewers",
      title: "Navigation Detail",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/satsuki-home-footer.png",
      alt: "Detail of the homepage footer",
      caption: "Detail of the homepage footer",
      title: "The Homepage Footer",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/SatsukiMobileHome.png",
      alt: "Full homepage screenshot",
      caption: "Mobile View of the homepage",
      title: "The Homepage on Mobile",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/satsuki-landing.png",
      alt: "Content page layout",
      caption: "Detail of a content page featuring a hero banner",
      title: "The Content Page",
      maxWidth: "48rem"
    },
    {
      src: "/assets/web-projects/satsuki-mob-topnav.png",
      alt: "Detail of the menu for mobile",
      caption: "Detail of the menu closed, opened, and expanded",
      title: "The Mobile Menu",
      maxWidth: "40rem"
    }
  ] } = $$props;
  let { projectUrl = "/web-projects/satsukiina" } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  return `${$$result.head += `<!-- HEAD_svelte-1suerl2_START -->${$$result.title = `<title>Ugly Bunnies\u2014Satsuki Ina Website Screenshots</title>`, ""}<!-- HEAD_svelte-1suerl2_END -->`, ""}

<article class="${"project"}" id="${"top"}"><header><h2>Satsuki Ina Website Screenshots</h2></header>
  ${each(pics, (pic, i) => {
    return `${validate_component(ImageSection, "ImageSection").$$render($$result, Object.assign(pic, { picIndex: i + 1 }, { projectUrl }), {}, {})}`;
  })}</article>`;
});
export {
  Page as default
};
