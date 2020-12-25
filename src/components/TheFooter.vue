<template>
  <footer class="footer">
    <VContainer class="footer__container">
      <div class="footer__copyright">
        Copyright
        <img src="@/assets/Copyright.svg" alt="Копирайт" />
        2020 Meliora, Inc
      </div>
      <div class="footer__social">
        <img src="@/assets/facebook.svg" alt="Facebook" />
        <img src="@/assets/github.svg" alt="Github" />
        <img src="@/assets/twitter.svg" alt="Twitter" />
        <img src="@/assets/linkedin.svg" alt="LinkedIn" />
      </div>
      <div class="footer__up">
        <img src="@/assets/go-to-top.png" alt="Подняться на верх" />
      </div>
    </VContainer>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--light-grey);
}

.footer__container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 94px;
  position: relative;
}

.footer__copyright {
  font-size: 12px;
  line-height: 14px;
  color: var(--text-primary);
}

.footer__social {
  display: flex;
  flex-direction: row;
  column-gap: 26px;
}

.footer__up {
  position: absolute;
  left: calc(50% - 13.5px);
  top: 0;
  cursor: pointer;
}
</style>
