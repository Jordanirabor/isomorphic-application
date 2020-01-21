<!-- ./layouts/default.vue -->

<template>
  <div>
    <!-- begin navigation -->
    <nav class="navbar has-shadow" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-start">
          <nuxt-link to="/" class="navbar-item is-half">
            <img
              src="https://www.graphicsprings.com/filestorage/stencils/f6e5c06cad423f0f7e6cae51c7a41f37.svg"
              alt="Logo: an image of a doggy biting a juicy bone!"
              width="112"
              height="28"
            />
          </nuxt-link>

          <nuxt-link active-class="is-active" to="/" class="navbar-item is-tab" exact>Home</nuxt-link>
          <nuxt-link
            active-class="is-active"
            to="/pet/new"
            class="navbar-item is-tab"
            exact
          >Post your own pet 😎</nuxt-link>
        </div>
      </div>
    </nav>
    <!-- end navigation -->

    <!-- displays the page component -->
    <nuxt />

    <!-- begin footer -->
    <footer class="footer home-footer has-background-black">
      <div class="content has-text-centered">
        <p class="has-text-white">
          <strong class="has-text-white">Pet adoption website</strong> by
          <a href="https://github.com/Jordanirabor">Jordan</a>
        </p>
      </div>
    </footer>
    <!-- end footer -->
  </div>
</template>

<style>
.main-content {
  margin: 20px 0;
}
body {
  font-family: "Open Sans Condensed", sans-serif;
}

p {
  font-size: 22px;
}

.home-footer{
  margin-top: 20vh;
}
</style>