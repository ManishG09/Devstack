import mongoose from 'mongoose'

let isConnnected:boolean = false


export const connectToDatabase = async() => {
    mongoose.set('strictQuery',true)

    if(!process.env.MONGODB_URL) return console.log("Missing MONGODB_URL")

    if(isConnnected){
       return console.log("MongoDB is already connected")
    }

    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            dbName:'devstack'
        })
        isConnnected = true;
        console.log("Mongo DB is connected")
    } catch (error) {
        console.log("MongoDb failed to connect",error)
    }
}