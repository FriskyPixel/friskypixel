<script lang="ts">
  export let allSections: HTMLElement[];

  let mobileNavActive = false;
  let listElement: HTMLUListElement;

  const toggleHamburger = () => {
    mobileNavActive = !mobileNavActive;
  };

  const closeHamburger = () => {
    mobileNavActive = false;
  };

  const scrollToSection = (section: HTMLElement) => {
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeHamburger();
  };
</script>

<svelte:window on:resize={closeHamburger} />

<nav class="nav">
  <div class="container">
    <a class="home" href="#">frisky<span>pixel</span></a>
    <div
      class="hamburger"
      class:active={mobileNavActive}
      role="button"
      tabindex="0"
      on:click={toggleHamburger}
      on:keypress={toggleHamburger}
    >
      <div class="hamburger-lines" />
    </div>
    <ul
      bind:this={listElement}
      class="list"
      style="max-height: {mobileNavActive ? listElement.scrollHeight : '0'}px"
    >
      {#each allSections as section}
        <li class="item">
          <a
            class="link"
            href={`#${section.id}`}
            on:click|preventDefault={() => scrollToSection(section)}
          >
            {section.id}
          </a>
        </li>
      {/each}
    </ul>
  </div>
</nav>

<style lang="scss">
  .nav {
    width: 100%;
    position: fixed;
    background: var(--c-black);
    padding: 1.5em 3em;
    z-index: 5;
  }

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .home {
    font-weight: 300;
    font-size: 2.25rem;
    color: white;
    transition: transform 0.25s;
    padding-right: 0.7em;

    &:hover {
      transform: scale(1.02);
    }

    span {
      font-weight: 700;
      color: var(--c-red);
    }
  }

  .hamburger {
    display: none;
  }

  .list {
    flex: 1 1 60%;
    max-width: 650px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .item {
    font-size: 0.85rem;
    font-weight: 300;
    text-transform: uppercase;
  }

  .link {
    display: inline-block;
    color: white;
    font-size: 0.8rem;
    font-weight: 400;
    position: relative;
    padding: 0.75em;
    transition: color 0.2s;

    &:hover {
      color: var(--c-red);
    }
  }

  @media screen and (max-width: 768px) {
    .home,
    .hamburger {
      width: 50%;
    }

    .hamburger {
      display: flex;
      position: relative;
      justify-content: center;
      align-items: center;
      max-width: 35px;
      height: 25px;
      cursor: pointer;

      &.active .hamburger-lines {
        background: transparent;
      }
      &.active .hamburger-lines::before {
        transform: translateY(7px) rotate(45deg);
      }
      &.active .hamburger-lines::after {
        transform: translateY(-7px) rotate(-45deg);
      }
    }

    .hamburger-lines {
      position: relative;

      &,
      &::before,
      &::after {
        width: 100%;
        height: 3px;
        background: white;
        border-radius: 1px;
        transition: all 0.25s;
      }

      &::before,
      &::after {
        content: '';
        position: absolute;
      }

      &::before {
        top: -7px;
      }

      &::after {
        top: 7px;
      }
    }

    .list {
      width: 100%;
      max-height: 0;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: max-height 0.25s;
    }

    .item {
      font-size: 1rem;
      margin: 1em 0;
    }
  }
</style>
