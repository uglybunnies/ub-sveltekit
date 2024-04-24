<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
    {
        src: '/assets/web-projects/uf-homepage1.png',
        alt: 'Homepage Detail screenshot',
        caption: 'A Detail of the homepage',
        title: 'Homepage detail',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/UF_detail4.png',
        alt: 'Example of the theme in production',
        caption: 'An example of the theme in production with one column',
        title: 'Theme in Production',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/UF_detail5.png',
        alt: 'Example of the theme in production',
        caption: 'An example of the theme in production with two columns',
        title: 'Theme in Production',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/UF_detail6.png',
        alt: 'Example of the theme in production',
        caption: 'An example of the theme in production with two columns',
        title: 'Theme in Production',
        maxWidth: '40rem'
     }
    ];
  export let projectUrl = "/web-projects/urban-forest";
</script>

<svelte:head>
  <title>Ugly Bunnies—Urban Forest: Theme Design for Sandvox Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>Urban Forest: Theme Design for Sandvox Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>