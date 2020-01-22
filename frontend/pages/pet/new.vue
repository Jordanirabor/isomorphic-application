<!-- pages/pet/new.vue -->

  <template>
  <div class="container">
    <br />
    <h1 class="title has-text-centered">{{pet.name}}</h1>
    <div class="columns is-multiline">
      <div class="column is-half">
        <form @submit.prevent="uploadPet">
          <div class="field">
            <label class="label">Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="What is your pet's name?"
                v-model="pet.name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Description</label>
            <div class="control">
              <textarea
                class="textarea"
                v-model="pet.description"
                placeholder="Describe your pet succintly"
              ></textarea>
            </div>
          </div>

          <div class="file">
            <label class="file-label">
              <input class="file-input" @change="onFileChange" type="file" name="resume" />
              <span class="file-cta">
                <span class="file-icon">
                  <i class="fas fa-upload"></i>
                </span>
                <span class="file-label">Upload a pet image…</span>
              </span>
            </label>
          </div>
          <br />

          <div class="field">
            <label class="label">Type of pet</label>
            <div class="control">
              <div class="select">
                <select v-model="pet.type">
                  <option value="Cat">Cat</option>
                  <option value="Dog">Dog</option>
                </select>
              </div>
            </div>
          </div>

          <div class="field is-grouped">
            <div class="control">
              <button class="button is-link">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <div class="column is-half">
        <figure v-if="preview" class="image container is-256x256">
          <img
            style="border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
            :src="preview"
            alt
          />
        </figure>
        <figure v-else class="image container is-256x256">
          <img
            style="border-radius: 10px; box-shadow: 0 1rem 1rem rgba(0,0,0,.7);"
            src="https://via.placeholder.com/150"
          />
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "New Pet"
    };
  },
  data() {
    return {
      pet: {
        name: "",
        image: "",
        description: "",
        type: "Cat"
      },
      preview: ""
    };
  },
  methods: {
    onFileChange(e) {
      let files = e.target.files || e.dataTransfer.files;
      if (!files.length) {
        return;
      }
      this.pet.image = files[0];
      this.createImage(files[0]);
    },

    createImage(file) {
      let reader = new FileReader();
      let vm = this;
      reader.onload = e => {
        vm.preview = e.target.result;
      };
      reader.readAsDataURL(file);
    },

    async uploadPet() {
      let formData = new FormData();

      for (let data in this.pet) {
        formData.append(data, this.pet[data]);
      }

      try {
        let response = await fetch("http://localhost:9000/api/pet/new", {
          method: "post",
          body: formData
        });
        this.$router.push("/");
      } catch (e) {
        console.error(e);
      }
    }
  }
};
</script>