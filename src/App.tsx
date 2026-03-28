import { LocationCard } from "./components/Location/LocationCard";
import { useLocations } from "./hooks/useLocations";

function App() {

  const { locations, loading, error } = useLocations();

  return (
    <main className="container">
      <h1>Office Locations</h1>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {!loading &&
        locations.map((location) => (
          <LocationCard key={location.name} {...location} />
        ))}
    </main>
  );
}

export default App
