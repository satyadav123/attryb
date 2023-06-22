const mongoose = require("mongoose");

const Marketplace_Inventory_Schema = new mongoose.Schema(
  {
    km: {
      type: Number,
      required: true,
    },
    major_scratches: {
      type: Number,
      required: true,
    },
    original_paint: {
      type: Boolean,
      required: true,
    },
    number_of_accidents_reported: {
      type: Number,
      required: true,
    },
    number_of_accidents_reported: {
      type: Number,
      required: true,
    },
    registration_place: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Marketplace_Inventory = mongoose.model("Marketplace_Inventory", Marketplace_Inventory_Schema);

module.exports = Marketplace_Inventory;
