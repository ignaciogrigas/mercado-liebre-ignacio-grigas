const express = require("express");
const app= express();
const path =require("path")

app.set("port",process.env.PORT || 3000)

//Server//
app.listen(app.get("port"),()=> console.log("Server on http://localhost:3000"+ app.get("port")));

//Public Access//
app.use(express.static(path.resolve(__dirname,"../public")))

//Websites Routes//
app.use(require("./routes/web.js"))