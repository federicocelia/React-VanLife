import { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import { getVans } from "../api";

export default function VanDetail() {
  const params = useParams();
  const location = useLocation();

  const search = location.state?.search || "";
  const vanType = new URLSearchParams(search).get("type");

  const [van, setVan] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadVans() {
      setLoading(true);
      try {
        const data = await getVans(params.id);
        setVan(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    loadVans();
  }, [params.id]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>;
  }

  return (
    <div className="van-detail-container ">
      <Link
        className="back-to-full-van-list"
        to={!location.state ? "/vans" : `/vans?${search}`}
        relative="path"
      >
        Back to {vanType ? `${vanType}` : "all"} vans
      </Link>
      {van ? (
        <div className="van-detail">
          <div className="van-detail-img">
            <img src={van.imageUrl} />
          </div>
          <div className="van-detail-description">
            <p className={`van-tag ${van.type}`}>{van.type}</p>
            <h2>{van.name}</h2>
            <p className="van-price">
              <span>${van.price}</span>/day
            </p>
            <p className="van-detail-text">{van.description}</p>
            <button className="btn van-details-btn">Rent this van</button>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}
