import contactsbg from "../img/contacts-bg.png";
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import sprite from "../img/sprites.svg";
import aboutExp from "../img/about-exp-bg.jpeg";

function About () {
  const [showText, setShowText] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="about_wrapper">
      <section className="about">
        <img src={contactsbg} alt="background" />
        <div className="about_content">
          <h1 className={`hidden ${showText ? 'appear' : ''}`}>About Us</h1>
          <div className="subtitle">
            <Link to={'/'}>Home</Link>
            <span>|</span>
            <Link to={'/'}>About us</Link>
          </div>
        </div>
      </section>
      <section className="awards">
        <div className="awards_item">
          <svg className={`hidden ${showText ? 'appear' : ''}`}><use href={sprite + "#about4"} /></svg>
          <h2>Expert Directors</h2>
          <p>We are the most popular film & video production company</p>
        </div>
        <span></span>
        <div className="awards_item">
          <svg className={`hidden ${showText ? 'appear' : ''}`}><use href={sprite + "#about2"} /></svg>
          <h2>TV Shows</h2>
          <p>We are the most popular film & video production company</p>
        </div>
        <span></span>
        <div className="awards_item">
          <svg className={`hidden ${showText ? 'appear' : ''}`}><use href={sprite + "#about3"} /></svg>
          <h2>Film Festival</h2>
          <p>We are the most popular film & video production company</p>
        </div>
        <span></span>
        <div className="awards_item">
          <svg className={`hidden ${showText ? 'appear' : ''}`}><use href={sprite + "#about1"} /></svg>
          <h2>Film Award</h2>
          <p>We are the most popular film & video production company</p>
        </div>
      </section>
      <section className="about_experience">
        <div className="about_experience_text">
          <h4 className={`hidden ${showText ? 'appear' : ''}`}>About Faime</h4>
          <div className="about_experience_text_title">
            <h2 className={`hidden ${showText ? 'appear' : ''}`}>On-Demand Video Production Company</h2>
            <p>Faime Production Is A Full—Service Production House Based Out Indonesia And Singapore That Hosts A Thriving Roster Of Directors Working Across A Range Of Artistic Disciplines.</p>
          </div>
        </div>
        <div className="img">
          <div className="about_experience_mark">
            <h3>10</h3>
            <span>years of experience</span>
          </div>
          <img src={aboutExp} alt='bg-img'></img>
        </div>
      </section>
    </div>
  )
}

export default About;