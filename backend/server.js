const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const sgMail = require("@sendgrid/mail");

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("../frontend"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/../frontend/index.html");
});

app.post("/contact", async (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  const msg = {
    to: process.env.EMAIL_TO,
    from: process.env.EMAIL_FROM,
    replyTo: email,
    subject: `Nuevo mensaje de contacto de ${nombre}`,
    text: `Nombre: ${nombre}\nEmail: ${email}\nMensaje: ${mensaje}`,
  };

  try {
    await sgMail.send(msg);
    res.json({ success: true, message: "Mensaje enviado correctamente!" });
  } catch (error) {
    console.error("Error enviando email:", error.response?.body || error);
    res.status(500).json({ error: "No se pudo enviar el mensaje" });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
