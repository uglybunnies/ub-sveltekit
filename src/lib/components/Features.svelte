<script>
  export let projects;
  
  function showCard(event) {
    let target = event.target;
    let card = target.closest('.card');
    let shown = document.querySelector('.show');
    if (card.classList.contains('show')) {
      card.classList.remove('show');
    }
    else {
      if (shown) {
        shown.classList.remove('show');
      }
      card.classList.add('show');
    }
  }
</script>

<div class="featured">
  {#each projects as project}
    <div class="project-card" style="--projectTilt:{project.tilt}; --offsetTop:{project.top}; --offsetLeft:{project.left}; --mobileTop:{project.mobileTop}; --mobileLeft:{project.mobileLeft};">
      <div class="card" on:click={showCard} >
        <div class="image"><img src="{project.src}" alt="{project.alt}"></div>
        <div class="copy">
          <p>{project.copy}</p>
          <p><a class="slink" href="{project.link}">View project &raquo;</a></p>
        </div>
      </div>
    </div>
  {/each}
</div>
<style>
  .featured {
    position: relative;
    display: grid;
    grid-template-columns: repeat(4, 25%);
  }
  .project-card {
    width: 14em;
    height: 8.652em;
  }
  .card {
    position: absolute;
    top: var(--offsetTop);
    left: var(--offsetLeft);
    transform: rotate(var(--projectTilt));
    transition: all .5s ease-in;
    cursor: pointer;
    width: 14em;
    height: 8.652em;
    z-index: 1;
  }
  .featured :global(.card.show) {
    position: absolute;
    top: -10%;
    left: 25%;
    transform: rotate(0);
    transition-timing-function: ease-out;
    z-index: 100;
  }
  .image {
    position: relative;
    width: 100%;
    margin: 0;
    z-index: 2;
  }
  .image img {
    width: 100%;
  }
  .copy {
    background: var(--white);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: left .5s ease-in, top .5s ease-in;
    text-align: left;
    z-index: 1;
  }
  .featured :global(.card.show .copy) {
    left: 100%;
    transition-timing-function: ease-out;
  }
  .copy p:first-child {
    padding: .5em .5em 0;
  }
  .copy p + p {
    padding: 0 .5em;
  }
  @media screen and (max-width: 50em) {
    .featured {
      grid-template-columns: 50% 50%;
      grid-template-rows: repeat(auto-fill, minmax(3em, 1fr));
    }
    .card {
      top: initial;
      left: var(--mobileLeft);
      bottom: var(--mobileTop);
    }
    .featured :global(.card.show) {
      bottom: 70%;
      left: 25%;
    }
  }
  @media screen and (max-width: 40em) {
    .featured :global(.card.show .copy) {
      left: 0;
      top: 9.27em;
      transition-timing-function: ease-out;
    }
  }
  @media screen and (max-width: 30em) {
    .featured :global(.card.show) {
      left: 15%;
    }
    .project-card {
      width: 12em;
      height: 7.416em;
    }
    .card {
      width: 12em;
      height: 7.416em;
    }
    .featured :global(.card.show .copy) {
      top: 7.416em;
    }
  }

</style>