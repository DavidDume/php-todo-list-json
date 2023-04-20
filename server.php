<?php

    $list = ['spesa', 'mangiare', 'studiare'];

    header('Content-Type: application/json');
    echo json_encode($list);
?>