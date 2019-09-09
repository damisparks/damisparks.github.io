<template>
  <div>
    <v-layout column justify-center align-center>
      <v-flex xs12 sm8 md6>
        <v-card-title class="headline">About Me</v-card-title>
        <v-card class="mx-auto" max-width="434" tile>
          <v-img
            height="100%"
            src="https://images.unsplash.com/photo-1499346146792-b008e446261f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
          >
            <v-row align="end" class="fill-height">
              <v-col align-self="start" class="pa-0 mx-8 mt-2" cols="12">
                <v-avatar class="profile" color="grey" size="164">
                  <v-img src="https://avatars1.githubusercontent.com/u/28821368?s=460&v=4" my-photo></v-img>
                </v-avatar>
              </v-col>
              <v-col class="py-0 ml-4">
                <v-list-item color="rgba(0, 0, 0, .4)" dark>
                  <v-list-item-content>
                    <v-list-item-title class="title">{{ me.name }}</v-list-item-title>
                    <v-list-item-subtitle>{{ me.currentRole }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-col>
            </v-row>
          </v-img>
          <v-row>
            <v-col>
              <p class="px-2 text-center">
                <em>{{ me.headline }}</em>
              </p>
            </v-col>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>


<script>
export default {
  data: () => ({
    me: {
      currentRole: 'Software Developer',
      name: 'Damilola Omifare',
      headline: `Self taught programmer and developer with
                passion for building data driven application to solve business complex challenges.`,
      role: [
        {
          current: 'Software Developer'
        }
      ]
    }
  })
}
</script>

<style lang="scss" scoped>
.title {
  margin-left: initial;
}
</style>