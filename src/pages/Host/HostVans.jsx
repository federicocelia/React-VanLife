import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getHostVans } from "../../api";

export default function HostVans() {
  const [vans, setVans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getHostVans();
        setVans(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, []);

  const hostVansElement = vans.map((van) => {
    return (
      <Link key={van.id} className="host-van-link-wrapper" to={van.id}>
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

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
