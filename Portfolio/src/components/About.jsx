import { Link } from "react-scroll";
import Button from "./Button";

const About = () => {
  return (
    <div id="about" className="m-2 lg:m-5">
      <h1 className="text-3xl font-extrabold text-lime-500">Seydou Dembélé</h1>
      <p className="text-lg text-justify">
        Passionné par la technologie et l&apos;innovation, je conçois des
        applications web et mobiles performantes, intuitives et évolutives. Fort
        d&apos;une expertise en ingénierie logicielle, je mets un point
        d&apos;honneur à allier design, performance et expérience utilisateur
        fluide. Spécialisé en UI/UX design, développement front-end et back-end,
        je transforme des idées en solutions concrètes, avec un code propre,
        sécurisé et optimisé. Mon objectif est de créer des expériences
        numériques engageantes qui allient esthétique et fonctionnalité.
        Toujours en quête d’amélioration, je reste à l&apos;affût des dernières
        technologies pour proposer des solutions modernes et innovantes.
        Travaillons ensemble pour donner vie à vos projets ! 🚀
      </p>
      <Link to="contact" smooth={true} duration={500} spy={true}>
        <Button text={"Contact Me "} handleClick={() => {}}></Button>
      </Link>
    </div>
  );
};

export default About;
