import mongoose, { Schema, Document } from "mongoose";

export interface IVegetable extends Document {
  name: string;
  price: number;
  unitPerPrice: number;
  unit: "kg" | "dozen" | "per";
  quantity: number;
}

const vegSchema: Schema<IVegetable> = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    unitPerPrice: {
      type: Number,
      required: true,
    },
    unit: {
      type: String,
      enum: ["kg", "dozen", "per"],
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const Vegetable = mongoose.model<IVegetable>("Vegetable", vegSchema);
export default Vegetable;
