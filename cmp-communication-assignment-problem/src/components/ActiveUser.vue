<template>
  <section>
    <h2>{{ userName }}</h2>
    <h3>{{ userAge }} Years</h3>
  </section>
</template>

<script>
export default {
  props: {
    userName: {
      type: String,
      required: true,
    },
    userAge: {
      type: Number,
      required: true,
    },
  },
};
</script>
