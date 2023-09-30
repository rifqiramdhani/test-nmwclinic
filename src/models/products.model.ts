import { Product } from '@/interfaces/products.interface';
import { Document, Schema, model } from 'mongoose';

const ProductSchema: Schema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    required: true,
  },
});

export const ProductModel = model<Product & Document>('Product', ProductSchema);
