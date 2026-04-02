import type { LocationCardProps } from "../../types/location";
import { LocationCard } from "../Location/LocationCard";

type LocationListProps = {
    locations: LocationCardProps[];
};

/**
 * To render list of location cards
 */
export const LocationList = ({ locations }: LocationListProps) => {
    return (
        <div className="locations-row" role="list">
            {locations.map((location) => (
                <LocationCard key={location.name} {...location} />
            ))}
        </div>

        // <ul className="locations-row">
        //     {locations.map((location) => (
        //         <li key={`${location.name}-${location.postcode}`}>
        //             <LocationCard {...location} />
        //         </li>
        //     ))}
        // </ul>

    );
};