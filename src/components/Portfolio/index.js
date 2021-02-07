import React, { useState } from "react";
import Project from "../../components/Projects";
import MyStudio from "../../assets/Projects/My-Studio-Portal.png"
import TourVid from "../../assets/Projects/TourVid-travel-planner.png"
import RunBuddy from "../../assets/Projects/Run-Buddy.png"
import CreativeSquare from "../../assets/Projects/creative-square.png"

function Portfolio() {
    const [projects] = useState([
        {
            name: "My Studio Portal",
            alt: "My Studio Portal",
            image: MyStudio,
            description:
                "A Studio for Musical studies between teachers and students.",
            github: "https://github.com/jrsparl/UCF-mystudioportal",
            demo: "https://pacific-river-56030.herokuapp.com/",
        },
        {
            name: "TourVid",
            alt: "TourVid Travel-Planne",
            image: TourVid,
            description:
                "An app that help traveller to plan their next trips.",
            github: "https://github.com/Napo-100/Covid-travel-safety-app",
            demo:"https://napo-100.github.io/Covid-travel-safety-app/",
        },
        {
            name: "Run-Buddy",
            alt: "Run Buddy",
            image: RunBuddy,
            description:
                "A website that offers fitness training services.",
            tools: "Sequelize/Express/Node/Express-Session",
            github: "https://github.com/johngeorge88/run-buddy",
            demo: "https://lernantino.github.io/run-buddy/",
        },
        {
            name: "Creative-Square",
            alt: "Creative Square",
            image: CreativeSquare,
            description:
                "Creative Square is a social media forward portfolio application. It is designed to take the most engaging and direct approach for your content as a creator to be consumed and financially contributed to..",
            tools: "Node.js, MongoDB, GraphQL, Mongoose, Apollo, React, TailwindCSS",
            github: "https://github.com/Napo-100/creative-square",
            demo: "https://creative-square.herokuapp.com/",
        }
    ]);
    return (
        <main id="main">
            <section id="portfolio" className="portfolio section-bg">
                <div className="container">
                    <div className="section-title">
                        <h2>Portfolio</h2>
                        <p></p>
                    </div>

                    <div
                        className="row portfolio-container"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {projects ? (
                            projects.map((project) => {
                                return <Project {...project} />;
                            })
                        ) : (
                                <></>
                            )}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Portfolio;