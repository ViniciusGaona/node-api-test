import fastify from 'fastify'
import CarController from './controllers/car.controller'
import { createInterface } from 'readline'

const app = fastify()
const carController = new CarController()

app.get('/cars', carController.list)


app.listen(
    { port: 5556 }
).then(() => console.log('Server ins running on port 5556')) 
