import React from "react";

const ProjectList = (props) => {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0 ">
                    <div className="absolute inset-0 bg-black opacity-70"></div>
                    <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm ">{props.name}</div>
                </div>
                <div className="card">
                    <img src={props.image} className="w-full h-32 sm:h-48 object-cover" alt={props.alt} />

                </div>
            </div>
            <div className="btn-group">
                <a href={props.demo} className="btn btn-secondary">Application Link</a>
                <a href={props.github} className="btn btn-secondary">GitHub Link</a>
            </div>

        </div>
    );
};

export default ProjectList;