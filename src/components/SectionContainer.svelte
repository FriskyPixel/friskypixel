<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import SectionHeading from './SectionHeading.svelte';

  export let section: string;
  let sectionElement: HTMLElement;

  const dispatch = createEventDispatcher();

  onMount(() => dispatch('addSection', sectionElement));
</script>

<section id={section} class="section" bind:this={sectionElement}>
  <div class="container">
    <SectionHeading heading={section} />
    <slot />
  </div>
</section>

<style lang="scss">
  .section {
    width: 100%;
    padding: 6em 3em 0;
  }

  @media (max-width: 768px) {
    .section {
      padding: 5em 2em 0;
    }
  }
</style>
