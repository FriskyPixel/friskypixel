<script lang="ts">
  import type { Experience } from '$lib/data/experience';

  export let experience: Experience;
</script>

<div class="experience-popup">
  <div class="image">
    <svelte:component this={experience.logo} />
  </div>
  <h3 class="job-title">{experience.jobTitle}</h3>
  <h4 class="company">
    {experience.company}
    {#if experience.subCompany}
      <br /><span>{experience.subCompany}</span>
    {/if}
  </h4>
  <div class="location-date">
    <div class="location">{experience.location}</div>
    <div class="date">{experience.dates}</div>
  </div>
  <ul class="responsibilities">
    {#each experience.responsibilities as responsibility}
      <li class="responsibility">
        {responsibility}
      </li>
    {/each}
  </ul>
</div>

<style lang="scss">
  .experience-popup {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .image {
    --logo-ci: var(--c-black);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1em 0 0;
  }

  .job-title,
  .company,
  .location,
  .date {
    color: var(--c-black);
  }

  .job-title {
    font-size: 1.5rem;
    color: var(--c-red);
    text-align: center;
  }

  .company {
    text-align: center;

    & span {
      font-weight: 300;
    }
  }

  .location-date {
    display: flex;
    justify-content: center;
    gap: 3em;
    margin-top: auto;
  }

  .location,
  .date {
    color: var(--c-gray);
  }

  .responsibilities {
    width: 80%;
    text-align: justify;
    margin: 1em auto 0;
  }

  .responsibility {
    color: var(--c-gray);

    &:not(:last-of-type) {
      line-height: 1.35em;
      margin-bottom: 0.75em;
    }

    &::before {
      content: '\2022';
      color: var(--c-red);
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }

  @media screen and (max-width: 768px) {
    :global(.experience-popup .company-logo) {
      max-width: 12em;
    }

    .job-title {
      font-size: 1.25rem;
    }

    .company {
      font-size: 1rem;
    }

    .date {
      font-size: 0.9rem;
    }

    .responsibilities {
      width: 100%;
      text-align: left;
    }
  }
</style>
