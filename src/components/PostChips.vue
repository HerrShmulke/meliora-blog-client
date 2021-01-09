<template>
  <div class="recent-post__chips">
    <div v-for="chip in displayChips" :key="chip" class="recent-post__chip">{{ chip }}</div>
    <button v-if="chips.length > 3 && !isOpened" class="recent-post__chip-more" @click="isOpened = true">
      +{{ remainingChips }}
    </button>
  </div>
</template>

<script>
export default {
  data: () => ({
    isOpened: false,
  }),

  props: {
    chips: Array,
  },

  computed: {
    firstChips() {
      return this.chips.slice(0, 3);
    },

    remainingChips() {
      return this.chips.length - 3;
    },

    displayChips() {
      return this.isOpened ? this.chips : this.firstChips;
    },
  },
};
</script>

<style scoped>
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
