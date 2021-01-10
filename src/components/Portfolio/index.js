import React, { useState } from "react";
import Project from "../../components/Projects";
import MyStudio from "../../assets/Projects/My-Studio-Portal.png"
import TourVid from "../../assets/Projects/TourVid-travel-planner.png"
import RunBuddy from "../../assets/Projects/Run-Buddy.png"

function Portfolio() {
    const [projects] = useState([
        {
            name: "My Studio Portal",
            alt: "My Studio Portal",
            image: MyStudio,
            description:
                "Helping bar owners to quickly deplete kegs from leftover product, while helping avid beer drinkers find less expensive ways to drink with friends.",
            tools: "Sequelize/Express/Node/Handlebars",
            github: "https://github.com/JoshCarter8400/kill-the-keg",
            demo: "https://obscure-eyrie-90813.herokuapp.com/",
            // icon1: <AiOutlineEye />,
            // icon2: <AiFillGithub />,
        },
        {
            name: "TourVid",
            alt: "TourVid Travel-Planne",
            image: TourVid,
            description:
                "This is a project where I built the APIs on the backend for a social network web application. It allows users to share their thoughts, are able to react to friend's thoughts, and create a friends list.",
            tools: "MongoDB/Mongoose/Express/Node",
            github: "https://github.com/JoshCarter8400/social-network-api",
            demo:
                "https://drive.google.com/file/d/1H2R_atiZEcf-uUr-vq3F6lPYtz0X6ZeV/view",
            // icon1: <AiOutlineEye />,
            // icon2: <AiFillGithub />,
        },
        {
            name: "Run-Buddy",
            alt: "Run Buddy",
            image: RunBuddy,
            description:
                "This is a full stack application that allows user to post their thoughts and opinions through their personal blog post on a CMS style website. This project follows the Model View Controller paradigm.",
            tools: "Sequelize/Express/Node/Express-Session",
            github: "https://github.com/JoshCarter8400/tech-blog",
            demo: "https://rocky-cove-83154.herokuapp.com/",
            // icon1: <AiOutlineEye />,
            // icon2: <AiFillGithub />,
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