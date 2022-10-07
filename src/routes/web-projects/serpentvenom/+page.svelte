<script>
  import Captionbox from "$lib/components/Captionbox.svelte";
  export let captionBoxData = {
    cards: [
      {
        src: '/assets/web-projects/sv_detail5.png',
        alt: 'Homepage design screenshot',
        caption: 'The complete homepage design incorporates repetition of the golden ratio throughout the layout',
        title: 'The Homepage',
        topOffset: '0%',
        leftOffset: '50.5%',
        tilt: '-3',
        mobileTop: '10%',
        mobileLeft: '-1%',
        cardHeightRatio: '.75',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/sv_detail8.png',
        alt: 'Responsive tablet view of the SerpentVenom site',
        caption: 'Tablet view of the homepage showing how the layout responds to this size viewport',
        title: 'Responsive Tablet View',
        topOffset: '-.5%',
        leftOffset: '75%',
        tilt: '-7',
        mobileTop: '11%',
        mobileLeft: '20%',
        cardHeightRatio: '.75',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/sv_detail1.png',
        alt: 'Homepage layout detail of the SerpentVenom site',
        caption: 'A detail of the homepage layout',
        title: 'Homepage Layout Detail',
        topOffset: '0',
        leftOffset: '65%',
        tilt: '2',
        mobileTop: '9%',
        mobileLeft: '40%',
        cardHeightRatio: '0.61719',
        cardWidth: '12em',
        maxWidth: '40rem',
      },
      {
        src: '/assets/web-projects/sv_detail6.png',
        alt: 'Project page design',
        caption: 'The product detail page provides in-page navigation to view information about that project',
        title: 'Product Page',
        topOffset: '25%',
        leftOffset: '53%',
        tilt: '5',
        mobileTop: '12%',
        mobileLeft: '60%',
        cardHeightRatio: '.75',
        cardWidth: '16rem',
        maxWidth: '40rem'
      },
      {
        src: '/assets/web-projects/sv_detail2.png',
        alt: 'Detail of the design panel of the project page',
        caption: 'Each header of the project page revealed a relevant panel with copy and screenshots',
        title: 'Project Page Design Panel',
        topOffset: '35%',
        leftOffset: '77%',
        tilt: '-9',
        mobileTop: '4%',
        mobileLeft: '1%',
        cardHeightRatio: '0.61719',
        cardWidth: '12em',
        maxWidth: '40rem',
      },
      {
        src: '/assets/web-projects/sv_detail3.png',
        alt: 'Detail of the project gallery panel',
        caption: 'The project gallery panel features a lightbox to view larger views of the screenshots',
        title: 'Project Gallery',
        topOffset: '25%',
        leftOffset: '60%',
        tilt: '2',
        mobileTop: '5%',
        mobileLeft: '25%',
        cardHeightRatio: '0.61719',
        cardWidth: '12em',
        maxWidth: '40rem',
      },
      {
        src: '/assets/web-projects/sv_detail4.png',
        alt: 'Project gallery lightbox',
        caption: 'The lightbox allows the user to view all of the project gallery images sequentially',
        title: 'Project gallery lightbox',
        topOffset: '30%',
        leftOffset: '70%',
        tilt: '-6',
        mobileTop: '3%',
        mobileLeft: '66%',
        mobileTilt: '3',
        cardHeightRatio: '0.61719',
        cardWidth: '12em',
        maxWidth: '40rem',
      },
    ],
    copy: [
      'The design is built upon a layout that conforms to the golden ratio. The homepage in particular implies golden ratio spiral starting at the logo when viewed on a desktop or laptop. Project pages featured a unique UI to control what aspect of the project was featured such as Design, Development and a project gallery that displayed images using my custom lightbox script.',
      'Color is boldly used to distinguish one category of content from another; blue for web projects, green for art projects and yellow for blog posts and articles. The color palette is drawn first from the blue of the logo. Shades and tints were created by adjusting the HSB values in PhotoShop. Green and yellow hues were selected using similar saturation and blackness values as the main blue color.'
    ],
  };
</script>

<svelte:head>
<title>Ugly Bunnies—SerpentVenom Website Design Overview</title>
</svelte:head>

<article class="project">
  <header>
    <h2>SerpentVenom</h2>
    <p>This is the third and final design of my former website, SerpentVenom. SerpentVenom featured my art and design portfolios as well as my blog and some articles I had written. I retired the site when I realized I had not updated the blog in over a year.</p>
  </header>
  <section class="design">
    <header>
      <h3>The Design</h3>
    </header>
    <Captionbox {...captionBoxData} />
  </section>
  <section class="tech">
    <h3>Technical Details</h3>
    <h4>WordPress Theme</h4>
    <p>SerpentVenom was powered by WordPress using a custom theme that I developed from the ground up. Some of the custom development work included modifications and additions to the functions.php file, and custom loops on the homepage.</p>
    <h4>The Markup Structure</h4>
    <p>The markup was standards-compliant HTML5. The HTML generated by the theme was semantic and succinct to bolster SEO and rendering performance.</p>
    <h4>CSS</h4>
    <p>Hand-coded CSS provided the layouts, visual treatments like gradients, and transitions such as those used in the lightbox. This was the first project that I used flex to create layouts and that ultimately maded converting the site to a responsive design much simpler thanks to being able to alter the order of flex items via media queries.</p>
    <h4>JavaScript</h4>
    <p>Vanilla JavaScript was developed to run the Project Viewer on the project pages. This was essentially a tab interface that revealed the content panel associated with the selected tab.</p>
    
    <p>The Lightbox was also written in vanilla JavaScript. This script collected all of the anchor tags with a specific class name. Each anchor's HREF attribute was the location of the larger version of the thumnail image that the anchor contained. The ALT attribute of each thumbnail provided the caption of each image in the Lightbox itself. The navigation of the images in the lightbox was sequential and continuous, going back to the start if you reached the last image while going forward or backward.</p>
  </section>
</article>