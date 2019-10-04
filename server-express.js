const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('soy el index')
})
 
app.get('/rara', function(req, res){
  res.send('soy la peticion rara')
});

app.get('/carro', function (req, res){

let carro = {
  placa: "SEW234",
  modelo: "2014",
  marca: "Renault",
  puertas: 2
}
  res.send(carro);
});

app.listen(3000) 

console.log("Server en el puerto 3000");