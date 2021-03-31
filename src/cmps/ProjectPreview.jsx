import { useEffect, useState } from "react";

export function ProjectPreview({ project, isModalOpen, setModal }) {
    const [isBitcoin, setIstBitcoin] = useState(false)

    useEffect(() => {
        if (project.name === 'bitcoin API') setIstBitcoin(true)
    }, [])

    return (
        //  onMouseMove={() => setModal(project)}
        <div className="project-preview" onClick={() => setModal(project)}>
            {project.img && <img className={isBitcoin ? 'bitcoin' : ''} src={require(`../assets/imgs/${project.img}`).default} alt="" />}
        </div>
    )
}