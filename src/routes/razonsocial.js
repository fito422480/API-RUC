const express = require("express");
const rucsSchema = require("../models/rucs");

const router = express.Router();

//Consulta un Ruc por Razon Social
router.get("/razonsocial/:RAZON_SOCIAL", (req, res) => {
  const { RAZON_SOCIAL } = req.params;
  rucsSchema
    .find({ RAZON_SOCIAL: { $regex: RAZON_SOCIAL }})
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

module.exports = router;
