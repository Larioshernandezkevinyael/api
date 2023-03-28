const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
require('dotenv').config();


const listablanca = ['https://nodeapirestweb.vercel.app'];


const usuario = require("./src/routes/user");
const producto= require("./src/routes/producto");


const app = express();
const port = process.env.PORT || 9000;

//midewares
app.use(cors());

cloudinary.config({
    cloud_name: 'dggxxhq2b',
    api_key: '735565457695631',
    api_secret: 'W_Z_MjEinxqNpyaxLANoKHhLvMw'
  });

app.use(express.json());
app.use('/api', usuario);
app.use('/api', producto);



//RUTES
app.get('/', (req, res)=>{
res.send("hola la api esta iniciada");
});



//conexion
mongoose
    .connect(process.env.mongode_url)
    .then(() => console.log("conexion exitosa a la vase de datos "))
    .catch((error) => console.log(error));


app.listen(port, ()=>console.log("servidor listo en el puerto", port));

















