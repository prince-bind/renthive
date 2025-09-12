import mongoose from "mongoose";

const { Schema, model, models } = mongoose;

// ------------------- User Schema -------------------
const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, unique: true, required: true },
    phone: { type: String, unique: true, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["user", "student", "owner"], default: "user" },
    created_at: { type: Date, default: Date.now },
    // Relations
    student: { type: Schema.Types.ObjectId, ref: "Student" },
    owner: { type: Schema.Types.ObjectId, ref: "Owner" },
  },
  { timestamps: false }
);

// ------------------- Student Schema -------------------
const studentSchema = new Schema(
  {
    photo: { type: String, default: "" },
    college: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", unique: true, required: true },
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
  },
  { timestamps: false }
);

// ------------------- Owner Schema -------------------
const ownerSchema = new Schema(
  {
    photo: { type: String, default: "" },
    aadhaarNo: { type: String, required: true },
    user: { type: Schema.Types.ObjectId, ref: "User", unique: true, required: true },
    properties: [{ type: Schema.Types.ObjectId, ref: "Property" }],
  },
  { timestamps: false }
);

// ------------------- Property Schema -------------------
const propertySchema = new Schema(
  {
    type: { type: String, enum: ["pg", "flat"], default: "pg" },
    title: { type: String, required: true },
    description: { type: String, required: true },
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
    owner: { type: Schema.Types.ObjectId, ref: "Owner", required: true },
    ratings: [{ type: Schema.Types.ObjectId, ref: "Rating" }],
  },
  { timestamps: false }
);

// ------------------- Rating Schema -------------------
const ratingSchema = new Schema(
  {
    rating: { type: Number, min: 1, max: 5, required: true },
    review: { type: String },
    createdAt: { type: Date, default: Date.now },
    student: { type: Schema.Types.ObjectId, ref: "Student", required: true },
    property: { type: Schema.Types.ObjectId, ref: "Property", required: true },
  },
  { timestamps: false }
);

// Unique compound index → one rating per student per property
ratingSchema.index({ student: 1, property: 1 }, { unique: true });

// ------------------- Export Models -------------------
export const User = models.User || model("User", userSchema);
export const Student = models.Student || model("Student", studentSchema);
export const Owner = models.Owner || model("Owner", ownerSchema);
export const Property = models.Property || model("Property", propertySchema);
export const Rating = models.Rating || model("Rating", ratingSchema);