const app = Vue.createApp({
  data() {
    return {
      name: 'Daniel Murphy',
      age: 32,
      image:
        'https://cdn.pixabay.com/photo/2016/11/23/00/39/chicken-1851495_960_720.jpg',
    };
  },

  methods: {
    randomNumber() {
      return Math.random().toFixed(2);
    },
  },
});

app.mount('#assignment');
