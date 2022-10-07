import { c as create_ssr_component, v as validate_component } from "../../../chunks/index.js";
import { F as Features } from "../../../chunks/Features.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".projects.svelte-9x8bxo{max-width:none}.sites.svelte-9x8bxo{padding:0}.websites.svelte-9x8bxo{margin:0 0 5em;padding:1em 0 2em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let row1 = {
    projects: [
      {
        copy: "This site was designed and developed for Satuki Ina.",
        tilt: "-5deg",
        top: ".5em",
        left: "1%",
        mobileTop: "41%",
        mobileLeft: "3%",
        src: "/assets/web-projects/satsuki-thumb.png",
        alt: "Satsuki Ina homepage",
        link: "/web-projects/satsukiina"
      },
      {
        copy: "The third incarnation of SerpentVenom.",
        tilt: "7deg",
        top: "1em",
        left: "20%",
        mobileTop: "45%",
        mobileLeft: "45%",
        src: "/assets/web-projects/sv_thumb.png",
        alt: "SerpentVenom homepage",
        link: "/web-projects/serpentvenom"
      },
      {
        copy: "A desing focused on search engine optimization.",
        tilt: "-3deg",
        top: "1.5em",
        left: "40%",
        mobileTop: "-8%",
        mobileLeft: "52%",
        src: "/assets/web-projects/RJM_thumb.png",
        alt: "Rejuvenation Medi-Spas homepage",
        link: "/web-projects/rejuvenation-site"
      },
      {
        copy: "A site designed and built with SEO in mind.",
        tilt: "4deg",
        top: ".25em",
        left: "60%",
        mobileTop: "-10%",
        mobileLeft: "5%",
        src: "/assets/web-projects/platinum_thumb.png",
        alt: "Platinum Medical Spa homepage",
        link: "/web-projects/platinum"
      }
    ]
  };
  let row2 = {
    projects: [
      {
        copy: "This site was designed Platzner & Co.",
        tilt: "7deg",
        top: ".5em",
        left: "1%",
        mobileTop: "41%",
        mobileLeft: "3%",
        src: "/assets/web-projects/platzner-full-homepage-detail1.png",
        alt: "Platzner & Co. Website",
        link: "/web-projects/platzner"
      },
      {
        copy: "This site was designed San Mateo County Transit Authority.",
        tilt: "-2deg",
        top: "-.5em",
        left: "20%",
        mobileTop: "43%",
        mobileLeft: "50%",
        src: "/assets/web-projects/smcta-thumb.png",
        alt: "SMCTA Website",
        link: "/web-projects/smcta"
      },
      {
        copy: "Theme design for the Sandvox web publishing tool.",
        tilt: "5deg",
        top: "2em",
        left: "40%",
        mobileTop: "0%",
        mobileLeft: "53%",
        src: "/assets/web-projects/uf-homepage1.png",
        alt: "Urban Forest theme for Sandvox",
        link: "/web-projects/urban-forest"
      },
      {
        copy: "A proposed design for the Adge IT Consultants website.",
        tilt: "-4deg",
        top: "0",
        left: "60%",
        mobileTop: "1%",
        mobileLeft: "0%",
        src: "/assets/web-projects/adge_detail1.png",
        alt: "Adge IT Consultants website",
        link: "/web-projects/adge"
      }
    ]
  };
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Ugly Bunnies\u2014Web Projects</title>`, ""}`, ""}
<article class="${"projects svelte-9x8bxo"}"><header><h2>Web Projects</h2>
    <p>I&#39;ve been a web professional for quite a while and have done a variety of projects throughout my career. Here are some projects I&#39;ve worked on.</p></header>
  <section class="${"sites svelte-9x8bxo"}"><h3>Websites</h3>
    <p>This is a collection of some the websites I designed and developed over the course of my career.</p>
    <div class="${"websites decorate svelte-9x8bxo"}">${validate_component(Features, "Features").$$render($$result, Object.assign(row1), {}, {})}</div>
    <div class="${"websites decorate-shift svelte-9x8bxo"}">${validate_component(Features, "Features").$$render($$result, Object.assign(row2), {}, {})}</div></section>
  
</article>`;
});
export {
  Page as default
};
