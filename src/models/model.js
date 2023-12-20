import mongoose from "mongoose";
import { productSchema } from "./model.schema.js";


export const Product = mongoose.model("Product", productSchema)