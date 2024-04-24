<script>
  export let pics;
  function expandCluster(event, bool) {
    let target = event.target;
    let expand = bool;
    if (expand) {
      target.classList.add('expand');
    }
    else {
      target.classList.remove('expand');
    }
  };
  function magnifyPic(event) {
    let target = event.target;
    target.classList.toggle('zoom');
  }
</script>
<div
  class="pic-cluster" tabindex="0"
  on:mouseenter={(e) => expandCluster(e, true)}
  on:focus={(e) => expandCluster(e, true)}
  on:mouseleave={(e) => expandCluster(e, false)}>
  {#each pics as pic}
    <picture>
      <source srcset="{pic.webpSrc}" type="image/webp">
      <source srcset="{pic.stdSrc}" type="image/{pic.stdType}">
      <img tabindex="0"
        on:click={magnifyPic}
        on:keypress={magnifyPic}
        src="{pic.stdSrc}" alt="{pic.altCopy}" class="pic {pic.sector}">
    </picture>
  {/each}
</div>
<style>
  .pic-cluster {
    width: 100%;
    height: 100%;
    position: relative;
    cursor: pointer;
    perspective: 3rem;
  }
  .pic {
    position: absolute;
    width: 40%;
    transition: all 250ms ease-out;
  }
  .center {
    top: 50%;
    left: 50%;
    margin: -16.5% 0 0 -20%;
    transform-origin: center;
  }
  .top-left {
    top: 17%;
    left: 11%;
    transform-origin: top left;
  }
  .top-right {
    top: 13%;
    right: 23%;
    transform-origin: top right;
  }
  .bottom-left {
    bottom: 19%;
    left: 15%;
    transform-origin: bottom left;
  }
  .bottom-right {
    bottom: 13%;
    right: 19%;
    transform-origin: bottom right;
  }
  .pic-cluster:global(.expand) .top-left {
    top: 0;
    left: 0;
  }
  .pic-cluster:global(.expand) .top-right {
    top: 0;
    right: 0;
  }
  .pic-cluster:global(.expand) .bottom-left {
    bottom: 0;
    left: 0;
  }
  .pic-cluster:global(.expand) .bottom-right {
    bottom: 0;
    right: 0;
  }
  .pic.zoom {
    z-index: 5;
    transform: scale(2.5);
  }

</style>