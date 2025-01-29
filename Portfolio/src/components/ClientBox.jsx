/* eslint-disable react/prop-types */
import person from "../assets/person2.webp";
const ClientBox = ({ clientName, message }) => {
  return (
    <div className="relative bg-white rounded-lg shadow-lg p-4 mt-12 w-full lg:w-1/3 flex flex-col items-center">
      {/* Cercle centré en haut et au milieu */}
      <div className="w-40 h-40 rounded-full bg-red-400 absolute -top-16 left-1/2 transform -translate-x-1/2">
        <img
          src={person}
          alt="persionImg"
          className="w-40 h-40 rounded-full bg-black "
        />
      </div>

      <h3 className="text-black mt-20 text-justify font-extrabold text-3xl mb-2">
        {clientName}
      </h3>
      <p className="text-black text-center text-justify">{message}</p>
    </div>
  );
};

export default ClientBox;
