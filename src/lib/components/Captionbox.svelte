<script>
  import ImageCaption from "./ImageCaption.svelte";
  export let cards;
  export let copy;
</script>

<section class="copyImages">
  <div class="copy-block decorate">
    {#each copy as para}
      <p>{@html para}</p>
    {/each}
    <p class="tooltip">Click on each screenshot to enlarge them.</p>
  </div>
  <div class="cards">
    {#each cards as card}
      <ImageCaption {...card}/>
    {/each}
    
  </div>
</section>

<style>

.copyImages {
  display: grid;
  grid-template-columns: repeat(2, 50%);
  grid-template-areas: 'copy cards';
  column-gap: 1em; 
  margin-bottom: 2.5em;
  position: relative;
}
.copy-block {
  position: relative;
  grid-area: copy;
  padding: 1rem;
}
.copy-block p {
  margin-right: 25%;
}
.copy-block p + p:not(.tooltip) {
  margin-right: 3em;
  margin-left: 20%;
}
.cards {
  grid-area: cards;
  display: grid;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(auto-fill, minmax(3em, 1fr));
  column-gap: 0;
  row-gap: 0;
}
.cards :global(.card) {
  cursor: pointer;
}
.cards :global(.content) {
  position: absolute;
  width: var(--cardWidth);
  height: calc(var(--cardWidth) * var(--cardHeight));
  top: var(--top);
  left: var(--left);
  perspective: calc(var(--cardWidth) * 7);
  transform: rotate(var(--tilt));
  z-index: 1;
  box-shadow: .0625rem .0625rem 1rem .5rem rgba(0,0,0,0.1);
  transition: all .5s ease-out;
  transform-style: preserve-3d;
}
.cards :global(.card.flip) { 
  z-index: 100;
}
.cards :global(.card.flip .content) {
  top: -10%;
  left: 0;
  transform: translate3D(0, -10%, 1000em) rotateY( 180deg ) rotate(0deg);
  transition-timing-function: ease-in;
  width: calc(var(--maxWidth) + 24rem);
  height: calc(var(--maxWidth) * var(--cardHeight) + 1rem);
  z-index: 1000;
}
.cards :global(.front),
.cards :global(.back) {
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  background: white;
  line-height: 1.3;
  color: #03446A;
  font-size: 1.25rem;
  border-radius: 5px;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}
.cards :global(.front img) {
  width: 100%;
}
.cards :global(.back) {
  display: grid;
  grid-template-columns: var(--maxWidth) 22rem;
  transform: rotateY( 180deg );
}
.cards :global(.back .image) {
  max-width: var(--maxWidth) ;
  width: 100%;
  padding: 1em;
}
.cards :global(.back .image img) {
  height: auto;
  max-width: calc(var(--maxWidth) - 2rem);
}
.cards :global(.back-copy) {
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 1rem;
  color: #2e3438;
}
.tooltip {
  font-size: .8em;
  text-align: center;
  position: absolute;
  bottom: -.5em;
  left: 0;
  width: 100%;
  margin: 0;
}

@media screen and (max-width: 70em) {
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .75 + 24rem);
    height: calc(var(--maxWidth) * var(--cardHeight) * .75 + 1rem);
  }
  .cards :global(.back) {
    grid-template-columns: calc(var(--maxWidth) * .75) 22rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .75 - 2rem);
  }
}
@media screen and (max-width: 59em) {
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .6 + 22rem);
    height: calc(var(--maxWidth) * var(--cardHeight) * .6 + 1rem);
  }
  .cards :global(.back) {
    grid-template-columns: calc(var(--maxWidth) * .6) 20rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .6 - 2rem);
  }
}
@media screen and (max-width: 50em) { 
  .copyImages {
    grid-template-columns: 1fr;
    grid-template-rows: auto 18em;
    grid-template-areas:
        "copy"
        "cards";
    row-gap: 3em;
    margin-bottom: 3em;
  }
  .cards :global(.content) {
    top: auto;
    bottom: var(--mobileTop);
    left: var(--mobileLeft);
    width: calc(var(--cardWidth) * .9);
    height: calc(var(--cardWidth) * var(--cardHeight) * .9);
  }
  .cards :global(.card.flip .content) {
    top: auto;
    transform: translate3D(0vw, -10%, 1000em) rotateY( 180deg ) rotate(0deg);
    width: calc(var(--maxWidth));
    height: calc(var(--maxWidth) * var(--cardHeight) + 10rem);
    bottom: 0;
  }
  .cards :global(.back) {
    grid-template-columns: 1fr;
    grid-template-rows: calc(var(--maxWidth) * var(--cardHeight)) 11rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) - 2rem);
  }

}

@media screen and (max-width: 45em) {
  .cards :global(.content) {
    width: calc(var(--cardWidth) * .8);
    height: calc(var(--cardWidth) * var(--cardHeight) * .8);

  }
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .8);
    height: calc(var(--maxWidth) * var(--cardHeight) * .8 + 10rem);
  }
  .cards :global(.back) {
    grid-template-rows: calc(var(--maxWidth) * var(--cardHeight) * .8) 11rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .8 - 2rem);
  }

}
@media screen and (max-width: 40em) {
  .cards :global(.content) {
    width: calc(var(--cardWidth) * .7);
    height: calc(var(--cardWidth) * var(--cardHeight) * .7);

  }
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .7);
    height: calc(var(--maxWidth) * var(--cardHeight) * .7 + 10rem);
  }
  .cards :global(.back) {
    grid-template-rows: calc(var(--maxWidth) * var(--cardHeight) * .7) 11rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .7 - 2rem);
  }

}

@media screen and (max-width: 33em) {
  .copy-block p {
    margin-right: 5%;
  }
  .copy-block p + p:not(.tooltip) {
    margin-right: 1em;
    margin-left: 5%;
  }
  .cards :global(.content) {
    width: calc(var(--cardWidth) * .6);
    height: calc(var(--cardWidth) * var(--cardHeight) * .6);

  }
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .6);
    height: calc(var(--maxWidth) * var(--cardHeight) * .6 + 10rem);
  }
  .cards :global(.back) {
    grid-template-rows: calc(var(--maxWidth) * var(--cardHeight) * .6) 11rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .6 - 2rem);
  }

}

@media screen and (max-width: 30em) {
  .cards :global(.content) {
    width: calc(var(--cardWidth) * .5);
    height: calc(var(--cardWidth) * var(--cardHeight) * .5);

  }
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .5);
    height: calc(var(--maxWidth) * var(--cardHeight) * .5 + 10rem);
  }
  .cards :global(.back) {
    grid-template-rows: calc(var(--maxWidth) * var(--cardHeight) * .5) 11rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .5 - 2rem);
  }

}

@media screen and (max-width: 26em) {
  .copyImages, .copy-block {
    padding: 0;
  }
  .copy-block p {
    margin-right: 0;
  }
  .copy-block p + p:not(.tooltip) {
    margin: 0 0 2em 0;
  }
  .cards :global(.content) {
    width: calc(var(--cardWidth) * .4);
    height: calc(var(--cardWidth) * var(--cardHeight) * .4);

  }
  .cards :global(.card.flip .content) {
    width: calc(var(--maxWidth) * .4);
    height: calc(var(--maxWidth) * var(--cardHeight) * .4 + 14rem);
  }
  .cards :global(.back) {
    grid-template-rows: calc(var(--maxWidth) * var(--cardHeight) * .4) 11rem;
  }
  .cards :global(.back .image img) {
    max-width: calc(var(--maxWidth) * .4 - 2rem);
  }

}
</style>