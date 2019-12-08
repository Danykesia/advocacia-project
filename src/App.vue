<template>
  <div id="app">
    <Navbar/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    Footer,
  },
};
</script>

<style lang="scss">
$color-primary: #ddb16e;
$color-white: #ffffff;
$gray-light: #3f3f3f;
$gray-dark: #282828;
$gray-extra-light: #595959;

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

li, a {
  text-decoration: none;
  list-style: none;
}

#app {
  font-family: 'Source Sans Pro', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.h1-100 {
  height: 100%;
}

.container {
  width: 100%;
  padding-left: 5rem;
  padding-right: 5rem;
}
</style>
