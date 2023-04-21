const { createApp } = Vue;

createApp({
  data() {
    return {
      todosList: [],
      item: {
        status: 'false',
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
          this.item = {
            status: false,
            text: '',
          };
        });
    },
    completeTodo(index) {
      const data = {
        changeTodo: {
          index: index,
          status: !this.todosList[index].status,
        },
      };
      axios
        .post('server.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          console.log(res.data);
          this.todosList = res.data;
          this.item = {
            status: !this.todosList[index].status,
            text: '',
          };
        });
    },
    deleteTodo(index) {
      const data = {
        deleteTodo: {
          index: index,
        },
      };
      axios
        .post('server.php', data, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        .then((res) => {
          console.log(res.data);
          this.todosList = res.data;
          this.item = {
            status: false,
            text: '',
          };
        });
    },
  },
  mounted() {
    this.viewTodos();
  },
}).mount('#app');
