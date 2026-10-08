import { useState, useEffect } from "react";

export default function Vans() {
  // variables

  const vanTypes = ["simple", "luxury", "rugged"];

  // states

  const [selectedType, setSelectedType] = useState(null);
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(true);

  // derived variables
  const displayedVans = selectedType
    ? vans.filter((van) => van.type === selectedType)
    : vans;

  const buttonsElement = vanTypes.map((vantype) => {
    return (
      <button
        key={vantype}
        className={`btn btn-${vantype}`}
        aria-pressed={selectedType === vantype}
        onClick={() =>
          setSelectedType(selectedType === vantype ? null : vantype)
        }
      >
        {vantype}
      </button>
    );
  });

  useEffect(() => {
    fetch("/api/vans")
      .then((response) => response.json())
      .then((data) => {
        setVans(data.vans);
      })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const vansElement = displayedVans.map((van) => {
    return (
      <article key={van.id}>
        <div>
          <img
            src={van.imageUrl}
            alt={`minivan type ${van.type} ${van.name}`}
          />
        </div>
        <div className="list-van-name">
          <h3>{van.name}</h3>
          <p className="list-day-price">{van.price}</p>
          <p className="van-tag">{van.type}</p>
        </div>
      </article>
    );
  });

  return (
    <div className="vans-container">
      <section>
        <h1>Explore our van options</h1>
        <section
          className="filtering-van-btns"
          role="group"
          aria-label="Filter vans by type"
        >
          {buttonsElement}
          <button
            aria-label="Clear all active filters"
            onClick={() => setSelectedType(null)}
          >
            Clear filters
          </button>
        </section>
        <section>{loading ? <p>Loading vans...</p> : vansElement}</section>
      </section>
    </div>
  );
}
