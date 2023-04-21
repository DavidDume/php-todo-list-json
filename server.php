<?php

    if(file_exists('database.json')) {
        $list = json_decode(file_get_contents('database.json'), true);
    } else {
        $list = [];
    }

    if(isset($_POST['todo'])) {
        $list[] = array('text' => $_POST['todo']['text'], 'status' => false);
        file_put_contents('database.json', json_encode($list));
    }

    if(isset($_POST['changeTodo'])) {
        $index = $_POST['changeTodo']['index'];
        $list[$index]['status'] = filter_var($_POST['changeTodo']['status'], FILTER_VALIDATE_BOOL);
        file_put_contents('database.json', json_encode($list));

    }


    header('Content-Type: application/json');
    echo json_encode($list);
?>