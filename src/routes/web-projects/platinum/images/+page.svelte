<script>
  import ImageSection from '$lib/components/ImageSection.svelte';
  export let pics = [
    {
        src: '/assets/web-projects/platinum_home.png',
        alt: 'Home page screenshot',
        caption: 'The complete homepage design featuring the reflection topnav',
        title: 'The Homepage',
        maxWidth: '48rem'
      },
      {
        src: '/assets/web-projects/platinum_home_detail1.png',
        alt: 'Topnav detail view',
        caption: 'A detailed look at the topnav with the relection visual effect',
        title: 'Topnav Detail View',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/platinum_hero.png',
        alt: 'Screen shot of the homepage above-the-fold crop.',
        caption: 'Screen shot of the homepage above-the-fold crop',
        title: 'Above the Fold View',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/platinum_services.png',
        alt: 'Services page feature section menu on the left',
        caption: 'Services page featuring the section menu in the left sidebar',
        title: 'Services Page',
        maxWidth: '48rem'
      },
      {
        src: '/assets/web-projects/platinum_home_detail2.png',
        alt: 'Deals section of the homepage',
        caption: 'This is a detail of the service deals/discounts on the homepage',
        title: 'Service Deals',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/platinum-contact.png',
        alt: 'Contact page layout',
        caption: 'Contact page layout with no sidebars',
        title: 'Contact Page',
        maxWidth: '48rem'
      }
    ];
  export let projectUrl = "/web-projects/platinum";
</script>

<svelte:head>
  <title>Ugly Bunnies—Platinum Medical Spa Website Design Screenshots</title>
</svelte:head>

<article class="project" id="top">
  <header>
    <h2>Platinum Medical Spa Website Design Screenshots</h2>
  </header>
  {#each pics as pic, i}
    <ImageSection {...pic} picIndex={i + 1} {projectUrl}/>
  {/each}
</article>