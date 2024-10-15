const Education = () => {
  return (
    <section id="education" className="content-section">
      <div className="education">
        <h2>Education</h2>
        <h3 className="university-name">Oulu University of Applied Science</h3>
        <p>
          <em>Expected Graduation: 2026</em>
        </p>
        <p>
          Key Courses: Programming, Web Technologies, Database Management,
          Mobile Application Development
        </p>
      </div>
      <div className="skills">
        <h2>Skills</h2>
        {renderSkills()}
      </div>
    </section>
  );
};

const renderSkills = () => {
  const skills = [
    { name: "Python", className: "python" },
    { name: "JavaScript", className: "javascript" },
    { name: "SQL", className: "sql" },
    { name: "Java", className: "java" },
    { name: "C++", className: "cpp" },
  ];

  return skills.map((skill) => (
    <div className="skill" key={skill.name}>
      <span>{skill.name}</span>
      <div className="skill-bar">
        <div className={`skill-level ${skill.className}`}></div>
      </div>
    </div>
  ));
};

export default Education;
