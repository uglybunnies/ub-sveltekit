<script>
  import PicCluster from "$lib/components/PicCluster.svelte";
  export let picData = {
    pics: [
      {
        webpSrc: '/assets/web-projects/molekule-50-50.webp',
        stdSrc: '/assets/web-projects/molekule-50-50.png',
        stdType: 'png',
        altCopy: 'Layouts featuring alternating 50-50 splits',
        sector: 'center',
      },
      {
        webpSrc: '/assets/web-projects/molekule-50-bleed.webp',
        stdSrc: '/assets/web-projects/molekule-50-bleed.png',
        stdType: 'png',
        altCopy: '50-50 layout with full-bleed background media',
        sector: 'top-left',
      },
      {
        webpSrc: '/assets/web-projects/molekule-25-75-bleed.webp',
        stdSrc: '/assets/web-projects/molekule-25-75-bleed.png',
        stdType: 'png',
        altCopy: '25-75 layout feature full bleed media and copy aligned to the top of the module',
        sector: 'bottom-left',
      },
      {
        webpSrc: '/assets/web-projects/molekule-25-75-bleed2.webp',
        stdSrc: '/assets/web-projects/molekule-25-75-bleed2.png',
        stdType: 'png',
        altCopy: '25-75 layout feature full bleed media and copy aligned to the bottom of the module',
        sector: 'bottom-right',
      },
      {
        webpSrc: '/assets/web-projects/molekule-fullwidth-bleed.webp',
        stdSrc: '/assets/web-projects/molekule-fullwidth-bleed.png',
        stdType: 'png',
        altCopy: 'Full-width layout with full-bleed background media and copy center aligned in the module.',
        sector: 'top-right',
      }
    ]
  }
</script>
<svelte:head>
  <title>Ugly Bunnies—Molekule UI Development Projects</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Molekule UI Development Projects</h2>
    <p>My work with the Growth team at Molekule included development of user interfaces designed to drive sales for the direct to consumer e-commerce store.</p>
  </header>

  <section class="design project">
    <header>
      <h3>Flexible Layout Component</h3>
      <p>This componet was developed as part of the site redesign with the goal of making content creation more self-serve for the design and content teams. This component allowed teams to produce pages in hours instead of days.</p>
    </header>
    <div class="group switch">
      <p class="decorate-shift">I noticed during early reviews of designs that each section of the page designs were similar and could be implemented using one component featuring simple configuration options. The final component supported a variety of layouts including full-width, 50-50 and 25-75 splits with options to swap the order of the columns. Background media could be full-bleed static images or short looped videos. Copy could be vertically aligned at the top, middle or bottom of the module. The bulk of the work involved the content modeling and configurations needed in the Prismic headless CMS to support all of the options required.</p>
      <PicCluster {...picData} />
    </div>
  </section>
</article>