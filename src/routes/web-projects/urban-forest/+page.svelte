<script>
  import Captionbox from "$lib/components/Captionbox.svelte";
  export let captionBoxData = {
    cards: [
      {
        src: '/assets/web-projects/uf-homepage1.png',
        alt: 'Homepage Detail screenshot',
        caption: 'A Detail of the homepage',
        title: 'Homepage detail',
        topOffset: '-.5%',
        leftOffset: '49%',
        tilt: '-5',
        mobileTop: '20%',
        mobileLeft: '-1%',
        cardHeightRatio: '0.6175',
        cardWidth: '16rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/UF_detail4.png',
        alt: 'Example of the theme in production',
        caption: 'An example of the theme in production with one column',
        title: 'Theme in Production',
        topOffset: '1%',
        leftOffset: '55%',
        tilt: '5',
        mobileTop: '11%',
        mobileLeft: '25%',
        cardHeightRatio: '1.024324324',
        cardWidth: '16rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/UF_detail5.png',
        alt: 'Example of the theme in production',
        caption: 'An example of the theme in production with two columns',
        title: 'Theme in Production',
        topOffset: '-1%',
        leftOffset: '66%',
        tilt: '-3',
        mobileTop: '12.5%',
        mobileLeft: '44%',
        cardHeightRatio: '1.02442',
        cardWidth: '16rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/UF_detail6.png',
        alt: 'Example of the theme in production',
        caption: 'An example of the theme in production with two columns',
        title: 'Theme in Production',
        topOffset: '-1%',
        leftOffset: '75%',
        tilt: '7',
        mobileTop: '9.5%',
        mobileLeft: '55%',
        cardHeightRatio: '1.02432',
        cardWidth: '16rem',
        maxWidth: '40rem'
     },
    ],
    copy: [
     'This design was tailored to fit monitor resolutions of 800x640 or greater. The layout is an example of the "ice" method where the page is fixed-width, but always centered in the viewport. The theme supported layouts with one or two columns.',
     'I modified some of my own photography to create the imagery in the masthead and the "watermark" image in the content area. I created "folliage" that tied the masthead to the content. A custom font for the header was applied using the <a href="https://en.wikipedia.org/wiki/Scalable_Inman_Flash_Replacement">Scalable Inman Flash Replacement implementation</a>.'
    ]
  };
</script>
<svelte:head>
  <title>Ugly Bunnies—Urban Forest: Theme Design for Sandvox</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Urban Forest: Theme Design for Sandvox</h2>
    <p>Sandvox drew inspiration from the <a href="http://www.csszengarden.com/">CSS Zen Garden</a> and created one set of templates composed of the same markup structure and just "skinned" it with CSS. This is the Urban Forest theme I designed for them. This design has proven to be the most enduring design I have done. The design is still used in production by several websites (including <a href="http://luckydogcambridge.com/">this one</a> for example).</p>
  </header>
  <section class="design">
    <header>
      <h3>The Design</h3>
    </header>
    <Captionbox {...captionBoxData} />
  </section>
</article>