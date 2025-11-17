
process.loadEnvFile() //process.loadEnvFile(['./dev.env','./dev2.env'])


var express = require("express");
var axios = require('axios');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');


const execute = require('./connection');


var http = require('http').Server(app);
//var io = require('socket.io')(http);
var io = require('socket.io')(http, { cors: { origin: '*' } });


const cors = require('cors');
const { exec } = require("child_process");
app.use(cors({
    origin: '*'
}));


const PORT = process.env.PORT || 9900;

//app.use(bodyParser.json());
app.use(express.json({limit: '25mb'}));
app.use(express.urlencoded({limit: '25mb', extended: true}));


app.use(express.static('build'));

var path = __dirname + '/'

//manejador de rutas
router.use(function (req,res,next) {
  
  next();
});






app.get("/",function(req,res){
  
 

	res.sendFile(path + 'index.html');
 

}); 






app.post("/login",function(req,res){

    const {u,p} = req.body;

    let qry = `
      SELECT 
        EMPNIT,TOKEN_U AS USUARIO, TOKEN_P AS CLAVE, TIPO, TOKEN 
      FROM TOKEN_USUARIOS
      WHERE 
        TOKEN_U='${u}' AND 
        TOKEN_P='${p}';
    `;

    execute.QueryToken(res,qry,'');


}); 


app.post("/select_empresas_token",function(req,res){

  const {token} = req.body;

  let qry = `
        SELECT EMPNIT, EMPNOMBRE AS SUCURSAL
        FROM COMMUNITY_EMPRESAS_SYNC
        WHERE TOKEN='${token}'; 
    `;

  execute.QueryToken(res,qry,'')

});  



app.post("/select_clave_general",function(req,res){

  const {sucursal,tipo} = req.body;

  let qry = '';

  if(tipo=='ISC'){
      qry = `
      SELECT EMPNIT, CLAVE_1 FROM TOKEN_CLAVES WHERE EMPNIT='${sucursal}' 
      `;
  }else{
      qry = `
        SELECT 
          EMPNIT, 
          TOKEN_CLAVE_1 AS CLAVE_1 
        FROM 
          COMMUNITY_EMPRESAS_SYNC 
        WHERE 
          EMPNIT='${sucursal}'; 
      `;
  }

  

  execute.QueryToken(res,qry,'')

});  




app.use("/",router);

app.use("*",function(req,res){
  res.redirect('/');
  //res.send('<h1 class="text-danger">NO DISPONIBLE</h1>');
});




// SOCKET HANDLER
io.on('connection', function(socket){

      socket.on('MODO_SAT', (clave)=>{
        execute.Query_system(`UPDATE SYSTEM_CONFIG SET ACTIVO='SI' WHERE CODIGO='MODO_SAT';`);
        io.emit('MODO_SAT', clave);

      });
  
      socket.on('clave_general', (sucursal)=>{

         let qry = `
        SELECT EMPNIT, CLAVE_1 FROM TOKEN_CLAVES WHERE EMPNIT='${sucursal}' 
        `;

        execute.QueryData(qry)
        .then((data)=>{
            
            io.emit('clave_general', data);
        })
        
      });

      socket.on('nueva_cotizacion', (tipo,msn)=>{
        io.emit('nueva_cotizacion', tipo, msn);
      });

      
  
});


http.listen(PORT, function(){
  console.log('listening on *:' + PORT);
});

