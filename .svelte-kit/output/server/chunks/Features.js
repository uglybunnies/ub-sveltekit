import { c as create_ssr_component, d as each, e as escape, f as add_attribute } from "./index.js";
const Features_svelte_svelte_type_style_lang = "";
const css = {
  code: ".featured.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{position:relative;display:grid;grid-template-columns:repeat(4, 25%)}.project-card.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{width:14em;height:8.652em}.card.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{position:absolute;top:var(--offsetTop);left:var(--offsetLeft);transform:rotate(var(--projectTilt));transition:all .5s ease-in;cursor:pointer;width:14em;height:8.652em;z-index:1}.featured.svelte-7qg5e4 .card.show{position:absolute;top:-10%;left:25%;transform:rotate(0);transition-timing-function:ease-out;z-index:100}.image.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{position:relative;width:100%;margin:0;z-index:2}.image.svelte-7qg5e4 img.svelte-7qg5e4.svelte-7qg5e4{width:100%}.copy.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{background:var(--white);position:absolute;top:0;left:0;width:100%;height:100%;transition:left .5s ease-in, top .5s ease-in;text-align:left;z-index:1}.featured.svelte-7qg5e4 .card.show .copy{left:100%;transition-timing-function:ease-out}.copy.svelte-7qg5e4 p.svelte-7qg5e4.svelte-7qg5e4:first-child{padding:.5em .5em 0}.copy.svelte-7qg5e4 p.svelte-7qg5e4+p.svelte-7qg5e4{padding:0 .5em}@media screen and (max-width: 50em){.featured.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{grid-template-columns:50% 50%;grid-template-rows:repeat(auto-fill, minmax(3em, 1fr))}.card.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{top:initial;left:var(--mobileLeft);bottom:var(--mobileTop)}.featured.svelte-7qg5e4 .card.show{bottom:70%;left:25%}}@media screen and (max-width: 40em){.featured.svelte-7qg5e4 .card.show .copy{left:0;top:9.27em;transition-timing-function:ease-out}}@media screen and (max-width: 30em){.featured.svelte-7qg5e4 .card.show{left:15%}.project-card.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{width:12em;height:7.416em}.card.svelte-7qg5e4.svelte-7qg5e4.svelte-7qg5e4{width:12em;height:7.416em}.featured.svelte-7qg5e4 .card.show .copy{top:7.416em}}",
  map: null
};
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { projects } = $$props;
  if ($$props.projects === void 0 && $$bindings.projects && projects !== void 0)
    $$bindings.projects(projects);
  $$result.css.add(css);
  return `<div class="${"featured svelte-7qg5e4"}">${each(projects, (project) => {
    return `<div class="${"project-card svelte-7qg5e4"}" style="${"--projectTilt:" + escape(project.tilt, true) + "; --offsetTop:" + escape(project.top, true) + "; --offsetLeft:" + escape(project.left, true) + "; --mobileTop:" + escape(project.mobileTop, true) + "; --mobileLeft:" + escape(project.mobileLeft, true) + ";"}"><div class="${"card svelte-7qg5e4"}"><div class="${"image svelte-7qg5e4"}"><img${add_attribute("src", project.src, 0)}${add_attribute("alt", project.alt, 0)} class="${"svelte-7qg5e4"}"></div>
        <div class="${"copy svelte-7qg5e4"}"><p class="${"svelte-7qg5e4"}">${escape(project.copy)}</p>
          <p class="${"svelte-7qg5e4"}"><a class="${"slink"}"${add_attribute("href", project.link, 0)}>View project \xBB</a></p>
        </div></div>
    </div>`;
  })}
</div>`;
});
export {
  Features as F
};
