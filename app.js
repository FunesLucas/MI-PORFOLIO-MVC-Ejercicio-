const express = require ('express');
const app = express();
const index =require('./routers/index.js')
const about =require('./routers/about.js')
app.use(express.static('./public'))
app.set('view engine','ejs');



app.listen (3000, () => {
    console.log('servidor funcionando');
})


app.use("/", index);
app.use("/about",about)