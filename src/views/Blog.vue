<template>
  <div>
    <BannerPage/>
    <HeadingTitle title="STAY INFORMED"/>
    <div class="grid-container">
      <div class="contain">
        <BlogContent/>
      </div>
      <div class="sidebar">
        <FooterSideBar/>
      </div>
    </div>
  </div>
</template>

<script>
import BannerPage from '@/components/BannerPage.vue';
import HeadingTitle from '@/components/HeadingTitle.vue';
import BlogContent from '@/components/BlogContent.vue';
import FooterSideBar from '@/components/FooterSideBar.vue';

export default {
  name: 'blog',
  components: {
    BannerPage,
    HeadingTitle,
    BlogContent,
    FooterSideBar,
  },
};
</script>

<style lang="scss" scoped>
        @media (min-width: 768px) {
          .grid-container {
            display: grid;
            grid-template-columns: 4fr 1fr;
            grid-gap: 10px;
          }

          .contain {
            grid-column-start: 1;
            grid-column-end: 2;
          }

          .sidebar {
            grid-column-start: 2;
            grid-column-end: 3;
          }
        }
</style>
