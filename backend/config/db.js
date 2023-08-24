const mongoose = require("mongoose")
const mongoDbUrl = process.env.MONGO_DB_URL


const conn = async () => {
    try {
        const dbConn = await mongoose.connect(mongoDbUrl);
        console.log("Conectou ao banco");

        return dbConn
    } catch (error) {
        console.log(error)
    }
}

conn()

module.exports = conn;