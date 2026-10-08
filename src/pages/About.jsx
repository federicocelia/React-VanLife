import { Link } from "react-router-dom";
import aboutImg from "../assets/images/Van-Sunset-kevin-schmid.jpg";

export default function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-img-container">
          <img
            className="about-img"
            src={aboutImg}
            alt="minivan close to a lake during sunset"
          />
        </div>

        <section className="about-section">
          <h1 className="about-title">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <p className="about-text">
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra 😉)
          </p>
          <p className="about-text">
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
          <div className="about-cta-section">
            <p>Your destination is waiting.</p>
            <p> Your van is ready.</p>
            <Link to="/vans" className="btn cta-about-btn">
              Explore our vans
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
