<script>
  export let beforeSrc;
  export let afterSrc;
  export let beforeSrcPng;
  export let afterSrcPng;
  export let beforeAlt;
  export let afterAlt;

  function slide(e) {
    let splitter = document.querySelector('.splitter');
    let handle = splitter.querySelector('.slider');
    let top = splitter.querySelector('.panel.one');
    let rect = splitter.getBoundingClientRect();
    let handleRect = handle.getBoundingClientRect();
    let x = e.clientX - rect.left ;
    // Move the handle.
    handle.style.left = x < 1 ? `${0 - handleRect.width / 4}px` : x > rect.width ? `${rect.width}px` : `${x}px`;

    // Adjust the top panel width.
    top.style.width = `${x}px`;

  }
</script>
<div class="splitter" on:mousemove={slide}>
  <div class="panel one">
    <picture>
      <source srcset="{beforeSrc}" type="image/webp">
      <source srcset="{beforeSrcPng}" type="image/png">
      <img src="{beforeSrcPng}" alt="{beforeAlt}">
    </picture>
  </div>
  <div class="panel two">
    <picture>
      <source srcset="{afterSrc}" type="image/webp">
      <source srcset="{afterSrcPng}" type="image/png">
      <img src="{beforeSrcPng}" alt="{afterAlt}">
    </picture>
  </div>
  <div class="slider"></div>
</div>
<style>
  .splitter {
    position: relative;
    width: 100%;
    aspect-ratio: 16/9;
  }
  .panel {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .one {
    width: 50%;
    z-index: 2;
  }
  .two {
    z-index: 1;
  }
  .panel img {
    position: absolute;
    width: auto;
    height: 100%;
    top: 0;
    left: 0;
  }
  .slider {
    background-color: var(--larkspur-lite);
    border: .0625em solid var(--larkspur50);
    position: absolute;
    top: 0;
    left: 50%;
    width: .75em;
    height: 100%;
    z-index: 3;
    transform: translate(-.25em, 0);
    cursor: grab;
  }
  .slider::after {
    content: '';
    display: block;
    position: absolute;
    border: solid var(--larkspur50);
    border-width: .125em 0;
    width: 20%;
    height: .5em;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>