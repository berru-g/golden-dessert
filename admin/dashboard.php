<?php
session_start();
if (!isset($_SESSION['admin_logged_in'])) {
    header('Location: login.php');
    exit();
}

$host = 'localhost';
$db = 'golden_dessert';
$user = 'root';
$pass = 'root'; // ou ton mot de passe MySQL O2Switch
$charset = 'utf8mb4';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $pass, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    ]);
    $messages = $pdo->query("SELECT * FROM contacts ORDER BY id DESC")->fetchAll();
} catch (PDOException $e) {
    die("Erreur DB : " . $e->getMessage());
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Admin - Messages reçus</title>
    <style>
        body { font-family: sans-serif; margin: 2rem; background: #fafafa; }
        h2 { margin-bottom: 20px; }
        table { border-collapse: collapse; width: 100%; background:white; box-shadow:0 0 5px rgba(0,0,0,0.1); }
        th, td { border: 1px solid #ccc; padding: 12px; text-align: left; }
        th { background: #007BFF; color: white; }
        tr:nth-child(even) { background: #f9f9f9; }
        a.logout { float: right; color: red; }
    </style>
</head>
<body>
    <h2>📬 Messages reçus <a class="logout" href="logout.php">Se déconnecter</a></h2>
    <table>
        <thead>
            <tr>
                <th>Date</th>
                <th>Nom</th>
                <th>Email</th>
                <th>Statut</th>
                <th>Téléphone</th>
                <th>Site web</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($messages as $msg): ?>
            <tr>
                <td><?= htmlspecialchars($msg['created_at'] ?? '') ?></td>
                <td><?= htmlspecialchars($msg['fullname']) ?></td>
                <td><?= htmlspecialchars($msg['email']) ?></td>
                <td><?= htmlspecialchars($msg['statut']) ?></td>
                <td><?= htmlspecialchars($msg['telephone']) ?></td>
                <td><?= htmlspecialchars($msg['siteweb']) ?></td>
                <td><?= nl2br(htmlspecialchars($msg['message'])) ?></td>
            </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</body>
</html>
