import mongoose, { Schema } from "mongoose";
import mongodb from "mongodb";

const messageSchema = new Schema({
  id: { type: Number, required: true },
  message: { type: String, required: true },
  sender: { type: String, required: true },
  timestamp: { type: Date, required: true },

  // key from MySQL databse chat groups
  chatId: { type: Number, required: true },
});
