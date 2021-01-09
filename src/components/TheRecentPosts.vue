<template>
  <div class="recent-posts">
    <h1>Recent Posts</h1>
    <TheCategories class="recent-posts--mb" @changeCategory="changeCategory" />
    <div class="recent-posts__posts">
      <Post
        v-for="article in filteredArticles"
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
    currentCategory: 'All',
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

  computed: {
    filteredArticles() {
      if (this.currentCategory === 'All') return this.articles;

      return this.articles.filter((article) => {
        for (let i = 0; i < article.Categories.length; ++i)
          if (article.Categories[i].name === this.currentCategory) return true;

        return false;
      });
    },
  },

  methods: {
    changeCategory(category) {
      this.currentCategory = category;
    },
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
