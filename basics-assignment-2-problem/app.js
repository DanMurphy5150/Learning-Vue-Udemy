const app = Vue.createApp({
  data() {
    return {
      userInput: '',
    };
  },
  methods: {
    showAlert() {
      alert('This is an alert message!!!');
    },
    displayInput(event) {
      this.userInput = event.target.value;
    },
  },
});

app.mount('#assignment');
