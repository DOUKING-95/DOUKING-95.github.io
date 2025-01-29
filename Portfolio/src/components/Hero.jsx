import { Link } from "react-scroll";
import { Typewriter } from "react-simple-typewriter";
import heroLogo from "../assets/robot.gif";
import Button from "./Button";

const Hero = () => {
  return (
    <div
      id="home"
      className="flex flex-col justify-center items-center mx-2 p-1 md:mx-3 lg:p-4 lg:flex-row lg:justify-between  "
    >
      <div className="lg:w-1/2">
        <h1 className="text-lime-500 text-5xl font-extrabold">
          <span className="text-5xl text-white font-extrabold">
            I am &nbsp;
          </span>
          <span style={{ color: "lime", fontWeight: "bold" }}>
            {/* Style will be inherited from the parent element */}
            <Typewriter
              words={[
                "Seydou Dembélé",
                "Developper",
                "UX Designer",
                "UI Designer",
              ]}
              loop={false}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h1>
        <p className="text-2xl font-bold">Developper | UX &gt; UI Designer</p>{" "}
        <br />
        <br />
        <p className="w-full text-3xl font-light">
          Transformer toutes vos{" "}
          <span className=" font-extrabold text-[#004aad] text-4xl">Idées</span>{" "}
          en{" "}
          <span className=" font-extrabold text-[#004aad] text-4xl">
            Soltuions Numériques
          </span>{" "}
        </p>
        <Link to="contact" smooth={true} duration={500} spy={true}>
          <Button text={"Contact Me "} handleClick={() => {}}></Button>
        </Link>
      </div>
      <div className="flex justify-center items-center w-1/2  max-lg:hidden">
        <img
          src={heroLogo}
          alt="heroLogo"
          className="w-full  rounded-2xl border-none"
        />
      </div>
    </div>
  );
};

export default Hero;
