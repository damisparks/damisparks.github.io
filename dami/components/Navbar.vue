<template>
  <div>
    <header class="is-bold is- top-navigation">
      <nav class="navbar is-fixed-top is-dark top-navigation">
        <div class="container">
          <div class="navbar-brand">
            <nuxt-link class="navbar-item has-text-weight-bold" to="/">
              {{ myname }}
            </nuxt-link>
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
    myname: 'Damilola Omifare',
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
  background-color: #fff;
  background: rgba(45, 45, 45, 0.98);
  line-height: initial;
  min-height: 54px;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.08), 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  z-index: 1020;
  margin-bottom: 1.75rem;
}
</style>
