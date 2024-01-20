const mongoose = require("mongoose");

const rucsSchema = mongoose.Schema({
  ruc: {
    type: "number",
    required: true,
  },
  razon_social: {
    type: "string",
    required: true,
  },
  dv: {
    type: "string",
    required: true,
  },
  estado: {
    type: "string",
    required: true,
  },
});

module.exports = mongoose.model("rucs", rucsSchema);
