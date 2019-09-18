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
        <div class="container">
          <div class="container">
            <div class="card">
              <figure class="card-image">
                <img
                  height="100"
                  width="100"
                  me
                  src="https://avatars1.githubusercontent.com/u/28821368?s=460&v=4"
                  alt="damilola dmifare"
                />
              </figure>
              <p>
                <span class="title is-4">Damilola Omifare</span>
                <br />
                <em>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris.
                  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris.
                  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris.
                  Phasellus nec iaculis mauris. Phasellus nec iaculis mauris.
                </em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data: () => ({
    ican: `If you tell me i can't do it, i will embarass you`
  })
}
</script>

<style scoped>
* {
  border: border-box;
}

.card {
  padding-top: 0.6rem;
  min-height: 200px;
  max-width: 42rem;
  letter-spacing: 1px;
}

[me] {
  border-radius: 50% 50%;
  -webkit-box-shadow: 0 0 0 1px #000;
  box-shadow: 0 0 0 1px #000;
  margin: 10px 30px 30px 10px;
  opacity: 0.7;
}

p {
  margin-top: 0.6rem;
}
.card-image {
  float: left;
}

@media screen and (max-width: 1200px) {
  .card {
    width: calc(90vw - 8vmin);
  }
}
</style>
