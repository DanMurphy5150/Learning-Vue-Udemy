<template>
  <section>
    <header><h1>My Friends</h1></header>
    <ul>
      <friend-contact
        name="Bobby Knight"
        phone-number="321-434-1792"
        email-address="Master_Bob@localhost.com"
        is-favorite="1"
      ></friend-contact>
      <friend-contact
        name="Bryce Donahue"
        phone-number="654-666-5432"
        email-address="dingusMan3000@localhost.com"
        is-favorite="0"
      ></friend-contact>
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
