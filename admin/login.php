<?php
session_start();

$mdp_admin = 'mdp'; // à cacher via la lib PHP dotenv ou à la main dans O2switch... genre demain

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['password'] === $mdp_admin) {
        $_SESSION['admin_logged_in'] = true;
        header('Location: dashboard.php');
        exit();
    } else {
        $error = "Mot de passe incorrect.";
    }
}
?>

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion Admin</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f4; display:flex; justify-content:center; align-items:center; height:100vh; }
        form { background:white; padding:2rem; border-radius:10px; box-shadow:0 0 10px rgba(0,0,0,0.1); }
        input { padding:10px; margin-top:10px; width:100%; border-radius:10px; }
        button { margin-top:15px; padding:10px; width:100%; background:#007BFF; color:white; border:none; border-radius:10px;}
    </style>
</head>
<body>
    <form method="POST">
        <h2>Connexion Admin</h2>
        <input type="password" name="password" placeholder="Mot de passe admin" required />
        <?php if (isset($error)) echo "<p style='color:red;'>$error</p>"; ?>
        <button type="submit">Se connecter</button>
    </form>
</body>
</html>
