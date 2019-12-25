<template>
  <div>
    <BannerPage/>
    <HeadingTitle title="CONTACT US"/>
    <div class="grid-container">
      <div class="form">
        <Form/>
      </div>
      <div class="map">
        <Map/>
      </div>
    </div>
  </div>
</template>

<script>
import BannerPage from '@/components/BannerPage.vue';
import HeadingTitle from '@/components/HeadingTitle.vue';
import Form from '@/components/Form.vue';
import Map from '@/components/Map.vue';

export default {
  name: 'contact',
  components: {
    BannerPage,
    HeadingTitle,
    Form,
    Map,
  },
};
</script>

<style lang="scss" scoped>
        @media (min-width: 768px) {
          .grid-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            background: black;
          }

          .form {
            grid-column: 1/2;
          }

          .map {
            grid-column: 2/3;
          }
        }
</style>
