const express = require("express");
const rucsSchema = require("../models/rucs");

const router = express.Router();

//Crear rucs
router.post("/rucs", (req, res) => {
  const rucsRoutes = rucsSchema(req.body);
  rucs
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
    .remove({ RUC: RUC })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
