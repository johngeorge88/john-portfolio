import React from 'react';
import coverImage from '../../assets/my-pic.jpg';
function About() {
  return (
    <section className="my-5 p-3">
      <img src={coverImage} className="rounded-circle border border-5 img" alt="..."></img>
      <h1 id="about">Full-Stack Web Developer</h1>
      <div className="my-2">
        <p>
        E-commerce specialist, Graphic designer and a Full-stack web developer. 
        </p>
      </div>
    </section>
  );
}

export default About;
