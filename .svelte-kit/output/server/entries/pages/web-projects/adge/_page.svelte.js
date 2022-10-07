import { c as create_ssr_component, v as validate_component } from "../../../../chunks/index.js";
import { C as Captionbox } from "../../../../chunks/Captionbox.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { captionBoxData = {
    cards: [
      {
        src: "/assets/web-projects/adge_detail4.png",
        alt: "Homepage  screenshot",
        caption: "A view of the full homepage design",
        title: "Full Homepage",
        topOffset: ".5%",
        leftOffset: "49%",
        tilt: "5",
        mobileTop: "15.5%",
        mobileLeft: "-1%",
        cardHeightRatio: "1",
        cardWidth: "16rem",
        maxWidth: "40rem"
      },
      {
        src: "/assets/web-projects/adge_detail5.png",
        alt: "Service page screenshot",
        caption: "A view of the service page design",
        title: "Service Page",
        topOffset: "-1%",
        leftOffset: "75%",
        tilt: "-3",
        mobileTop: "16%",
        mobileLeft: "20%",
        cardHeightRatio: "1",
        cardWidth: "16rem",
        maxWidth: "40rem"
      },
      {
        src: "/assets/web-projects/adge_detail1.png",
        alt: "Homepage masthead and banner screenshot",
        caption: "Detail of the homepage masthead and banner",
        title: "Homepage Detail",
        topOffset: "17%",
        leftOffset: "55%",
        tilt: "-3",
        mobileTop: "15%",
        mobileLeft: "40%",
        cardHeightRatio: "0.61875",
        cardWidth: "14rem",
        maxWidth: "40rem"
      },
      {
        src: "/assets/web-projects/adge_detail6.png",
        alt: "Homepage service matrix detail",
        caption: "Detail of the service matrix on the homepage",
        title: "Service Matrix Detail",
        topOffset: "15%",
        leftOffset: "69%",
        tilt: "3",
        mobileTop: "20%",
        mobileLeft: "60%",
        cardHeightRatio: "0.61875",
        cardWidth: "14rem",
        maxWidth: "40rem"
      }
    ],
    copy: [
      'This design predates smart mobile devices and was designed to work best with 17-inch monitors. The homepage featured a matrix of services that "lit up" when the user moused over each service. The user could see more information about each service by clicking on the particular service.',
      "The design features two different layouts including the homepage and a content page with a right sidebar. The main navigation element is the global site navigation in the form of a horizontal bar featuring color changes on hover."
    ]
  } } = $$props;
  if ($$props.captionBoxData === void 0 && $$bindings.captionBoxData && captionBoxData !== void 0)
    $$bindings.captionBoxData(captionBoxData);
  return `${$$result.head += `${$$result.title = `<title>Ugly Bunnies\u2014Adge IT Consultants</title>`, ""}`, ""}
<article class="${"project"}"><header><h2>Adge IT Consultants</h2>
    <p>This project became my first experience with spec work. These comps were produced in the hope that they would seal the deal in getting my contract signed. Unfortunately, the client chose to go in another direction and walked away. Click on each screenshot to enlarge them.</p></header>
  <section class="${"design"}"><header><h3>The Design</h3></header>
    ${validate_component(Captionbox, "Captionbox").$$render($$result, Object.assign(captionBoxData), {}, {})}</section></article>`;
});
export {
  Page as default
};
