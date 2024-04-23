<script setup lang="ts">
import type { PropType } from 'vue';

defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | (string & {}) | null | undefined>,
    default: undefined,
    required: false,
  },
});
</script>

<template>
  <span>
    <NuxtLink
      :href="href"
      :target="target"
    >
      <slot />
    </NuxtLink>
    &#10548;
  </span>
</template>

<style scoped lang="scss">
a {
  color: #ffa500;
  text-decoration: none;
}
</style>
