const skills = [
  { name: "HTML", img: "src/assets/images/html5.png" },
  { name: "CSS", img: "src/assets/images/css.png" },
  { name: "JavaScript", img: "src/assets/images/javascript.png" },
  { name: "React", img: "src/assets/images/react.png" },
  { name: "Figma", img: "src/assets/images/figma.png" },
];

export default function SkillIcons() {
  return (
    <div className="skill-icons-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <img
            className="icon-image"
            src={skill.img}
            alt={`${skill.name} icon`}
          />
          <span className="highlight semi-bold">{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
