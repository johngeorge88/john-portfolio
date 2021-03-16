import React from "react";

const ProjectList = (props) => {
    return (
        <div className="overflow-y-auto">
            <div className="relative">
                <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 ">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm ">{props.name}</div>
                </div>
                <div className="card">
                    <img src={props.image} className="w-full h-32 sm:h-48 object-cover" alt={props.alt} />

                </div>
            </div>
            <div className="flex flex-row flex-wrap gap-3 border-b-2">
                <div className="flex flex-grow justify-center lg:border-r-2">
                    <a href={props.demo} className="btn btn-secondary">
                        <i class="fas fa-globe"></i>
                        <span> </span>
                 Application</a>
                </div>
                <div className="flex flex-grow justify-center ">
                    <a href={props.github} className="btn btn-secondary">
                        <i className="fab fa-github"></i>
                 <span> </span>GitHub</a>
                </div>
            </div>

        </div>
    );
};

export default ProjectList;