<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
      {
        src: '/assets/web-projects/adge_detail4.png',
        alt: 'Homepage  screenshot',
        caption: 'A view of the full homepage design',
        title: 'Full Homepage',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/adge_detail5.png',
        alt: 'Service page screenshot',
        caption: 'A view of the service page design',
        title: 'Service Page',
        maxWidth: '40rem'
     },
      {
        src: '/assets/web-projects/adge_detail1.png',
        alt: 'Homepage masthead and banner screenshot',
        caption: 'Detail of the homepage masthead and banner',
        title: 'Homepage Detail',
        maxWidth: '40rem'
     },
      {
        src: '/assets/web-projects/adge_detail6.png',
        alt: 'Homepage service matrix detail',
        caption: 'Detail of the service matrix on the homepage',
        title: 'Service Matrix Detail',
        maxWidth: '40rem'
     },
    ];
  export let projectUrl = "/web-projects/adge";
</script>

<svelte:head>
  <title>Ugly Bunnies—Adge IT Consultants Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>Adge IT Consultants Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>