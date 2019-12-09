<template>
  <div class="grid-container">
    <div class="slide">
      <Slide/>
    </div>
    <div class="welcome">
      <Welcome/>
    </div>
    <div class="services">
      <Services/>
    </div>
    <div class="social-media">
      <SocialMedia/>
    </div>
    <div class="news">
      <News/>
    </div>
    <div class="location">
      <Location/>
    </div>
  </div>
</template>

<script>
import Slide from '@/components/Slide.vue';
import Welcome from '@/components/Welcome.vue';
import Services from '@/components/Services.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import News from '@/components/News.vue';
import Location from '@/components/Location.vue';

export default {
  name: 'home',
  components: {
    Slide,
    Welcome,
    Services,
    SocialMedia,
    News,
    Location,
  },
};
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows:  100vh 28vh 70vh 15vh 60vh 40vh;
}

.slide {
  background-color: gray;
  height: 100vh;
  grid-row: 1/2;
}

.welcome {
  background-color:#201919;
  height: 28vh;
  grid-row: 2/3;
}

.services {
  background-color: #333131;
  height: 70vh;
  grid-row: 3/4;
}

.social-media {
  background-color: #201919;
  height: 15vh;
  grid-row: 4/5;
}

.news {
  background-color: #333131;
  height: 60vh;
  grid-row: 5/6;
}

.location {
  background-color: gray;
  height: 40vh;
  grid-row: 6/7;
}
</style>
