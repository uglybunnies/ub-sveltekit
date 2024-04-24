<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
    {
        src: '/assets/web-projects/satsuki-home.png',
        alt: 'Homepage screenshot',
        caption: 'Detail of the homepage top section',
        title: 'The Homepage',
        maxWidth: '48rem'

     },
      {
        src: '/assets/web-projects/satsuki-topnav-desktop.png',
        alt: 'Detail of the dropdown menu',
        caption: 'Detail of the dropdown menu navigation for desktop viewers',
        title: 'Navigation Detail',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/satsuki-home-footer.png',
        alt: 'Detail of the homepage footer',
        caption: 'Detail of the homepage footer',
        title: 'The Homepage Footer',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/SatsukiMobileHome.png',
        alt: 'Full homepage screenshot',
        caption: 'Mobile View of the homepage',
        title: 'The Homepage on Mobile',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/satsuki-landing.png',
        alt: 'Content page layout',
        caption: 'Detail of a content page featuring a hero banner',
        title: 'The Content Page',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/satsuki-mob-topnav.png',
        alt: 'Detail of the menu for mobile',
        caption: 'Detail of the menu closed, opened, and expanded',
        title: 'The Mobile Menu',
        maxWidth: '40rem'
     }
    ];
  export let projectUrl = "/web-projects/satsukiina";
</script>

<svelte:head>
  <title>Ugly Bunnies—Satsuki Ina Website Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>Satsuki Ina Website Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>