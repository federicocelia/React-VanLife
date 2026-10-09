import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import clsx from "clsx";

export default function VanDetail() {
  const params = useParams();

  const [van, setVan] = useState(null);

  useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  console.log(van);
  return (
    <div className="van-detail-container ">
      <Link className="back-to-full-van-list" to="/vans">
        Back to all vans
      </Link>
      {van ? (
        <div className="van-detail">
          <div className="van-detail-img">
            <img src={van.imageUrl} />
          </div>
          <div className="van-detail-description">
            <p className={clsx("van-tag", `${van.type}`)}>{van.type}</p>
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
