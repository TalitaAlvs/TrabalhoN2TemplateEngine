const express = require('express');
const app = express();
const handlebars = require('express-handlebars')

// Config
    // Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    // Conexão com o MySQL

// Rotas

        app.get('/cadastro', function(req, res){
            res.render('home')
        })

app.listen(3000, function(){
    console.log("Servidor Rodando na url http://localhost:3000");
});
