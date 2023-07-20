<script lang="ts">
  import { webSamplesList } from '$lib/data/webSamples';
  import ExternalLinkIcon from '$lib/images/icons/external-link.svelte';
</script>

<h3 class="title">Web Samples</h3>
<ul class="list">
  {#each webSamplesList as webSample}
    <li class="item">
      <h4 class="name">{webSample.name}</h4>
      <p class="description">{webSample.description}</p>
      <div class="links">
        {#each webSample.links as link}
          <a class="link" href={link.url} target="_blank">
            {link.title}<ExternalLinkIcon />
          </a>
        {/each}
      </div>
    </li>
  {/each}
</ul>

<style lang="scss">
  .title {
    color: var(--c-red);
  }

  .list {
    margin-top: 2.5em;
  }

  .item:not(:first-of-type) {
    margin-top: 2em;
  }

  .name {
    font-size: 1.25rem;
  }

  .description {
    line-height: 1.35;
    margin-top: 0.5em;
  }

  .links {
    display: flex;
    justify-content: center;
    gap: 2em;
    padding: 0.5em;
    margin-top: 0.25em;
  }

  .link {
    display: flex;
    color: var(--c-gray);
  }

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
</style>
