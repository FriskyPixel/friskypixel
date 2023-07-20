<ul class="list">
  <li class="item">
    <a href="mailto:david@friskypixel.net" target="_blank"
      >david@friskypixel.net</a
    >
  </li>
  <li class="item">
    <a href="tel:17348462075" target="_blank">734.846.2075</a>
  </li>
  <li class="item">
    <a href="https://www.linkedin.com/in/friskypixel/" target="_blank" />
  </li>
</ul>

<style lang="scss">
  .item {
    font-size: 2rem;
    margin-bottom: 0.5em;
  }

  a {
    display: inline-block;
    color: var(--c-black);
    transform-origin: left;
    transform: scale(1);
    transition: transform 0.25s;

    &:hover {
      transform: scale(1.02);
    }
  }

  @media screen and (max-width: 768px) {
    .item {
      font-size: 1.25rem;
    }
  }
</style>
