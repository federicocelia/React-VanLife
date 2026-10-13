import { useState, useEffect } from "react";
import { Link, NavLink, useParams, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  const activeStyle = {
    fontWeight: 700,
    textDecoration: "underline",
    textUnderlineOffset: "4px",
  };

  const params = useParams();
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans[0]));
  }, [params.id]);

  const vanDetailElement = (
    <>
      <article className="host-van-detail-card" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-detail-info">
          <p className="van-tag luxury">Luxury</p>
          <h3 className="title">{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </article>
    </>
  );

  return (
    <>
      <div className="host-van-details-container">
        <Link className="back-to-full-host-van-list" to=".." relative="path">
          Back to all vans
        </Link>
        {van.length === 0 ? <h2>Loading...</h2> : <div>{vanDetailElement}</div>}
        <nav className="host-van-detail-nav">
          {
            <>
              <NavLink
                to="."
                end
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Details
              </NavLink>
              <NavLink
                to="pricing"
                end
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Pricing
              </NavLink>
              <NavLink
                to="photos"
                end
                style={({ isActive }) => (isActive ? activeStyle : null)}
              >
                Photos
              </NavLink>
            </>
          }
        </nav>
        {<Outlet context={van} />}
      </div>
    </>
  );
}
