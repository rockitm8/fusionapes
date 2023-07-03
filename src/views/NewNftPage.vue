<template>
  <div>
    <MainNav />
    <NewNfts />
    <!-- <MainFooter /> -->
  </div>
</template>

<script>
import MainNav from '@/components/HomePage/MainNav.vue';
import NewNfts from '@/components/HomePage/NewNfts.vue';
import MainFooter from '@/components/HomePage/MainFooter.vue';
export default {
  name: 'NewNftPage',
  components: {
    MainNav,
    NewNfts,
    MainFooter,
  },
};
</script>

<style scoped></style>
