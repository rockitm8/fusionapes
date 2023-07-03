import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage';
import NewNftPage from '../views/NewNftPage';
import ChatPage from '../views/ChatPage';
import LoginPage from '@/views/LoginPage.vue';
import SignupPage from '@/views/SignupPage.vue';

const routes = [
  {
    path: '/',
    name: 'home_page',
    component: HomePage,
  },
  {
    path: '/new-nfts',
    name: 'new_nft_page',
    component: NewNftPage,
  },
  {
    path: '/baked',
    name: 'chat_page',
    component: ChatPage,
  },
  {
    path: '/login',
    name: 'login_page',
    component: LoginPage,
  },
  {
    path: '/signup',
    name: 'signup_page',
    component: SignupPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
