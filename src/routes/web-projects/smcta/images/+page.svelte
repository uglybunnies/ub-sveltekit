<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
    {
        src: '/assets/web-projects/smcta-homepage.png',
        alt: 'Homepage screenshot',
        caption: 'The complete view of the homepage',
        title: 'The Homepage',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/smcta-content-page.png',
        alt: 'content page screenshot',
        caption: 'The complete view of content page',
        title: 'The Content Page',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/smcta-live-homepage.png',
        alt: 'Live version of the homepage',
        caption: 'Here is a screenshot of the  homepage after launch',
        title: 'The Live Homepage',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/smcta-homepage-detail.png',
        alt: 'Detail of the homepage',
        caption: 'Detail of the homepage',
        title: 'Hmepage Detail',
        maxWidth: '42rem'
     },
      {
        src: '/assets/web-projects/smcta-nav-detail.png',
        alt: 'Detail of the navigation and mastead',
        caption: 'Detail of the navigation and mastead',
        title: 'Site Navigation',
        maxWidth: '38rem'
     }
    ];
  export let projectUrl = "/web-projects/smcta";
</script>

<svelte:head>
  <title>Ugly Bunnies—San Mateo County Transit Authority Website Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>SMCTA Website Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>