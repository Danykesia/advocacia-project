<template>
  <div id="about">
    <BannerPage/>
    <About/>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerPage from '@/components/BannerPage.vue';
import About from '@/components/About.vue';

export default {
  name: 'lawfirm',
  components: {
    BannerPage,
    About,
  },
};
</script>
