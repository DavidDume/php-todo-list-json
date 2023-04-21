const { createApp } = Vue;

createApp({
  data() {
    return {
      todosList: [],
      item: {
        status: 'not_done',
        text: '',
      },
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
        text: this.item.text,
      };
      axios
        .post('server.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          this.todosList = res.data;
          this.item = {
            status: 'not_done',
            text: '',
          };
        });
      console.log(this.item);
    },
    completeTodo(index) {
      this.todosList[index].status = 'done';
    },
  },
  mounted() {
    this.viewTodos();
  },
}).mount('#app');
