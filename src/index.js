const express = require("express");
const app = express();
const {serverConfig} = require("./config");

const  apiRoute = require("./routes");





app.use("/api", apiRoute);

app.listen(serverConfig.PORT , ()=>{ 
    console.log(`The server running on the port : ${serverConfig.PORT}`);
    // logger.info("Successfully started the server")
})


 