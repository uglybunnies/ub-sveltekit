import { c as create_ssr_component, f as add_attribute, v as validate_component } from "../../../../chunks/index.js";
import { P as PicCluster } from "../../../../chunks/PicCluster.js";
const SplitView_svelte_svelte_type_style_lang = "";
const css = {
  code: ".splitter.svelte-1to3v7h.svelte-1to3v7h{position:relative;width:100%;aspect-ratio:16/9}.panel.svelte-1to3v7h.svelte-1to3v7h{position:absolute;width:100%;height:100%;top:0;left:0;overflow:hidden}.one.svelte-1to3v7h.svelte-1to3v7h{width:50%;z-index:2}.two.svelte-1to3v7h.svelte-1to3v7h{z-index:1}.panel.svelte-1to3v7h img.svelte-1to3v7h{position:absolute;width:auto;height:100%;top:0;left:0}.slider.svelte-1to3v7h.svelte-1to3v7h{background-color:var(--larkspur-lite);border:.0625em solid var(--larkspur50);position:absolute;top:0;left:50%;width:.75em;height:100%;z-index:3;transform:translate(-.25em, 0);cursor:grab}.slider.svelte-1to3v7h.svelte-1to3v7h::after{content:'';display:block;position:absolute;border:solid var(--larkspur50);border-width:.125em 0;width:20%;height:.5em;top:50%;left:50%;transform:translate(-50%, -50%)}",
  map: null
};
const SplitView = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { beforeSrc } = $$props;
  let { afterSrc } = $$props;
  let { beforeSrcPng } = $$props;
  let { afterSrcPng } = $$props;
  let { beforeAlt } = $$props;
  let { afterAlt } = $$props;
  if ($$props.beforeSrc === void 0 && $$bindings.beforeSrc && beforeSrc !== void 0)
    $$bindings.beforeSrc(beforeSrc);
  if ($$props.afterSrc === void 0 && $$bindings.afterSrc && afterSrc !== void 0)
    $$bindings.afterSrc(afterSrc);
  if ($$props.beforeSrcPng === void 0 && $$bindings.beforeSrcPng && beforeSrcPng !== void 0)
    $$bindings.beforeSrcPng(beforeSrcPng);
  if ($$props.afterSrcPng === void 0 && $$bindings.afterSrcPng && afterSrcPng !== void 0)
    $$bindings.afterSrcPng(afterSrcPng);
  if ($$props.beforeAlt === void 0 && $$bindings.beforeAlt && beforeAlt !== void 0)
    $$bindings.beforeAlt(beforeAlt);
  if ($$props.afterAlt === void 0 && $$bindings.afterAlt && afterAlt !== void 0)
    $$bindings.afterAlt(afterAlt);
  $$result.css.add(css);
  return `<div class="${"splitter svelte-1to3v7h"}"><div class="${"panel one svelte-1to3v7h"}"><picture><source${add_attribute("srcset", beforeSrc, 0)} type="${"image/webp"}">
      <source${add_attribute("srcset", beforeSrcPng, 0)} type="${"image/png"}">
      <img${add_attribute("src", beforeSrcPng, 0)}${add_attribute("alt", beforeAlt, 0)} class="${"svelte-1to3v7h"}"></picture></div>
  <div class="${"panel two svelte-1to3v7h"}"><picture><source${add_attribute("srcset", afterSrc, 0)} type="${"image/webp"}">
      <source${add_attribute("srcset", afterSrcPng, 0)} type="${"image/png"}">
      <img${add_attribute("src", beforeSrcPng, 0)}${add_attribute("alt", afterAlt, 0)} class="${"svelte-1to3v7h"}"></picture></div>
  <div class="${"slider svelte-1to3v7h"}"></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { picData = {
    pics: [
      {
        webpSrc: "/assets/web-projects/corelightcarousel.webp",
        stdSrc: "/assets/web-projects/CorelightCarousel.gif",
        stdType: "gif",
        altCopy: "Animation of the carousel transitions from one panel to the next",
        sector: "center"
      }
    ]
  } } = $$props;
  let { splits = {
    beforeSrc: "/assets/web-projects/AutodeskBefore.webp",
    afterSrc: "/assets/web-projects/AutodeskAfter.webp",
    beforeSrcPng: "/assets/web-projects/AutodeskBefore.png",
    afterSrcPng: "/assets/web-projects/AutodeskAfter.png",
    beforeAlt: "Autodesk previous design screenshot",
    afterAlt: "Autodesk new design screenshot"
  } } = $$props;
  if ($$props.picData === void 0 && $$bindings.picData && picData !== void 0)
    $$bindings.picData(picData);
  if ($$props.splits === void 0 && $$bindings.splits && splits !== void 0)
    $$bindings.splits(splits);
  return `${$$result.head += `<!-- HEAD_svelte-1pq8dnd_START -->${$$result.title = `<title>Ugly Bunnies\u2014Autodesk UI Development Projects</title>`, ""}<!-- HEAD_svelte-1pq8dnd_END -->`, ""}
<article class="${"project"}"><header><h2>Autodesk UI Development Projects</h2>
    <p>My tenure at Autodesk included the development of many customer-facing features designed to entice creators to use Autodesk tools to bring their ideals to life.</p></header>
  <section class="${"design project"}"><header><h3>Website Redesign</h3>
      <p></p></header>
    <div class="${"group"}"><div class="${"decorate"}"><p></p></div>
      ${validate_component(SplitView, "SplitView").$$render($$result, Object.assign(splits), {}, {})}</div></section>
  <section class="${"design project"}"><header><h3>Autodesk Mega-Nav</h3>
      <p></p></header>
    <div class="${"group-switch"}"><p class="${"decorate"}"></p>
      ${validate_component(PicCluster, "PicCluster").$$render($$result, Object.assign(picData), {}, {})}</div></section></article>`;
});
export {
  Page as default
};
