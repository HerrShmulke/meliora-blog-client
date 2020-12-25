<template>
  <div class="categories">
    <svg class="categories__arrow" width="6" height="11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        class="categories__arrow-path--disable"
        d="M5.92 9.55a.26.26 0 010 .38l-.56.56a.25.25 0 01-.37 0L.12 5.63A.4.4 0 010 5.35v-.13c0-.1.04-.21.12-.28L4.99.08a.25.25 0 01.37 0l.56.56a.26.26 0 010 .38L1.64 5.28l4.28 4.27z"
        fill="#474747"
      />
    </svg>

    <div class="categories__list">
      <button class="categories__item categories__item--active">All</button>
      <button class="categories__item">Design Theory</button>
      <button class="categories__item">Tech</button>
    </div>

    <svg
      class="categories__arrow categories__arrow--flip"
      width="6"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        class="categories__arrow-path--disable"
        d="M5.92 9.55a.26.26 0 010 .38l-.56.56a.25.25 0 01-.37 0L.12 5.63A.4.4 0 010 5.35v-.13c0-.1.04-.21.12-.28L4.99.08a.25.25 0 01.37 0l.56.56a.26.26 0 010 .38L1.64 5.28l4.28 4.27z"
        fill="#474747"
      />
    </svg>
  </div>
</template>

<style scoped>
.categories {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
}

.categories__list {
  display: flex;
  flex-direction: row;
  column-gap: 48px;
  margin: 0 18px;
  flex-grow: 1;
  padding-bottom: 8px;
  border-bottom: 1px solid var(--grey);
  overflow-x: hidden;
}

.categories__item {
  background: none;
  border: none;
  font-family: inherit;
  font-size: 16px;
  line-height: 32px;
  color: var(--dark-grey);
  cursor: pointer;
  min-width: max-content;
}

.categories__item--active {
  color: var(--text-primary);
  position: relative;
}

.categories__item--active::before {
  content: '';
  position: absolute;
  left: 0;
  bottom: -8px;

  height: 2px;
  width: 100%;
  background-color: var(--dark-grey);
}

.categories__arrow--flip {
  transform: scaleX(-1);
}

.categories__arrow-path--disable {
  fill: var(--grey);
}
</style>
