<?php

    $list = [
        [
            'text' => 'spesa',
            'status' => 'not_done'
        ],
        [
            'text' => 'spesa',
            'status' => 'done'
        ],
        [
            'text' => 'spesa',
            'status' => 'done'
        ]
    
        ];

    if(isset($_POST['todo'])) {
        $list[] = $_POST['todo'];
    }

    header('Content-Type: application/json');
    echo json_encode($list);
?>