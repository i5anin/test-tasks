<template>
  <div id="app">
    <div class="main">...</div>
    <Sidebar />
    <MainPage />
  </div>
</template>

<script>
import favorites from '@/data/favorites';
import Sidebar from '@/components/Sidebar.vue';
import MainPage from '@/components/MainPage';

export default {
  data() {
    console.log(favorites);
    return favorites;
  },
  name: 'App',
  components: {
    MainPage,
    Sidebar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}
body {
  background: var(--light);
}
button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

.арр {
  display: flex;
  main {
    flex: 2rem;
  }
}
</style>
