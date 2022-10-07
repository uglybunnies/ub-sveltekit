<script>
  import Captionbox from "$lib/components/Captionbox.svelte";
  export let captionBoxData = {
    cards: [
      {
        src: '/assets/web-projects/platzner-full-homepage.png',
        alt: 'Homepage screenshot',
        caption: 'The complete view of the homepage',
        title: 'The Homepage',
        topOffset: '-.5%',
        leftOffset: '49%',
        tilt: '-5',
        mobileTop: '15%',
        mobileLeft: '-1%',
        cardHeightRatio: '1.18124',
        cardWidth: '16rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/platznerBlogMockup.png',
        alt: 'Layout of the blog post page',
        caption: 'Example of the blog index page layout',
        title: 'Blog Index Page',
        topOffset: '-1%',
        leftOffset: '72%',
        tilt: '7',
        mobileTop: '18%',
        mobileLeft: '55%',
        cardHeightRatio: '1.023444545',
        cardWidth: '14rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/platzner-wallpaper.png',
        alt: 'Detail of the tiled wallpaper',
        caption: 'Detail of the tiled wallpaper used as the background for the site',
        title: 'Art Deco Wallpaper',
        topOffset: '25%',
        leftOffset: '75%',
        tilt: '2',
        mobileTop: '11%',
        mobileLeft: '35%',
        cardHeightRatio: '0.703125',
        cardWidth: '16rem',
        maxWidth: '40rem'
     },
      {
        src: '/assets/web-projects/platzner-widgets.png',
        alt: 'Detail of the tiled wallpaper',
        caption: 'Detail of the custom elements for bullets, and the vertical and horizontal rules.',
        title: 'Art Deco Widgets',
        topOffset: '27%',
        leftOffset: '52%',
        tilt: '-4',
        mobileTop: '10%',
        mobileLeft: '5%',
        cardHeightRatio: '0.703125',
        cardWidth: '16rem',
        maxWidth: '40rem'
     },
      {
        src: '/assets/web-projects/platzner-full-homepage-detail1.png',
        alt: 'Detail of the homepage masthead',
        caption: 'Detail of the homepage including the masthead and logo',
        title: 'Homepage Detail',
        topOffset: '15%',
        leftOffset: '55%',
        tilt: '2',
        mobileTop: '17%',
        mobileLeft: '45%',
        cardHeightRatio: '0.61767358',
        cardWidth: '15rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/platznerContentMockup.png',
        alt: 'Layout of the content page',
        caption: 'Example of the content page layout',
        title: 'Content Page Detail',
        topOffset: '13%',
        leftOffset: '70%',
        tilt: '-2',
        mobileTop: '18%',
        mobileLeft: '15%',
        cardHeightRatio: '0.634034767',
        cardWidth: '16rem',
        maxWidth: '48rem'
     },
    ],
    copy: [
     'This desktop only design featured three different layouts including the homepage, a content page with a left sidebar, and a blog post page with a right sidebar. The project also required branding design in the form of the logo, and some custom visual elements for horizontal and vertical rules, and list bullets.',
     'Other Art Deco elements included patterns and elements typical of the style like the tiled background that resembles wallpaper. The masthead features a sun-burst pattern repeated horizontally. A stylized typeface was used for top-level headers. Even the shape of the logo is consitent with the style.'
    ]
  };
</script>
<svelte:head>
  <title>Ugly Bunnies—Proposed Platzner &amp; Co. Website</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Proposed Platzner & Co. Website</h2>
    <p>This is the first project I have done that takes design cues from a specific style of design; <a href="https://en.wikipedia.org/wiki/Art_Deco">Art Deco</a>. Platzner and Co. was a small marketing consultancy that requested a website design that incorporated Art Deco style. The client declared that the resulting design looked too "techy" and chose to go in a different direction after paying for services rendered.</p>
  </header>
  <section class="design">
    <header>
      <h3>The Design</h3>
    </header>

    <Captionbox {...captionBoxData} />
  </section>
</article>