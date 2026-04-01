import { useCallback, useEffect, useState } from "react";
import { fetchOfficeLocations } from "../services/LocationsApi";
import type { Location } from "../types/location";

/**
 * useLocations hook to handle only fetch and return data
 */
export const useLocations = () => {
    const [locations, setLocations] = useState<Location[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const CARDS_COUNT = 4;
    const [visibleCount, setVisibleCount] = useState(CARDS_COUNT);

    useEffect(() => {
        fetchOfficeLocations()
            .then((data) => setLocations(data))
            .catch(() => setError("Failed to load locations"))
            .finally(() => setLoading(false));
    }, []);


    const loadMoreLocations = useCallback(() => {
        setVisibleCount((prev) => prev + CARDS_COUNT);
    }, [])

    // const visibleLocations = useMemo(() => {
    //     return locations.slice(0, visibleCount);
    // }, [locations, visibleCount])

    return {
        locations: locations.slice(0, visibleCount),
        hasMore: visibleCount < locations.length,
        loadMoreLocations,
        loading,
        error,
    };

};