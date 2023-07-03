<template>
  <div class="home-page">
    <MainNav />
    <MainContent />
    <MainFooter />
  </div>
</template>

<script>
import MainNav from '@/components/HomePage/MainNav.vue';
import MainContent from '@/components/HomePage/MainContent.vue';
import MainFooter from '@/components/HomePage/MainFooter.vue';
export default {
  name: 'HomePage',
  components: {
    MainNav,
    MainContent,
    MainFooter,
  },
};
</script>

<style scoped>
@media only screen and (max-width: 576px) {
  .home-page {
    min-width: 576px;
  }
}
</style>
