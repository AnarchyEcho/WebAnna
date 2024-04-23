<script setup lang="ts">
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
  <NuxtLink
    :href="href"
    :target="!href.startsWith('/') ? '_blank' : target"
  >
    <slot />
    <span v-if="!href.startsWith('/')">
      &#10548;
    </span>
  </NuxtLink>
</template>

<style scoped lang="scss">
a {
  color: #ffa500;
  text-decoration: none;
}
</style>
