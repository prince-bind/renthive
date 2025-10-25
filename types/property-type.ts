export interface Property {
    _id: string;
    type: string;
    title: string;
    description: string;
    gender: string;
    college: string[];
    address: string;
    city: string;
    state: string;
    zipCode: string;
    location: string;
    price: number;
    amenities: string[];
    images: string[];
    occupancy: string;
    furnished: boolean;
    occupied: boolean;
    createdAt: string;
    user?: {
        name: string
        phone?: boolean
        email?: string
    }
    [key: string]: any
}