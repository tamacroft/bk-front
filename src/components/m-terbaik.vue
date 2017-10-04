<template>
  <div>
    <v-card>
      <v-toolbar class="white--text blue" dark>
        <v-toolbar-title>List 5 Murid Terpuji Teratas</v-toolbar-title>
      </v-toolbar>
      <v-list>
        <v-list-tile avatar v-for="item in items" v-bind:key="item.title">
          <v-list-tile-action>
            <v-icon v-if="item.icon" class="pink--text">star</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar"/>
          </v-list-tile-avatar>
        </v-list-tile>
      </v-list>
    </v-card>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        items: [
          { icon: true, title: 'Jason Oner', avatar: '' },
          { title: 'Travis Howard', avatar: '' },
          { title: 'Ali Connors', avatar: '' },
          { title: 'Cindy Baker', avatar: '' },
          { title: 'Wiratama Adi Wibawa', avatar: '' }
        ]
      }
    }
  }
</script>
