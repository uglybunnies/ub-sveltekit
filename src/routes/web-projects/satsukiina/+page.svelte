<script>
  import Captionbox from "$lib/components/Captionbox.svelte";
  export let captionBoxData = {
    cards: [
      {
        src: '/assets/web-projects/satsuki-home.png',
        alt: 'Homepage screenshot',
        caption: 'Detail of the homepage top section',
        title: 'The Homepage',
        topOffset: '-1%',
        leftOffset: '49%',
        tilt: '-5',
        mobileTop: '11%',
        mobileLeft: '-1%',
        cardHeightRatio: '0.909375',
        cardWidth: '16rem',
        maxWidth: '48rem'

     },
      {
        src: '/assets/web-projects/satsuki-topnav-desktop.png',
        alt: 'Detail of the dropdown menu',
        caption: 'Detail of the dropdown menu navigation for desktop viewers',
        title: 'Navigation Detail',
        topOffset: '3%',
        leftOffset: '75%',
        tilt: '7',
        mobileTop: '10%',
        mobileLeft: '20%',
        cardHeightRatio: '0.692969',
        cardWidth: '18rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/satsuki-home-footer.png',
        alt: 'Detail of the homepage footer',
        caption: 'Detail of the homepage footer',
        title: 'The Homepage Footer',
        topOffset: '0%',
        leftOffset: '60%',
        tilt: '-2',
        mobileTop: '12%',
        mobileLeft: '40%',
        cardHeightRatio: '0.6515625',
        cardWidth: '18rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/SatsukiMobileHome.png',
        alt: 'Full homepage screenshot',
        caption: 'Mobile View of the homepage',
        title: 'The Homepage on Mobile',
        topOffset: '1%',
        leftOffset: '55%',
        tilt: '3',
        mobileTop: '11%',
        mobileLeft: '60%',
        cardHeightRatio: '1',
        cardWidth: '15rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/satsuki-landing.png',
        alt: 'Content page layout',
        caption: 'Detail of a content page featuring a hero banner',
        title: 'The Content Page',
        topOffset: '25%',
        leftOffset: '51%',
        tilt: '-7',
        mobileTop: '5%',
        mobileLeft: '20%',
        cardHeightRatio: '0.75',
        cardWidth: '18rem',
        maxWidth: '48rem'
     },
      {
        src: '/assets/web-projects/satsuki-mob-topnav.png',
        alt: 'Detail of the menu for mobile',
        caption: 'Detail of the menu closed, opened, and expanded',
        title: 'The Mobile Menu',
        topOffset: '20%',
        leftOffset: '75%',
        tilt: '6',
        mobileTop: '6%',
        mobileLeft: '60%',
        mobileTilt: '-3',
        cardHeightRatio: '1',
        cardWidth: '15rem',
        maxWidth: '40rem'
     },
    ],
    copy: [
      'This site was designed to be mobile-friendly, easy to read, and simple to navigate. The design is influenced by Japanese aesthetics and incorporates kanji characters for "book" and "film" as "watermarks" for content related to these genre of media. The homepage sections are styled to mimic the panels of a shoji screen.',
      'The site features different layouts for the homepage, content pages and category index pages for books and films. The navigation is laid out horizontally for tablet and desktop devices with dropdown menus for pages under the main menu item. The navigation for mobile is collapsed behind the "hamburger" menu control and features submenus that expand when the main item is clicked.'
    ],
  };
</script>
<svelte:head>
<title>Ugly Bunnies—Satsuki Ina Website Design Overview</title>
</svelte:head>
<article class="project">
  <header>
    <h2>Satsuki Ina Website</h2>
    <p>This freelance project was a complete redesign of an existing site for the writer and activist; Satsuki Ina. The focus of the project was to replace a slow loading WordPress theme with a custom one that was streamlined  to be more performant. </p>
  </header>
  <section class="design">
    <header>
      <h3>The Design</h3>
    </header>
    <Captionbox {...captionBoxData} />
  </section>
  <section class="tech">
    <h3>Technical Details</h3>

    <p>This site was built from the ground up and includes a custom-built WordPress theme, succinct and semantic HTML, and modern CSS and JavaScript.</p>
    <h4>The Theme</h4>
    <p>The custom theme featured the use of custom fields to apply hero and featured images. Custom functions include the topnav menu and link list generator. Custom loops were developed to apply curated content to the homepage.</p>
    <h4>The Markup</h4>
    <p>Special care was applied to ensure that the markup was as shallow as possible since CMS systems like WordPress tend to have many nestings of sectioning markup. The resulting pages rendered markup that was sparse and incorporated recommended semantics to support accessiblility and SEO.</p>
    <h4>The CSS</h4>
    <p>This site was built to be mobile-friendly. Media queries are used to adjust the layout as the viewport expands or contracts. The "Lato" font was incorporated as a webfont sourced from Google Fonts to provide a simple and elegant typeface. CSS transitions were employed to manage the menu animations for mobile and desktop.</p>
    <h4>The JavaScript</h4>
    <p>JavaScript was used to run the menu including calculating the height of the main menu and the sub-menus for mobile so that the height could be animated via CSS transitions when they were expanded.</p>
  </section>

</article>