import Link from "next/link";
import Image from "next/image";
import Header from "./components/Header";

const HomePage = () => {
  return (
    <div>
      <Header />
      <hr />
      <div className="hero">
        <Image
          src="/../public/photos/green_drumlites.jpg"
          fill={false}
          height={2500}
          width={2500}
          alt="adam blevins playing drums"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HomePage;
