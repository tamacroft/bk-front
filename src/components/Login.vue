<template>
  <v-layout>
    <v-flex  xs12 sm6 offset-sm3 pt-5>
      <v-card>
        <v-toolbar class="primary">
          <v-toolbar-title>
            <v-icon right dark>lock</v-icon>
            Area Login
          </v-toolbar-title>
        </v-toolbar>
        <v-card-text>

          <v-text-field
            label="NISN"
            class="mt-2"
            v-model="nisn"
            required
          ></v-text-field>
          <v-text-field
            name="password"
            label="Kata Sandi"
            hint="minimal 8 karakter"
            v-model="password"
            min="8"
            :append-icon="e1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (e1 = !e1)"
            :type="e1 ? 'password' : ''"
            counter
            required
          ></v-text-field>
        </v-card-text>
        <br>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn flat class="info--text">Masuk <v-icon right>input</v-icon> </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data () {
      return {
        e1: true,
        nisn: '',
        password: ''
      }
    }
  }
</script>
