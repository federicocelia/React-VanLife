import { useState } from "react";
import { useOutletContext } from "react-router";

export default function HostVanPhotos() {
  const van = useOutletContext();
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      <div className="host-van-photos-section">
        <img
          src={van.imageUrl}
          alt={`Photo of ${van.name}`}
          onClick={() => setShowImage(true)}
          className="thumbnail"
        />

        {showImage && (
          <div className="image-overlay" onClick={() => setShowImage(false)}>
            <img
              src={van.imageUrl}
              alt={`Photo of ${van.name}`}
              className="full-image"
            />
          </div>
        )}
      </div>
    </>
  );
}
