const express = require("express");
const rucsSchema = require("../models/rucs");

const router = express.Router();

// Consulta un Ruc por Razon Social usando text search
router.get("/razonsocial/:RAZON_SOCIAL", (req, res) => {
  const { RAZON_SOCIAL } = req.params;
  rucsSchema
    .find({ $text: { $search: RAZON_SOCIAL } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Alternativa: búsqueda por coincidencia parcial usando regex
router.get("/razonsocial/regex/:RAZON_SOCIAL", (req, res) => {
  const { RAZON_SOCIAL } = req.params;
  rucsSchema
    .find({ RAZON_SOCIAL: { $regex: RAZON_SOCIAL, $options: 'i' } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;