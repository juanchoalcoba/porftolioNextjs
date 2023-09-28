import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Ecommerce Portfolio website",
        description: "A website to showcase my portfolio",
        image: "/images/projects/1.png",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Menu Left Portfolio Website",
        description: "A website to showcase my portfolio",
        image: "/images/projects/menuLateral.png",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Show FORM Portfolio website",
        description: "A website to showcase my portfolio",
        image: "/images/projects/formgrid.png",
        tag: ["All", "Web"]
    },
]




const ProjectsSection = () => {
    return (
        <>
            <h2 className='text-center text-4xl font-bold  text-white mt-8'>My Projects</h2>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12 mt-4">
                {projectsData.map((project) => (
                    <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    />
                    ))}
                
            </div>
        </>
    )
}

export default ProjectsSection