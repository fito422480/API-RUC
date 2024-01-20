const express = require("express");
const rucsSchema = require("../models/rucs");

const router = express.Router();

//Crear Rucs 
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
router.get("/rucs/:ruc", (req, res) => {
  const { ruc } = req.params;
  rucsSchema
    .find(ruc)
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

// Eliminar un Ruc
router.delete("/rucs/:ruc", (req, res) => {
  const { ruc } = req.params;
  rucsSchema
    .remove({ ruc: ruc })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
