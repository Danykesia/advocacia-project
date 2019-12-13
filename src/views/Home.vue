<template>
  <div>
    <Slide/>
    <Welcome/>
    <Services/>
    <SocialMedia/>
    <News/>
    <!-- <div class="location">
      <Location/>
    </div> -->
  </div>
</template>

<script>
import Slide from '@/components/Slide.vue';
import Welcome from '@/components/Welcome.vue';
import Services from '@/components/Services.vue';
import SocialMedia from '@/components/SocialMedia.vue';
import News from '@/components/News.vue';
// import Location from '@/components/Location.vue';

export default {
  name: 'home',
  components: {
    Slide,
    Welcome,
    Services,
    SocialMedia,
    News,
    // Location,
  },
};
</script>
