<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span class="font-weight-bold">Tristin</span>
        <span>Hewett</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">Latest Release</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <resume/>
    </v-content>
  </v-app>
</template>

<script>
import Resume from './components/resume'

export default {
  name: 'App',
  components: {
    Resume
  },
  data () {
    return {
      //
    }
  }
}
</script>
