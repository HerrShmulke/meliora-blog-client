<template>
  <article class="recent-post">
    <time class="recent-post__time">Декабрь 18.2020</time>
    <div class="recent-post__content">
      <h2 class="recent-post__title">Bad Design vs. Good Design: 5 Examples We can Learn From</h2>
      <div class="recent-post__chips">
        <div class="recent-post__chip">HCI</div>
        <div class="recent-post__chip">Usability</div>
        <div class="recent-post__chip">Design Thinking</div>
        <button class="recent-post__chip-more">+1</button>
      </div>
    </div>
  </article>
</template>

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

.recent-post__chips {
  display: flex;
  flex-direction: flex-start;
  flex-wrap: wrap;
  gap: 4px;
  max-width: 183px;
}

.recent-post__chip {
  padding: 8px 16px;
  background-color: var(--light-grey);
  border-radius: 4px;
  display: inline-block;
  max-width: 148px;
  font-size: 12px;
  line-height: 14px;
  align-self: flex-start;
}

.recent-post__chip::before {
  content: '#';
}

.recent-post__chip-more {
  padding: 8px;
  background-color: var(--grey);
  color: var(--text-primary);
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}
</style>
