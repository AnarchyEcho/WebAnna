<script lang="ts" setup>
import type { IConfig } from '~/interfaces';

const config = useState<IConfig>('fullConfig');
</script>

<template>
  <div>
    <div v-for="value, key in config" :key="key">
      {{ key }}: {{ value }}
    </div>
  </div>
</template>

<style scoped lang="scss">

</style>
