<template>
  <div class="recent-posts">
    <h1>Recent Posts</h1>
    <TheCategories class="recent-posts--mb" />
    <div class="recent-posts__posts">
      <RecentPost />
      <RecentPost />
    </div>
  </div>
</template>

<script>
import TheCategories from '@/components/TheCategories.vue';
import RecentPost from '@/components/RecentPost.vue';

export default {
  components: {
    TheCategories,
    RecentPost,
  },
};
</script>

<style scoped>
.recent-posts {
  max-width: 736px;
  margin: 0 auto;
}

.recent-posts--mb {
  margin-bottom: 39px;
}
</style>
