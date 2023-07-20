<script lang="ts">
  import { onMount } from 'svelte';
  import Navigation from './Navigation.svelte';

  export let allSections: HTMLElement[];
  let shadow = false;

  onMount(() => (shadow = true));
</script>

<header class="header">
  <Navigation {allSections} on:test={(e) => console.log('yes ', e.detail)} />
  <div class="hero">
    <div class="container">
      <h1 class="title" class:shadow>David Frisk</h1>
      <div class="subtitle" class:shadow>Video Editor // Web Developer</div>
    </div>
  </div>
</header>

<style lang="scss">
  .hero {
    width: 100%;
    height: 90vh;
    min-height: 300px;
    background-color: var(--c-black);
    padding: 6em 2em;
    position: relative;
  }

  .container {
    max-width: max-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .title,
  .subtitle {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    color: var(--c-black);
    background-color: white;
    box-shadow: 0 0 var(--c-red);
    padding: 0 1.5rem;
  }

  .title {
    font-size: 2rem;
    font-weight: 300;
    box-shadow: 0 0 var(--c-red);
    transition: box-shadow 0.75s ease-in-out;

    &.shadow {
      box-shadow: 0.7rem 0.7rem var(--c-red);
    }
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 100;
    box-shadow: 0 0 var(--c-red);
    transition: box-shadow 0.75s ease-in-out 0.2s;

    &.shadow {
      box-shadow: 0.7rem 0.7rem var(--c-red);
    }
  }

  @media screen and (max-width: 768px) {
    .hero {
      height: 90vh;
    }

    .title {
      font-size: 1.5rem;
    }

    .subtitle {
      font-size: 1.25rem;
    }
  }
</style>
