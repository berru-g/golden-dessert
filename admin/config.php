// admin/config.php
$env = parse_ini_file(__DIR__ . '/.env');
define('ADMIN_PASSWORD', $env['ADMIN_PASSWORD']);
