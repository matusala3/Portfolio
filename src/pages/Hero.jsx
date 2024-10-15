import { useEffect } from "react";
import profile from "../assets/profile.jpg";
const Hero = () => {
  useEffect(() => {
    const text = "I am a Software Engineer and UI/UX Designer";
    const typingSpeed = 100;
    const erasingSpeed = 50;
    const delayBetweenLoops = 1500;

    let i = 0;
    let isErasing = false;
    const typedText = document.getElementById("typed-text");

    function type() {
      if (!isErasing && i <= text.length) {
        typedText.textContent = text.substring(0, i);
        i++;
        setTimeout(type, typingSpeed);
      } else if (isErasing && i >= 0) {
        typedText.textContent = text.substring(0, i);
        i--;
        setTimeout(type, erasingSpeed);
      } else if (i > text.length) {
        isErasing = true;
        setTimeout(type, delayBetweenLoops);
      } else if (i < 0) {
        isErasing = false;
        i = 0;
        setTimeout(type, delayBetweenLoops);
      }
    }

    setTimeout(type, delayBetweenLoops);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="profile-image">
        <img src={profile} alt="Matusala Gebrehiwot" />
      </div>
      <div className="content">
        <h1>Matusala Gebrehiwot</h1>
        <p className="typing-animation">
          <span id="typed-text"></span>
        </p>
        <p className="sub-text">3rd-year Student</p>
      </div>
    </section>
  );
};

export default Hero;
