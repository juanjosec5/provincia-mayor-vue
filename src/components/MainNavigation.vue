<script setup>
import { ref } from "vue";

const props = defineProps({
  linkItems: {
    type: Array,
    required: true,
  },
});

const navOpen = ref(false);
const mediaQuery = window.matchMedia("(max-width: 400px)");

const toggleNav = () => (navOpen.value = !navOpen.value);

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    navOpen.value = false;
  }
});
</script>

<template>
  <header>
    <div class="logo-container">
      <img src="https://placekitten.com/300/200" alt="" />
    </div>
    <div>
      <button class="nav-button" @click="toggleNav">
        {{ !navOpen ? "&#9776;" : "&#10006;" }}
      </button>
      <ul class="nav" :class="{ 'nav--open': navOpen, 'nav--close': !navOpen }">
        <li v-for="link in props.linkItems" :key="link.text">
          <a :href="link.href">{{ link.text }}</a>
        </li>
      </ul>
      <Transition>
        <div class="dimmer" @click="navOpen = false" v-if="navOpen"></div>
      </Transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use "@/scss/variables" as *;

header {
  height: 64px;
  background-color: #e0e0e0;
  position: relative;
  padding: 0.5rem 2rem;

  .logo-container {
    height: 100%;
  }
}

a {
  display: block;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  padding: 0.5rem 1rem;
  color: #09500f;
  transition: all 0.2s ease-in-out;
}

.dimmer {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(black, 0.3);
}

@media screen and (max-width: 899px) {
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .nav {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      position: absolute;
      top: 0;
      padding: 60px 0 20px;
      height: 100vh;
      width: 75%;
      transition: right 0.5s ease-in-out;
      background-color: #fff;

      li {
        text-align: center;
        margin: 1rem 0;

        a {
          width: fit-content;
          margin: 0 auto;
        }
      }

      &--open {
        right: 0;
      }

      &--close {
        right: -100%;
      }
    }
  }

  .nav-button {
    font-size: 1.5rem;
    background-color: transparent;
    color: #09500f;
    font-weight: 700;
    position: relative;
    display: block;
    padding: 1rem;
    z-index: $header-close-btn-z-index;
    text-align: center;

    &:hover {
      cursor: pointer;
    }
  }
}

@media screen and (min-width: 900px) {
  .nav-button {
    display: none;
  }
  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .container {
      max-width: 1440px;
    }
    .nav {
      position: relative;
      display: flex;

      li {
        margin: 0 1.5rem;
        a:hover {
          color: darken(#09500f, 1%);
          transform: scale(1.05);
          backface-visibility: hidden;
          -webkit-font-smoothing: subpixel-antialiased;
        }
      }
    }
  }
}

//Vue Transition
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
