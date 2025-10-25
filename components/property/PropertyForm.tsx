'use client';
import React, { useState } from "react";

type PropertyType = "pg" | "flat";
type Gender = "male" | "female" | "unisex";
type Occupancy = "single" | "double" | "triple";

interface PropertyFormData {
  type: PropertyType;
  title: string;
  description: string;
  gender: Gender;
  college: string[];
  address: string;
  city: string;
  state: string;
  zipCode: string;
  location: string;
  price: number;
  amenities: string[];
  images: string[];
  occupancy: Occupancy;
  furnished: boolean;
  occupied: boolean;
}

const initialState: PropertyFormData = {
  type: "pg",
  title: "",
  description: "",
  gender: "unisex",
  college: [""],
  address: "",
  city: "",
  state: "",
  zipCode: "",
  location: "",
  price: 0,
  amenities: [],
  images: [""],
  occupancy: "single",
  furnished: false,
  occupied: false,
};

export default function PropertyForm() {
  const [form, setForm] = useState<PropertyFormData>(initialState);
  const [submitting, setSubmitting] = useState(false);
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox") {
      setForm(prev => ({ ...prev, [name]: checked } as unknown as PropertyFormData));
      return;
    }
    if (type === "number") {
      setForm(prev => ({ ...prev, [name]: Number(value) } as unknown as PropertyFormData));
      return;
    }
    setForm(prev => ({ ...prev, [name]: value } as unknown as PropertyFormData));
  };

  const updateArrayField = (key: "college" | "amenities" | "images", idx: number, value: string) => {
    setForm(prev => {
      const copy = [...prev[key]];
      copy[idx] = value;
      return { ...prev, [key]: copy } as PropertyFormData;
    });
  };
  const addArrayItem = (key: "college" | "amenities" | "images") =>
    setForm(prev => ({ ...prev, [key]: [...prev[key], ""] } as PropertyFormData));
  const removeArrayItem = (key: "college" | "amenities" | "images", idx: number) =>
    setForm(prev => ({ ...prev, [key]: prev[key].filter((_, i) => i !== idx) } as PropertyFormData));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/properties/add-property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log("response", await res.json());
      alert("Property submitted successfully!");
    } catch (err) {
      console.error(err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-md space-y-6">
      <h2 className="text-2xl font-semibold">Add Your Property</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Type</label>
          <select name="type" value={form.type} onChange={onChange} className="w-full border rounded px-3 py-2">
            <option value="pg">PG</option>
            <option value="flat">Flat</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Occupancy</label>
          <select name="occupancy" value={form.occupancy} onChange={onChange} className="w-full border rounded px-3 py-2">
            <option value="single">Single</option>
            <option value="double">Double</option>
            <option value="triple">Triple</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Title</label>
        <input name="title" value={form.title} onChange={onChange} required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <textarea name="description" value={form.description} onChange={onChange} required className="w-full border rounded px-3 py-2 min-h-[100px]" />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Gender</label>
        <select name="gender" value={form.gender} onChange={onChange} className="w-full border rounded px-3 py-2">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="unisex">Unisex</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Colleges</label>
        <div className="space-y-2">
          {form.college.map((c, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input value={c} onChange={e => updateArrayField("college", idx, e.target.value)} required className="flex-1 border rounded px-3 py-2" />
              <button type="button" onClick={() => removeArrayItem("college", idx)} className="text-white bg-red-500 px-3 py-1 rounded">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem("college")} className="mt-2 inline-flex items-center gap-2 text-white bg-green-600 px-3 py-1 rounded">
            + Add College
          </button>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <input name="address" value={form.address} onChange={onChange} required className="w-full border rounded px-3 py-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input name="city" value={form.city} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">State</label>
          <input name="state" value={form.state} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Zip Code</label>
          <input name="zipCode" value={form.zipCode} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Google Map Location</label>
        <input name="location" value={form.location} onChange={onChange} required className="w-full border rounded px-3 py-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <input name="price" type="number" value={form.price} onChange={onChange} required className="w-full border rounded px-3 py-2" />
        </div>

        <div className="flex items-end">
          <label className="flex items-center gap-2 text-sm">
            <input type="checkbox" name="furnished" checked={form.furnished} onChange={onChange} className="w-4 h-4" />
            Furnished
          </label>
          <label className="flex items-center gap-2 text-sm ml-6">
            <input type="checkbox" name="occupied" checked={form.occupied} onChange={onChange} className="w-4 h-4" />
            Occupied
          </label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">Amenities</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {["Wifi", "AC", "Mess", "Laundry", "Parking", "Daily Housekeeping"].map((amenity) => (
            <label key={amenity} className="flex items-center gap-2 text-sm border p-2 rounded cursor-pointer hover:bg-gray-50">
              <input
                type="checkbox"
                checked={form.amenities.includes(amenity)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setForm((prev) => ({
                    ...prev,
                    amenities: checked
                      ? [...prev.amenities, amenity]
                      : prev.amenities.filter((a) => a !== amenity),
                  }));
                }}
                className="w-4 h-4"
              />
              {amenity}
            </label>
          ))}
        </div>
      </div>


      <div>
        <label className="block text-sm font-medium mb-2">Images (URLs)</label>
        <div className="space-y-2">
          {form.images.map((img, idx) => (
            <div key={idx} className="flex gap-2 items-center">
              <input value={img} onChange={e => updateArrayField("images", idx, e.target.value)} className="flex-1 border rounded px-3 py-2" />
              <button type="button" onClick={() => removeArrayItem("images", idx)} className="text-white bg-red-500 px-3 py-1 rounded">Remove</button>
            </div>
          ))}
          <button type="button" onClick={() => addArrayItem("images")} className="mt-2 inline-flex items-center gap-2 text-white bg-green-600 px-3 py-1 rounded">
            + Add Image
          </button>
        </div>
      </div>

      <div className="flex justify-end gap-3">
        <button type="submit" disabled={submitting} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 disabled:opacity-50">
          {submitting ? "Submitting..." : "Submit"}
        </button>
        <button type="button" onClick={() => setForm(initialState)} className="bg-gray-200 px-4 py-2 rounded">
          Reset
        </button>
      </div>
    </form>
  );
}