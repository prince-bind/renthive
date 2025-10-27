'use client';
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PlusCircle, Home, Database } from "lucide-react";
import { Property } from "@/types/property-type";
import axios from "axios";

export default function OwnerDashboard({ ownerId }: { ownerId: string }) {
    const [properties, setProperties] = useState<Property[]>([]);
    const [fetching, setfetching] = useState(true)

    useEffect(() => {
        // Fetch properties for the logged-in owner
        const fetchProperties = async () => {
            try {
                const res = await axios.get(`/api/properties/owner?id=${ownerId}`); // <-- Your API route
                const data = await res.data;
                setProperties(data.data);
            } catch (err) {
                console.error("Error fetching properties:", err);
            }
        };
        fetchProperties();
        setfetching(false)
    }, [ownerId]);

    return (
        <div className="max-w-5xl mt-10 mx-auto">
            {/* Dashboard Section */}
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold">My Properties</h2>
                <Link
                    href="/list-property"
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                >
                    <PlusCircle size={20} />
                    Add Property
                </Link>
            </div>

            {properties.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                    {fetching ? (
                        <div className="flex flex-col items-center">
                            <Database size={48} className="animate-spin mb-4" />
                            Loading your properties...
                        </div>
                    ) :
                        ("No properties yet. Add your first one!")}
                </div>
            ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {properties.map((property) => (
                        <div
                            key={property._id}
                            className="bg-white shadow rounded-lg overflow-hidden hover:shadow-lg transition"
                        >
                            <div className="h-48 w-full relative">
                                <Image
                                    // src={property.image || "/placeholder.jpg"}
                                    src={"/modern-pg-room.png"}
                                    alt={property.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{property.title}</h3>
                                <p className="text-gray-500 flex items-center gap-1 text-sm">
                                    {/* <MapPin size={56} /> */}
                                    {property.address}, {property.city}, {property.state}, {property.zipCode}
                                </p>
                                <p className="text-gray-700 mt-1 flex items-center gap-1">
                                    <Home size={14} /> {property.type.toUpperCase()}
                                </p>
                                <p className="text-blue-600 font-semibold mt-2">
                                    ₹{property.price}/month
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
