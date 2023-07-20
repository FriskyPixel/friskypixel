<script lang="ts">
  export let heading: string;
</script>

<h2 class="heading">{heading}</h2>

<style lang="scss">
  .heading {
    width: max-content;
    color: white;
    background: var(--c-red);
    font-size: 1.75rem;
    text-transform: uppercase;
    box-shadow: 0.3em 0.3em var(--c-black);
    padding: 0.375em 1.5em;
    margin-bottom: 1.5em;
  }

  @media screen and (max-width: 768px) {
    .heading {
      font-size: 1.5rem;
      margin-bottom: 2em;
    }
  }
</style>
