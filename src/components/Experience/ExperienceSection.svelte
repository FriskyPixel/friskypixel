<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { experienceList, type Experience } from '$lib/data/experience';
  import ExperienceCard from './ExperienceCard.svelte';
  import ExternalLinkIcon from '$lib/images/icons/external-link.svelte';
  import DownloadIcon from '$lib/images/icons/download.svelte';

  const dispatch = createEventDispatcher();

  const openPopup = (experience: Experience) => () => {
    dispatch('openExperiencePopup', experience);
  };
</script>

<ul class="list">
  {#each experienceList as experience}
    <li
      on:click={openPopup(experience)}
      on:keypress={openPopup(experience)}
      tabindex="0"
    >
      <ExperienceCard {experience} />
    </li>
  {/each}
</ul>

<div class="links">
  <a href="https://www.linkedin.com/in/friskypixel/" target="_blank">
    LinkedIn <ExternalLinkIcon />
  </a>
  <a href="./David-Frisk-Resume.pdf" download>Resume <DownloadIcon /></a>
</div>

<style lang="scss">
  .list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2em;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 5em;
    color: var(--c-black);
    font-size: 1rem;
    font-weight: 400;
    margin-top: 2em;

    a {
      color: var(--c-gray);
      display: flex;
      align-items: center;
      gap: 0.35em;

      &:hover {
        --icon-ci: var(--c-red);
        color: var(--c-red);
      }
    }
  }

  @media screen and (max-width: 768px) {
    .list {
      grid-template-columns: 1fr;
    }

    .links {
      font-size: 1rem;
    }
  }
</style>
