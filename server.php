<?php

    $list = ['spesa', 'mangiare', 'studiare'];

    if(isset($_POST['todo'])) {
        $list[] = $_POST['todo'];
    }

    header('Content-Type: application/json');
    echo json_encode($list);
?>