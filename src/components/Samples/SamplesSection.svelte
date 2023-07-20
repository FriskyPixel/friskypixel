<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import LaptopVideo from '$lib/images/laptop-video.svelte';
  import LaptopWeb from '$lib/images/laptop-web.svelte';

  let sectionWidth: number;
  let scaleVideo = false;
  let scaleWeb = false;
  const mobileWidth = 768;
  const dispatch = createEventDispatcher();

  $: scaleVideo = sectionWidth < mobileWidth ? true : false;
  $: scaleWeb = sectionWidth < mobileWidth ? true : false;

  const scaleImage = (image: 'video' | 'web', type: 'up' | 'down') => () => {
    if (sectionWidth < mobileWidth) return;

    if (image === 'video') scaleVideo = type === 'down' ? true : false;
    if (image === 'web') scaleWeb = type === 'down' ? true : false;
  };

  const openPopup = (type: 'video' | 'web') => () => {
    if (type === 'video') dispatch('openSamplesVideoPopup');
    if (type === 'web') dispatch('openSamplesWebPopup');
  };
</script>

<div class="samples" bind:clientWidth={sectionWidth}>
  <div
    class="image"
    role="button"
    tabindex="0"
    on:mouseover={scaleImage('video', 'down')}
    on:focus={scaleImage('video', 'down')}
    on:mouseleave={scaleImage('video', 'up')}
    on:blur={scaleImage('video', 'up')}
    on:click={openPopup('video')}
    on:keypress={openPopup('video')}
  >
    <LaptopVideo scale={scaleVideo} />
    <div class="title">Video</div>
  </div>
  <div
    class="image"
    role="button"
    tabindex="0"
    on:mouseover={scaleImage('web', 'down')}
    on:focus={scaleImage('web', 'down')}
    on:mouseleave={scaleImage('web', 'up')}
    on:blur={scaleImage('web', 'up')}
    on:click={openPopup('web')}
    on:keypress={openPopup('web')}
  >
    <LaptopWeb scale={scaleWeb} />
    <div class="title">Web</div>
  </div>
</div>

<style lang="scss">
  .samples {
    display: flex;
    gap: 2em;
  }

  .image {
    display: flex;
    justify-content: center;
    width: 50%;
    background: var(--c-gray-light);
    box-shadow: 0 0 var(--c-red);
    transition: box-shadow 0.25s;
    padding: 3em;
    position: relative;
    overflow: hidden;

    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow: 0.7em 0.7em var(--c-red);

      .title {
        transform: (translate(-50%, 0));
      }
    }
  }

  .title {
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 100%;
    transform: (translate(-50%, 100%));
    transition: transform 0.25s;

    color: white;
    font-size: 2em;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    background-color: var(--c-black);
    padding: 0.75em;
  }

  @media screen and (max-width: 768px) {
    .samples {
      flex-direction: column;
      gap: 2em;
    }

    .image {
      width: 100%;
    }

    .title {
      font-size: 1.5rem;
      transform: (translate(-50%, 0));
    }
  }
</style>
