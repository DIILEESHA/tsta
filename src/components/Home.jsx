import Header from "./h/Header";
import When from "./when/When";
import Parralaxd from "./paralax/Parallaxd.jsx";
import Rsvp from "./mail/Rsvp.jsx";
import Section from "./velo/Section.jsx";
import Testo from "./testomonials/Testo.jsx";
import "../App.css";
const Home = () => {
  return (
    <div className="fgr">
      <Header />
      <When />
      <Parralaxd />
      <Testo />
      <Rsvp />
    </div>
  );
};

export default Home;
