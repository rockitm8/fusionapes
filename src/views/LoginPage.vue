<template>
  <div class="login-page">
    <LoginForm />
  </div>
</template>

<script>
import LoginForm from '@/components/LoginPage/LoginForm.vue';
export default {
  components: { LoginForm },
  name: 'LoginPage',
};
</script>

<style scoped></style>
