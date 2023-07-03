<template>
  <div class="chat-page">
    <div class="row">
      <div class="col-2">
        <SideNav @linkClicked="changePage" />
      </div>
      <div v-if="page == 'prompt'" class="col-10">
        <ChatArea />
      </div>
      <div v-else-if="page == 'community'" class="col-10">
        <CommunityArea />
      </div>
      <div v-else-if="page == 'feedback'" class="col-10">
        <FeedbackArea />
      </div>
      <div v-else-if="page == 'gallery'" class="col-10">
        <GalleryArea />
      </div>
    </div>
  </div>
</template>

<script>
import ChatArea from '@/components/ChatPage/ChatArea.vue';
import SideNav from '@/components/ChatPage/SideNav.vue';
import GalleryArea from '@/components/ChatPage/GalleryArea.vue';
import CommunityArea from '@/components/ChatPage/CommunityArea.vue';
import FeedbackArea from '@/components/ChatPage/FeedbackArea.vue';
export default {
  name: 'ChatPage',
  data() {
    return {
      page: 'prompt',
    };
  },
  methods: {
    changePage(page) {
      console.log(page);
      this.page = page;
    },
  },
  components: {
    SideNav,
    ChatArea,
    GalleryArea,
    CommunityArea,
    FeedbackArea,
  },
};
</script>

<style scoped>
.chat-page {
  overflow: hidden;
}
</style>
