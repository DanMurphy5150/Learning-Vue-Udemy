const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      // fullname: '',
      lastName: '',
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 5000);
      }
    },
    // name(value) {
    //   console.log(value);
    //   if (value === '') {
    //     this.fullname = '';
    //   } else {
    //     this.fullname = value + ' ' + 'Murphy';
    //   }
    // },
  },
  computed: {
    fullname() {
      console.log('running again');
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + this.lastName;
    },
  },
  methods: {
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    setName(event) {
      this.name = event.target.value;
    },
    submitForm() {
      alert('Submitted!!!');
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    resetInput() {
      this.name = '';
    },
    outputFullname() {
      if (this.name === '') {
        return '';
      }
      return this.name + ' ' + 'Murphy';
    },
  },
});

app.mount('#events');
