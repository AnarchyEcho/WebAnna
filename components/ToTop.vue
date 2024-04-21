<script setup lang="ts">
const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};
</script>

<template>
  <button class="toTop" @click="scrollTop()">
    &#9651;
  </button>
</template>

<style lang="scss" scoped>
.toTop {
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 3rem;
  right: 1rem;
  z-index: 10;
  background-color: #ffa500;
  border: none;
  border-radius: 10px;
  color: #303030;
  text-decoration: none;
  font-size: 2rem;
  padding: 0 0.2rem;
  cursor: pointer;
}
</style>
