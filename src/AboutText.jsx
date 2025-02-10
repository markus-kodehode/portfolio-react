import SkillIcons from "./SkillIcons";

export default function AboutText() {
  return (
    <div className="aboutme-text">
      <h1 className="margin-bottom">A little about me</h1>
      <p className="margin-bottom">
        I am a web developer who is very passionate and dedicated to my work. My
        craft is turning ideas into fully functional and beautiful websites.
        When I'm not coding, you'll find me gaming & playing the piano.
      </p>

      <p className="margin-bottom">I'm currently proficient in using:</p>
      <div className="margin-bottom-2">
        <SkillIcons />
      </div>

      <h3 className="italic highlight">
        "Any sufficiently advanced technology is indistinguishable from magic."
      </h3>
      <h4 className="light italic">– Arthur C. Clarke</h4>
    </div>
  );
}
