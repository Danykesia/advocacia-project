<template>
  <div id="app" class="h-100">
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
$gray-light: #333131;
$gray-dark: #201919;
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

.h-100 {
  height: 100%;
}

.container {
  margin: 0 auto;
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}

        /*Extra large devices (large desktops, 1200px  e maiores)*/
        @media (min-width: 1200px) {
            .container {
                max-width: 1920px;
                padding-left: 3rem;
                padding-right: 3rem;
            }
        }
</style>
