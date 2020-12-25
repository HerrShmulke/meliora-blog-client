<template>
  <div class="comment">
    <img class="comment__avatar" src="@/assets/avatar.png" alt="Аватар пользователя" />
    <div class="comment__content">
      <div class="comment__meta">
        <span class="comment__author">Jon Davis</span>
        <time class="comment__date">Декабрь 18.2020</time>
      </div>
      <div class="comment__message">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet
        dolore magna.
      </div>
    </div>
  </div>
</template>

<style scoped>
.comment {
  display: grid;
  grid-template-columns: 70px 1fr;
  column-gap: 24px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--grey);
}

.comment:last-child {
  padding-bottom: 0;
  border-bottom: none;
}

.comment__avatar {
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 4px;
}

.comment__meta {
  display: grid;
  grid-template-columns: max-content max-content;
  align-items: center;
  column-gap: 24px;
  margin-bottom: 16px;
}

.comment__author {
  font-weight: normal;
  font-size: 19px;
  line-height: 28px;
  color: var(--text-primary);
  margin: 0;
}

.comment__date {
  color: var(--dark-grey);
}
</style>
