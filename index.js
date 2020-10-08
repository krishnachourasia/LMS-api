import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import studentSchema from './app.js'

const app = express()
const PORT = 4000


mongoose.connect("mongodb://localhost:27017/erpDB" , {useNewUrlParser: true, useUnifiedTopology: true});
const Student = mongoose.model("Student", studentSchema);


app.use(bodyParser.json());


app.get('/', (req, res) => {
    res.send(`Server is running on ${PORT}`);
})

app.post('/submit-data', (req, res) => {
    let obj = req.body
    obj = new Student(req.body)
    obj.save(err => {
        if (err){
            console.log("Error in insertion", err)
            res.sendStatus(500)}
        else
        {console.log("success!")
            res.sendStatus(200)
        }

    })
    console.log(obj)

});

app.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
})