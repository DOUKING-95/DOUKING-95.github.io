import About from "../components/About";
import ClientsOpinion from "../components/ClientsOpinion";
import Contact from "../components/Contact";
import Education from "../components/Education";
import FeatureBox from "../components/FeatureBox";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import Skills from "../components/Skills";
const Home = () => {
  return (
    <main>
      <header className="lg:sticky lg:top-0 lg:z-50 ">
        <Nav></Nav>
      </header>
      <section className="m-3 lg:m-5">
        <Hero></Hero>
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">________Feature</p>
      <section className="flex flex-col space-y-2 justify-center items-center lg:flex-row lg:space-x-4 lg:justify-around lg:items-start m-3 lg:m-5">
        <FeatureBox
          title={"Developer"}
          description={`je crée des applications web et mobiles modernes, alliant puissance, fluidité et évolutivité. Chaque projet est conçu pour offrir une expérience utilisateur optimale, avec un code propre, maintenable et sécurisé.`}
          icon={"</>"}
        ></FeatureBox>
        <FeatureBox
          icon={"💅"}
          title={"Creative Design"}
          description={`Un bon design ne se limite pas à l’esthétique : il doit être intuitif et fonctionnel. J’intègre des principes de UI/UX design pour garantir une navigation fluide et agréable, transformant ainsi chaque interaction en une expérience engageante.`}
        ></FeatureBox>
        <FeatureBox
          icon={"🚀"}
          title={"Hight Quality"}
          description={`Je m'engage à livrer des produits de haute qualité, testés et optimisés pour assurer rapidité, fiabilité et évolutivité , faite sur mesure pour satisfaire vos bésoins et pour éléver votre business à l'étape supérieur.`}
        ></FeatureBox>
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">________About</p>
      <section className="m-3 lg:m-5">
        <About />
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">
        ________Education
      </p>
      <section className="m-3 lg:m-5">
        <Education />
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">________Skills</p>
      <section className="m-3 lg:m-5">
        <Skills />
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">________Services</p>
      <section className="m-3 lg:m-5">
        <Service />
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">
        ________Portfolio
      </p>
      <section className="m-3 lg:m-5">
        <Portfolio />
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">
        ________Clients Opinions
      </p>
      <section className="m-3 lg:m-5">
        <ClientsOpinion />
      </section>
      <p className="text-2xl text-lime-500 m-3 text-center">
        ________Contact___
        <span className="font-2xl text-white">
          Ecris moi sur Linkdin lien ci dessous
        </span>
      </p>
      <section className="m-3 lg:m-5">
        <Contact />
      </section>

      <section>
        <Footer />
      </section>
    </main>
  );
};

export default Home;
