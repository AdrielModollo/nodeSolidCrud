const express = require('express') 
const bodyParser = require('body-parser')
const pdf = require('html-pdf')
const ejs = require('ejs');
const fs = require('fs');
const app = express()
const { response } = require('express');

//Faz a comunicação com o banco de dados
const ObjectId = require('mongodb').ObjectID
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Adriel:602835@cluster0.7vary.mongodb.net/crudNode?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
MongoClient.connect(uri, (err, client) => {
    if (err) return console.log(err)
        db = client.db('crudNode') // coloque o nome do seu DB

    app.listen(3000, () => {
        console.log('Server running on port 3000')
    })
})

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('index.ejs')
})

//PDF
app.get('/generate-pdf', function(req, res){
  db.collection('data').find().toArray((err, results) => {
    if (err) return console.log(err)
    ejs.renderFile("./views/pdf.ejs",{data: results},(err, html) =>{
      /* verifica existência de erro ou sucesso */  
      if(err){
         console.log("Algo errado por aqui...");
     } 
      pdf.create(html, {}).toBuffer((err, buffer) => {

        res.end(buffer);

      })
    
    })
  })  
})