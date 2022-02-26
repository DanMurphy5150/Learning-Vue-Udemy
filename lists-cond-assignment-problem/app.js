const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredTaskValue: '',
      isHidden: false,
      showHideButtonText: 'Hide',
    };
  },
  watch: {
    isHidden() {
      if (this.isHidden === false) {
        this.showHideButtonText = 'Hide';
      } else {
        this.showHideButtonText = 'Show';
      }
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
      this.enteredTaskValue = ' ';
    },
    toggleHidden() {
      this.isHidden = !this.isHidden;
    },
  },
});

app.mount('#assignment');
