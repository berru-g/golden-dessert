<?php
$hash = password_hash('mdp', PASSWORD_DEFAULT);
echo "Hash généré : <strong>" . $hash . "</strong>";