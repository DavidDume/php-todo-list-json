<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>To do list</title>
</head>
<body>
    
    <div id="app">
        <div class="container">
            <ul class="list-group">
                <li v-for="(todo, index) in todosList"  class="list-group-item d-flex justify-content-between">
                    <span @click="completeTodo(index)" :class="{crossed: todo.status}">{{todo.text}}</span>
                    <i class="fa-solid fa-trash" style="color: #ff0019;" @click="deleteTodo(index)"></i>
                </li>
            </ul>
            <input type="text" placeholder="Inserisci todo" v-model="item.text">
            <button class="btn btn-primary" @click="addTodo">Inserisci</button>
        </div>
    </div>

    <script src="https://unpkg.com/vue@3/dist/vue.global.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/axios/1.3.6/axios.min.js" integrity="sha512-06NZg89vaTNvnFgFTqi/dJKFadQ6FIglD6Yg1HHWAUtVFFoXli9BZL4q4EO1UTKpOfCfW5ws2Z6gw49Swsilsg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src='main.js'></script>
</body>
</html>