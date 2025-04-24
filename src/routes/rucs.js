const express = require("express");
const rucsSchema = require("../models/rucs");

const router = express.Router();

//Crear rucs
router.post("/rucs", (req, res) => {
  const ruc = rucsSchema(req.body);
  ruc
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Consulta de todos los Rucs
router.get("/rucs", (req, res) => {
  rucsSchema
    .find()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Consulta un Ruc
router.get("/rucs/:RUC", (req, res) => {
  const { RUC } = req.params;
  rucsSchema
    .find({ RUC: RUC })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un Ruc
router.delete("/rucs/:RUC", (req, res) => {
  const { RUC } = req.params;
  rucsSchema
    .deleteOne({ RUC: RUC })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Actualizar un Ruc
router.put("/rucs/:RUC", (req, res) => {
  const { RUC } = req.params;
  const { RAZON_SOCIAL, DV, ESTADO } = req.body;
  rucsSchema
    .updateOne({ RUC: RUC }, { $set: { RAZON_SOCIAL, DV, ESTADO } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
