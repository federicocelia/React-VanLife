import { useOutletContext } from "react-router";

export default function HostVanInfo() {
  const van = useOutletContext();
  console.log(van);

  if (!van) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="host-van-info-section">
      <div className="host-van-info-row">
        <span className="host-van-info-label">Name:</span>
        <span className="host-van-info-value">{van.name}</span>
      </div>

      <div className="host-van-info-row">
        <span className="host-van-info-label">Category:</span>
        <span className="host-van-info-value">{van.type}</span>
      </div>

      <div className="host-van-info-row">
        <span className="host-van-info-label">Description:</span>
        <span className="host-van-info-value">{van.description}</span>
      </div>

      <div className="host-van-info-row">
        <span className="host-van-info-label">Visibility:</span>
        <span className="host-van-info-value">Public</span>
      </div>
    </div>
  );
}
