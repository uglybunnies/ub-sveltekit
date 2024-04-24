<script>
  import PicCluster from "../../../lib/components/PicCluster.svelte";
  export let picData = {
    pics: [
      {
        webpSrc: '/assets/web-projects/CreditFumble.webp',
        stdSrc: '/assets/web-projects/CreditFumble.gif',
        stdType: 'gif',
        altCopy: 'Animation showing long scrolling experience of the interactive infographic with demontrations of on of the carousel.',
        sector: 'center',
      },
      {
        webpSrc: '/assets/web-projects/CF-landingTop.webp',
        stdSrc: '/assets/web-projects/CF-landingTop.png',
        stdType: 'png',
        altCopy: 'Screen capture of the top of the landing page.',
        sector: 'top-left',
      },
      {
        webpSrc: '/assets/web-projects/CF-Mid.webp',
        stdSrc: '/assets/web-projects/CF-Mid.png',
        stdType: 'png',
        altCopy: 'Screen capture of the middle of the landing page.',
        sector: 'bottom-left',
      },
      {
        webpSrc: '/assets/web-projects/CF-Expanded.webp',
        stdSrc: '/assets/web-projects/CF-Expanded.png',
        stdType: 'png',
        altCopy: 'Screen capture of the of the landing page with content expanded in the sidebar.',
        sector: 'bottom-right',
      },
      {
        webpSrc: '/assets/web-projects/CF-InfoTop.webp',
        stdSrc: '/assets/web-projects/CF-InfoTop.png',
        stdType: 'png',
        altCopy: 'Screen capture of the top of the interactive infographic page',
        sector: 'top-right',
      }
    ]
  }
</script>
<svelte:head>
  <title>Ugly Bunnies—Credit Karma UI Development Projects</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Credit Karma UI Development Projects</h2>
    <p>I worked with a variety or project teams as part of the Front-End Engineering team at Credit Karma and produced work that improved user on-boarding, implemented experiments to offer conversions, and built revenue-generating landing pages.</p>
  </header>
  <section class="design project">
    <header>
      <h3>Credit Score Simulator</h3>
      <p>This feature allowed users to experience how some financial decisions could impact their credit score.</p>
    </header>
    <div class="group">
      <p class="decorate">The credit simulator incorporated the Velocity.js animation library to profide physics-based spring animations for the dial indicator used on the score display. Other animations were driven by CSS transforms and transitions, and jQuery animation functions.</p>
      <div class="animation">
        <picture>
          <source srcset="/assets/web-projects/CreditSimulator.webp" type="image/webp">
          <source srcset="/assets/web-projects/CreditSimulator.gif" type="image/gif">
          <img src="/assets/web-projects/CreditSimulator.gif" alt="screen recording of the Credit Simulator motion based on spring physics.">
        </picture>
      </div>
    </div>
  </section>
    <section class="design project">
      <header>
        <h3>Credit Fumble Landing Page</h3>
        <p>This two-page experience was created and launched ahead of the Super Bowl of that year.</p>
      </header>
      <div class="group switch">
        <p class="decorate-shift">The goal of the project was to promote content around building good credit. There were two pages; a landing page and an interactive infographic page. The landing page featured links to other original content and personal finance resources, a video detailing the importance of maintaining good credit practices, and a link to the infographic page. The infographic featured Slick.js carousels in different sections of the page to add some interactivity to the experience.</p>
        <PicCluster {...picData} />
      </div>
    </section>
</article>