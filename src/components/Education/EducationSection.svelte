<script lang="ts">
  import { educationList } from '$lib/data/education';
  import ExternalLink from '$lib/images/icons/external-link.svelte';
</script>

<ul class="list">
  {#each educationList as education}
    <li class="school">
      <h2 class="school-name">{education.schoolName}</h2>
      <p class="discipline">
        {education.discipline}<span>, {education.gpa}</span>
      </p>
      <p class="date">{education.date}</p>
      <ul class="achievement-list">
        {#each education.achievements as achievement}
          <li class="achievement">{achievement}</li>
        {/each}
      </ul>
    </li>
  {/each}
  <li class="school">
    <h2 class="school-name">Udacity</h2>
    <p class="discipline">Front End Web Developer Nanodegree</p>
    <p class="date">2021</p>
    <ul class="achievement-list">
      <li class="achievement">
        <a href="https://confirm.udacity.com/UD5E9ZVJ" target="_blank">
          View Certificate<ExternalLink />
        </a>
      </li>
    </ul>
  </li>
</ul>

<style lang="scss">
  .list {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 1em;
    column-gap: 2.5em;
    font-size: 1.25rem;
  }

  .school {
    margin-bottom: 1.5em;
  }

  .school:last-child {
    margin-bottom: 0;
  }

  .school-name {
    color: var(--c-black);
  }

  .discipline {
    color: var(--c-red);
    font-weight: 700;
    font-size: 1.25rem;

    span {
      color: var(--c-gray);
    }
  }

  .date {
    font-size: 1rem;
    margin-top: 0.25em;
  }

  .achievement-list {
    font-size: 1rem;
    padding-left: 1.25em;
    margin-top: 0.75em;
  }

  .achievement {
    --icon-ci: var(--c-gray);
    color: var(--c-gray);
    list-style-type: disc;

    &:not(:last-of-type) {
      margin-bottom: 0.25em;
    }

    a {
      display: flex;
      align-items: center;
      gap: 0.35em;

      &:hover {
        --icon-ci: var(--c-red);
        color: var(--c-red);
        text-decoration: underline;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .list {
      grid-template-columns: 1fr;
      row-gap: 0.35em;
    }

    .school-name {
      font-size: 1.25rem;
    }

    .discipline {
      font-size: 1rem;
    }

    .date {
      font-size: 0.9rem;
    }

    .achievement-list {
      font-size: 0.9rem;
    }
  }
</style>
