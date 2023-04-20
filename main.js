const { createApp } = Vue;

createApp({
  data() {
    return {
      todosList: [],
    };
  },
  methods: {
    viewTodos() {
      axios.get('server.php').then((res) => {
        this.todosList = res.data;
      });
    },
  },
  mounted() {
    this.viewTodos();
  },
}).mount('#app');
