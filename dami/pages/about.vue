<template>
  <div>
    <div class="mb4">
      <h1 class="has-text-centered">About Me</h1>
      <span class="dropdown-divider mxn4"></span>
    </div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-centered">{{ ican }}</h1>
          <h2 class="subtitle has-text-centered">
            When it seems impossible, I make it happen
          </h2>
        </div>
      </div>
    </section>
    <section class="hero is-medium is-white">
      <div class="hero-body">
        <div class="container about-me-holder">
          <profile-card />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'
export default {
  components: {
    ProfileCard
  },
  data: () => ({
    ican: `If you tell me i can't do it, i will embarass you`,
    myInformation: `Damilola is a self-taught developer who is ....`
  })
}
</script>

<style scoped>
* {
  border: border-box;
}

.about-me-holder {
  display: flex;
  justify-content: center;
}
</style>
