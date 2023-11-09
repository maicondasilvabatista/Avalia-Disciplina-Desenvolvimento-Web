    <?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        $name = $_POST["name"];
        $email = $_POST["email"];
        $message = $_POST["message"];

        echo "<h2>Dados Enviados:</h2>";
        echo "Nome: $name<br>";
        echo "E-mail: $email<br>";
        echo "Mensagem: $message<br>";
    }
    ?>

