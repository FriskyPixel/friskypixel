<script lang="ts">
  import type { Experience } from '$lib/data/experience';

  export let experience: Experience;
</script>

<div class="content">
  <h3 class="job-title">{experience.jobTitle}</h3>
  <h4 class="company">
    {experience.company}
    {#if experience.subCompany}
      <br /><span>{experience.subCompany}</span>
    {/if}
  </h4>
  <div class="image">
    <svelte:component this={experience.logo} />
  </div>
  <div class="location-date">
    <div class="location">{experience.location}</div>
    <div class="date">{experience.dates}</div>
  </div>
</div>

<style lang="scss">
  .content {
    display: flex;
    flex-direction: column;
    gap: 1em;
    width: 100%;
    height: 100%;
    background: var(--c-gray-light);
    box-shadow: 0 0 var(--c-red);
    transition: box-shadow 0.25s;
    padding: 2em;

    &:hover {
      cursor: pointer;
      box-shadow: 0.7em 0.7em var(--c-red);
    }

    &:hover .image {
      --logo-ci: var(--c-red);
    }
  }

  .job-title,
  .company,
  .location,
  .date {
    color: var(--c-black);
  }

  .job-title {
    font-size: 1.25rem;
    color: var(--c-red);
    text-align: center;
  }

  .company {
    text-align: center;

    & span {
      font-weight: 300;
    }
  }

  .image {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em 0;
  }

  .location-date {
    display: flex;
    justify-content: space-evenly;
    gap: 1em;
    margin-top: auto;
  }

  .location,
  .date {
    color: var(--c-gray);
  }

  @media screen and (max-width: 768px) {
    .job-title {
      font-size: 1.25rem;
    }

    .company {
      font-size: 1rem;
    }

    .date {
      font-size: 0.9rem;
    }
  }
</style>
