<template>
  <div class="app">
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    // this.$store.state.user_token = localStorage.getItem('token');
  },
};
</script>

<style>
:root {
  --orange: #edb731;
  font-family: sans-serif;
}
</style>
