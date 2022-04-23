import heroGrid from "../assets/images/hero-grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero__image-wrapper">
        <img src={heroGrid} alt="" />
      </div>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  );
}
