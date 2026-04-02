import type { Location } from "../types/location";

/**
 * Fetches office locations from API
 */
export const fetchOfficeLocations = async (): Promise<Location[]> => {

    const response = await fetch("/afhwm/api/v1/locations");
    // const response = await fetch("http://localhost:5173/locations.json");

    if (!response.ok) {
        throw new Error("Failed to fetch the locations")
    }

    const locationsData: Location[] = await response.json();

    //Limit to 12 locations as per requirement.
    const TOTAL_LOCATION_LIMIT = 12;
    return locationsData.slice(0, TOTAL_LOCATION_LIMIT);

};