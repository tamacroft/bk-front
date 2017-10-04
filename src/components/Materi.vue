<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12 sm12 md8 row wrap>
        <konten />
      </v-flex>

      <v-flex xs12 sm12 md4 row wrap>
        <terbaik />
        <br>
        <ternakal />
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
  import konten from './content.vue'
  import terbaik from './m-terbaik.vue'
  import ternakal from './m-terburuk.vue'

  export default {
    components: {konten, terbaik, ternakal},
    data () {
      return {
      }
    }
  }
</script>
