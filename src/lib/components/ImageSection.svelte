<script>
  export let title;
  export let src;
  export let alt;
  export let caption;
  export let maxWidth;
  export let picIndex;
  export let projectUrl;
</script>
<section class="screens" id="pic{picIndex}">
  <h3>{title}</h3>
  <p>{caption}</p>
  <div class="pic">
    <img class="screenshot" style="--maxWidth: {maxWidth}" {src} {alt}>
  </div>
  <p><a href="{projectUrl}">&laquo; Return to this project page</a></p>
</section>
<style>
  .screenshot {
    max-width: var(--maxWidth);
    width: 100%;
    display: block;
    margin: 0 auto;
  }
</style>