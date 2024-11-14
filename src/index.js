import connectDB from "#Config/db.js";
import httpServer from "#Config/https.js";
import '#Config/env.js';
import { connect } from "mongoose";

const bootstrap = async () => {
    await connectDB(process.env.MONGODB_URL)

    httpServer.listen(process.env.PORT, ()=>{console.log("Servidor en puerto 3100.")})
}

bootstrap();