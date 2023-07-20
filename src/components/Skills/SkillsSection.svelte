<script lang="ts">
  import { skillList } from '$lib/data/skills';
</script>

<div class="content">
  {#each skillList as skill}
    <div class="category">
      <h3 class="title">{skill.category}</h3>
      <ul class="list">
        {#each skill.disciplines as discipline}
          <li class="item">{discipline}</li>
        {/each}
      </ul>
    </div>
  {/each}
</div>

<style lang="scss">
  .content {
    width: 100%;
    display: flex;
    align-content: center;
    font-size: 1.25rem;
  }

  .category {
    width: 50%;
  }

  .title {
    font-size: 2rem;
    margin-bottom: 0.35em;
  }

  .item {
    color: var(--c-gray);
  }

  @media screen and (max-width: 768px) {
    .content {
      flex-direction: column;
      gap: 1.5em;
    }

    .category {
      width: 100%;
    }

    .title {
      font-size: 1.25rem;
    }

    .item {
      font-size: 1rem;
    }
  }
</style>
