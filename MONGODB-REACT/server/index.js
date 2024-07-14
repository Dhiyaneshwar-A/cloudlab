const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const memberDetails = require('./models/Member');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://dhiyaneshwar:Dhiyanesh@cluster0.1e7ra3w.mongodb.net/users", {
    useUnifiedTopology: true,
    useNewUrlParser: true
})
.then(() => console.log("MongoDB connected"))
.catch(err => console.log("MongoDB connection error:", err));

app.post('/add', async (req, res) => {
    const { name, regNo, email,id } = req.body;
    console.log(req.body);
    try {
        await memberDetails.create({
            Id:id,
            Name: name,
            RegNo: regNo,
            Email: email
        });
        res.send("Successfully inserted");
    } catch (error) {
        console.log(error);
        res.status(500).send("Failed to insert data");
    }
});

app.get('/read', async (req, res) => {
    try {
        const result = await memberDetails.find({});
        console.log(result);
        res.send(result);
    }
    catch (error)
    {
        console.log(error);
        res.send("some issues in reading the data");
    }

})

app.delete('/remove/:id', async (req, res) => {
    const id = req.params.id;
    try {
        await memberDetails.deleteOne({ Id: id });
    }
    catch (error)
    {
        console.log(error);
        res.send("Error in deletion of data");
    }
})

app.put('/update', async (req, res) => {
    const { name, regno, email, id } = req.body;
    try {
        await memberDetails.findOneAndUpdate({ Id: id }, { $set: { Name:name, RegNo:regno, Email:email } }, { new: true });
        console.log("member updated successfully");
    }
    catch (error)
    {
        console.log(error);
        res.send("Error in updating the member");
    }
})
const PORT = process.env.PORT || 3035;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
