export interface Address {
    building: string;
    room: string;
    street: string;
    city: string;
    postalCode: string;
    country: string;
}

export interface MapCoordinates {
    lat: number;
    lng: number;
}

export interface ContactInfo {
    labName: string;
    address: Address;
    phone: string;
    email: string;
    mapCoordinates?: MapCoordinates;
}
