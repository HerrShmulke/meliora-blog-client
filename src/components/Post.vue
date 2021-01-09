<template>
  <article class="recent-post">
    <time class="recent-post__time">{{ time }}</time>
    <div class="recent-post__content">
      <h2 class="recent-post__title">{{ title }}</h2>
      <PostChips :chips="chips" />
    </div>
  </article>
</template>

<script>
import PostChips from '@/components/PostChips.vue';

export default {
  props: {
    time: String,
    title: String,
    chips: Array,
  },

  components: {
    PostChips,
  },
};
</script>

<style scoped>
.recent-post {
  padding-bottom: 48px;
  border-bottom: 1px solid var(--grey);
  margin-bottom: 48px;
}

.recent-post:last-child {
  border-bottom: none;
}

.recent-post__time {
  font-family: inherit;
  font-size: 12px;
  line-height: 14px;
  color: var(--dark-grey);
  margin-bottom: 24px;
}

.recent-post__content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 24px;
}

.recent-post__title {
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  max-width: 544px;
  padding: 0;
  margin: 0;
}
</style>
