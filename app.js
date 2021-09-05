const express = require ('express');
const app = express();
const path = require("path");
//app.use(express.static(path.join(__dirname, "./public")));
app.use(express.static('./public'))
const index =require('./routers/index.js')
app.set('view engine','ejs');

app.listen (3000, () => {
    console.log('servidor funcionando');
})


app.use("/", index);
app.use("/about",index)