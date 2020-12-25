<template>
  <header class="header">
    <router-link to="/">
      <img src="@/assets/Meliora.svg" alt="Логотип Meliora" />
    </router-link>

    <div class="header__right-block">
      <nav class="nav">
        <router-link class="nav__item" to="/" active-class="nav__item--active">Моя лента</router-link>
        <router-link class="nav__item" to="/contacts" active-class="nav__item--active">Контакты</router-link>
      </nav>

      <div class="header__search">
        <input class="header__search-field" type="text" placeholder="Поиск" />
        <img role="button" tabindex="0" class="header__search-icon" src="@/assets/SearchIcon.svg" alt="Поиск" />
      </div>
    </div>
  </header>
</template>

<style scoped>
.header {
  padding: 96px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.header__right-block {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.header__search {
  display: flex;
  flex-direction: row;
  align-items: center;

  height: 40px;

  background-color: var(--light-grey);
  border-radius: 4px;
}

.header__search-field {
  border: none;
  background: none;
  margin: 12px 14px;
  max-width: 188px;

  font-family: inherit;
  font-size: 12px;
  line-height: 14px;
  color: var(--text-primary);
}

.header__search-icon {
  background-color: var(--primary);
  padding: 12px;
  border-radius: 4px;
  cursor: pointer;
}

.nav {
  display: flex;
  flex-direction: row;
  column-gap: 48px;
  margin-right: 100px;
}

.nav__item {
  font-family: inherit;
  font-size: 16px;
  line-height: 32px;

  text-decoration: none;
  color: var(--dark-grey);
  position: relative;
}

.nav__item--active {
  color: var(--text-primary);
  /* padding-bottom: 8px; */
}

.nav__item--active::before {
  content: '';
  position: absolute;

  bottom: -8px;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--dark-grey);
  cursor: auto;
}
</style>
