<template>
  <v-container>
    <div class="text-xs-center" v-for="btn in btns">
      <v-btn outline :class="btn.warna" :to="btn.link">{{btn.name}}</v-btn>
    </div>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        btns: [
          {name: 'Guru', link: '/login-guru', warna: 'indigo--text'},
          {name: 'Murid', link: '/login-murid', warna: 'teal--text'},
          {name: 'Ortu', link: '/login-ortu', warna: 'red--text'}
        ]
      }
    }
  }
</script>
