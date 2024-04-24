<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
    {
        src: '/assets/web-projects/platzner-full-homepage.png',
        alt: 'Homepage screenshot',
        caption: 'The complete view of the homepage',
        title: 'The Homepage',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/platznerBlogMockup.png',
        alt: 'Layout of the blog post page',
        caption: 'Example of the blog index page layout',
        title: 'Blog Index Page',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/platzner-wallpaper.png',
        alt: 'Detail of the tiled wallpaper',
        caption: 'Detail of the tiled wallpaper used as the background for the site',
        title: 'Art Deco Wallpaper',
        maxWidth: '40rem'
     },
      {
        src: '/assets/web-projects/platzner-widgets.png',
        alt: 'Detail of the tiled wallpaper',
        caption: 'Detail of the custom elements for bullets, and the vertical and horizontal rules.',
        title: 'Art Deco Widgets',
        maxWidth: '40rem'
     },
      {
        src: '/assets/web-projects/platzner-full-homepage-detail1.png',
        alt: 'Detail of the homepage masthead',
        caption: 'Detail of the homepage including the masthead and logo',
        title: 'Homepage Detail',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/platznerContentMockup.png',
        alt: 'Layout of the content page',
        caption: 'Example of the content page layout',
        title: 'Content Page Detail',
        maxWidth: '48rem'
     }
    ];
  export let projectUrl = "/web-projects/platzner";
</script>

<svelte:head>
  <title>Ugly Bunnies—Proposed Platzner &amp; Co. Website Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>Proposed Platzner &amp; Co. Website Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>