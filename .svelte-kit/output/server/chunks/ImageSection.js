import { c as create_ssr_component, e as escape, f as add_attribute } from "./index.js";
const ImageSection_svelte_svelte_type_style_lang = "";
const css = {
  code: ".screenshot.svelte-16qxiie{max-width:var(--maxWidth);width:100%;display:block;margin:0 auto}",
  map: null
};
const ImageSection = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  let { src } = $$props;
  let { alt } = $$props;
  let { caption } = $$props;
  let { maxWidth } = $$props;
  let { picIndex } = $$props;
  let { projectUrl } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.picIndex === void 0 && $$bindings.picIndex && picIndex !== void 0)
    $$bindings.picIndex(picIndex);
  if ($$props.projectUrl === void 0 && $$bindings.projectUrl && projectUrl !== void 0)
    $$bindings.projectUrl(projectUrl);
  $$result.css.add(css);
  return `<section class="${"screens"}" id="${"pic" + escape(picIndex, true)}"><h3>${escape(title)}</h3>
  <p>${escape(caption)}</p>
  <div class="${"pic"}"><img class="${"screenshot svelte-16qxiie"}" style="${"--maxWidth: " + escape(maxWidth, true)}"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></div>
  <p><a${add_attribute("href", projectUrl, 0)}>\xAB Return to this project page</a></p>
</section>`;
});
export {
  ImageSection as I
};
