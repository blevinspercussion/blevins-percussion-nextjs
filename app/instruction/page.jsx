import Header from "../components/Header";
import Link from "next/link";
import Footer from "../components/Footer";

const InstructionPage = () => {
  return (
    <div>
      <Header />
      <hr />
      <div className="main-content">
        <h1>Percussion and Drumset Lessons</h1>
        <div className="section">
          Since 1996 I have taught countless students both privately as well as
          at over a dozen high school and middle school band programs throughout
          Chattanooga, Atlanta, North Georgia, and Central Alabama.
          <br />
          <br />
          I have taught private lessons independently as well as through Music
          Instruction Studio and the Cadek Convervatory in Chattanooga, TN, and
          Birmingham School of Music and Mason Music, both in Birmingham, AL.
          <br />
          <br />
          Whether you need someone to run a beginner percussion class, someone
          to write/arrange and intruct a marching drumline, a consultant for a
          jazz band rhythm section, or a private drumset teacher, I can fill
          virtually any role.
          <br />
          <br />
          My stylistic background is diverse and I pride myself on my musical
          versatility. I have performed with the Chattanooga Symphony and Opera,
          worked with a multitude of churches, and played with several full-time
          working bands, and my experience ensures that I can help any student
          reach their individual musical goals.
          <br />
          <br />
          Get in touch with me via my contact button below to inquire about
          booking or to get more information.
          <br />
          <br />
          <button className="btn-cta">Contact</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InstructionPage;
