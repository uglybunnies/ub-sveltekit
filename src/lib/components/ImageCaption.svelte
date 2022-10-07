<script>
  export let src;
  export let alt;
  export let caption;
  export let title;
  export let topOffset;
  export let leftOffset;
  export let tilt;
  export let cardHeightRatio;
  export let cardWidth;
  export let maxWidth;
  export let mobileTop;
  export let mobileLeft;

  function flipCard(event) {
    let target = event.target;
    let card = target.closest('.card');
    let flipped = document.querySelector('.flip');
    if (card.classList.contains('flip')) {
      card.classList.remove('flip');
    }
    else {
      if (flipped) {
        flipped.classList.remove('flip');
      }
      card.classList.add('flip');
    }
  }
</script>

<div
  class="card"
  style="--top: {topOffset}; --left: {leftOffset}; --tilt: {tilt}deg; --cardHeight: {cardHeightRatio}; --cardWidth: {cardWidth}; --maxWidth: {maxWidth}; --mobileTop: {mobileTop}; --mobileLeft: {mobileLeft}"
  on:click={flipCard}
>
  <div class="content">
    <div class="front">
      <img {src} {alt} />
    </div>
    <div class="back">
      <div class="image">
        <img {src} {alt} />
      </div>
      <div class="back-copy">
        <div class="copy">
          <h3>{title}</h3>
          <p>{caption}</p>
        </div>
      </div>
    </div>
  </div>
</div>

<style>
  .copy h3 {
    font-size: var(--h5-font-size);
  }
</style>
