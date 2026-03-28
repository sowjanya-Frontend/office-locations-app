import type { Location } from "../types/location";

/**
 * Fetches office locations from API
 */
export const fetchOfficeLocations = async (): Promise<Location[]> => {

    const response = await fetch("/api/api/v1/locations");

    if (!response.ok) {
        throw new Error("Failed to fetch the locations")
    }

    const locationsData: Location[] = await response.json();

    //Limit to 12 locations as per requirement.
    return locationsData.slice(0, 12);

};