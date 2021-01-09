<template>
  <div class="recent-posts">
    <h1>Recent Posts</h1>
    <TheCategories class="recent-posts--mb" />
    <div class="recent-posts__posts">
      <Post
        v-for="article in articles"
        :key="article.id"
        :time="article.created_at"
        :title="article.title"
        :chips="article.tags"
      />
    </div>
  </div>
</template>

<script>
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import TheCategories from '@/components/TheCategories.vue';
import Post from '@/components/Post.vue';

export default {
  data: () => ({
    articles: [],
  }),

  mounted() {
    this.axios.get('/api/articles').then((res) => {
      this.articles = res.data.map((article) => {
        article.created_at = format(new Date(article.created_at), 'LLLL dd.Y', { locale: ru });
        article.created_at = article.created_at.charAt(0).toUpperCase() + article.created_at.slice(1);

        return article;
      });
    });
  },

  components: {
    TheCategories,
    Post,
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
