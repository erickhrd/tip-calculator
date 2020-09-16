// import dependencoes
import express from 'express';
import cors from 'cors';

//app config
const app = express()
const port = 9000
//middlewares
app.use(express.json())
app.use(cors())

//api routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.post('/api/1/calculatetip', (req, res) => {
    const amount = parseInt(req.body.amount)
    const tip = parseInt(req.body.tip)

    const toBePaid = amount + (tip / 100) * amount

    res.status(200).json({toBePaid})

})
//listen
app.listen(port, () => console.log(`listening on localhost:${port}`))
