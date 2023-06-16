import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";

const PerformancePage = () => {
  return (
    <div className="main-content">
      <Header />
      <hr />
      <h1>Live and Studio Performance</h1>
      <section className="section">
        I have been performing professionally since 1999 in such varied styles
        as: rock, country, Afro-Cuban, Latin, orchestral, ska, and many, many
        more.
        <br />
        <br />
        Artists that I have played for include: Trey Lewis, Matt Bennett, Sam
        Rife, Spence Maige and The Reckless, Rebel (Music Garden Entertainment),
        More Cowbell, Alabama Rose, and many more.
        <br />
        <br />
        My primary philosophy for drums and percussion is to be as versatible as
        possible. I spend my practice time learning as many songs in as many
        different styles so that I can perform well in nearly any situation.
        <br />
        <br />
        For examples of my playing, be sure to check out the my media page
        <br />
        <br />I am currently available for live and studio gigs in the
        southeastern United States and beyond!
        <br />
        <br />
        <div className="image-div">
          <Image
            src="/../public/photos/tin-roof1.jpg"
            height={300}
            width={200}
            alt="playing drums on stage"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PerformancePage;
