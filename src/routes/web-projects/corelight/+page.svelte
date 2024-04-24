<script>
  import PicCluster from "$lib/components/PicCluster.svelte";
  export let picData = {
    pics: [
      {
        webpSrc: '/assets/web-projects/corelightcarousel.webp',
        stdSrc: '/assets/web-projects/CorelightCarousel.gif',
        stdType: 'gif',
        altCopy: 'Animation of the carousel transitions from one panel to the next',
        sector: 'center',
      },
      {
        webpSrc: '/assets/web-projects/CorelightSlide_1.webp',
        stdSrc: '/assets/web-projects/CorelightSlide_1.png',
        stdType: 'png',
        altCopy: 'Screen capture of the first panel of the carousel',
        sector: 'top-left',
      },
      {
        webpSrc: '/assets/web-projects/CorelightSlide_3.webp',
        stdSrc: '/assets/web-projects/CorelightSlide_3.png',
        stdType: 'png',
        altCopy: 'Screen capture of the third panel of the carousel',
        sector: 'bottom-left',
      },
      {
        webpSrc: '/assets/web-projects/Corelight_home_carousel.webp',
        stdSrc: '/assets/web-projects/Corelight_home_carousel.png',
        stdType: 'png',
        altCopy: 'Screen capture of the homepage banner section that features the carousel',
        sector: 'bottom-right',
      },
      {
        webpSrc: '/assets/web-projects/CorelightSlide_2.webp',
        stdSrc: '/assets/web-projects/CorelightSlide_2.png',
        stdType: 'png',
        altCopy: 'Screen capture of the second panel of the carousel',
        sector: 'top-right',
      }
    ]
  }
</script>
<svelte:head>
  <title>Ugly Bunnies—Corelight UI Development Projects</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Corelight UI Development Projects</h2>
    <p>My work with the Growth team at Corelight included development of user interfaces designed to improve user engagement and ultimately convert visitors into customers.</p>
  </header>
  <section class="design project">
    <header>
      <h3>Scroll-to-Animate Component</h3>
      <p>Frame-by-frame animations controlled by scrolling.</p>
    </header>
    <div class="group">
      <p class="decorate">This component was inspired by the scroll-controlled animations featured on Apple's Airpod Pro product page. The component incorporates the <a href="https://www.cssscript.com/frame-animation-scroll/">library by MrMarble</a> over at <a href="https://www.cssscript.com/">CSS Script</a>. The module in HubSpot CMS was configured so that non-technical authors could easily add this component to a page by providing the URL of the first frame of the frame-to-frame animation and the total number of frames. The script managed the rest.</p>
      <div class="video">
        <iframe src="https://www.youtube.com/embed/fdj2Gx45mpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
  </section>
  <section class="design project">
    <header>
      <h3>Homepage Carousel</h3>
      <p>This simple carousel replaced one built using the <a href="https://kenwheeler.github.io/slick/">Slick carousel library</a>.</p>
    </header>
    <div class="group switch">
      <p class="decorate-shift">This component was developed as part of a refresh of the homepage and an initiative to improve performance and SEO based on recommendations from a consultancy. Replacing the Slick carousel with a vanilla JS alternative reduced the amount of code and markup required to provide the same functionality. The carousel rotates through the slides based as set time intervals. Clicking the arrows will change to the next or previous slide in the sequence. Clicks on the dots will switch to the associated slide.</p>
      <PicCluster {...picData} />
    </div>
  </section>
</article>