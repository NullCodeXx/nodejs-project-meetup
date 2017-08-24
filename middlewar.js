
const express = require('express'); //recupere la dépendance(package) and npm install
// doc : https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters/12008719#12008719
const bodyParser = require('body-parser'); //npm install
//const expressBasicAuth = require('express-basic-auth'); //npm install npm install express-basic-auth
const auth = require('http-auth');
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

//Systeme d'authenfication manque le systeme de securisation (https)
let basic = auth.basic({
    realm: "secret simplon", //realm = permet d'avoir plusieur domaine d'authen°
    file: __dirname + '/.htpasswd'
});
app.use("/private", auth.connect(basic)); //securise la page private.

app.listen(80 , function(err) {
    if(err) {
        console.log(err);
        return;
    }
    console.log("Le server écoute le port 80");
});