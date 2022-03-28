<template>
  <ul>
    <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="activate('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="activate('average')">Average</button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="activate('great')">great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  //   Using the data function doesnt allow the Rating control to be reset to null in the front end -> use computed for this or (how it is set now) use modelValue in the template
  //   data() {
  //     return {
  //       activeOption: this.modelValue,
  //     };
  //   },
  //   computed: {
  //     activeOption() {
  //       return this.modelvalue;
  //     },
  //   },
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
.active {
  border-color: #a00078;
}

.active button {
  color: #a00078;
}

ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: o;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

button {
  font: inherit;
  border: none;
  cursor: pointer;
  background-color: transparent;
}
</style>
