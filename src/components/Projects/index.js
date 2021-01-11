import React from "react";

const ProjectList = (props) => {
    return (
        <div className="col-lg-4 col-md-6">
            <div className="card" styleName="width: 18rem;">
                <img src={props.image} className="card-img-top" alt={props.alt} />
                <div className="card-body">
                    <h5 className="about content h3">{props.name}</h5>
                    <div className="btn-group">
                        <a href={props.demo} className="btn btn-secondary">Application Link</a>
                        <a href={props.github} className="btn btn-secondary">GitHub Link</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;