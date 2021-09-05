const path = require("path");
const mainController = {
    index: (req, res) => {
        //res.sendFile((path.join(__dirname, '../views/home.html')))
        res.render('home');
    
    },
    about: (req, res) => {
        res.render('about');
    }
};

module.exports = mainController;