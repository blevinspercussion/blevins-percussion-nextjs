import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div className="main-content">
      <Header />
      <hr />
      <div>
        {/* <Image
          src="/../public/photos/green_drumlites.jpg"
          fill={false}
          height={2500}
          width={2500}
          alt="adam blevins playing drums"
          className="hero-image"
        /> */}
        <Image
          src="/../public/photos/banner.jpg"
          height={1000}
          width={500}
          className="hero-image"
          alt="adam blevins playing drums"
        />
      </div>
      <div className="hero">
        <h1>Adam Blevins, Drummer/Percussionist</h1>
        <button className="btn-cta">Contact Me!</button>
        <h3>Expert drums, percussion, and education</h3>
        <h3>
          Serving Chattanooga, North Georgia and the Southeastern United States
        </h3>
      </div>
    </div>
  );
};

export default HomePage;
