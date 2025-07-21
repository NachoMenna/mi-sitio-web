const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const users = require("../users.json");

const SECRET = "mi_clave_secreta";

router.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email);
  if (!user) return res.status(401).json({ msg: "Usuario no encontrado" });

  const valid = bcrypt.compareSync(password, user.password);
  if (!valid) return res.status(401).json({ msg: "Contraseña incorrecta" });

  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: "1h" });
  res.json({ token });
});

module.exports = router;
