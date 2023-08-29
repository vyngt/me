import Summary from "./Summary";
import Education from "./Education";
import Skill from "./Skill";
import Contact from "./Contact";

export default function AboutMe() {
  return (
    <div className="flex flex-col gap-2">
      <Summary />
      <Contact />
      <Education />
      <Skill />
    </div>
  );
}
