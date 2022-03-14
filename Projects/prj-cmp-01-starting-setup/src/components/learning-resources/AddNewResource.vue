<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="titleInput" />
      </div>
      <div class="form-control">
        <label for="description">Title</label>
        <textarea
          id="description"
          name="description"
          type="text"
          rows="3"
          ref="descriptionInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Title</label>
        <input id="link" name="link" type="url" ref="URLInput" />
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredURL = this.$refs.URLInput.value;

      this.addResource(enteredTitle, enteredDescription, enteredURL);
      console.log('enteredTitle' + enteredTitle);
      console.log('enteredDescription' + enteredDescription);
      console.log('enteredURL' + enteredURL);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
