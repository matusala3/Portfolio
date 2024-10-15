const Contact = () => {
  return (
    <section id="contact" className="about-section">
      <div className="profile">
        <h2>Personal Profile</h2>
        <p>
          Motivated 3rd-year Software Engineering student with experience in
          full-stack web and mobile development. Skilled in building scalable,
          responsive applications and collaborating in teams to solve complex
          problems. Eager to apply technical skills in real-world projects and
          contribute to innovative software teams.
        </p>
      </div>
      <div className="reach-out">
        <h2>Reach Out</h2>
        <ul className="contact-info">
          <li>
            <span role="img" aria-label="phone">
              📞
            </span>{" "}
            +358 41 310 2602
          </li>
          <li>
            <span role="img" aria-label="email">
              ✉️
            </span>
            <a href="mailto:matusalakiflom@gmail.com">
              matusalakiflom@gmail.com
            </a>
          </li>
          <li>
            <span role="img" aria-label="linkedin">
              🔗
            </span>
            <a
              href="https://www.linkedin.com/in/matusala-gebrehiwot-b0435624b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              @Matusala Gebrehiwot (LinkedIn)
            </a>
          </li>
          <li>
            <span role="img" aria-label="github">
              🐙
            </span>
            <a
              href="https://github.com/matusala3"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/matusala3
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Contact;
