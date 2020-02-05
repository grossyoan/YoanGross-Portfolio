<?php

define('DB_HOST', 'grossyoapjzbwars.mysql.db');
define('DB_PORT', '3306');
define('DB_NAME', 'grossyoapjzbwars');
define('DB_USER', 'grossyoapjzbwars');
define('DB_PASS', 'Test12345');

try {
    $db = new PDO(
        'mysql:dbname='.DB_NAME.';host='.DB_HOST.';port='.DB_PORT,
        DB_USER,
        DB_PASS
    );

    $db->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
}

catch(PDOException $e)
{
    die('Cannot connect');
}