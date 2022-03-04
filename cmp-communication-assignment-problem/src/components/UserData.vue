<template>
  <section>
    <form @submit.prevent="submitData">
      <label>UserName: </label>
      <input type="text" placeholder="Your Name" v-model="enteredName" />
      <label>Age: </label>
      <input type="text" placeholder="Your Age" v-model="enteredAge" />

      <button>Set User Data</button>
    </form>
  </section>
</template>

<script>
export default {
  emits: ['set-data'],
  data() {
    return {
      enteredName: '',
      enteredAge: '',
    };
  },
  methods: {
    submitData() {
      this.$emit('set-data', this.enteredName, this.enteredAge);
    },
  },
};
</script>
