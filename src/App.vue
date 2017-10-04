<template>
  <v-app toolbar footer>
    <v-navigation-drawer temporary v-model="sideNav">
      <v-list>
        <v-list-tile
          v-for="i in item"
          :key="i.name"
          :to="i.to" exact>
          <v-list-tile-action>
            <v-icon>{{ i.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ i.name }}</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar dark class="primary" dense prominent fixed>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up" dark>
      </v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer"><v-icon dark left>school</v-icon> BK SMKN5 Semarang</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat
               v-for="i in item"
               :key="i.name"
               :to="i.to" exact><v-icon left>{{ i.icon }}</v-icon>{{i.name}}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
        <router-view></router-view>
    </main>
    <v-footer class="indigo darken-4">
      <v-spacer></v-spacer>
      <span class="white--text">Tamacroft © 2017</span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data () {
      return {
        sideNav: false,
        item: [
          {to: '/login', name: 'Login', icon: 'person'}
        ]
      }
    }
  }
</script>
<style lang="stylus">
  @require './stylus/main'
</style>
