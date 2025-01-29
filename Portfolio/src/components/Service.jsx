import FeatureBox from "./FeatureBox";

const Service = () => {
  return (
    <div
      id="services"
      className="flex  justify-center items-center flex-col gap-2 lg:flex-row lg:justify-around lg:items-center "
    >
      <FeatureBox
        icon={"📲"}
        title={"App Developement"}
        description={
          "Vous voulez offrir à vos utilisateurs une expérience mobile fluide et intuitive ? Je crée des applications mobiles performantes qui s’adaptent à vos besoins, qu’il s’agisse d’un service simple ou d’une solution complexe. Mon objectif est de vous fournir une application mobile qui capte l’attention de vos utilisateurs, qui est facile à utiliser et qui vous permet de vous démarquer de la concurrence. Vous pourrez ainsi atteindre un plus grand public et augmenter l'engagement de vos utilisateurs."
        }
      ></FeatureBox>
      <FeatureBox
        icon={"🧑‍💻"}
        title={"Web Developement"}
        description={
          "Votre site web doit être à la hauteur de vos ambitions. Je vous aide à créer un site web moderne, rapide et responsif qui captive vos visiteurs dès leur arrivée. Que vous ayez besoin d’une vitrine élégante, d’une plateforme e-commerce performante ou d’une application web interactive, chaque projet est conçu pour répondre à vos besoins spécifiques tout en offrant une expérience utilisateur optimale. Grâce à des technologies de pointe, je m'assure que votre site est aussi bien adapté aux appareils mobiles qu'aux ordinateurs de bureau."
        }
      ></FeatureBox>
      <FeatureBox
        icon={"💅"}
        title={"UI | UX Design"}
        description={
          "Un design qui impressionne et qui fonctionne. Avec un design UI/UX soigné, je m'assure que vos utilisateurs se sentent à l’aise, que ce soit dans une application mobile ou sur un site web. Je crée des interfaces intuitives, agréables et faciles à naviguer, tout en mettant l’accent sur la satisfaction de l'utilisateur. En travaillant avec vous pour comprendre vos objectifs et les besoins de vos utilisateurs, je vous aide à offrir une expérience visuelle et fonctionnelle mémorable qui renforcera l’image de votre marque."
        }
      ></FeatureBox>
    </div>
  );
};

export default Service;
