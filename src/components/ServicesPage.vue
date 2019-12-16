<template>
  <div>
    <HeadingTitle title="SERVICES"/>

    <div class="services_container">
      <!-- <div class="container"> -->
      <a href="#family"><ServicesCard icon="balance-scale" title="Service one"/></a>
      <a href="#labor"><ServicesCard icon="calculator" title="Service two"/></a>
      <a href="#consumer"><ServicesCard icon="address-card" title="Service three"/></a>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
import HeadingTitle from '@/components/HeadingTitle.vue';
import ServicesCard from '@/components/ServicesCard.vue';

export default {
  components: {
    HeadingTitle,
    ServicesCard,
  },
};
</script>

<style lang="scss" scoped>
.services_container {
  display: none;
}
        @media (min-width: 1024px) {
          .services_container {
            background: rgb(247, 245, 245);
            height: 40vh;
            display: flex;
            flex-wrap: nowrap;
            flex-direction: row;
            align-items: center;
            justify-content: space-evenly;
          }
        }
</style>
