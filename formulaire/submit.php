<?php
$host = 'localhost';
$db   = 'golden_dessert';
$user = 'root';
$pass = 'root';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);

    $email = $_POST['email'] ?? '';
    $fullname = $_POST['fullname'] ?? '';
    $statut = $_POST['statut'] ?? '';
    $telephone = $_POST['telephone'] ?? '';
    $siteweb = $_POST['siteweb'] ?? '';
    $message = $_POST['message'] ?? '';

    $stmt = $pdo->prepare("INSERT INTO contacts (email, fullname, statut, telephone, siteweb, message) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->execute([$email, $fullname, $statut, $telephone, $siteweb, $message]);

    header("Location: merci.html");
    exit();
} catch (PDOException $e) {
    echo "Erreur : " . $e->getMessage();
}
?>
