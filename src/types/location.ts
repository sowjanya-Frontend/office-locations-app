//Full location object returned by API
export interface Location {
    name: string;
    address1: string;
    address2: string;
    city: string;
    postcode: string;
    number?: string;
    email?: string;
    map_url?: string;
    lat?: string;
    lon?: string;
}

// Only pick the props needed for the LocationCard
export type LocationCardProps = Pick<Location, 'name' | 'address1' | 'address2' | 'city' | 'postcode'>;