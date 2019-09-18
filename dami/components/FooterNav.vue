<template>
  <div>
    <footer class="footer">
      <div class="content has-text-centered">
        <span class="dropdown-divider"></span>
        <p class="dami-cpr">
          All materials &copy; Damilola Omifare {{ new Date().getFullYear() }}
        </p>
      </div>
      <div class="social-connections">
        <!-- the links are going to be here. -->
      </div>
    </footer>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer {
  background-color: #f5f5f7;
  color: #1d1d1f;
}

.dami-cpr {
  font-weight: 300;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
</style>
