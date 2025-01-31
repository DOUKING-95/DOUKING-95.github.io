import chat from "../assets/Appli.png";
import { portfolio } from "../constants/constants";

const Portfolio = () => {
  return (
    <div id="portfolio" className="lg:mt-5">
      <div className="flex flex-col gap-2 mt-2 lg:flex-row lg:space-x-3 justify-center items-centerlg:justify-around">
        {portfolio.map((item, index) => (
          <div
            key={index}
            className=" rounded-full bg-lime-500 text-white font-bold text-3xl lg:w-1/4  p-3 text-center w-full"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="lg:grid lg:grid-cols-2 flex flex-col m-2 lg:m-5 lg:space-x-1 gap-10">
        <div>
          <img
            src={chat}
            alt="chat_appli"
            className="rounded-xl  pobject-cover"
          />
          <p className="text-center m-2">
            <span className=" font-extrabold text-[#004aad] text-xl">
              Secure chat
            </span>
            with python
          </p>
        </div>
        <div>
          <video
            src="/assets/eC.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="rounded-xl"
          ></video>
          <p className="text-center m-2">
            <span className=" font-extrabold text-[#004aad] text-xl">
              eCommerce
            </span>{" "}
            with Html | Css | Js
          </p>
        </div>
        <div>
          <video
            src="/assets/todoApp.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="rounded-xl"
          ></video>
          <p className="text-center m-2">
            <span className=" font-extrabold text-[#004aad] text-xl">
              Todo App
            </span>{" "}
            with Dart | Flutter
          </p>
        </div>
        <div>
          <video
            src="/assets/shopDemCodes.mp4"
            loop
            autoPlay
            muted
            playsInline
            className="rounded-xl w-70 h-90"
          ></video>
          <p className="text-center m-2">
            <span className=" font-extrabold text-[#004aad] text-xl">
              Shop App
            </span>{" "}
            with Dart | Flutter
          </p>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
