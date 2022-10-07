<script>
  import DadJokes from '$lib/components/DadJokes.svelte';
  import Features from '$lib/components/Features.svelte';
  let featureData = {
    projects: [
      {
        copy: 'This site was designed and developed for Satuki Ina.',
        tilt: '-5deg',
        top: '-20%',
        left: '1%',
        mobileTop: '56%',
        mobileLeft: '3%',
        src: '/assets/web-projects/satsuki-thumb.png',
        alt: 'Satsuki Ina homepage',
        link: '/web-projects/satsukiina'
      },
      {
        copy: 'The third incarnation of SerpentVenom.',
        tilt: '7deg',
        top: '1em',
        left: '25%',
        mobileTop: '57%',
        mobileLeft: '50%',
        src: '/assets/web-projects/sv_thumb.png',
        alt: 'SerpentVenom homepage',
        link: '/web-projects/serpentvenom'
      },
      {
        copy: 'A design focused on search engine optimization.',
        tilt: '-3deg',
        top: '2em',
        left: '45%',
        mobileTop: '30%',
        mobileLeft: '45%',
        src: '/assets/web-projects/RJM_thumb.png',
        alt: 'Rejuvenation Medi-Spas homepage',
        link: '/web-projects/rejuvenation-site'
      },
      {
        copy: 'This site was designed Platzner & Co.',
        tilt: '4deg',
        top: '-15%',
        left: '70%',
        mobileTop: '27%',
        mobileLeft: '5%',
        src: '/assets/web-projects/platzner-full-homepage-detail1.png',
        alt: 'Platzner & Co. Website',
        link: '/web-projects/platzner'
      },
    ]
  }
</script>
<svelte:head>
  <title>Welcome to Ugly Bunnies</title>
</svelte:head>
<section class="home-banner decorate">
  <h2>Welcome to Ugly Bunnies<sup>*</sup></h2>
  <p>Ugly Bunnies features <a class="slink" href="/web-projects">engaging web-based experiences</a> created by Michael Wong. Michael is an artist and web professional based in the San Francisco Bay Area.</p>
  <p class="note"><strong>*</strong> If you are disappointed in not finding ugly bunnies here, perhaps you can <a class="slink" href="http://uglybunnies.tumblr.com/">seek them here</a>.</p>
  <Features {...featureData}/>
</section>

<DadJokes />
<style>
  .home-banner :global(.featured) {
    margin-top: 2em;
    padding-bottom: 5em;
  }
@media screen and (max-width: 57em) {
  .home-banner :global(.featured) {
    margin-top: 5em;
    height: 18em;
  }
}
</style>
