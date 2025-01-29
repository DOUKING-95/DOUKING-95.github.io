import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { skills } from "../constants/constants";
const Skills = () => {
  return (
    <div>
      <p className="text-3xl text-white text-center">
        My Core Skill Of Differents Sectors
      </p>
      <div
        id="skills"
        className="flex flex-col  space-y-2 items-center justify-center gap-2 p-2 lg:flex-row lg:justify-around "
      >
        {skills.map((skill, index) => (
          <div
            key={index}
            className="w-40 h-40 text-center flex flex-col justify-center items-center"
          >
            <CircularProgressbar
              value={skill.value}
              text={`${skill.value}%`}
              styles={{
                root: {},
                path: {
                  stroke: "lime",
                },
                text: {
                  fill: "lime",
                  fontSize: "16px",
                  fontWeight: "bold",
                },
              }}
            />
            <p className="m-3">{skill.Name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
