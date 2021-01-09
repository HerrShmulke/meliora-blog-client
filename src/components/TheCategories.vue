<template>
  <div class="categories">
    <svg
      class="categories__arrow"
      width="6"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="scrollLeft"
    >
      <path
        :class="{ 'categories__arrow-path--disable': !canScrollLeft }"
        d="M5.92 9.55a.26.26 0 010 .38l-.56.56a.25.25 0 01-.37 0L.12 5.63A.4.4 0 010 5.35v-.13c0-.1.04-.21.12-.28L4.99.08a.25.25 0 01.37 0l.56.56a.26.26 0 010 .38L1.64 5.28l4.28 4.27z"
        fill="#474747"
      />
    </svg>

    <div class="categories__list" ref="categories">
      <button
        v-for="category in categories"
        :key="category.id"
        class="categories__item"
        :class="{ 'categories__item--active': currentCategory === category.name }"
        @click="currentCategory = category.name"
      >
        {{ category.name }}
      </button>
    </div>

    <svg
      class="categories__arrow categories__arrow--flip"
      width="6"
      height="11"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      @click="scrollRight"
    >
      <path
        :class="{ 'categories__arrow-path--disable': !canScrollRight }"
        d="M5.92 9.55a.26.26 0 010 .38l-.56.56a.25.25 0 01-.37 0L.12 5.63A.4.4 0 010 5.35v-.13c0-.1.04-.21.12-.28L4.99.08a.25.25 0 01.37 0l.56.56a.26.26 0 010 .38L1.64 5.28l4.28 4.27z"
        fill="#474747"
      />
    </svg>
  </div>
</template>

<script>
export default {
  data: () => ({
    canScrollRight: false,
    canScrollLeft: false,

    currentCategory: 'All',

    categories: [{ id: 0, name: 'All' }],
  }),

  mounted() {
    /** @type {HTMLElement} */
    const categories = this.$refs.categories;

    if (categories.scrollWidth > categories.offsetWidth) {
      this.canScrollRight = true;
    }

    this.axios.get('/api/categories').then((res) => {
      this.categories.push(...res.data);
    });
  },

  methods: {
    scrollRight() {
      /** @type {HTMLElement} */
      const categories = this.$refs.categories;
      categories.scrollTo(categories.scrollLeft + 100, 0);

      this.checkArrows();
    },

    scrollLeft() {
      /** @type {HTMLElement} */
      const categories = this.$refs.categories;
      categories.scrollTo(categories.scrollLeft - 100, 0);

      this.checkArrows();
    },

    checkArrows() {
      /** @type {HTMLElement} */
      const categories = this.$refs.categories;

      if (categories.scrollWidth - categories.offsetWidth === categories.scrollLeft) {
        this.canScrollRight = false;
      } else {
        this.canScrollRight = true;
      }

      if (categories.scrollLeft === 0) {
        this.canScrollLeft = false;
      } else {
        this.canScrollLeft = true;
      }
    },
  },
};
</script>

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

.categories__arrow {
  cursor: pointer;
}

.categories__arrow--flip {
  transform: scaleX(-1);
}

.categories__arrow-path--disable {
  fill: var(--grey);
}
</style>
