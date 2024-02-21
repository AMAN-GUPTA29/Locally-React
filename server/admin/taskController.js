const TaskModel = require('../MongoUtils/models');

module.exports.sendBroadcast = async (req, res) => {
    try {
        const { message, recipient } = req.body;
        // Save the broadcast message to the database
        const broadcast = new TaskModel.broadcastModel({
            message,
            recipient,
        });
        await broadcast.save();
        res.status(200).json({ message: 'Broadcast sent successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.broadcast = async (req, res) => {
    try {
        const tasks = await TaskModel.broadcastModel.find();
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.consumer = async (req, res) => {
    try {
        const tasks = await TaskModel.customerModel.find({})
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.seller = async (req, res) => {
    try {
        const tasks = await TaskModel.sellerModel.find();
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.admin = async (req, res) => {
    try {
        const tasks = await TaskModel.adminModel.find();
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.requests = async (req, res) => {
    try {
        const tasks = await TaskModel.requestModel.find({})
            .populate('customerid', 'name')
            .populate('sellerid', 'name')
            .populate('serviceid', 'tag');
        res.send(tasks);
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.registerAdmin = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        console.log(name,email,password)
        // const existingAdmin = await TaskModel.adminModel.findOne({ email });
        // const existingAdmin = await TaskModel.customerModel.findOne({ email });
        const existingAdmin = await TaskModel.sellerModel.findOne({ email });
        if (existingAdmin) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const newAdmin = new TaskModel.sellerModel({
            name,
            email,
            password,
        });

        await newAdmin.save();

        res.status(200).json({ message: 'Admin registered successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.adminLogging = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log("Request:", email, password);

        const admin = await TaskModel.adminModel.findOne({ email });
        console.log("Admin:", admin);

        if (admin) {
            console.log("Login authenticated");
            req.session.userID = admin._id;
            req.session.customer = false;
            req.session.seller = false;
            req.session.admin = true;
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

module.exports.getRegistrationTimes = async (req, res) => {
    try {
        const customers = await TaskModel.customerModel.find();
        const sellers = await TaskModel.sellerModel.find();
        
        const customerRegistrationTimes = customers.map(customer => new Date(customer.time).getTime());
        const sellerRegistrationTimes = sellers.map(seller => new Date(seller.time).getTime());
        
        const minTime = Math.min(...customerRegistrationTimes, ...sellerRegistrationTimes);
        const maxTime = Math.max(...customerRegistrationTimes, ...sellerRegistrationTimes);
        const timeRange = maxTime - minTime;
        const slotSize = timeRange / 5; // Assuming 5 time slots, adjust as needed
        
        const customerSlotCounts = Array.from({ length: 5 }, () => 0);
        const sellerSlotCounts = Array.from({ length: 5 }, () => 0);
        
        customerRegistrationTimes.forEach(time => {
            const slotIndex = Math.floor((time - minTime) / slotSize);
            customerSlotCounts[slotIndex]++;
        });
        
        sellerRegistrationTimes.forEach(time => {
            const slotIndex = Math.floor((time - minTime) / slotSize);
            sellerSlotCounts[slotIndex]++;
        });
        
        const customerData = customerSlotCounts.map((count, index) => ({
            x: new Date(minTime + index * slotSize),
            y: count
        }));
        
        const sellerData = sellerSlotCounts.map((count, index) => ({
            x: new Date(minTime + index * slotSize),
            y: count
        }));
        
        res.status(200).json({ customers: customerData, sellers: sellerData });
    } catch (err) {
        console.error(err);
        res.status(500).send('Internal Server Error');
    }
};





// module.exports.consumer = async(req,res)=>{
//     const tasks = await TaskModel.customerModel.find();
//     res.send(tasks);
// }

// module.exports.seller = async(req,res)=>{
//     const tasks = await TaskModel.sellerModel.find();
//     res.send(tasks);
// }