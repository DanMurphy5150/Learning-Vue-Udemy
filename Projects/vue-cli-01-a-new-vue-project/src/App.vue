<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '321 434 9073',
          email: 'manuel@localhost.com',
        },
        {
          id: 'binky',
          name: 'Binky Boy',
          phone: '321 436 1792',
          email: 'binky_boy5000@localhost.com',
        },
      ],
    };
  },
};
</script>
