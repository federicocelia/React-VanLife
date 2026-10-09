import { useState, useEffect } from "react";
import clsx from "clsx";

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
        className={`btn btn-van-type btn-${vantype}`}
        aria-pressed={selectedType === vantype}
        onClick={() =>
          setSelectedType(selectedType === vantype ? null : vantype)
        }
      >
        {vantype[0].toUpperCase() + vantype.slice(1)}
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
      <article key={van.id} className="list-van">
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
        <p className={clsx("van-tag", `${van.type}`)}>
          {van.type[0].toUpperCase() + van.type.slice(1)}
        </p>
      </article>
    );
  });

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
          <button
            className="btn btn-van-type clear-btn"
            aria-label="Clear all active filters"
            onClick={() => setSelectedType(null)}
          >
            Clear filters
          </button>
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
