const mongoose = require("mongoose");

const car_detail = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String, 
      required: true,
    },
  },
  { timestamps: true }
);

const Second_Hand_Car_Detail = mongoose.model("Second_Hand_Car_Detail", car_detail);

module.exports = Second_Hand_Car_Detail;
