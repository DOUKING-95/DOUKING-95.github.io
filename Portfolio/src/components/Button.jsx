/* eslint-disable react/prop-types */

const Button = ({ text, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="p-1 mt-2 lg:p-3 lg:mt-3 bg-lime-500 rounded-full text-white font-bold w-[30%]"
    >
      {text}
    </button>
  );
};

export default Button;
