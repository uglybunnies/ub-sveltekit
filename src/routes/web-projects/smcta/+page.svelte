<script>
  import Captionbox from "$lib/components/Captionbox.svelte";
  export let captionBoxData = {
    cards: [
      {
        src: '/assets/web-projects/smcta-homepage.png',
        alt: 'Homepage screenshot',
        caption: 'The complete view of the homepage',
        title: 'The Homepage',
        topOffset: '-.5%',
        leftOffset: '49%',
        tilt: '-5',
        mobileTop: '9.5%',
        mobileLeft: '-1%',
        cardHeightRatio: '0.9575',
        cardWidth: '16rem',
        maxWidth: '48rem',
        staticImgUrl: '/web-projects/smcta/images#pic1'
     },
      {
        src: '/assets/web-projects/smcta-content-page.png',
        alt: 'content page screenshot',
        caption: 'The complete view of content page',
        title: 'The Content Page',
        topOffset: '1%',
        leftOffset: '75%',
        tilt: '-3',
        mobileTop: '11%',
        mobileLeft: '25%',
        cardHeightRatio: '0.9575',
        cardWidth: '16rem',
        maxWidth: '48rem',
        staticImgUrl: '/web-projects/smcta/images#pic2'
     },
      {
        src: '/assets/web-projects/smcta-live-homepage.png',
        alt: 'Live version of the homepage',
        caption: 'Here is a screenshot of the  homepage after launch',
        title: 'The Live Homepage',
        topOffset: '-1%',
        leftOffset: '60%',
        tilt: '5',
        mobileTop: '11.5%',
        mobileLeft: '55%',
        cardHeightRatio: '0.92396',
        cardWidth: '16rem',
        maxWidth: '48rem',
        staticImgUrl: '/web-projects/smcta/images#pic3'
     },
      {
        src: '/assets/web-projects/smcta-homepage-detail.png',
        alt: 'Detail of the homepage',
        caption: 'Detail of the homepage',
        title: 'Hmepage Detail',
        topOffset: '12%',
        leftOffset: '65%',
        tilt: '-3',
        mobileTop: '5.5%',
        mobileLeft: '50%',
        cardHeightRatio: '0.61875',
        cardWidth: '16rem',
        maxWidth: '42rem',
        staticImgUrl: '/web-projects/smcta/images#pic4'
     },
      {
        src: '/assets/web-projects/smcta-nav-detail.png',
        alt: 'Detail of the navigation and mastead',
        caption: 'Detail of the navigation and mastead',
        title: 'Site Navigation',
        topOffset: '15%',
        leftOffset: '50%',
        tilt: '5',
        mobileTop: '5%',
        mobileLeft: '5%',
        cardHeightRatio: '0.619130435',
        cardWidth: '14rem',
        maxWidth: '38rem',
        staticImgUrl: '/web-projects/smcta/images#pic4'
     },
    ],
    copy: [
     'The site was designed to fit most 17" monitors that had a resolution of 1024x768. It featured a three-column layout that inluded one for the navigation, one for content, and one for a right sidebar that contained a search function and links to highlighted content.',
     'The masthead and navigation elements are the most distinct features of this design. The masthead featured a collaged image with a "scan line" treatment across it and a gradient fade to the right. The navigation bar is part of an angular, curved shape that provided visual contrast to distinguish it from the content. The navigation item copy "lit up" on mouse hover.'
    ]
  };
</script>
<svelte:head>
  <title>Ugly Bunnies—San Mateo County Transit Authority Website</title>
</svelte:head>
<article class="project">
  <header>
    <h2>SMCTA Website</h2>
    <p>This design was created on behalf of the San Mateo County Transit Authority. It was the highest profile site I had designed up to that point. The seven years it was in production makes this site one of my most enduring designs.</p>
  </header>
  <section class="design">
    <header>
      <h3>The Design</h3>
    </header>
    <Captionbox {...captionBoxData} />
  </section>
</article>