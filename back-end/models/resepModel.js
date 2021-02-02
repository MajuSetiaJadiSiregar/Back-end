import mongoose from 'mongoose';

const resepMakanan = new mongoose.Schema({
   title : { type : String, required : true },
   description : { type : String, required : true },
   imageUrl : { type : String, required : true }
});

const ResepModel = mongoose.model('Resep', resepMakanan);
export default ResepModel;