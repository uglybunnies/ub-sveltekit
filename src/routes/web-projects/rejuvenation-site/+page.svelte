<script>
  import Captionbox from "$lib/components/Captionbox.svelte";
  export let captionBoxData = {
    cards: [
      {
        src: '/assets/web-projects/RJM_home.png',
        alt: 'Home page',
        caption: 'The complete homepage design featuring layered backgrounds and patterns',
        title: 'The Homepage',
        topOffset: '5.5%',
        leftOffset: '50.5%',
        tilt: '-3',
        mobileTop: '11%',
        mobileLeft: '.5%',
        mobileTilt: '3',
        cardHeightRatio: '1',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/RJM_services.png',
        alt: 'Two-column layout',
        caption: 'This page featured the two-column layout design',
        title: 'The Services Page',
        topOffset: '2%',
        leftOffset: '75%',
        tilt: '-7',
        mobileTop: '10%',
        mobileLeft: '45%',
        mobileTilt: '3',
        cardHeightRatio: '1',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/RJM_staff.png',
        alt: 'Full-width layout',
        caption: 'Here is a full-width layout page design',
        title: 'Full-width design',
        topOffset: '0',
        leftOffset: '65%',
        tilt: '2',
        mobileTop: '12%',
        mobileLeft: '25%',
        mobileTilt: '3',
        cardHeightRatio: '1',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/rjm_home_detail1.png',
        alt: 'Home page detail of the masthead',
        caption: 'This is a detail of the masthead on the homepage',
        title: 'The Masthead',
        topOffset: '20%',
        leftOffset: '55%',
        tilt: '-.5',
        mobileTop: '5%',
        mobileLeft: '8%',
        mobileTilt: '50',
        cardHeightRatio: '0.61875',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/rjm_home_detail2.png',
        alt: 'Home page detail of coupon section',
        caption: 'This is a detail view of the service coupons section of the homepage',
        title: 'Homepage Detail',
        topOffset: '25%',
        leftOffset: '70%',
        tilt: '6',
        mobileTop: '7%',
        mobileLeft: '45%',
        mobileTilt: '3',
        cardHeightRatio: '0.61875',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
    ],
    copy: [
      'This is a desktop only design because mobile devices like the iPhone had not become a factor to consider yet. The site was designed to fit on standard 17-inch monitors. It features a distinctive visual style that incorporates layers of semi-opaque shapes overlaid onto each other to create a sense of depth and movement.',
      'The site features three different layouts including the homepage, a content page with a left sidebar and a content page with no sidebars. Navigation elements include the global site navigation in the form of a horizontal bar featuring color changes on hover and breadcrumb links on underlying pages.'
    ],
  };
</script>

<svelte:head>
<title>Ugly Bunnies—Rejuvenation Medi-Spas Website Design</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Rejuvenation Medi-Spas</h2>
    <p>This site was the second created in collaboration with my colleague who was attempting to build a business around creating websites optimized for <a class="slink" href="https://en.wikipedia.org/wiki/Search_engine_optimization">SEO</a>. The site was never published because the client <a class="slink" href="https://youtu.be/jVkLVRt6c1U">could not pay</a> after his partners refused to go forward. This project is the the last bit of unpaid "spec work" I have done. Lesson learned, I no longer do projects on spec.</p>
  </header>
  <section class="design">
    <header>
      <h3>The Design</h3>
    </header>
    <Captionbox {...captionBoxData} />
  </section>
  
</article>