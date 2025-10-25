"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
    ArrowLeft,
    MapPin,
    Wifi,
    House,
    WashingMachine,
    Car,
    AirVent,
    Utensils,
    Share2,
    Phone,
    ChevronLeft,
    ChevronRight,
    Users,
    Bath,
    Bed,
    MapPinned
} from "lucide-react";
import { Property } from "@/types/property-type";

interface PropertyDetailsProps {
    property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    if (!property)
        return (
            <div className="text-center text-gray-500 py-10">
                Loading property details...
            </div>
        );

    const nextImage = () => {
        setCurrentImageIndex(
            (prev) => (prev + 1) % (property.images?.length || 1)
        );
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prev) => (prev - 1 + (property.images?.length || 1)) %
                (property.images?.length || 1)
        );
    };

    const getAmenityIcon = (amenity: string) => {
        switch (amenity.toLocaleLowerCase()) {
            case "wifi":
                return <Wifi className="h-4 w-4" />
            case "mess":
                return <Utensils className="h-4 w-4" />
            case "parking":
                return <Car className="h-4 w-4" />
            case "laundry":
                return <WashingMachine className="h-4 w-4" />
            case "ac":
                return <AirVent className="h-4 w-4" />
            case "daily housekeeping":
                return <House className="h-4 w-4" />
            default:
                return null
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <Link
                            href="/search"
                            className="flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                            <ArrowLeft className="h-5 w-5" />
                            <span>Back to Search</span>
                        </Link>

                        <div className="flex items-center gap-3">
                            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                                <Share2 className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Image Gallery */}
                        <div className="relative">
                            <div className="aspect-[16/10] rounded-lg overflow-hidden bg-gray-200">
                                <Image
                                    src={
                                        // property.images?.[currentImageIndex] ||
                                        "/clean-pink-study-room.png"
                                    }
                                    alt={property.title}
                                    width={1200}
                                    height={800}
                                    className="w-full h-full object-cover"
                                />

                                {/* Navigation Buttons */}
                                <button
                                    onClick={prevImage}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm"
                                >
                                    <ChevronLeft className="h-5 w-5" />
                                </button>
                                <button
                                    onClick={nextImage}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-white/90 hover:bg-white rounded-full shadow-sm"
                                >
                                    <ChevronRight className="h-5 w-5" />
                                </button>

                                {/* Image Counter */}
                                <div className="absolute bottom-4 right-4 px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                                    {currentImageIndex + 1} / {property.images?.length || 1}
                                </div>
                            </div>
                        </div>

                        {/* Property Info */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full capitalize">
                                    {property.type.toUpperCase()}
                                </span>
                                <span className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full capitalize">
                                    {property.gender.toUpperCase()}
                                </span>
                            </div>

                            <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                {property.title}
                            </h1>

                            <div className="flex items-center text-gray-600 mb-2">
                                <MapPin className="h-5 w-5 mr-2" />
                                <span>
                                    {property.address}, {property.city}, {property.state}, {property.zipCode}
                                </span>
                            </div>

                            <p className="text-gray-700 leading-relaxed mb-4">
                                {property.description}
                            </p>

                            {property.college && property.college.length > 0 && (
                                <div>
                                    <h2 className="text-lg font-semibold mb-2">Nearby Colleges</h2>
                                    <ul className="list-disc list-inside text-gray-700">
                                        {property.college.map((clg, idx) => (
                                            <li key={idx}>{clg}</li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* Room Details Section */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">
                                Room Details
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {/* Occupancy */}
                                <div className="flex items-start gap-3">
                                    <Users className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Occupancy</h3>
                                        <p className="text-gray-600 capitalize">
                                            {property.occupancy || "Single/Double"}
                                        </p>
                                    </div>
                                </div>

                                {/* Bathroom */}
                                <div className="flex items-start gap-3">
                                    <Bath className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Bathroom</h3>
                                        <p className="text-gray-600 capitalize">
                                            {property.occupancy?.toLowerCase() === "single" ? "Attached" : "Shared"}
                                        </p>
                                    </div>
                                </div>

                                {/* Furnishing */}
                                <div className="flex items-start gap-3">
                                    <Bed className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-semibold text-gray-900">Furnishing</h3>
                                        <p className="text-gray-600 capitalize">
                                            {property.furnished && "Fully Furnished"}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Amenities */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                Amenities
                            </h2>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {property.amenities.map((amenity, idx) => (
                                    <div
                                        key={idx}
                                        className="flex items-center gap-3 p-3 rounded-lg border bg-green-50 border-green-200 text-gray-700"
                                    >
                                        {getAmenityIcon(amenity)}
                                        <span className="font-medium capitalize">{amenity}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Rules */}
                        <div className="bg-white rounded-lg p-6 shadow-sm border">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">
                                House Rules
                            </h2>
                            <div className="flex flex-col text-gray-700">
                                <ul className="unordered-list list-disc list-inside space-y-2">
                                    <li >No smoking and drinking inside the premises</li>
                                    <li>Visitors allowed till 9 PM</li>
                                    <li>Monthly rent to be paid by 5th of every month</li>
                                    <li>One month security deposit required</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-6">
                        <div className="bg-white rounded-lg p-6 shadow-sm border sticky top-24">
                            <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-gray-900">
                                    ₹{property.price.toLocaleString()}
                                </div>
                                <div className="text-gray-500">per month</div>
                            </div>

                            <div className="space-y-4">
                                <Link href={`tel:${property.user?.phone}`} className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                    <Phone className="h-5 w-5" />
                                    Call Owner
                                </Link>

                                <Link href={property.location} className="w-full border border-blue-600 text-blue-600 py-3 px-4 rounded-lg font-semibold hover:bg-blue-50 transition flex items-center justify-center gap-2" target="_blank">
                                    <MapPinned className="h-5 w-5" />
                                    Google Map Location
                                </Link>
                            </div>

                            {property.user && (
                                <div className="mt-6 pt-6 border-t">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                            <span className="font-semibold text-blue-600">
                                                {property.user.name.charAt(0)}
                                            </span>
                                        </div>
                                        <p className="font-semibold text-gray-900 flex items-center gap-1">
                                            {property.user.name}
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
