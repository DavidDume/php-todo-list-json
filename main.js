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
        todo: {
          text: this.item.text,
          status: this.item.status,
        },
      };
      axios
        .post('server.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          console.log(res.data);
          this.todosList = res.data;
          this.item = {};
        });
    },
    completeTodo(index) {
      this.todosList[index].status = 'done';
    },
  },
  mounted() {
    this.viewTodos();
  },
}).mount('#app');
