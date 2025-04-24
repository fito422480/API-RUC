const mongoose = require("mongoose");

const rucsSchema = mongoose.Schema({
  RUC: {
    type: Number,
    required: true,
  },
  RAZON_SOCIAL: {
    type: String,
    required: true,
  },
  DV: {
    type: Number,
    required: true,
  },
  ESTADO: {
    type: String,
    required: true,
  },
});

// Add text index for the RAZON_SOCIAL field to support text search
rucsSchema.index({ RAZON_SOCIAL: "text" });

module.exports = mongoose.model("rucs", rucsSchema);
