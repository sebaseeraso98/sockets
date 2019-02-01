const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ECGSchema = new Schema ({
  id_Number : Number,
  datos : [Number],
  temp :[Number],
  presion:[Number],
  fono:[Number],
  frec:[Number],
  //fecha : [Date]
  fecha : []
})

module.exports = mongoose.model('Modelo',ECGSchema)
