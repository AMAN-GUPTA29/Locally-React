const TaskModel = require('../MongoUtils/models');

module.exports.registerSeller = async (req, res) => {
    try {
      const { name, email, password } = req.body;
      console.log(req.body)
  
      const existingAdmin = await TaskModel.sellerModel.findOne({ email });
      if (existingAdmin) {
        return res.status(400).json({ message: 'Email already exists' });
      }
  
      const newAdmin = new TaskModel.sellerModel({
        name,
        email,
        password,
      });
  
      await newAdmin.save();
  
      const newSellerDetail = new TaskModel.sellerDetail({
        aadhar: req.body.aadhar,
        address: req.body.address,
        phone: req.body.phoneNumber,
        pointer: newAdmin._id, 
      });
  
      await newSellerDetail.save();
  
      res.status(200).json({ message: 'Seller registered successfully', sellerId: newAdmin._id });
    } catch (err) {
      console.error(err);
      res.status(500).send('Internal Server Error');
    }
  };
  
  

module.exports.sellerLogging = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Request:", email, password);

        const admin = await TaskModel.sellerModel.findOne({ email });
        console.log("Admin:", admin);

        if (admin) {
            console.log("Login authenticated");
            res.json({
                success: true,
                status: "OK",
                code: 200,
                message: "Login Authenticated"
            });
        } else {
            console.log("Invalid credentials");
            res.json({
                success: false,
                code: 400,
                message: "Invalid Credentials",
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.broadcast = async (req, res) => {
    try {
        const tasks = await TaskModel.broadcastModel.find({ recipient: { $in: ['all', 'workers'] } })
            // .sort({ time: -1 }); 
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}


