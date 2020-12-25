<template>
  <button class="button"><slot /></button>
</template>

<style scoped>
.button {
  padding: 6px 24px;
  color: #fff;
  background-color: var(--text-primary);
  border: none;
  font-family: inherit;
  font-size: inherit;
  line-height: inherit;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.15s linear;
}

.button:hover {
  background-color: var(--dark-grey);
}
</style>
