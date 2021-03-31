import { useState } from "react";
import { ProjectsDynamicModal } from "./ProjectsDynamicModal";
import { ProjectPreview } from "./ProjectPreview";


export function ProjectsList({isModalOpen , setModal,projects }) {
    

    return (
        <div className="page2-container">
            <div className="projects-container">
                    {projects.map(project => <ProjectPreview project={project} key={project.name} isModalOpen={isModalOpen} setModal={setModal} />)}
            </div>

        </div>
    )
}