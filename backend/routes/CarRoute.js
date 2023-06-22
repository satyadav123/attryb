const express = require("express");
const router = express.Router();
const SecondHandController = require("../controller/SecondHandCarController");

const OEMController = require("../controller/OEMController");

router.post("/add_car_detail",SecondHandController.add_second_hand_car_detail);
router.get("/get_car_detail",SecondHandController.get_car_detail);
router.post("/update_car_detail",SecondHandController.update_car_detail);
router.post("/get_car_detail_id",SecondHandController.get_car_detail_id);
router.post("/delete_car_detail_id", SecondHandController.delete_car_detail);


router.post("/add_oem_detail",OEMController.add_oem_detail);
router.post("/search_oem_detail",OEMController.search_oem_detail);

module.exports = router;
