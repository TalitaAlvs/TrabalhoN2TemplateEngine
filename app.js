const express = require('express')
const handlebars= require('express-handlebars')
//const handlebars = require('express-handlebars')
const port = 3000

const app = express();
// Config
// Template Engine

//app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.set('views', './views')
app.use('/public', express.static(__dirname + '/public'))
// Conexão com o MySQL

// Rotas

        app.get('/cadastro', (req, res)=>{
            res.render('home')
        })

app.listen(port, () =>{
    console.log("Servidor Rodando na url http://localhost:3000");
});
