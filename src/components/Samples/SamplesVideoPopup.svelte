<script lang="ts">
  import ExternalLinkIcon from '$lib/images/icons/external-link.svelte';
</script>

<h3 class="title">Video Samples</h3>
<div class="reel">
  <iframe
    src="https://www.youtube.com/embed/pBse8gBXiW4"
    title="David Frisk Reel"
    frameborder="0"
    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</div>
<ul class="links">
  <li class="link">
    <a
      href="https://youtube.com/playlist?list=PLyxpx_Pihh0c2tIeQ1j8dZkYPfucwVpM2"
      target="_blank"
    >
      Short Form editing samples <ExternalLinkIcon />
    </a>
  </li>
  <li class="link">
    <a
      href="https://youtube.com/playlist?list=PLyxpx_Pihh0fV-61c6zniugOv-ec2uUb0"
      target="_blank"
    >
      Long Form editing samples <ExternalLinkIcon />
    </a>
  </li>
  <li class="link">
    <a
      href="https://youtube.com/playlist?list=PLyxpx_Pihh0dSozie-55PZZjhRtc7pSHM"
      target="_blank"
    >
      Owner's Information editing samples <ExternalLinkIcon />
    </a>
  </li>
  <li class="link">
    <a
      href="https://youtube.com/playlist?list=PLyxpx_Pihh0chTjoiMXTUVEtpkea6dlmn"
      target="_blank"
    >
      3D samples <ExternalLinkIcon />
    </a>
  </li>
</ul>

<style lang="scss">
  .title {
    color: var(--c-red);
  }

  .reel {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.25%;
    margin-top: 2em;
    margin-bottom: 1em;

    & iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .links {
    margin: 2em 1em 0;
  }

  .link {
    display: flex;
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
