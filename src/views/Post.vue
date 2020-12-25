<template>
  <div class="post">
    <div class="post__category">
      User interface
    </div>

    <h1 class="post__title">Bad Design vs. Good Design: 5 Examples We can Learn From</h1>

    <div class="post__meta">
      <time class="post__date">October 24.2020</time>
      <span class="post__author"></span>
    </div>

    <div class="post__content">
      <img src="@/assets/dog.jpg" alt="Bad Design vs. Good Design: 5 Examples We can Learn From" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In mollis sagittis sem ac porta. Sed commodo ligula
        vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin elit nulla, viverra
        id suscipit quis, tristique a dolor. Sed dapibus, orci ac luctus tincidunt, massa erat porttitor odio, non
        imperdiet dui risus et elit.
      </p>
      <h2>Information overload</h2>
      <blockquote>
        <p>
          Sed commodo ligula vitae mollis tristique. Maecenas egestas semper mauris. Duis tempus blandit ultrices. Proin
          elit nulla, viverra id suscipit quis, tristique a dolor.
        </p>
        <p>
          ‘Designing For Sustainability, Tim Frick, 2014'
        </p>
      </blockquote>
      <ul>
        <li>
          Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem ultricies aliquam eu eu nisl.
          Suspendisse.
        </li>
        <li>
          Maecenas sit amet ligula auctor neque aliquam placerat et ac neque. Proin risus eros, fringilla eu suscipit
          dignissim, dignissim.
        </li>
      </ul>
    </div>

    <div class="post__tags">
      <div class="post__chip">Design Thinking</div>
      <div class="post__chip">Usability</div>
    </div>

    <div class="post__add-comment">
      <label class="post__textarea-container">
        <span class="post__label">Message</span>
        <textarea class="post__textarea" placeholder="Hi there"></textarea>
      </label>
      <VButton>Post</VButton>
    </div>

    <div class="post__comments-container">
      <h2 class="h2 post__comments-header">Comments</h2>
      <div class="post__comments">
        <PostComment />
        <PostComment />
      </div>
    </div>
  </div>
</template>

<script>
import PostComment from '@/components/PostComment.vue';

export default {
  components: {
    PostComment,
  },
};
</script>

<style scoped>
.post {
  width: 736px;
  margin: 0 auto;
}

.post__title {
  margin: 24px 0;
}

.post__tags {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  padding-bottom: 27px;
  border-bottom: 1px solid var(--grey);
  margin-bottom: 48px;
}

.post__chip {
  padding: 8px 16px;
  background-color: var(--light-grey);
  border-radius: 4px;
  display: inline-block;
  max-width: 148px;
  font-size: 12px;
  line-height: 14px;
  align-self: flex-start;
}

.post__textarea-container {
  display: flex;
  flex-direction: column;
  margin-bottom: 24px;
}

.post__label {
  margin-bottom: 8px;
}

.post__textarea {
  width: calc(100% - 28px);
  min-height: 100px;
  resize: vertical;
  background-color: var(--light-grey);
  border: none;
  border-radius: 4px;
  padding: 14px;
}

.post__comments-header {
  margin: 64px 0 48px 0;
}
</style>

<style>
.post__content img {
  width: 100%;
  border-radius: 8px;
  margin: 48px 0;
}

.post__content p {
  margin: 32px 0;
}

.post__content h2 {
  font-size: 19px;
  line-height: 28px;
  color: var(--text-primary);
  font-weight: normal;
  margin: 48px 0 0px 0;
}

.post__content blockquote {
  margin: 32px 0;
  padding-left: 22px;
  border-left: 1px solid var(--grey);
}

.post__content ul {
  list-style: none;
  padding: 0 0 0 26px;
  margin: 32px 0;
}

.post__content ul li {
  position: relative;
}

.post__content ul li::before {
  content: '';
  left: -26px;
  top: 13px;
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: var(--text-primary);
  border-radius: 50%;
}

.post__comments {
  display: grid;
  row-gap: 32px;
  margin-bottom: 100px;
}
</style>
