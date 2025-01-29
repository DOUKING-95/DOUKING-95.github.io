/* eslint-disable react/prop-types */

const FeatureBox = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col justify-center items-center  border-2 border-lime-500 rounded-2xl p-2 w-full lg:w-1/3 p-3">
      <div className="w-16 h-16 bg-lime-500 font-extrabold text-4xl rounded-full flex justify-center items-center">
        {icon}
      </div>
      <h3 className="text-2xl font-extrabold text-lime-500">{title}</h3>
      <p className=" text-justify text-lg">{description}</p>
    </div>
  );
};

export default FeatureBox;
