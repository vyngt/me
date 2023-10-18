import { Summary } from "./Summary";
import { Experience } from "./Experience";
import { Education } from "./Education";
import { Skill } from "./Skill";
import { Contact } from "./Contact";
import { Interest } from "./Interest";

export function AboutMe() {
  return (
    <div className="flex flex-col gap-2">
      <Summary />
      <Contact />
      <Experience />
      <Education />
      <Skill />
      <Interest />
    </div>
  );
}
