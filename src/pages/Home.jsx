import panorama from "../assets/images/Mountains-panora-makalen-emsley.jpg";

export default function Home() {
  return (
    <>
      <section
        className="hero"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), 
          rgba(0, 0, 0, 0.3)), 
          url(${panorama})`,
        }}
      >
        <h1 className="hero-title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="hero-subtitle">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <button className="cta-hero-btn">Find your van</button>
      </section>
    </>
  );
}
