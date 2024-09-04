<?php
$conn = "mysql:host=localhost;dbname=ignacio";
$pdo = new PDO($conn, "root", "");

$produto = $_POST["Nome_do_Produto"];
$marca = $_POST["Marca"];
$qtdd = $_POST["Quantidade"];
$preco = $_POST["Preco"];

$sql = $pdo->prepare("SELECT * FROM produto WHERE nome = '".$produto."' AND marca = '".$marca."';");
$sql -> execute();
$linhas = $sql->fetchAll();

if(count($linhas) >= 1)
{
    echo "<p>Esse produto já existe</p>";
    echo"    <form action='cadastro.html'>
    <input type='submit' value='Voltar para pagina principal'></input>
        </form>";
}else
{
    $sql = $pdo->prepare("INSERT INTO produto (nome, marca, quantidade, preco) VALUES ('".$produto."','".$marca."',".$qtdd.",".$preco.");");
    $sql -> execute();
    
    echo header("location: redirecionar.html");
}

$pdo = null;

?>