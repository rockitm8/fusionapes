import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

export default createStore({
  state: {
    backend_url: 'https://frmcld.online',
    user_token: '',
  },
  getters: {
    getAccessToken: (state) => {
      return state.accessToken;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      paths: ['user_token'],
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) =>
          Cookies.set(key, value, { expires: 3, secure: true }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
});
