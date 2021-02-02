import ResepModel from '../models/resepModel.js';

export const createResep = async (req, res) => {
   try {
      const { title, description } = req.body;
      const fileName = `images/${req.files[0].filename}`;
      const newResep = new ResepModel({ title, description, imageUrl : fileName});
      await newResep.save();
      res.status(200).json({ success : newResep});
   } catch (error) {
      return res.status(500).json({ message : error.message});
   }
};

export const readResep = async (req, res) => {
   try {
      const readResep = await ResepModel.find();
      res.status(200).json({success : readResep});
   } catch (error) {
      console.log(error);
   };
};

export const searchResep = async (req, res) => {
   try {
      const { title } = req.params;
      const data = title;
      const search = await ResepModel.find({'title' : new RegExp(data, 'i')});
      res.status(200).json({ success : search});
   } catch (error) {
      return res.status(500).json({ message : error.message});
   };
};

export const detailResep = async(req, res) => {
   try {
      const detail = await Product.findOne(req.params.id);
      res.status(200).json({detail : detail});
   } catch (error) {
      return res.status(500).json({ message : error.message});
   };
};