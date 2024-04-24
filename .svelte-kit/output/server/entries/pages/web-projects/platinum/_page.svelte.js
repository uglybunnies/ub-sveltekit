import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { C as Captionbox } from "../../../../chunks/Captionbox.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { captionBoxData = {
    cards: [
      {
        src: "/assets/web-projects/platinum_home.png",
        alt: "Home page screenshot",
        caption: "The complete homepage design featuring the reflection topnav",
        title: "The Homepage",
        topOffset: "2.5%",
        leftOffset: "50.5%",
        tilt: "-3",
        mobileTop: "9%",
        mobileLeft: ".5%",
        mobileTilt: "3",
        cardHeightRatio: "1.16016",
        cardWidth: "16rem",
        maxWidth: "48rem",
        staticImgUrl: "/web-projects/platinum/images#pic1"
      },
      {
        src: "/assets/web-projects/platinum_home_detail1.png",
        alt: "Topnav detail view",
        caption: "A detailed look at the topnav with the relection visual effect",
        title: "Topnav Detail View",
        topOffset: "0",
        leftOffset: "75%",
        tilt: "2",
        mobileTop: "17%",
        mobileLeft: "25%",
        mobileTilt: "3",
        cardHeightRatio: "0.609375",
        cardWidth: "16rem",
        maxWidth: "40rem",
        staticImgUrl: "/web-projects/platinum/images#pic2"
      },
      {
        src: "/assets/web-projects/platinum_hero.png",
        alt: "Screen shot of the homepage above-the-fold crop.",
        caption: "Screen shot of the homepage above-the-fold crop",
        title: "Above the Fold View",
        topOffset: "-.5%",
        leftOffset: "60%",
        tilt: "4",
        mobileTop: "4%",
        mobileLeft: "45%",
        mobileTilt: "3",
        cardHeightRatio: "0.61875",
        cardWidth: "16rem",
        maxWidth: "40rem",
        staticImgUrl: "/web-projects/platinum/images#pic3"
      },
      {
        src: "/assets/web-projects/platinum_services.png",
        alt: "Services page feature section menu on the left",
        caption: "Services page featuring the section menu in the left sidebar",
        title: "Services Page",
        topOffset: "25%",
        leftOffset: "60%",
        tilt: "6",
        mobileTop: "11%",
        mobileLeft: "45%",
        mobileTilt: "3",
        cardHeightRatio: "0.80859375",
        cardWidth: "16rem",
        maxWidth: "48rem",
        staticImgUrl: "/web-projects/platinum/images#pic4"
      },
      {
        src: "/assets/web-projects/platinum_home_detail2.png",
        alt: "Deals section of the homepage",
        caption: "This is a detail of the service deals/discounts on the homepage",
        title: "Service Deals",
        topOffset: "25%",
        leftOffset: "50%",
        tilt: "-.5",
        mobileTop: "10%",
        mobileLeft: "6%",
        mobileTilt: "50",
        cardHeightRatio: "0.61875",
        cardWidth: "14rem",
        maxWidth: "40rem",
        staticImgUrl: "/web-projects/platinum/images#pic5"
      },
      {
        src: "/assets/web-projects/platinum-contact.png",
        alt: "Contact page layout",
        caption: "Contact page layout with no sidebars",
        title: "Contact Page",
        topOffset: "25%",
        leftOffset: "74%",
        tilt: "-5",
        mobileTop: "4%",
        mobileLeft: "20%",
        mobileTilt: "3",
        cardHeightRatio: "0.78711",
        cardWidth: "14rem",
        maxWidth: "48rem",
        staticImgUrl: "/web-projects/platinum/images#pic6"
      }
    ],
    copy: [
      "This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. The masthead features the reflection visual effect that was the must have effect at the time. In this case, I extended the reflection to include the navbar, an original visual design element according to my colleague.",
      "The site features three different layouts including the homepage, a content page with a left sidebar, and a layout with no sidebar. Other navigation elements include the global site navigation in the form of a horizontal bar featuring color changes on hover and breadcrumb links on underlying pages."
    ]
  } } = $$props;
  if ($$props.captionBoxData === void 0 && $$bindings.captionBoxData && captionBoxData !== void 0)
    $$bindings.captionBoxData(captionBoxData);
  return `${$$result.head += `<!-- HEAD_svelte-1d7h2zy_START -->${$$result.title = `<title>Ugly Bunnies\u2014Platinum Medical Spa Website Design</title>`, ""}<!-- HEAD_svelte-1d7h2zy_END -->`, ""}

<article class="${"project"}"><header><h2>Platinum Medical Spa</h2>
    <p>This site was the first created in collaboration with my colleague who was attempting to build a business around creating websites optimized for <a class="${"slink"}" href="${"https://en.wikipedia.org/wiki/Search_engine_optimization"}">SEO</a>. Click on each screenshot to enlarge them. The project was released and the design remained active for about a year before it was replace with a Flash-based site that killed all the SEO value we had built.</p></header>
  <section class="${"design"}"><header><h3>The Design</h3></header>
    ${validate_component(Captionbox, "Captionbox").$$render($$result, Object.assign(captionBoxData), {}, {})}</section>

  
  <section class="${"tech"}"><h3>Technical Details</h3>
    <p>My main contribution to the development of the site was the markup and CSS.</p>
    <h4>The Markup</h4>
    <p>The site was compliant with the strict XHTML standard (HTML5 was still just a glimmer of hope at this time). My colleague took my front-end code and incorporated it into his custom PHP framework.</p>
    <h4>CSS</h4>
    <p>The site features some classic CSS techniques for creating gradients and box shadows using images since browser support for these properties did not exist yet. The topnav hover changes were managed using the CSS Sprites technique.</p></section></article>`;
});
export {
  Page as default
};
