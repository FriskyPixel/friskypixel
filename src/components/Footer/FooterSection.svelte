<script lang="ts">
  import LinkedinLogo from '$lib/images/icons/linkedin.svelte';
  import YoutubeLogo from '$lib/images/icons/youtube.svelte';
  import GithubLogo from '$lib/images/icons/github.svelte';

  const iconWidth = 50;
  const date = new Date();
</script>

<footer>
  <div class="links">
    <a href="https://www.linkedin.com/in/friskypixel/" target="_blank">
      <LinkedinLogo width={iconWidth} />
    </a>
    <a href="https://www.youtube.com/c/DavidFrisk/" target="_blank">
      <YoutubeLogo width={iconWidth} />
    </a>
    <a href="https://github.com/FriskyPixel" target="_blank">
      <GithubLogo width={iconWidth} />
    </a>
  </div>
  <div class="copyright">&copy; {date.getFullYear()}</div>
</footer>

<style lang="scss">
  footer {
    background: var(--c-black);
    padding: 4em 4em 2em;
  }

  .links {
    --icon-ci: white;

    display: flex;
    justify-content: center;
    gap: 3em;
  }

  a {
    transform: scale(1);
    transition: transform 0.25s;

    &:hover {
      --icon-ci: var(--c-red);
      transform: scale(1.1);
    }
  }

  .copyright {
    color: white;
    text-align: center;
    margin-top: 1.5em;
  }
</style>
