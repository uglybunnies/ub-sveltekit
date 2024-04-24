<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
    {
        src: '/assets/web-projects/RJM_home.png',
        alt: 'Home page',
        caption: 'The complete homepage design featuring layered backgrounds and patterns',
        title: 'The Homepage',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/RJM_services.png',
        alt: 'Two-column layout',
        caption: 'This page featured the two-column layout design',
        title: 'The Services Page',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/RJM_staff.png',
        alt: 'Full-width layout',
        caption: 'Here is a full-width layout page design',
        title: 'Full-width design',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/rjm_home_detail1.png',
        alt: 'Home page detail of the masthead',
        caption: 'This is a detail of the masthead on the homepage',
        title: 'The Masthead',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/rjm_home_detail2.png',
        alt: 'Home page detail of coupon section',
        caption: 'This is a detail view of the service coupons section of the homepage',
        title: 'Homepage Detail',
        maxWidth: '40rem'
      }
    ];
  export let projectUrl = "/web-projects/rejuvenation-site";
</script>

<svelte:head>
  <title>Ugly Bunnies—Rejuvenation Medi-Spas Website Design Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>Rejuvenation Medi-Spas Website Design Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>