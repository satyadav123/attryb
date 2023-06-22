const OEM_Specs = require("../model/OEM_Specs");

const add_oem_detail = async (req, res) => {
    try {
        const request = req?.body;
        if(!request) return res.status(200).json({ message: "Enter Valid Detail To Proceed Further!.", data: [] });

        if(request){
            var model_name = request?.model_name;
            var year_of_model = request?.year_of_model;
            var price_of_new_vehicle = request?.price_of_new_vehicle;
            var available_colors = request?.available_colors;
            var mileage = request?.mileage;
            var power = request?.power;
            var max_speed = request?.max_speed;
        }

        const payload = {
            model_name:model_name,
            year_of_model:year_of_model,
            price_of_new_vehicle:price_of_new_vehicle,
            available_colors:available_colors,
            mileage:mileage,
            power:power,
            max_speed:max_speed
        }

        if(payload){
            var add = await OEM_Specs.create(payload)
        }

        if(add){
            return res.status(200).json({ message: "OEM_Specs Added Successfully.", data: [] });
        }
        else{
            return res.status(200).json({ message: "Error while OEM_Specs detail.", data: [] });
        }
    }
    catch (err) {
        return res.status(500).json({ error: err.message });
    }
}

const search_oem_detail = async (req, res) => {
    try {
      const request = req?.body?.model_name;
      const Get = await OEM_Specs.find({model_name:request})
      if (Get) {
        return res.status(200).json({ message: "Car Detail Get Successfully", data: Get });
      } else {
        return res.status(200).json({ message: "Unable To Find Car detail", data: [] });
      }
    } catch (err) {
     return  res.status(500).json({ error: err.message });
    }
};


module.exports = {
    add_oem_detail,
    search_oem_detail
}