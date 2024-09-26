import mongoose from 'mongoose';
const { Schema } = mongoose;

const exerciseSchema = new Schema({
  name: String, 
  type: String,
});