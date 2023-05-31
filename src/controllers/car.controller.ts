import { PrismaClient } from "@prisma/client"

class CarController  {
    private _prisma

    constructor() {
       this._prisma = new PrismaClient()
    }

    public list = async () => {
       const data = await this._prisma.car.findMany()
       return data
    }
}

export default CarController