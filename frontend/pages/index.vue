<!-- ./pages/index.vue -->
<template>
  <!-- begin header -->
  <div>
    <section class="hero is-medium is-dark is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Adopt a new pet today!</h1>
          <h2
            class="subtitle"
          >You just might need a curious kitten to stare at you as you slap the keyboard tirelessly 😃</h2>
        </div>
      </div>
    </section>
    <!-- end header -->

    <!-- begin main content -->
    <section class="main-content">
      <div class="container">
        <h1 class="title has-text-centered">Available pets</h1>
        <div class="columns is-multiline">
          <div class="column is-half" v-for="pet in pets" :key="pet.id">
            <div class="card">
              <header class="card-header">
                <p class="card-header-title has-text-centered">{{ pet.name }}</p>
              </header>
              <div class="card-content">
                <figure class="image is-3by2">
                  <img :src="`${pet.imageUrl}`" />
                </figure>
              </div>
              <footer class="card-footer">
                <nuxt-link :to="`/pet/${pet.id}`" class="card-footer-item">
                  <button class="button is-dark">Learn more about {{ pet.name }}</button>
                </nuxt-link>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- end main content -->
  </div>
</template>

<script>
export default {
  head: {
    title: "Home"
  },
  async asyncData(context) {
    try {
      return await fetch("http://localhost:9000/api/pets")
        .then(res => res.json())
        .then(data => {
          return { pets: data };
        });
    } catch (e) {
      console.error("SOMETHING WENT WRONG :" + e);
    }
  },
  data() {
    return {
      pets: []
    };
  }
};
</script>

