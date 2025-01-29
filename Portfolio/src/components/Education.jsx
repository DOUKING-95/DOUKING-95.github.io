import { useReducer, useState } from "react";
import { education } from "../constants/constants";

const initialState = education["0-10"];
const reducer = (state, action) => {
  switch (action.type) {
    case "0-10":
      return education["0-10"];
    case "10-12":
      return education["10-12"];
    case "Bachelor":
      return education["Bachelor"];
    case "Master":
      return education["Master"];
    default:
      return state;
  }
};
const Education = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [selectedButton, setSelectedButton] = useState("0-10");
  return (
    <div
      id="education"
      className="flex lg:flex-row justify-center items-center  flex-col lg:justify-around lg:m-5 m-2 lg:items-start"
    >
      <div className="flex flex-col m-2 lg:m5 p-1 lg:p-3 w-full lg:w-[40%]">
        <div
          className={`p-2 font-bold text-2xl text-white rounded-2xl ${
            selectedButton === "0-10" ? "bg-lime-500 text-white" : ""
          }`}
          onClick={() => {
            setSelectedButton("0-10");
            dispatch({ type: "0-10" });
          }}
        >
          0-10
        </div>
        <div
          className={`p-2 font-bold text-2xl text-white rounded-2xl ${
            selectedButton === "10-12" ? "bg-lime-500 text-white" : ""
          }`}
          onClick={() => {
            setSelectedButton("10-12");
            dispatch({ type: "10-12" });
          }}
        >
          10-12
        </div>
        <div
          className={`p-2 font-bold text-2xl text-white rounded-2xl ${
            selectedButton === "Bachelor" ? "bg-lime-500 text-white" : ""
          }`}
          onClick={() => {
            setSelectedButton("Bachelor");
            dispatch({ type: "Bachelor" });
          }}
        >
          Bachelor
        </div>
        <div
          className={`p-2 font-bold text-2xl text-white rounded-2xl ${
            selectedButton === "Master" ? "bg-lime-500 text-white" : ""
          }`}
          onClick={() => {
            setSelectedButton("Master");
            dispatch({ type: "Master" });
          }}
        >
          Master
        </div>
      </div>
      <div className=" w-full lg:w-[60%]  bg-white shadow-lg rounded-lg text-black">
        <div className="flex flex-col m-2 lg:m5 p-1 lg:p-3 w-full">
          <div className="p-2 text-justify text-3xl font-bold">
            {state.school}
          </div>
          <div className="p-2 text-justify text-2xl font-bold text-lime-500">
            {state.title}
          </div>
          <div className="p-2 text-justify text-lg">{state.description}</div>
        </div>
      </div>
    </div>
  );
};

export default Education;
