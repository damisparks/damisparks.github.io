<template>
  <v-app dark>
    <v-navigation-drawer v-model="drawer" :mini-variant="miniVariant" :clipped="clipped" fixed app>
      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
      <v-toolbar-items>
        <v-btn to="/" text>Home</v-btn>
        <v-btn :to="{name : 'about'}" text>About Me</v-btn>
        <v-btn :to="{name : 'collection'}" text>My Collection</v-btn>
      </v-toolbar-items>
      <v-spacer />
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2019 Made with 💖 by Dami Omifare</span>
    </v-footer>
  </v-app>
</template>

<script>
import { EventBus } from '../event-bus'
export default {
  props: {},
  data: () => ({
    clipped: false,
    drawer: false,
    fixed: false,
    items: [
      {
        icon: 'mdi-apps',
        title: 'Welcome',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'About Me',
        to: '/about'
      },
      {
        icon: 'mdi-file-document-box-multiple',
        title: 'My Collections',
        to: '/collection'
      }
    ],
    miniVariant: false,
    right: true,
    title: 'Dami Omifare'
  })
}
</script>
