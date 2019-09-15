<template>
  <div>
    <header class="is-white is-bold top-navigation">
      <nav class="navbar is-fixed-top top-navigation">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link
              class="navbar-item has-text-weight-bold has-text-black"
              to="/"
              >Damilola Omifare</nuxt-link
            >
            <div
              class="navbar-burger"
              :class="{ 'is-active': showNav }"
              @click="showNav = !showNav"
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div
            class="navbar-menu navbar-content"
            :class="{ 'is-active': showNav }"
          >
            <div class="navbar-end">
              <nuxt-link
                v-for="(item, i) in items"
                :key="i"
                class="navbar-item"
                :to="item.to"
                >{{ item.title }}</nuxt-link
              >
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script>
export default {
  data: () => ({
    showNav: false,
    items: [
      {
        title: 'About Me',
        to: '/about'
      },
      {
        title: 'My Collection',
        to: '/mycollection'
      }
    ]
  })
}
</script>

<style scoped>
.top-navigation {
  background: #fff;
  background-color: #fff;
  color: #1f2836;
  line-height: initial;
  min-height: 54px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  z-index: 1020;
  margin-bottom: 1.75rem;
}

.navbar-item {
  color: #4a4a4a !important;
}
</style>
