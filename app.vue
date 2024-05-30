<template>
  <div class="app">
    <NuxtLoadingIndicator />
    <Header class="Header" />
    <NuxtPage class="Body" />
    <Footer class="Footer" />
  </div>
</template>

<style lang="scss">
:root {
  background-color: #222;
  color: #f5f5f5;
  font-family: arial;
}
html, body {
  min-height: 100%;
  margin: 0;
  scroll-behavior: smooth;
}
@media screen and (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
.app {
  min-height: 100vh;
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 0.5rem 0rem;
  grid-template-areas:
    "Header"
    "Body"
    "Footer";
}
::-webkit-scrollbar {
width: 6px;
}
::-webkit-scrollbar-track {
background-color: #12121200;
}
::-webkit-scrollbar-thumb {
background-color: #fe9000;
}
::-webkit-scrollbar-thumb:hover {
background: #fe9000;
}
</style>
