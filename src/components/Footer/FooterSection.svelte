<script lang="ts">
  import LinkedinLogo from '$lib/images/icons/linkedin.svelte';
  import YoutubeLogo from '$lib/images/icons/youtube.svelte';
  import GithubLogo from '$lib/images/icons/github.svelte';

  const iconWidth = 50;
</script>

<footer>
  <a href="https://www.linkedin.com/in/friskypixel/" target="_blank">
    <LinkedinLogo width={iconWidth} />
  </a>
  <a href="https://www.youtube.com/c/DavidFrisk/" target="_blank">
    <YoutubeLogo width={iconWidth} />
  </a>
  <a href="https://github.com/FriskyPixel" target="_blank">
    <GithubLogo width={iconWidth} />
  </a>
</footer>

<style lang="scss">
  footer {
    --icon-ci: white;

    display: flex;
    justify-content: center;
    gap: 3em;
    background: var(--c-black);
    padding: 4em;
  }

  a {
    transform: scale(1);
    transition: transform 0.25s;

    &:hover {
      --icon-ci: var(--c-red);
      transform: scale(1.1);
    }
  }
</style>
