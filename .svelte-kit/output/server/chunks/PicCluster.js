import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from "./index.js";
const PicCluster_svelte_svelte_type_style_lang = "";
const css = {
  code: ".pic-cluster.svelte-37ikew.svelte-37ikew{width:100%;height:100%;position:relative;cursor:pointer;perspective:3rem}.pic.svelte-37ikew.svelte-37ikew{position:absolute;width:40%;transition:all 250ms ease-out}.center.svelte-37ikew.svelte-37ikew{top:50%;left:50%;margin:-16.5% 0 0 -20%;transform-origin:center}.top-left.svelte-37ikew.svelte-37ikew{top:17%;left:11%;transform-origin:top left}.top-right.svelte-37ikew.svelte-37ikew{top:13%;right:23%;transform-origin:top right}.bottom-left.svelte-37ikew.svelte-37ikew{bottom:19%;left:15%;transform-origin:bottom left}.bottom-right.svelte-37ikew.svelte-37ikew{bottom:13%;right:19%;transform-origin:bottom right}.pic-cluster.svelte-37ikew.expand .top-left.svelte-37ikew{top:0;left:0}.pic-cluster.svelte-37ikew.expand .top-right.svelte-37ikew{top:0;right:0}.pic-cluster.svelte-37ikew.expand .bottom-left.svelte-37ikew{bottom:0;left:0}.pic-cluster.svelte-37ikew.expand .bottom-right.svelte-37ikew{bottom:0;right:0}.pic.zoom.svelte-37ikew.svelte-37ikew{z-index:5;transform:scale(2.5)}",
  map: null
};
const PicCluster = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { pics } = $$props;
  if ($$props.pics === void 0 && $$bindings.pics && pics !== void 0)
    $$bindings.pics(pics);
  $$result.css.add(css);
  return `<div class="${"pic-cluster svelte-37ikew"}" tabindex="${"0"}">${each(pics, (pic) => {
    return `<picture><source${add_attribute("srcset", pic.webpSrc, 0)} type="${"image/webp"}">
      <source${add_attribute("srcset", pic.stdSrc, 0)} type="${"image/" + escape(pic.stdType, true)}">
      <img tabindex="${"0"}"${add_attribute("src", pic.stdSrc, 0)}${add_attribute("alt", pic.altCopy, 0)} class="${"pic " + escape(pic.sector, true) + " svelte-37ikew"}">
    </picture>`;
  })}
</div>`;
});
export {
  PicCluster as P
};
