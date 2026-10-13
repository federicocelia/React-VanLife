import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function HostVans() {
  const [vans, setVans] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans`)
      .then((response) => response.json())
      .then((data) => {
        setVans(data.vans);
      })
      .catch((error) => console.error(error));
  }, []);

  const hostVansElement = vans.map((van) => {
    return (
      <Link
        key={van.id}
        className="host-van-link-wrapper"
        to={`/host/vans/${van.id}`}
      >
        <article className="host-van-card">
          <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
          <div className="host-van-info">
            <h3>{van.name}</h3>
            <p>${van.price}/day</p>
          </div>
        </article>
      </Link>
    );
  });

  return (
    <article className="host-listed-vans-container">
      <h1 className="title">Your listed vans</h1>
      <section className="host-listed-vans-list">
        {" "}
        {vans.length > 0 ? (
          <section>{hostVansElement}</section>
        ) : (
          <h2>Loading...</h2>
        )}
      </section>
    </article>
  );
}
