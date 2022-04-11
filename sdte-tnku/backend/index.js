const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
const mongoURI = process.env.URI

app.use(express.static('static'))
app.use(express.urlencoded({ extended: true })) 
app.use(express.json());
app.use(cors())

mongoose.connect(mongoURI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log('Mongo Connected!')
}).catch(() => {
    console.log('Cannot Connect to DB!')
})

app.get('/', (req, res) => {
    res.send('Test DB')
})
// routers
const reviewRouter = require('./routes/reviewRoute')
app.use(reviewRouter.router)

var port = process.env.PORT || 3000

app.listen(port, () =>{
    console.log(`Connected to port ${port}`)
})