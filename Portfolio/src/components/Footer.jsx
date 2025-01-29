import demCodes from "../assets/demCodes.png";
import linkdine from "../assets/linkdine.webp";
import repo from "../assets/repo.webp";
import tiktok from "../assets/tiktok.webp";
const Footer = () => {
  return (
    <div>
      <div
        id="footer"
        className="flex  flex-col gap-2 justify-center items-start p-2 lg:flex-row lg:justify-between m-2 lg:m-5"
      >
        <div>
          <a href="#">
            <img
              src={demCodes}
              alt="logoDemCodes"
              className="w-[30%] h-[30%] rounded-full p-3"
            />
          </a>
        </div>
        <div className="flex flex-col justify-start lg:flex-row lg:justify-around lg:items-center lg:space-x-5 space-y-5">
          <div className="flex flex-row  justify-center items-center gap-2 lg:flex-col">
            <a href="https://www.linkedin.com/in/seydou-demb%C3%A9l%C3%A9-94334b2a0/">
              <img
                src={linkdine}
                alt="linkdineLogo"
                className="w-10 h-10 rounded-full mt-4"
              />
            </a>
            <span className="text-center">Linkdin</span>
          </div>
          <div className="flex flex-row  justify-center items-center gap-2 lg:flex-col">
            <a href="">
              <img
                src={repo}
                alt="linkdineLogo"
                className="w-10 h-10 rounded-full "
              />
            </a>
            <span className="text-center">GitHub</span>
          </div>
          <div className="flex flex-row  justify-center items-center gap-2 lg:flex-col">
            <a href="">
              <img
                src={tiktok}
                alt="linkdineLogo"
                className="w-10 h-10 rounded-full"
              />
            </a>
            <span className="text-center">TikTok</span>
          </div>
        </div>
      </div>
      <p className="font-light text-center">© 2025 DemCodes</p>
    </div>
  );
};

export default Footer;
