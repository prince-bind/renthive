"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

type College = {
  id: string;
  name: string;
};

export default function Filters({
  colleges,
  onApply,
}: {
  colleges: College[];
  onApply?: () => void;
}) {
  const router = useRouter();
  const params = useSearchParams();

  // --- state derived from URL ---
  const [city, setCity] = useState(params.get("city") || "");
  const [type, setType] = useState(params.get("type") || "");
  const [gender, setGender] = useState(params.get("gender") || "");
  const [occupancy, setOccupancy] = useState(params.get("occupancy") || "");
  const [rentMin, setRentMin] = useState(params.get("rentMin") || "");
  const [rentMax, setRentMax] = useState(params.get("rentMax") || "");

  // --- college autocomplete ---
  const [collegeQuery, setCollegeQuery] = useState("");
  const [collegeId, setCollegeId] = useState(params.get("collegeId") || "");
  const [showSuggestions, setShowSuggestions] = useState(false);

  // Sync college name from URL
  useEffect(() => {
    if (collegeId) {
      const selected = colleges.find((c) => c.id === collegeId);
      if (selected) setCollegeQuery(selected.name);
    }
  }, [collegeId, colleges]);

  const filteredColleges = colleges.filter((college) =>
    college.name.toLowerCase().includes(collegeQuery.toLowerCase())
  );

  const applyFilters = () => {
    const q = new URLSearchParams();

    if (city) q.set("city", city);
    if (type) q.set("type", type);
    if (gender) q.set("gender", gender);
    if (occupancy) q.set("occupancy", occupancy);
    if (collegeId) q.set("collegeId", collegeId);
    if (rentMin) q.set("rentMin", rentMin);
    if (rentMax) q.set("rentMax", rentMax);

    router.push(`/search?${q.toString()}`);
    onApply?.();
  };

  const clearFilters = () => {
    setCity("");
    setType("");
    setGender("");
    setOccupancy("");
    setCollegeQuery("");
    setCollegeId("");
    setRentMin("");
    setRentMax("");
    setShowSuggestions(false);

    router.push("/search");
    onApply?.();
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm space-y-5">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filter Results</h2>
        <button
          onClick={clearFilters}
          className="text-sm font-medium text-[#3E568C] hover:underline"
        >
          Clear
        </button>
      </div>

      {/* City */}
      <div>
        <label className="text-sm font-medium">City</label>
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="e.g. Noida"
          className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
        />
      </div>

      {/* College autocomplete */}
      <div className="relative">
        <label className="text-sm font-medium">College</label>
        <input
          value={collegeQuery}
          onChange={(e) => {
            setCollegeQuery(e.target.value);
            setCollegeId("");
            setShowSuggestions(true);
          }}
          onFocus={() => setShowSuggestions(true)}
          placeholder="Type college name..."
          className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
        />

        {showSuggestions && collegeQuery && (
          <div className="absolute z-20 mt-1 w-full bg-white border rounded-lg shadow-sm max-h-48 overflow-y-auto">
            {filteredColleges.length ? (
              filteredColleges.map((college) => (
                <button
                  key={college.id}
                  onClick={() => {
                    setCollegeQuery(college.name);
                    setCollegeId(college.id);
                    setShowSuggestions(false);
                  }}
                  className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100"
                >
                  {college.name}
                </button>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500">
                No colleges found
              </div>
            )}
          </div>
        )}
      </div>

      {/* Type */}
      <div>
        <label className="text-sm font-medium">Property Type</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">All</option>
          <option value="PG">PG</option>
          <option value="FLAT">Flat</option>
        </select>
      </div>

      {/* Gender */}
      <div>
        <label className="text-sm font-medium">Gender</label>
        <select
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Any</option>
          <option value="BOYS">Boys</option>
          <option value="GIRLS">Girls</option>
          <option value="UNISEX">Unisex</option>
        </select>
      </div>

      {/* Occupancy */}
      <div>
        <label className="text-sm font-medium">Occupancy</label>
        <select
          value={occupancy}
          onChange={(e) => setOccupancy(e.target.value)}
          className="mt-1 w-full border rounded-lg px-3 py-2 text-sm"
        >
          <option value="">Any</option>
          <option value="SINGLE">Single</option>
          <option value="DOUBLE">Double</option>
          <option value="TRIPLE">Triple</option>
        </select>
      </div>

      {/* Rent */}
      <div>
        <label className="text-sm font-medium">Budget (₹)</label>
        <div className="flex gap-2 mt-1">
          <input
            type="number"
            placeholder="Min"
            value={rentMin}
            onChange={(e) => setRentMin(e.target.value)}
            className="w-1/2 border rounded-lg px-2 py-2 text-sm"
          />
          <input
            type="number"
            placeholder="Max"
            value={rentMax}
            onChange={(e) => setRentMax(e.target.value)}
            className="w-1/2 border rounded-lg px-2 py-2 text-sm"
          />
        </div>
      </div>

      <button
        onClick={applyFilters}
        className="w-full bg-[#3E568C] hover:bg-[#334873] text-white py-2.5 rounded-lg text-sm font-medium transition"
      >
        Apply Filters
      </button>
    </div>
  );
}
