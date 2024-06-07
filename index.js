import cors from 'cors'

import express from 'express'

let app = express()

import router from './router/productRouter.js'
app.use(cors())
app.use('/product', router)


app.listen(8080, () => { console.log('my server is running....') })