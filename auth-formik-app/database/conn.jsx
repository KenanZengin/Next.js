import mongoose from "mongoose";

const connectMongo = async() => {
    try {
       

        const {connection} = await mongoose.connect(process.env.MONGO_URL)

        if(connection.readyState == 1){ // 0 bağlantı kesilirse , 1 bağlantı olursa  , 3 bağlantı kesmek için 
            return Promise.resolve(true)
        }

    } catch (error) {
        return Promise.reject(error)
    }
}

export default connectMongo