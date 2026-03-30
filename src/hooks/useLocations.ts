import { useEffect, useState } from "react";
import { fetchOfficeLocations } from "../services/LocationsApi";
import type { Location } from "../types/location";

/**
 * useLocations hook to handle only fetch and return data
 */
export const useLocations = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchOfficeLocations()
            .then((data) => setLocations(data))
            .catch(() => setError("Failed to load locations"))
            .finally(() => setLoading(false));
    }, []);

    // Only return first 4 locations to show only 4 location as per requirement
    const visibleLocations = locations.slice(0, 4);


    return { locations: visibleLocations, loading, error };
};