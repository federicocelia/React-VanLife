import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { getVans } from "../api";

export default function Vans() {
  // Constants
  const vanTypes = ["simple", "luxury", "rugged"];

  // URL search parameters
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get("type");

  // Component state
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Helper functions
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Derived data
  const displayedVans = typeFilter
    ? vans.filter((van) => van.type === typeFilter)
    : vans;

  // Data fetching
  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans();
        setVans(data);
      } catch (error) {
        console.log("There was an error");
        console.log(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    loadVans();
  }, []);

  // Filter buttons
  const buttonsElement = vanTypes.map((vanType) => (
    <button
      key={vanType}
      onClick={() => setSearchParams({ type: `${vanType}` })}
      className={`btn btn-van-type btn-${vanType}`}
      aria-pressed={typeFilter === vanType}
    >
      {capitalize(vanType)}
    </button>
  ));

  // Van cards
  const vansElement = (displayedVans || []).map((van) => (
    <article key={van.id} className="list-van">
      <Link
        to={van.id}
        state={{ search: searchParams.toString() }}
        aria-label={`View details for ${van.name} priced at $${van.price} per day`}
      >
        <div className="list-van-img-container">
          <img
            className="list-van-img"
            src={van.imageUrl}
            alt={`minivan type ${van.type} ${van.name}`}
          />
        </div>

        <div className="list-van-name">
          <h3>{van.name}</h3>

          <p className="list-day-price">
            ${van.price}
            <span className="list-day-price-duration">/day</span>
          </p>
        </div>

        <p className={`van-tag ${van.type}`}>{capitalize(van.type)}</p>
      </Link>
    </article>
  ));

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <>
      <div className="content-container">
        <h1 className="vans-section-title">Explore our van options</h1>

        <section
          className="filtering-van-btns"
          role="group"
          aria-label="Filter vans by type"
        >
          {buttonsElement}

          {typeFilter ? (
            <button
              className="btn btn-van-type clear-btn"
              aria-label="Clear all active filters"
              onClick={() => setSearchParams({})}
            >
              Clear filters
            </button>
          ) : null}
        </section>
      </div>

      <div className="vans-container">
        <section className="vans-section">
          <section className="vans-list-section">
            {loading ? <p>Loading vans...</p> : vansElement}
          </section>
        </section>
      </div>
    </>
  );
}
