const { createApp } = Vue;

createApp({
  data() {
    return {
      todosList: [],
      item: '',
    };
  },
  methods: {
    viewTodos() {
      axios.get('server.php').then((res) => {
        this.todosList = res.data;
      });
    },
    addTodo() {
      const data = {
        todo: this.item,
      };
      axios
        .post('server.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.todosList = res.data;
          this.item = '';
        });
    },
  },
  mounted() {
    this.viewTodos();
  },
}).mount('#app');
