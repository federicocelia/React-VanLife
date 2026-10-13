import { useOutletContext } from "react-router";

export default function HostVanPricing() {
  const van = useOutletContext();

  if (!van) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="host-van-pricing-section">
      <div className="host-van-pricing-row">
        <p className="host-van-pricing">
          ${van.price}
          <span>/day</span>
        </p>
      </div>
    </div>
  );
}
