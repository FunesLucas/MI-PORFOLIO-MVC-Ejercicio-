const express = require ('express');
const app = express();
const path = require("path");
app.use(express.static(path.join(__dirname, "./public")));
const main =require('./routers/main.js')


app.listen (3000, () => {
    console.log('servidor funcionando');
})


app.use("/", main);