
const ECG = require ('../models/signalECG')

function creardispositivo(req,res){

    const nuevodispositivo = new ECG ({
      id_Number : req.body.id_number,
      datos : [],
      fecha : []
    })

    nuevodispositivo.save((err)=>{
        if(err) return res.status(500).send({message:`Error al crear dispositivo:${err}`})
        return res.status(201).send({message:'dispositivo creado correctamente'})
    })
}

function getDispositivos(req,res){

    ECG.find({},function(err,dispositivos){
      if(err) return res.status(500).send({message:`Error al mostrar dispositivo:${err}`})
      return res.status(200).send(dispositivos)

    })
}

function updatedato(dispositivo,next){

      var iddispositivo = dispositivo.id_Number
      var dato = dispositivo.data
      var temp = dispositivo.temp
      var presion = dispositivo.presion
      ECG.findOne({id_Number:iddispositivo},(err,dispositivo)=>{
        if(err)return next ({ message:`Error al editar la base de datos ${err}`})

        //dispositivo.datos.push(dato)
        //dispositivo.datos.push.apply(dispositivo.datos,dato)
        dispositivo.temp.push.apply(dispositivo.temp,temp)
        dispositivo.presion.push.apply(dispositivo.presion,presion)
        var d = new Date(Date.now());
        var n = d.toLocaleString();
        dispositivo.fecha.push(n);
        dispositivo.save(function (err,res){
          if(err) return console.log(`No se pudo ${err}`)
          console.log ('Dato actualizado');
          //console.log(n)
          //console.log(dato)

        });

       return next(dispositivo)
    })
}




function deletedato(dispositivo,next){

      var iddispositivo = dispositivo.id_Number
      //var dato = dispositivo.datos

      ECG.findOne({id_Number:iddispositivo},(err,dispositivo)=>{
      //ECG.findOne({_id: "5beb5d1f166a9321507231fb"},(err,dispositivo)=>{
        if(err)return next ({ message:`Error al editar la base de datos ${err}`})

          // dispositivo.fecha.splice(1,1)
          dispositivo.datos=[]
          dispositivo.fecha=[]
          dispositivo.temp=[]
          dispositivo.presion=[]
           //dispositivo.datos.splice(1,1)
        dispositivo.save(function (err,res){
          if(err) return console.log('No se pudo')
          console.log ('Dato borrado');
        });

       return next(dispositivo)
    })
}



module.exports ={
  creardispositivo,
  getDispositivos , updatedato,deletedato
}
