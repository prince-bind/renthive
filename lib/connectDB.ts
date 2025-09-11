import mongoose from "mongoose";

const DB_NAME = "RentHive"

const connectDB = async (): Promise<void> => {

    const connectionState = mongoose.connection.readyState

    if (connectionState === 1) {
        console.log("Alredy connected to Database")
        return
    }

    if (connectionState === 2) {
        console.log("connecting to Database")
        return
    }

    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected !! DB_HOST : ${connectionInstance.connection.host}, ${connectionInstance.connection.name}`)
    } catch (error) {
        console.log("MONGODB connection FAILED : ", error)
        process.exit(1)
    }
}

export default connectDB;