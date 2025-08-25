<?php
header("Content-Type: application/json");

// Configuración conexión
$host = "localhost"; // en Hostinger puede ser distinto, revisa en hPanel
$user = "tu_usuario";
$password = "tu_password";
$dbname = "tienda";

$conn = new mysqli($host, $user, $password, $dbname);
if ($conn->connect_error) {
  die(json_encode(["error" => "Error de conexión"]));
}

// Obtener ID desde URL (?id=)
$id = isset($_GET["id"]) ? intval($_GET["id"]) : 0;

$sql = "SELECT * FROM productos WHERE id = $id";
$result = $conn->query($sql);

if ($result && $result->num_rows > 0) {
  $row = $result->fetch_assoc();

  // Armamos la respuesta en el formato esperado por tu JS
  echo json_encode([
    "id" => $row["id"],
    "codigo" => $row["codigo"],
    "nombre" => $row["nombre"],
    "marca" => $row["marca"],
    "logo" => "uploads/logos/" . $row["logo_marca"], 
    "imagenes" => ["uploads/productos/" . $row["imagen_producto"]],
    "precioSinIVA" => $row["precio_usd"],
    "iva" => $row["iva"],
    "precioIVA" => $row["iva"],
    "precioFinal" => $row["precio_con_iva"],
    "descripcion" => $row["observaciones"],
    "stock" => $row["stock"] > 0
  ]);
} else {
  echo json_encode(["error" => "Producto no encontrado"]);
}

$conn->close();
