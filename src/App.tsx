import { LocationList } from "./components/LocationList/LocationList";
import { useLocations } from "./hooks/useLocations";

function App() {

  const { locations, loading, error, loadMoreLocations, hasMore } = useLocations();

  return (
    <main className="container">
      <div className="locations-section">
        <h2 className="locations-section_title">Office Locations</h2>

        {loading && <p role="status">Loading...</p>}
        {error && <p>{error}</p>}

        {!loading &&
          <LocationList locations={locations} />
        }

        {
          !loading && hasMore && (
            <button className="load-more-btn" onClick={loadMoreLocations} aria-label="Load More Button">Load More</button>
          )
        }

      </div>
    </main>
  );
}

export default App
