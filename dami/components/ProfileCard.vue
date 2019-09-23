<template>
  <div>
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
        <em>{{ myInformation }}</em>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    myInformation: `Damilola is a self-taught developer who is ....`
  })
}
</script>

<style scoped>
p {
  margin: 0.6rem 1rem 0 1rem;
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

.card-image {
  float: left;
}

@media screen and (max-width: 1200px) {
  .card {
    width: calc(90vw - 8vmin);
  }
}
</style>
