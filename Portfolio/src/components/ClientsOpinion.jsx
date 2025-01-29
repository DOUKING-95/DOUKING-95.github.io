import ClientBox from "./ClientBox";
const ClientsOpinion = () => {
  return (
    <div
      id="clients"
      className="flex flex-col p-2 mt-2 justify-center items-center lg:flex-row lg:justify-start lg:items-center space-x-2 lg:p-5 lg:mt-4"
    >
      <ClientBox
        clientName={"Assetou Keita"}
        message={
          "Travailler avec :) Seydou Dembélé a été une expérience incroyable. Il a transformé notre idée en une application mobile moderne, fluide et intuitive. Dès le début, il a su comprendre nos besoins et les attentes de nos utilisateurs. Le projet a été livré dans les délais, et la qualité dépasse largement nos attentes. Nos utilisateurs sont ravis, et nous avons vu une nette augmentation de l’engagement grâce à l’application qu’il a développée pour nous."
        }
      ></ClientBox>
      <ClientBox
        clientName={"Moussa Diarra"}
        message={
          "Nous avons fait appel à :) Seydou Dembélé pour la refonte de notre site web, et les résultats sont impressionnants. Il a réussi à créer un site élégant, rapide et facile à naviguer. Grâce à son expertise en développement web et en UI/UX design, notre taux de conversion a augmenté de manière significative. Ce qui m’a marqué, c’est sa capacité à comprendre nos besoins et à les traduire en une interface moderne qui capte l'attention de nos visiteurs."
        }
      ></ClientBox>
      <ClientBox
        clientName={"Mairie Claire"}
        message={`Le travail réalisé sur l’interface de notre application a été exceptionnel. :) Seydou Dembélé a su créer une expérience utilisateur parfaite, tout en rendant l'application agréable visuellement. Ce qui m’a particulièrement plu, c’est la façon dont il a pris en compte chaque détail, de la fluidité de la navigation à l’ergonomie. Notre équipe est ravie, et nous avons reçu de nombreux retours positifs de nos utilisateurs. Nous recommandons vivement ses services.`}
      ></ClientBox>
    </div>
  );
};

export default ClientsOpinion;
