<template>
  <div id="services">
    <BannerPage/>
    <ServicesPage/>
    <ServicesList/>
  </div>
</template>

<script>
// @ is an alias to /src
import BannerPage from '@/components/BannerPage.vue';
import ServicesPage from '@/components/ServicesPage.vue';
import ServicesList from '@/components/ServicesList.vue';

export default {
  name: 'services',
  components: {
    BannerPage,
    ServicesPage,
    ServicesList,
  },
};
</script>
