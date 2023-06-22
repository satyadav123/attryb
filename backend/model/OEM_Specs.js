const mongoose = require("mongoose");

const oem_Specs = new mongoose.Schema(
  {
    model_name: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 100,
    },
    year_of_model: {
      type: String,
      required: true,
    },
    price_of_new_vehicle: {
      type: Number, 
      required: true,
    },
     available_colors: {
      type: String,
      required: true,
    },
   mileage: {
      type: Number,
      required: true,
    },
    power: {
      type: Number,
      required: true,
    },
    max_speed: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const OEM_Specs = mongoose.model("OEM_Specs", oem_Specs);

module.exports = OEM_Specs;
