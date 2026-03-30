import { LocationCard } from "./components/Location/LocationCard";
import { useLocations } from "./hooks/useLocations";

function App() {

  const { locations, loading, error } = useLocations();

  return (
    <main className="container">
      <div className="locations-section">
        <h2 className="locations-section_title">Office Locations</h2>

        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}

        <div className="locations-row">
          {!loading &&
            locations.map((location) => (
              <LocationCard key={location.name} {...location} />
            ))}
        </div>
      </div>
    </main>
  );
}

export default App
