import "../styles/page.scss"; // Import styles for the homepage

export default function HomePage() {
  return (
    <main className="main-content">
      {/* Hero Section */}
      <section className="hero">
        <video
          className="hero__video"
          src="/videos/restaurant.mp4" // Replace with your video path
          autoPlay
          loop
          muted
        />
        <div className="hero__content">
          <h1 className="fade-text">Tagine Tales</h1>
          <p className="fade-text">Where Every Dish Tells a Story</p>
        </div>
      </section>

      {/* Additional Sections */}
      <section className="about">
        <h2>About Us</h2>
        <p>Welcome to Najoi, where flavors meet elegance...</p>
      </section>
    </main>
  );
}
