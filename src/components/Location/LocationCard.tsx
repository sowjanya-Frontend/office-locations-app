import type { LocationCardProps } from "../../types/location";
import "./LocationCard.scss"
/**
 * Simple LocationCard component
 * Just displays the basic info
 */
export const LocationCard = ({ name, address1, address2, city, postcode }: LocationCardProps) => {

    return (
        <article className="location-card">
            <h3 className="location-card_title">{name}</h3>
            <div className="location-card_address">
                <p>{address1}</p>
                <p>{address2}</p>
                <p>
                    {city}, {postcode}
                </p>
            </div>
        </article>
    )
};