import type { LocationCardProps } from "../../types/location";

/**
 * Simple LocationCard component
 * Just displays the basic info
 */
export const LocationCard = ({ name, address1, address2, city, postcode }: LocationCardProps) => {

    return (
        <div>
            <h3>{name}</h3>
            <p>{address1}</p>
            <p>{address2}</p>
            <p>{city}, {postcode}</p>
        </div>
    )
};