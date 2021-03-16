import React from 'react';
import coverImage from '../../assets/my-pic.jpg';
function About() {
  return (
    <div className="grid grid-cols-3">
      <div className="col-span-2">
        <div id="about" className="text-7xl	font-black uppercase">Full Stack</div>
        <div id="about" className="text-8xl	font-black">DEVELOPER</div>
        <div className="my-2 text-2xl">
          With previous experience in Graphic design and E-commerce websites.
          </div>
      </div>
      <div className="">
        <img src={coverImage} className="rounded-full  h-96 w-full object-cover" alt="..."></img>
      </div>
    </div>
  );
}

export default About;
