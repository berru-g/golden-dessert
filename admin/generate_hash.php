<?php
$hash = password_hash('ton_mdp', PASSWORD_DEFAULT);
echo "Hash généré : <strong>" . $hash . "</strong>";