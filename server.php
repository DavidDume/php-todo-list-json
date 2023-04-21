<?php

    if(file_exists('database.json')) {
        $list = json_decode(file_get_contents('database.json'));
    } else {
        $list = [];
    }

    if(isset($_POST['text'])) {
        $list[] = array('text' => $_POST['text'], 'status' => 'not_done');
        file_put_contents('database.json', json_encode($list));
    }

    header('Content-Type: application/json');
    echo json_encode($list);
?>