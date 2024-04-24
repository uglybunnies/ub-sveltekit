<script>
  import PicCluster from "$lib/components/PicCluster.svelte";
  import SplitView from "$lib/components/SplitView.svelte";
  export let picData = {
    pics: [
      {
        webpSrc: '/assets/web-projects/corelightcarousel.webp',
        stdSrc: '/assets/web-projects/CorelightCarousel.gif',
        stdType: 'gif',
        altCopy: 'Animation of the carousel transitions from one panel to the next',
        sector: 'center',
      }
    ]
  };
  export let splits = {
    beforeSrc: '/assets/web-projects/AutodeskBefore.webp',
    afterSrc:'/assets/web-projects/AutodeskAfter.webp',
    beforeSrcPng: '/assets/web-projects/AutodeskBefore.png',
    afterSrcPng: '/assets/web-projects/AutodeskAfter.png',
    beforeAlt: 'Autodesk previous design screenshot',
    afterAlt: 'Autodesk new design screenshot'
  };
</script>
<svelte:head>
  <title>Ugly Bunnies—Autodesk UI Development Projects</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Autodesk UI Development Projects</h2>
    <p>My tenure at Autodesk included the development of many customer-facing features designed to entice creators to use Autodesk tools to bring their ideals to life.</p>
  </header>
  <section class="design project">
    <header>
      <h3>Website Redesign</h3>
      <p></p>
    </header>
    <div class="group">
      <div class="decorate">
        <p></p>
      </div>
      <SplitView {...splits} />

    </div>
  </section>
  <section class="design project">
    <header>
      <h3>Autodesk Mega-Nav</h3>
      <p></p>
    </header>
    <div class="group-switch">
      <p class="decorate"></p>
      <PicCluster {...picData} />
    </div>
  </section>
</article>