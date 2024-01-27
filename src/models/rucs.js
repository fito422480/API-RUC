const mongoose = require("mongoose");

const rucsSchema = mongoose.Schema({
  RUC: {
    type: "number",
    required: true,
  },
  RAZON_SOCIAL: {
    type: "string",
    required: true,
  },
  DV: {
    type: "string",
    required: true,
  },
  ESTADO: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("rucs", rucsSchema);
