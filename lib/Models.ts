import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

// ------------------- User Schema -------------------
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "student", "owner"], default: "student" },
    photo: { type: String, default: "" },
    aadhaarNo: { type: String, default: "" },
    created_at: { type: Date, default: Date.now },
    property: { type: Schema.Types.ObjectId, ref: "Property" },
  },
  { timestamps: false }
);

export const User = models.User || model("User", userSchema);

// ------------------- Property Schema -------------------
const propertySchema = new Schema(
  {
    type: { type: String, enum: ["pg", "flat"], default: "pg" },
    title: { type: String, required: true },
    description: { type: String, required: true },
    gender: { type: String, enum: ["male", "female", "unisex"], default: "unisex" },
    college: [{ type: String, required: true }],
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    zipCode: { type: String, required: true },
    location: { type: String, required: true },
    price: { type: Number, required: true },
    amenities: [{ type: String }],
    images: [{ type: String }],
    occupancy: { type: String, enum: ["single", "double", "triple"], default: "single" },
    furnished: { type: Boolean, default: false },
    occupied: { type: Boolean, default: false },
    createdAt: { type: Date, default: Date.now },
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: false }
);

export const Property = models.Property || model("Property", propertySchema);