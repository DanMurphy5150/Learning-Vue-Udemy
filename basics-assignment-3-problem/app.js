const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    displayResult(value) {
      console.log('watcher triggered');
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    },
  },
  computed: {
    displayResult() {
      if (this.result < 37) {
        return 'Not there yet!!';
      } else if (this.result === 37) {
        return this.result;
      } else {
        return 'Too Much!!!';
      }
    },
  },
  methods: {
    addNumber(num) {
      this.result = this.result + num;
      console.log(this.result);
    },
  },
});

app.mount('#assignment');
