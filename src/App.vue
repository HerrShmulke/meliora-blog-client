<template>
  <VContainer class="app__main">
    <TheHeader />
    <main>
      <router-view />
    </main>
  </VContainer>
  <TheFooter class="app__footer" />
</template>

<script>
import TheHeader from '@/components/TheHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter,
  },
};
</script>

<style scoped>
.app__main {
  flex: 1 auto;
}

.app__footer {
  flex: 0 auto;
}
</style>

<style>
:root {
  --light-grey: #f4f4f4;
  --primary: #ffba9d;
  --text-primary: #474747;
  --dark-grey: #777777;
  --grey: #dfdfdf;
}

body {
  font-family: 'Roboto Mono', monospace;
  font-size: 16px;
  line-height: 32px;
  color: var(--text-primary);
}

h1 {
  font-family: inherit;
  font-size: 24px;
  line-height: 36px;
  font-weight: normal;
  color: var(--text-primary);
  padding: 0;
  margin: 0;
}

h2 {
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: var(--text-primary);
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.js-focus-visible :focus:not(.focus-visible) {
  outline: none;
}
</style>
