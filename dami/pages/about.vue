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
          <!-- Card stays here :  -->
          <div class="container">
            <div class="card">
              <div class="card-content">
                <div class="media">
                  <div class="media-left">
                    <figure class="image">
                      <img
                        src="https://bulma.io/images/placeholders/96x96.png"
                        alt="Damilola Omifare"
                        me
                      />
                    </figure>
                  </div>
                  <div class="media-content ml4">
                    <div class="content">
                      <p class="title is-4">Damilola Omifare</p>
                      <span class="left-align">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. Phasellus nec iaculis
                        mauris. Phasellus nec iaculis mauris. Phasellus nec
                        iaculis mauris. Phasellus nec iaculis mauris. Phasellus
                        nec iaculis mauris. Phasellus nec iaculis mauris.
                        Phasellus nec iaculis mauris.
                      </span>
                    </div>
                  </div>
                </div>

                <!-- <div class="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus nec iaculis mauris.
                  <a>@bulmaio</a>.
                  <a href="#">#css</a>
                  <a href="#">#responsive</a>
                  <br />
                  <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                </div>-->
              </div>
            </div>
          </div>

          <!-- Card stays here :  -->
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
/* * {
  border: 1px solid blue !important;
} */

.card {
  margin: auto;
  max-width: 42rem;
}

.image {
  height: 100px;
  width: 100px;
}

[me] {
  border-radius: 50% 50%;
  -webkit-box-shadow: 0 0 0 1px #000;
  box-shadow: 0 0 0 1px #000;
  float: left;
  margin: 10px 30px 30px 10px;
  opacity: 0.7;
}
</style>
