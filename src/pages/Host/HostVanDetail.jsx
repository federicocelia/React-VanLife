import { useState, useEffect } from "react";
import { Link, useParams, Outlet } from "react-router-dom";

export default function HostVanDetail() {
  /**
   * Challenge (not optional!): build the shared UI portion of the
   * Host Van Detail page. This is
   *
   * Optional portion: also style it to look like the design.
   *
   * For now, get the data from a request to `/api/host/vans/:id`
   * and display the van image, name, price, type
   */
  const params = useParams();
  const [van, setVan] = useState([]);

  useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((response) => response.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  const vanDetailElement = van.map((van) => (
    <>
      <article className="host-van-detail-card" key={van.id}>
        <img src={van.imageUrl} alt={`Photo of ${van.name}`} />
        <div className="host-van-detail-info">
          <p class="van-tag luxury">Luxury</p>
          <h3 className="title">{van.name}</h3>
          <p>${van.price}/day</p>
        </div>
      </article>
    </>
  ));

  return (
    <>
      <div className="host-van-details-container">
        <Link className="back-to-full-host-van-list" to=".." relative="path">
          Back to all vans
        </Link>
        {van.length === 0 ? <h2>Loading...</h2> : <div>{vanDetailElement}</div>}
        {<Outlet />}
      </div>
    </>
  );
}
