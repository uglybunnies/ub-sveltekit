import { c as create_ssr_component, e as escape, f as add_attribute, d as each, v as validate_component } from "./index.js";
const ImageCaption_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".copy.svelte-1mjis1k h3.svelte-1mjis1k{font-size:var(--h5-font-size)}",
  map: null
};
const ImageCaption = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src } = $$props;
  let { alt } = $$props;
  let { caption } = $$props;
  let { title } = $$props;
  let { topOffset } = $$props;
  let { leftOffset } = $$props;
  let { tilt } = $$props;
  let { cardHeightRatio } = $$props;
  let { cardWidth } = $$props;
  let { maxWidth } = $$props;
  let { mobileTop } = $$props;
  let { mobileLeft } = $$props;
  let { staticImgUrl } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  if ($$props.caption === void 0 && $$bindings.caption && caption !== void 0)
    $$bindings.caption(caption);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.topOffset === void 0 && $$bindings.topOffset && topOffset !== void 0)
    $$bindings.topOffset(topOffset);
  if ($$props.leftOffset === void 0 && $$bindings.leftOffset && leftOffset !== void 0)
    $$bindings.leftOffset(leftOffset);
  if ($$props.tilt === void 0 && $$bindings.tilt && tilt !== void 0)
    $$bindings.tilt(tilt);
  if ($$props.cardHeightRatio === void 0 && $$bindings.cardHeightRatio && cardHeightRatio !== void 0)
    $$bindings.cardHeightRatio(cardHeightRatio);
  if ($$props.cardWidth === void 0 && $$bindings.cardWidth && cardWidth !== void 0)
    $$bindings.cardWidth(cardWidth);
  if ($$props.maxWidth === void 0 && $$bindings.maxWidth && maxWidth !== void 0)
    $$bindings.maxWidth(maxWidth);
  if ($$props.mobileTop === void 0 && $$bindings.mobileTop && mobileTop !== void 0)
    $$bindings.mobileTop(mobileTop);
  if ($$props.mobileLeft === void 0 && $$bindings.mobileLeft && mobileLeft !== void 0)
    $$bindings.mobileLeft(mobileLeft);
  if ($$props.staticImgUrl === void 0 && $$bindings.staticImgUrl && staticImgUrl !== void 0)
    $$bindings.staticImgUrl(staticImgUrl);
  $$result.css.add(css$1);
  return `<div class="${"card"}" style="${"--top: " + escape(topOffset, true) + "; --left: " + escape(leftOffset, true) + "; --tilt: " + escape(tilt, true) + "deg; --cardHeight: " + escape(cardHeightRatio, true) + "; --cardWidth: " + escape(cardWidth, true) + "; --maxWidth: " + escape(maxWidth, true) + "; --mobileTop: " + escape(mobileTop, true) + "; --mobileLeft: " + escape(mobileLeft, true)}"><div class="${"content"}"><div class="${"front"}"><a${add_attribute("href", staticImgUrl, 0)}><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></a></div>
    <div class="${"back"}"><div class="${"image"}"><img${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></div>
      <div class="${"back-copy"}"><div class="${"copy svelte-1mjis1k"}"><h3 class="${"svelte-1mjis1k"}">${escape(title)}</h3>
          <p>${escape(caption)}</p></div></div></div></div>
</div>`;
});
const Captionbox_svelte_svelte_type_style_lang = "";
const css = {
  code: `.copyImages.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31{display:grid;grid-template-columns:repeat(2, 50%);grid-template-areas:'copy cards';column-gap:1em;margin-bottom:2.5em;position:relative}.copy-block.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31{position:relative;grid-area:copy;padding:1rem}.copy-block.svelte-1pv6u31 p.svelte-1pv6u31.svelte-1pv6u31{margin-right:25%}.copy-block.svelte-1pv6u31 p.svelte-1pv6u31+p.svelte-1pv6u31:not(.tooltip){margin-right:3em;margin-left:20%}.cards.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31{grid-area:cards;display:grid;grid-template-columns:repeat(4, 25%);grid-template-rows:repeat(auto-fill, minmax(3em, 1fr));column-gap:0;row-gap:0}.cards.svelte-1pv6u31 .card{cursor:pointer}.cards.svelte-1pv6u31 .content{position:absolute;width:var(--cardWidth);height:calc(var(--cardWidth) * var(--cardHeight));top:var(--top);left:var(--left);perspective:calc(var(--cardWidth) * 7);transform:rotate(var(--tilt));z-index:1;box-shadow:.0625rem .0625rem 1rem .5rem rgba(0,0,0,0.1);transition:all .5s ease-out;transform-style:preserve-3d}.cards.svelte-1pv6u31 .card.flip{z-index:100}.cards.svelte-1pv6u31 .card.flip .content{top:-10%;left:0;transform:translate3D(0, -10%, 1000em) rotateY( 180deg ) rotate(0deg);transition-timing-function:ease-in;width:calc(var(--maxWidth) + 24rem);height:calc(var(--maxWidth) * var(--cardHeight) + 1rem);z-index:1000}.cards.svelte-1pv6u31 .front,.cards.svelte-1pv6u31 .back{position:absolute;height:100%;width:100%;box-sizing:border-box;background:white;line-height:1.3;color:#03446A;font-size:1.25rem;border-radius:5px;-webkit-backface-visibility:hidden;backface-visibility:hidden}.cards.svelte-1pv6u31 .front img{width:100%}.cards.svelte-1pv6u31 .back{display:grid;grid-template-columns:var(--maxWidth) 22rem;transform:rotateY( 180deg )}.cards.svelte-1pv6u31 .back .image{max-width:var(--maxWidth) ;width:100%;padding:1em}.cards.svelte-1pv6u31 .back .image img{height:auto;max-width:calc(var(--maxWidth) - 2rem)}.cards.svelte-1pv6u31 .back-copy{display:flex;width:100%;flex-direction:column;padding:1rem;color:#2e3438}.tooltip.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31{font-size:.8em;text-align:center;position:absolute;bottom:-.5em;left:0;width:100%;margin:0}@media screen and (max-width: 70em){.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .75 + 24rem);height:calc(var(--maxWidth) * var(--cardHeight) * .75 + 1rem)}.cards.svelte-1pv6u31 .back{grid-template-columns:calc(var(--maxWidth) * .75) 22rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .75 - 2rem)}}@media screen and (max-width: 59em){.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .6 + 22rem);height:calc(var(--maxWidth) * var(--cardHeight) * .6 + 1rem)}.cards.svelte-1pv6u31 .back{grid-template-columns:calc(var(--maxWidth) * .6) 20rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .6 - 2rem)}}@media screen and (max-width: 50em){.copyImages.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31{grid-template-columns:1fr;grid-template-rows:auto 18em;grid-template-areas:"copy"
        "cards";row-gap:3em;margin-bottom:3em}.cards.svelte-1pv6u31 .content{top:auto;bottom:var(--mobileTop);left:var(--mobileLeft);width:calc(var(--cardWidth) * .9);height:calc(var(--cardWidth) * var(--cardHeight) * .9)}.cards.svelte-1pv6u31 .card.flip .content{top:auto;transform:translate3D(0vw, -10%, 1000em) rotateY( 180deg ) rotate(0deg);width:calc(var(--maxWidth));height:calc(var(--maxWidth) * var(--cardHeight) + 10rem);bottom:0}.cards.svelte-1pv6u31 .back{grid-template-columns:1fr;grid-template-rows:calc(var(--maxWidth) * var(--cardHeight)) 11rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) - 2rem)}}@media screen and (max-width: 45em){.cards.svelte-1pv6u31 .content{width:calc(var(--cardWidth) * .8);height:calc(var(--cardWidth) * var(--cardHeight) * .8)}.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .8);height:calc(var(--maxWidth) * var(--cardHeight) * .8 + 10rem)}.cards.svelte-1pv6u31 .back{grid-template-rows:calc(var(--maxWidth) * var(--cardHeight) * .8) 11rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .8 - 2rem)}}@media screen and (max-width: 40em){.cards.svelte-1pv6u31 .content{width:calc(var(--cardWidth) * .7);height:calc(var(--cardWidth) * var(--cardHeight) * .7)}.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .7);height:calc(var(--maxWidth) * var(--cardHeight) * .7 + 10rem)}.cards.svelte-1pv6u31 .back{grid-template-rows:calc(var(--maxWidth) * var(--cardHeight) * .7) 11rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .7 - 2rem)}}@media screen and (max-width: 33em){.copy-block.svelte-1pv6u31 p.svelte-1pv6u31.svelte-1pv6u31{margin-right:5%}.copy-block.svelte-1pv6u31 p.svelte-1pv6u31+p.svelte-1pv6u31:not(.tooltip){margin-right:1em;margin-left:5%}.cards.svelte-1pv6u31 .content{width:calc(var(--cardWidth) * .6);height:calc(var(--cardWidth) * var(--cardHeight) * .6)}.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .6);height:calc(var(--maxWidth) * var(--cardHeight) * .6 + 10rem)}.cards.svelte-1pv6u31 .back{grid-template-rows:calc(var(--maxWidth) * var(--cardHeight) * .6) 11rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .6 - 2rem)}}@media screen and (max-width: 30em){.cards.svelte-1pv6u31 .content{width:calc(var(--cardWidth) * .5);height:calc(var(--cardWidth) * var(--cardHeight) * .5)}.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .5);height:calc(var(--maxWidth) * var(--cardHeight) * .5 + 10rem)}.cards.svelte-1pv6u31 .back{grid-template-rows:calc(var(--maxWidth) * var(--cardHeight) * .5) 11rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .5 - 2rem)}}@media screen and (max-width: 26em){.copyImages.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31,.copy-block.svelte-1pv6u31.svelte-1pv6u31.svelte-1pv6u31{padding:0}.copy-block.svelte-1pv6u31 p.svelte-1pv6u31.svelte-1pv6u31{margin-right:0}.copy-block.svelte-1pv6u31 p.svelte-1pv6u31+p.svelte-1pv6u31:not(.tooltip){margin:0 0 2em 0}.cards.svelte-1pv6u31 .content{width:calc(var(--cardWidth) * .4);height:calc(var(--cardWidth) * var(--cardHeight) * .4)}.cards.svelte-1pv6u31 .card.flip .content{width:calc(var(--maxWidth) * .4);height:calc(var(--maxWidth) * var(--cardHeight) * .4 + 14rem)}.cards.svelte-1pv6u31 .back{grid-template-rows:calc(var(--maxWidth) * var(--cardHeight) * .4) 11rem}.cards.svelte-1pv6u31 .back .image img{max-width:calc(var(--maxWidth) * .4 - 2rem)}}`,
  map: null
};
const Captionbox = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { cards } = $$props;
  let { copy } = $$props;
  if ($$props.cards === void 0 && $$bindings.cards && cards !== void 0)
    $$bindings.cards(cards);
  if ($$props.copy === void 0 && $$bindings.copy && copy !== void 0)
    $$bindings.copy(copy);
  $$result.css.add(css);
  return `<section class="${"copyImages svelte-1pv6u31"}"><div class="${"copy-block decorate svelte-1pv6u31"}">${each(copy, (para) => {
    return `<p class="${"svelte-1pv6u31"}"><!-- HTML_TAG_START -->${para}<!-- HTML_TAG_END --></p>`;
  })}
    <p class="${"tooltip svelte-1pv6u31"}">Click on each screenshot to enlarge them.</p></div>
  <div class="${"cards svelte-1pv6u31"}">${each(cards, (card) => {
    return `${validate_component(ImageCaption, "ImageCaption").$$render($$result, Object.assign(card), {}, {})}`;
  })}</div>
</section>`;
});
export {
  Captionbox as C
};
