<script setup>
/* eslint-disable */

import { RouterView } from "vue-router";
import MainNavigation from "./components/MainNavigation.vue";

const items = [
  {
    text: 'list item',
    href: 'list link'
  },
  {
    text: 'list item',
    href: 'list link'
  },
  {
    text: 'list item',
    href: 'list link'
  },
];
</script>

<template>
  <MainNavigation :linkItems="items" />
  <RouterView />
</template>

<style></style>
