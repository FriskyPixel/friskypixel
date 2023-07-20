<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import { fade } from 'svelte/transition';
  import { cubicInOut } from 'svelte/easing';
  import CloseIcon from '$lib/images/icons/close.svelte';

  const dispatch = createEventDispatcher();

  const closePopup = () => {
    dispatch('closePopup');
  };

  onMount(() => {
    document.querySelector('body')!.style.overflow = 'hidden';

    return () => (document.querySelector('body')!.style.overflow = 'auto');
  });
</script>

<div transition:fade={{ duration: 125, easing: cubicInOut }}>
  <div class="background" on:click={closePopup} role="none" />

  <div class="popup">
    <div
      class="close"
      on:click={closePopup}
      on:keypress={closePopup}
      role="button"
      tabindex="0"
    >
      <CloseIcon />
    </div>

    <slot />
  </div>
</div>

<style lang="scss">
  .background {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: var(--c-black);
    opacity: 90%;
    z-index: 10;
  }

  .popup {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 75vw;
    max-width: 900px;
    max-height: 80vh;
    background: white;
    box-shadow: 0.7em 0.7em var(--c-red);
    transform: translate(-50%, -50%);
    overflow: auto;
    padding: 2em;
    z-index: 15;
  }

  .close {
    position: fixed;
    top: 2em;
    right: 2em;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    .popup {
      padding: 1em 2em;
      width: 90vw;
    }

    .close {
      top: 1em;
      right: 1.5em;
    }
  }
</style>
