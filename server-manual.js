const http = require('http')

http.createServer((req, res) => {

            res.writeHead(200, {"Content-Type" : 
             "application/json"});

    let carro = {
        placa: "SEW234",
        modelo: "2014",
        marca: "Renault",
        puertas: 2
    }
   // res.write(`Soy un server ${req.url}\n`);
   // res.write(`Carro: ${carro.placa}`);

    if(req.url == "/"){
        res.write("Hola, soy el index");
    }else if(req.url== "/solicitud")
    {
        res.write("Hola, soy una peticion Solicitud");
    }else if(req.url== "/carro")
    {
        res.write("Hola, soy una peticion a carro.\n");
        res.write(JSON.stringify(carro));
    }else
    {
        res.write("Ques estas haciendo!!!");
    }

    res.end();
}).listen(8989);

console.log("Server andando");

