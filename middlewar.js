
const express = require('express'); //npm install
const bodyParser = require('body-parser'); //npm install
let app = express();

app.use(express.static('public'));

//Enregistre un handler et associe une url à une function
app.post(
    "/auth",
    //Ajout d'un middlewar - Pour prendre en charge les corps codés par URL
    bodyParser.urlencoded({ extended: true }),
    function(req, resp) {
    console.log(req.body);
    resp.send("Succès !");
    }
);

app.listen(80 , function(err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Le server écoute le port 80");
});