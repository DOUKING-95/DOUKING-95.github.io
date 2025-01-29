import { Link } from "react-scroll";
import demCodes from "../assets/demCodes.png";
import { links } from "../constants/constants";
const Nav = () => {
  return (
    <nav className="flex flex-col justify-center items-center mx-2 p-1 md:mx-3 lg:p-4 lg:flex-row lg:justify-between ">
      <div>
        <a href="#">
          <img
            src={demCodes}
            alt="logoDemCodes"
            className="w-[30%] h-[30%] rounded-full p-3"
          />
        </a>
      </div>
      <div>
        <ul className="flex flex-col  justify-center items-center lg:flex-row space-x-4 lg:mr-5">
          {links.map((link, index) => (
            <li key={index} className="text-white">
              <Link
                to={link.href}
                smooth={true}
                duration={500}
                activeClass="text-white font-bold p-2 rounded-2xl bg-lime-500"
                spy={true}
                className="cursor-pointer text-white-500"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
